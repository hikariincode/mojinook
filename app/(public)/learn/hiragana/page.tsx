"use client";

import { useState } from "react";
import Link from "next/link";
import { ROWS } from "@/lib/kanaData";
import { routes } from "@/lib/routes";
import { InkButton } from "@/components/buttons";
import { KanaMnemonicCard } from "@/components/learn";

export default function HiraganaPage() {
  const [rowIdx, setRowIdx] = useState(0);
  const [itemIdx, setItemIdx] = useState(0);

  const row = ROWS[rowIdx];
  const item = row.items[itemIdx];

  const isFirst = rowIdx === 0 && itemIdx === 0;
  const isLast =
    rowIdx === ROWS.length - 1 && itemIdx === row.items.length - 1;

  const goPrev = () => {
    if (itemIdx > 0) {
      setItemIdx(itemIdx - 1);
    } else if (rowIdx > 0) {
      const prevRow = ROWS[rowIdx - 1];
      setRowIdx(rowIdx - 1);
      setItemIdx(prevRow.items.length - 1);
    }
  };

  const goNext = () => {
    if (itemIdx < row.items.length - 1) {
      setItemIdx(itemIdx + 1);
    } else if (rowIdx < ROWS.length - 1) {
      setRowIdx(rowIdx + 1);
      setItemIdx(0);
    }
  };

  return (
    <div className="washi-bg flex min-h-screen flex-col px-6 py-10">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div className="mb-6 flex justify-center gap-2">
          <button className="rounded-sm border border-(--color-aizome) bg-(--color-aizome) px-3 py-1.5 font-mono text-[10px] text-(--color-washi)">
            HIRAGANA
          </button>
          <Link
            href={routes.katakana}
            className="rounded-sm border border-(--color-muted)/30 px-3 py-1.5 font-mono text-[10px] text-(--color-muted)"
          >
            KATAKANA
          </Link>
        </div>

        <KanaMnemonicCard item={item} kanaType="hiragana" />

        <div className="mt-6 flex items-center justify-between">
          <InkButton
            variant="ghost"
            onClick={goPrev}
            className={isFirst ? "pointer-events-none opacity-30" : ""}
          >
            ← Prev
          </InkButton>
          <div className="flex gap-1.5">
            {row.items.map((rowItem, i) => (
              <div
                key={rowItem.r}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === itemIdx ? "bg-(--color-hanko)" : "bg-(--color-muted)/30"
                }`}
              />
            ))}
          </div>
          <InkButton
            variant="ghost"
            onClick={goNext}
            className={isLast ? "pointer-events-none opacity-30" : ""}
          >
            Next →
          </InkButton>
        </div>
      </div>
    </div>
  );
}
