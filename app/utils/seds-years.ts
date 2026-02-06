// SEDS founding year - single source of truth for server-side calculations.
// The client-side script (public/seds-years.js) has its own copy of this constant.
export const SEDS_FOUNDING_YEAR = 1980;

export function calculateSEDSYears(): number {
  return new Date().getFullYear() - SEDS_FOUNDING_YEAR;
}
