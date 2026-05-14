import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { chainstay, frontTeeth, rearTeeth, pulleyTeeth = 0, unit = 'cm' } = body;

  if (
    typeof chainstay !== 'number'
    || typeof frontTeeth !== 'number'
    || typeof rearTeeth !== 'number'
    || typeof pulleyTeeth !== 'number'
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
    });
  }

  const athMillimeters = unit === 'cm'
    ? chainstay * 10
    : unit === 'inch'
      ? chainstay * 25.4
      : chainstay;

  const chainLengthWithoutPulleys = 0.157 * athMillimeters + 0.5 * frontTeeth + 0.5 * rearTeeth;
  const pulleyLength = pulleyTeeth > 10 ? 2 * pulleyTeeth - 18 : 0;
  const totalLinks = chainLengthWithoutPulleys + pulleyLength;
  
  // Links must be even for most chains (inner/outer links)
  const links = Math.ceil(totalLinks);
  const evenLinks = links % 2 === 0 ? links : links + 1;

  return {
    links: evenLinks,
    lengthInches: Number((evenLinks * 0.5).toFixed(2)),
    lengthCm: Number((evenLinks * 0.5 * 2.54).toFixed(2)),
  };
});
