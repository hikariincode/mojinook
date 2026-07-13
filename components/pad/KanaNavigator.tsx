type KanaNavigatorProps = {
  kanaChar: string;
  reading: string;
  strokeCount?: number | string;
  onPrev: () => void;
  onNext: () => void;
};

export function KanaNavigator({
  kanaChar,
  reading,
  strokeCount,
  onPrev,
  onNext,
}: KanaNavigatorProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrev}
        aria-label="Previous kana"
        className="font-body text-(--color-muted) hover:text-(--color-hanko) px-2"
      >
        ←
      </button>
      <div className="text-center">
        <div className="font-display text-xl text-(--color-aizome)">{kanaChar}</div>
        <div className="font-mono text-[10px] text-(--color-muted)">
          {reading}
          {strokeCount ? ` · ${strokeCount} strokes` : ""}
        </div>
      </div>
      <button
        onClick={onNext}
        aria-label="Next kana"
        className="font-body text-(--color-muted) hover:text-(--color-hanko) px-2"
      >
        →
      </button>
    </div>
  );
}
