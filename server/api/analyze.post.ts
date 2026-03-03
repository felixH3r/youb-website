import FitParser from "fit-file-parser";
import { getSport } from "@youbdev/sport-intelligence";

// Simple in-memory storage for analysis data
// In a production app, this should be a proper database or file storage
export const analysisCache = new Map<string, Record<string, unknown>>();

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: "No file uploaded" });
  }

  const file = formData.find((item) => item.name === "file");
  if (!file || !file.data) {
    throw createError({
      statusCode: 400,
      statusMessage: "No file found in request",
    });
  }

  const parser = new FitParser({
    force: true,
    speedUnit: "km/h",
    lengthUnit: "m",
    temperatureUnit: "celsius",
    elapsedRecordField: true,
    mode: "both",
  });

  return new Promise((resolve, reject) => {
    parser.parse(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.data as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error: string | undefined, data: any) => {
        if (error) {
          reject(
            createError({
              statusCode: 500,
              statusMessage: `Failed to parse FIT file: ${error}`,
            }),
          );
          return;
        }

        const sport = getSport(data);
        const analysisId = Math.random().toString(36).substring(2, 15);

        // Store the parsed data for subsequent chat interactions
        analysisCache.set(analysisId, {
          sport,
          records: (data.records as unknown[]) || [],
          laps: (data.laps as unknown[]) || [],
          sessions: (data.sessions as unknown[]) || [],
          events: (data.events as unknown[]) || [],
          timestamp: Date.now(),
        });

        // Simple summary for the frontend
        const session = (data.sessions as Record<string, unknown>[])?.[0] || {};

        resolve({
          analysisId,
          summary: {
            sport,
            startTime: session.start_time,
            duration: session.total_elapsed_time,
            distance: session.total_distance,
            avgSpeed: session.avg_speed,
            maxSpeed: session.max_speed,
            totalAscent: session.total_ascent,
            totalDescent: session.total_descent,
          },
        });
      },
    );
  });
});
