import { useEffect, useRef, useState } from "react";

const CANVAS_SIZE = 320;

export type Point = { x: number; y: number };
export type Stroke = Point[];

interface UseDrawingCanvasOptions {
  guideChar: string;
  showGuide: boolean;
}

/**
 * Encapsulates the writing-pad canvas: pointer/touch capture, stroke state,
 * and the paint effect. Kept independent of kana navigation so it can be
 * tested and reused on its own.
 */
export function useDrawingCanvas({ guideChar, showGuide }: UseDrawingCanvasOptions) {
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

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
      ctx.fillText(guideChar, CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 6);
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
  }, [strokes, currentStroke, showGuide, guideChar]);

  return {
    canvasRef,
    strokes,
    canvasSize: CANVAS_SIZE,
    handlers: {
      onMouseDown: startStroke,
      onMouseMove: moveStroke,
      onMouseUp: endStroke,
      onMouseLeave: endStroke,
      onTouchStart: startStroke,
      onTouchMove: moveStroke,
      onTouchEnd: endStroke,
      onTouchCancel: endStroke, // handles iOS interrupting a touch mid-stroke
    },
    undoStroke,
    clearAll,
  };
}
