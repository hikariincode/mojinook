import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { InkButton } from "@/components/buttons";

test("renders its label", () => {
  render(<InkButton>Begin</InkButton>);
  expect(screen.getByRole("button", { name: "Begin" })).toBeDefined();
});
