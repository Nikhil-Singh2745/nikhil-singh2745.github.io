const WORDS_PER_MINUTE = 220;

export function readingTime(markdownOrHtml: string): number {
  const stripped = markdownOrHtml
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_`>\-]/g, " ")
    .trim();
  const wordCount = stripped.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
