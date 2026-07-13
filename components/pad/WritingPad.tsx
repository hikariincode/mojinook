"use client";

import { useState } from "react";
import Image from "next/image";
import { ROWS } from "@/lib/kanaData";
import { routes } from "@/lib/routes";
import { useDrawingCanvas } from "@/lib/hooks/useDrawingCanvas";
import { KanaNavigator } from "./KanaNavigator";
import { PadControls } from "./PadControls";

const PRACTICE_KANA = ROWS.flatMap((row) =>
  row.items.map((item) => ({ h: item.h, r: item.r, strokes: item.strokesh }))
);

export default function WritingPad() {
  const [kanaIndex, setKanaIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const kana = PRACTICE_KANA[kanaIndex];

  const { canvasRef, strokes, canvasSize, handlers, undoStroke, clearAll } =
    useDrawingCanvas({ guideChar: kana.h, showGuide });

  const nextKana = () => {
    setKanaIndex((i) => (i + 1) % PRACTICE_KANA.length);
    clearAll();
  };
  const prevKana = () => {
    setKanaIndex((i) => (i - 1 + PRACTICE_KANA.length) % PRACTICE_KANA.length);
    clearAll();
  };

  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6 py-10 font-body">
      <div className="max-w-2xl w-full animate-brush">
        <div className="text-center mb-6">
          <div className="font-mono text-[10px] tracking-widest text-(--color-muted) uppercase mb-1">
            Writing Pad
          </div>
          <h1 className="font-display text-2xl text-(--color-sumi)">Practice a stroke</h1>
        </div>

        <KanaNavigator
          kanaChar={kana.h}
          reading={kana.r}
          strokeCount={kana.strokes}
          onPrev={prevKana}
          onNext={nextKana}
        />

        <div className="flex items-start justify-center gap-6 flex-wrap">
          <div
            className="bg-white/60 rounded-sm border border-(--color-sumi)/15 flex items-center justify-center"
            style={{ width: canvasSize, height: canvasSize }}
          >
            <Image
              src="/images/mascot/welcome-nekochan.svg"
              alt="Sample stroke reference"
              width={160}
              height={160}
              className="w-2/3 h-auto opacity-70"
            />
          </div>

          <div className="relative" style={{ width: canvasSize, height: canvasSize }}>
            <canvas
              ref={canvasRef}
              width={canvasSize}
              height={canvasSize}
              className="bg-white/60 rounded-sm border border-(--color-sumi)/15 touch-none cursor-crosshair"
              {...handlers}
            />
          </div>
        </div>

        <PadControls
          showGuide={showGuide}
          onShowGuideChange={setShowGuide}
          canUndo={strokes.length > 0}
          onUndo={undoStroke}
          onClear={clearAll}
          backHref={routes.learn}
        />
      </div>
    </div>
  );
}
