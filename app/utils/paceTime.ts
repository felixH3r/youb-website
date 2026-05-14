export const paceUnits = ["min/km", "min/mi"] as const;

export const isPaceUnit = (unit: string) =>
  paceUnits.includes(unit as (typeof paceUnits)[number]);

export const parsePaceTime = (input: string): number | null => {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  const parts = trimmed.split(":");
  if (parts.length !== 2 && parts.length !== 3) {
    return null;
  }

  if (parts.some((part) => part.trim() === "")) {
    return null;
  }

  const numbers = parts.map((part) => Number(part));
  if (numbers.some((part) => !Number.isFinite(part) || part < 0)) {
    return null;
  }

  if (parts.length === 2) {
    const minutes = numbers[0];
    const seconds = numbers[1];
    if (minutes === undefined || seconds === undefined) {
      return null;
    }

    if (seconds >= 60) {
      return null;
    }

    return minutes + seconds / 60;
  }

  const hours = numbers[0];
  const minutes = numbers[1];
  const seconds = numbers[2];
  if (hours === undefined || minutes === undefined || seconds === undefined) {
    return null;
  }

  if (minutes >= 60 || seconds >= 60) {
    return null;
  }

  return hours * 60 + minutes + seconds / 60;
};

export const formatPaceTime = (minutesValue: number) => {
  if (!Number.isFinite(minutesValue) || minutesValue <= 0) {
    return "0:00";
  }

  const totalSeconds = Math.round(minutesValue * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const paddedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${paddedSeconds}`;
  }

  return `${minutes}:${paddedSeconds}`;
};
