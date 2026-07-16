export const routes = {
  home: "/",
  handwriting: "/handwriting",
  learn: "/learn",
  learnRow: (kana: "hiragana" | "katakana", row: string) =>
    `/kana/${kana}/${row}`,
  quiz: "/quiz",
  results: "/results",
  preview: "/preview",
} as const;
