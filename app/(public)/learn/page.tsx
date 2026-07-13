"use client";

import { useState } from "react";
import Link from "next/link";
import { ROWS } from "@/lib/kanaData";
import { routes } from "@/lib/routes";
import { InkButton } from "@/components/buttons";

type KanaType = "hiragana" | "katakana";

export default function LearnPage() {
  const [kanaType, setKanaType] = useState<KanaType>("hiragana");

  return (
    <div className="washi-bg min-h-screen px-6 py-10">
      <div className="brush-in mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-(--color-sumi)">
              Gojūon Table
            </h1>
            <p className="font-body mt-1 text-(--color-muted)">
              Tap a row to study its mnemonics
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setKanaType("hiragana")}
              className={`rounded-sm px-4 py-2 font-mono text-sm font-medium ${
                kanaType === "hiragana"
                  ? "bg-(--color-aizome) text-(--color-washi)"
                  : "border border-(--color-muted)/30 bg-transparent text-(--color-muted)"
              }`}
            >
              HIRAGANA
            </button>
            <button
              onClick={() => setKanaType("katakana")}
              className={`rounded-sm px-4 py-2 font-mono text-sm font-medium ${
                kanaType === "katakana"
                  ? "bg-(--color-aizome) text-(--color-washi)"
                  : "border border-(--color-muted)/30 bg-transparent text-(--color-muted)"
              }`}
            >
              KATAKANA
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          {ROWS.map((row) => (
            <Link
              key={row.key}
              href={routes.learnRow(kanaType, row.key)}
              className="group flex items-center gap-4 rounded-sm border border-[#262220]/10 bg-white/40 px-4 py-3 text-left transition-colors hover:bg-white/70"
            >
              <div className="flex flex-1 items-center gap-6">
                <span className="w-14 shrink-0 font-mono text-xs text-(--color-muted)">
                  {row.key.toUpperCase()} ROW
                </span>
                <div className="flex flex-wrap gap-3">
                  {row.items.map((item) => (
                    <div key={item.r} className="flex flex-col items-center">
                      <div className="font-display text-3xl text-(--color-sumi) transition-colors group-hover:text-(--color-aizome)">
                        {kanaType === "hiragana" ? item.h : item.k}
                      </div>
                      <div className="mt-1 font-mono text-xs text-(--color-muted)">
                        {item.r}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <span className="font-body ml-auto shrink-0 text-lg text-(--color-hanko) opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={routes.quiz}>
            <InkButton variant="danger" className="px-10">
              Take a Quiz
            </InkButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
