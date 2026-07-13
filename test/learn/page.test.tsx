import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LearnPage from "@/app/(public)/learn/page";
import { ROWS } from "@/lib/kanaData";
import { routes } from "@/lib/routes";

test("renders a row link for every gojuon row, defaulting to hiragana", () => {
  render(<LearnPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Gojūon Table" }),
  ).toBeDefined();

  const firstRow = ROWS[0];
  expect(screen.getByText(firstRow.items[0].h)).toBeDefined();
  expect(screen.queryByText(firstRow.items[0].k)).toBeNull();

  for (const row of ROWS) {
    const link = screen.getByRole("link", {
      name: new RegExp(`^${row.key.toUpperCase()} ROW\\b`),
    });
    expect(link.getAttribute("href")).toBe(
      routes.learnRow("hiragana", row.key),
    );
  }
});

test("switches displayed characters to katakana when that tab is selected", () => {
  render(<LearnPage />);

  const firstRow = ROWS[0];
  fireEvent.click(screen.getByRole("button", { name: "KATAKANA" }));

  expect(screen.getByText(firstRow.items[0].k)).toBeDefined();
  expect(screen.queryByText(firstRow.items[0].h)).toBeNull();

  const link = screen.getByRole("link", {
    name: new RegExp(`^${firstRow.key.toUpperCase()} ROW\\b`),
  });
  expect(link.getAttribute("href")).toBe(
    routes.learnRow("katakana", firstRow.key),
  );
});

test("links Take a Quiz to the quiz page", () => {
  render(<LearnPage />);
  const link = screen.getByRole("link", { name: "Take a Quiz" });
  expect(link.getAttribute("href")).toBe(routes.quiz);
});
