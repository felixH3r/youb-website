import { GoogleGenerativeAI } from "@google/generative-ai";
import { analysisCache } from "./analyze.post";
import {
  findClimbs,
  calculateTopographyMetrics,
  calculateCyclingPowerMetrics,
  calculateTemperatureMetrics,
  getHRIntervalsAndPauses,
  getMaxHRForDuration,
  getHRMetricsForDuration,
  getMaxPowerForDuration,
  getIntervalsAndPauses,
  getMetricsForDuration,
  getRunningIntervalsAndPauses,
  getRunningMetricsForDuration,
} from "@youbdev/sport-intelligence";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { analysisId, messages } = body;

  if (!analysisId) {
    throw createError({
      statusCode: 400,
      statusMessage: "analysisId is required",
    });
  }

  const analysis = analysisCache.get(analysisId);
  if (!analysis) {
    throw createError({
      statusCode: 404,
      statusMessage: "Analysis session not found or expired",
    });
  }

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Google API key not configured",
    });
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  // Define the tools
  const tools = [
    {
      functionDeclarations: [
        {
          name: "findClimbs",
          description:
            "Finds all climbs in the recording. Returns an array of climbs with start/end time, duration, elevation gain, distance and average gradient.",
          parameters: {
            type: "object",
            properties: {
              minElevationGain: {
                type: "number",
                description:
                  "Minimum elevation gain in meters to count as a climb. Default is 25m.",
              },
            },
          },
        },
        {
          name: "calculateTopographyMetrics",
          description:
            "Calculates total ascent, total descent, min/max altitude and average gradient for the entire activity.",
        },
        {
          name: "calculateCyclingPowerMetrics",
          description:
            "Calculates cycling specific metrics like average power, normalized power, TSS, IF and total kJ work. Only use if the activity is cycling.",
          parameters: {
            type: "object",
            properties: {
              ftp: {
                type: "number",
                description:
                  "Functional Threshold Power (FTP) of the athlete. Default to 250.",
              },
            },
          },
        },
        {
          name: "calculateTemperatureMetrics",
          description:
            "Calculates min, max and average temperature during the activity.",
        },
        {
          name: "getHRIntervals",
          description:
            "Detects heart rate intervals and pauses. Useful for finding intensive parts of the workout.",
          parameters: {
            type: "object",
            properties: {
              hrThreshold: {
                type: "number",
                description: "Threshold HR in BPM to identify intervals.",
              },
              minDurationSec: {
                type: "number",
                description:
                  "Minimum duration of the interval in seconds. Default 30s.",
              },
            },
            required: ["hrThreshold"],
          },
        },
        {
          name: "getMaxHRForDuration",
          description:
            "Finds the maximum average heart rate for a specific duration (e.g., peak 20 min).",
          parameters: {
            type: "object",
            properties: {
              durationSeconds: {
                type: "number",
                description:
                  "The duration window in seconds (e.g., 1200 for 20 minutes).",
              },
            },
            required: ["durationSeconds"],
          },
        },
        {
          name: "getMaxPowerForDuration",
          description:
            "Finds the maximum average power for a specific duration (e.g., peak 20 min power). Cycling only.",
          parameters: {
            type: "object",
            properties: {
              durationSeconds: {
                type: "number",
                description:
                  "The duration window in seconds (e.g., 1200 for 20 minutes).",
              },
            },
            required: ["durationSeconds"],
          },
        },
        {
          name: "getPowerIntervals",
          description:
            "Detects cycling power intervals based on FTP or threshold.",
          parameters: {
            type: "object",
            properties: {
              ftp: { type: "number", description: "Athlete FTP. Default 250." },
              minDurationSec: {
                type: "number",
                description: "Minimum duration in seconds. Default 30.",
              },
            },
          },
        },
        {
          name: "getRunningIntervals",
          description: "Detects running intervals based on speed/pace.",
          parameters: {
            type: "object",
            properties: {
              speedThreshold: {
                type: "number",
                description: "Speed threshold in m/s (not km/h or pace).",
              },
              minDurationSec: {
                type: "number",
                description: "Minimum duration in seconds. Default 30.",
              },
            },
            required: ["speedThreshold"],
          },
        },
        {
          name: "getMetricsForTimeRange",
          description:
            "Calculates detailed metrics for a specific segment of the activity.",
          parameters: {
            type: "object",
            properties: {
              startTime: {
                type: "string",
                description: "Start timestamp string of the range.",
              },
              endTime: {
                type: "string",
                description: "End timestamp string of the range.",
              },
              ftp: {
                type: "number",
                description: "Cycling FTP if applicable.",
              },
            },
            required: ["startTime", "endTime"],
          },
        },
      ],
    },
  ];

  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    tools: tools as any,
  });

  const functions = {
    findClimbs: (args: any) =>
      findClimbs(analysis.records, args.minElevationGain || 25),
    calculateTopographyMetrics: () =>
      calculateTopographyMetrics(analysis.records),
    calculateCyclingPowerMetrics: (args: any) =>
      calculateCyclingPowerMetrics(analysis.records, args.ftp || 250),
    calculateTemperatureMetrics: () =>
      calculateTemperatureMetrics(analysis.records),
    getHRIntervals: (args: any) =>
      getHRIntervalsAndPauses(
        analysis.records,
        {
          hrThreshold: args.hrThreshold,
          minDurationSec: args.minDurationSec || 30,
        },
        {}
      ),
    getMaxHRForDuration: (args: any) =>
      getMaxHRForDuration(analysis.records, args.durationSeconds),
    getMaxPowerForDuration: (args: any) =>
      getMaxPowerForDuration(analysis.records, args.durationSeconds),
    getPowerIntervals: (args: any) =>
      getIntervalsAndPauses(
        analysis.records,
        { minDurationSec: args.minDurationSec || 30 },
        args.ftp || 250,
        {}
      ),
    getRunningIntervals: (args: any) =>
      getRunningIntervalsAndPauses(analysis.records, {
        speedThreshold: args.speedThreshold,
        minDurationSec: args.minDurationSec || 30,
      }),
    getMetricsForTimeRange: (args: any) => {
      if (analysis.sport === "cycling") {
        return getMetricsForDuration(
          analysis.records,
          new Date(args.startTime),
          new Date(args.endTime),
          args.ftp || 250,
          {}
        );
      } else if (analysis.sport === "running") {
        return getRunningMetricsForDuration(
          analysis.records,
          new Date(args.startTime),
          new Date(args.endTime)
        );
      } else {
        return getHRMetricsForDuration(
          analysis.records,
          new Date(args.startTime),
          new Date(args.endTime),
          {}
        );
      }
    },
  };

  const systemInstruction = `You are YOUB AI, an expert sport scientist and coach. 
You are analyzing a .fit file of a ${analysis.sport} activity.
The user wants to discuss their training data. You have tools to perform deep analysis on the records.
Use the tools whenever the user asks for specific metrics, interval analysis, peak values, or topography.
Be encouraging, professional, and provide scientific insights based on the data.
The activity started at ${analysis.sessions?.[0]?.start_time || "unknown"}.
Total distance: ${analysis.sessions?.[0]?.total_distance || 0}m.
Total duration: ${analysis.sessions?.[0]?.total_elapsed_time || 0}s.`;

  // Gemini SDK requires history to start with a 'user' message
  const geminiHistory = [];
  let foundFirstUser = false;
  for (const m of messages.slice(0, -1)) {
    if (m.role === "user") foundFirstUser = true;
    if (foundFirstUser) {
      geminiHistory.push({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      });
    }
  }

  const chat = model.startChat({
    history: geminiHistory,
    systemInstruction: {
      role: "system",
      parts: [{ text: systemInstruction }],
    },
  });

  const userMessage = messages[messages.length - 1].content;
  let result = await chat.sendMessage(userMessage);
  let response = result.response;

  // Handle function calls loop
  let callCount = 0;
  const maxCalls = 10;

  while (response.functionCalls()?.length && callCount < maxCalls) {
    callCount++;
    const functionCalls = response.functionCalls();

    const toolResults = await Promise.all(
      functionCalls.map(async (call) => {
        const fn = functions[call.name as keyof typeof functions];
        if (fn) {
          try {
            const toolResult = await fn(call.args);
            return {
              functionResponse: {
                name: call.name,
                response: { result: toolResult },
              },
            };
          } catch (e) {
            console.error(`Error executing ${call.name}:`, e);
            return {
              functionResponse: {
                name: call.name,
                response: { error: (e as Error).message },
              },
            };
          }
        }
        return {
          functionResponse: {
            name: call.name,
            response: { error: "Function not found" },
          },
        };
      })
    );

    if (toolResults.length > 0) {
      result = await chat.sendMessage(toolResults as any);
      response = result.response;
    } else {
      break;
    }
  }

  return {
    text: response.text(),
  };
});
