export function getEstimatedReadTime(text: string) {
  if (!text || typeof text !== "string") {
    return "Invalid input";
  }

  const wordsPerMinute = 250;

  const words = text.trim().split(/\s+/).length;

  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
}
