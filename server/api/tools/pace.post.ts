import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { value, unit } = body;

  if (typeof value !== 'number' || !unit) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
    });
  }

  let paceKm = 0;
  let paceMi = 0;
  let speedKmh = 0;
  let speedMph = 0;
  let speedMs = 0;

  // unit can be: 'min/km', 'min/mi', 'km/h', 'mph'
  if (unit === 'min/km') {
    paceKm = value;
    speedKmh = 60 / value;
    paceMi = value * 1.60934;
    speedMph = 60 / paceMi;
  } else if (unit === 'min/mi') {
    paceMi = value;
    speedMph = 60 / value;
    paceKm = value / 1.60934;
    speedKmh = 60 / paceKm;
  } else if (unit === 'km/h') {
    speedKmh = value;
    paceKm = 60 / value;
    speedMph = value / 1.60934;
    paceMi = 60 / speedMph;
  } else if (unit === 'mph') {
    speedMph = value;
    paceMi = 60 / value;
    speedKmh = value * 1.60934;
    paceKm = 60 / speedKmh;
  } else if (unit === 'm/s') {
    speedMs = value;
    speedKmh = value * 3.6;
    paceKm = 60 / speedKmh;
    speedMph = speedKmh / 1.60934;
    paceMi = 60 / speedMph;
  }

  // Calculate speedMs if not set
  if (speedMs === 0 && speedKmh > 0) {
    speedMs = speedKmh / 3.6;
  }

  return {
    paceKm: Number(paceKm.toFixed(2)),
    paceMi: Number(paceMi.toFixed(2)),
    speedKmh: Number(speedKmh.toFixed(2)),
    speedMph: Number(speedMph.toFixed(2)),
    speedMs: Number(speedMs.toFixed(2)),
  };
});
