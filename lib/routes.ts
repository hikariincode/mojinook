export const routes = {
  home: "/",
  handwriting: "/handwriting",
  learn: "/learn",
  learnRow: (kana: "hiragana" | "katakana", row: string) =>
    `/learn/${kana}/${row}`,
  hiragana: "/learn/hiragana",
  katakana: "/learn/katakana",
  quiz: "/quiz",
  results: "/results",
  preview: "/preview",
} as const;