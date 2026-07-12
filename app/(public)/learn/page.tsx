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
    <div className="min-h-screen washi-bg px-6 py-10">
      <div className="max-w-3xl mx-auto brush-in">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-4xl text-(--color-sumi)">Gojūon Table</h1>
            <p className="font-body text-(--color-muted) mt-1">Tap a row to study its mnemonics</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setKanaType("hiragana")}
              className={`px-4 py-2 rounded-sm font-mono text-sm font-medium ${kanaType === "hiragana"
                  ? "bg-(--color-aizome) text-(--color-washi)"
                  : "bg-transparent text-(--color-muted) border border-(--color-muted)/30"
                }`}
            >
              HIRAGANA
            </button>
            <button
              onClick={() => setKanaType("katakana")}
              className={`px-4 py-2 rounded-sm font-mono text-sm font-medium ${kanaType === "katakana"
                  ? "bg-(--color-aizome) text-(--color-washi)"
                  : "bg-transparent text-(--color-muted) border border-(--color-muted)/30"
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
              className="group flex items-center gap-4 bg-white/40 hover:bg-white/70 border border-[#262220]/10 rounded-sm px-4 py-3 transition-colors text-left"
            >
              <div className="flex items-center gap-6 flex-1">
                <span className="font-mono text-xs text-(--color-muted) w-14 shrink-0">
                  {row.key.toUpperCase()} ROW
                </span>
                <div className="flex gap-3 flex-wrap">
                  {row.items.map((item) => (
                    <div key={item.r} className="flex flex-col items-center">
                      <div className="font-display text-3xl text-(--color-sumi) group-hover:text-(--color-aizome) transition-colors">
                        {kanaType === "hiragana" ? item.h : item.k}
                      </div>
                      <div className="font-mono text-xs text-(--color-muted) mt-1">
                        {item.r}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <span className="font-body text-(--color-hanko) ml-auto shrink-0 text-(--color-hanko) opacity-0 group-hover:opacity-100 transition-opacity text-lg">
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