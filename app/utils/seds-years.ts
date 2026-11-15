// SEDS founding year - single source of truth for the year counts.
export const SEDS_FOUNDING_YEAR = 1980;

export function calculateSEDSYears(): number {
  return new Date().getFullYear() - SEDS_FOUNDING_YEAR;
}
