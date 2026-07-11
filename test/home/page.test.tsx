import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import WelcomePage from "@/app/(public)/home/page";
import { routes } from "@/lib/routes";

test("renders the app name as the main heading", () => {
  render(<WelcomePage />);
  expect(
    screen.getByRole("heading", { level: 1, name: "MojiNook" }),
  ).toBeDefined();
});

test("links Begin to the learn page", () => {
  render(<WelcomePage />);
  const link = screen.getByRole("link", { name: "Begin" });
  expect(link.getAttribute("href")).toBe(routes.learn);
});
