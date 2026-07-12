"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ROWS } from "@/lib/kanaData";
import { routes } from "@/lib/routes";

const CANVAS_SIZE = 320;

const PRACTICE_KANA = ROWS.flatMap((row) =>
  row.items.map((item) => ({ h: item.h, r: item.r, strokes: item.strokesh }))
);

type Point = { x: number; y: number };
type Stroke = Point[];

export default function WritingPad() {
  const [kanaIndex, setKanaIndex] = useState(0);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const [showGuide, setShowGuide] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const kana = PRACTICE_KANA[kanaIndex];

  const getPos = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const point = "touches" in e ? e.touches[0] : e;
    return {
      x: ((point.clientX - rect.left) / rect.width) * CANVAS_SIZE,
      y: ((point.clientY - rect.top) / rect.height) * CANVAS_SIZE,
    };
  };

  const startStroke = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    drawing.current = true;
    const p = getPos(e);
    setCurrentStroke([p]);
  };

  const moveStroke = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!drawing.current) return;
    e.preventDefault();
    const p = getPos(e);
    setCurrentStroke((prev) => (prev ? [...prev, p] : [p]));
  };

  const endStroke = () => {
    if (!drawing.current) return;
    drawing.current = false;
    setCurrentStroke((prev) => {
      if (prev && prev.length > 1) {
        setStrokes((s) => [...s, prev]);
      }
      return null;
    });
  };

  const undoStroke = () => setStrokes((s) => s.slice(0, -1));
  const clearAll = () => {
    setStrokes([]);
    setCurrentStroke(null);
  };

  const nextKana = () => {
    setKanaIndex((i) => (i + 1) % PRACTICE_KANA.length);
    clearAll();
  };
  const prevKana = () => {
    setKanaIndex((i) => (i - 1 + PRACTICE_KANA.length) % PRACTICE_KANA.length);
    clearAll();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.strokeStyle = "rgba(38,34,32,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(CANVAS_SIZE / 2, 0);
    ctx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE);
    ctx.moveTo(0, CANVAS_SIZE / 2);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE / 2);
    ctx.stroke();
    ctx.strokeRect(1, 1, CANVAS_SIZE - 2, CANVAS_SIZE - 2);

    if (showGuide) {
      ctx.font = `${CANVAS_SIZE * 0.7}px 'Shippori Mincho', serif`;
      ctx.fillStyle = "rgba(38,34,32,0.08)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(kana.h, CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 6);
    }

    const paintStroke = (stroke: Stroke | null, color: string) => {
      if (!stroke || stroke.length < 2) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      stroke.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.stroke();
    };

    strokes.forEach((s) => paintStroke(s, "#262220"));
    paintStroke(currentStroke, "#2C5170");
  }, [strokes, currentStroke, showGuide, kana.h]);

  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6 py-10 font-body">
      <div className="max-w-2xl w-full animate-brush">
        <div className="text-center mb-6">
          <div className="font-mono text-[10px] tracking-widest text-(--color-muted) uppercase mb-1">
            Writing Pad
          </div>
          <h1 className="font-display text-2xl text-(--color-sumi)">Practice a stroke</h1>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button onClick={prevKana} className="font-body text-(--color-muted) hover:text-(--color-hanko) px-2">
            ←
          </button>
          <div className="text-center">
            <div className="font-display text-xl text-(--color-aizome)">{kana.h}</div>
            <div className="font-mono text-[10px] text-(--color-muted)">
              {kana.r}
              {kana.strokes ? ` · ${kana.strokes} strokes` : ""}
            </div>
          </div>
          <button onClick={nextKana} className="font-body text-(--color-muted) hover:text-(--color-hanko) px-2">
            →
          </button>
        </div>

        <div className="flex items-start justify-center gap-6 flex-wrap">
          <div
            className="bg-white/60 rounded-sm border border-(--color-sumi)/15 flex items-center justify-center"
            style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
          >
            <Image
              src="/images/mascot/welcome-nekochan.svg"
              alt="Sample stroke reference"
              width={160}
              height={160}
              className="w-2/3 h-auto opacity-70"
            />
          </div>

          <div className="relative" style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}>
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="bg-white/60 rounded-sm border border-(--color-sumi)/15 touch-none cursor-crosshair"
              onMouseDown={startStroke}
              onMouseMove={moveStroke}
              onMouseUp={endStroke}
              onMouseLeave={endStroke}
              onTouchStart={startStroke}
              onTouchMove={moveStroke}
              onTouchEnd={endStroke}
            />
          </div>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-center mt-3 mb-6">
            <label className="flex items-center gap-2 font-mono text-[10px] text-(--color-muted) uppercase tracking-wide">
              <input
                type="checkbox"
                checked={showGuide}
                onChange={(e) => setShowGuide(e.target.checked)}
              />
              Show guide
            </label>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <button
              onClick={undoStroke}
              disabled={strokes.length === 0}
              className="font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-sumi)/15 text-(--color-sumi) disabled:opacity-30 hover:border-(--color-aizome) transition-colors"
            >
              Undo stroke
            </button>
            <button
              onClick={clearAll}
              disabled={strokes.length === 0}
              className="font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-hanko)/30 text-(--color-hanko) disabled:opacity-30 hover:bg-(--color-hanko)/5 transition-colors"
            >
              Clear
            </button>
          </div>
          <Link
            href={routes.learn}
            className="block w-full text-center font-body text-sm px-4 py-2.5 rounded-sm bg-(--color-aizome) text-(--color-washi) hover:bg-[#254161] transition-colors"
          >
            ← Back to learn page
          </Link>
        </div>
      </div>
    </div>
  );
}
