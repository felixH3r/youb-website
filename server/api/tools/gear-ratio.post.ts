import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { frontTeeth, rearTeeth, cadence = 90, circumference = 2105 } = body;

  if (!frontTeeth || !rearTeeth) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
    });
  }

  const fronts = Array.isArray(frontTeeth) ? frontTeeth : [frontTeeth];
  const rears = Array.isArray(rearTeeth) ? rearTeeth : [rearTeeth];

  const results = fronts.flatMap((f) => 
    rears.map((r) => {
      const ratio = f / r;
      // Speed (km/h) = (cadence * ratio * circumference * 60) / 1,000,000
      const speedKmh = (cadence * ratio * circumference * 60) / 1000000;
      const speedMph = speedKmh / 1.60934;
      // Gear inches = ratio * (circumference / (pi * 25.4))
      const gearInches = ratio * (circumference / (Math.PI * 25.4));

      return {
        front: f,
        rear: r,
        ratio: Number(ratio.toFixed(2)),
        speedKmh: Number(speedKmh.toFixed(1)),
        speedMph: Number(speedMph.toFixed(1)),
        gearInches: Number(gearInches.toFixed(1)),
      };
    })
  );

  return {
    results,
  };
});
