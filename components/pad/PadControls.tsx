import Link from "next/link";

type PadControlsProps = {
  showGuide: boolean;
  onShowGuideChange: (checked: boolean) => void;
  canUndo: boolean;
  onUndo: () => void;
  onClear: () => void;
  backHref: string;
};

export function PadControls({
  showGuide,
  onShowGuideChange,
  canUndo,
  onUndo,
  onClear,
  backHref,
}: PadControlsProps) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center justify-center mt-3 mb-6">
        <label className="flex items-center gap-2 font-mono text-[10px] text-(--color-muted) uppercase tracking-wide">
          <input
            type="checkbox"
            checked={showGuide}
            onChange={(e) => onShowGuideChange(e.target.checked)}
          />
          Show guide
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-sumi)/15 text-(--color-sumi) disabled:opacity-30 hover:border-(--color-aizome) transition-colors"
        >
          Undo stroke
        </button>
        <button
          onClick={onClear}
          disabled={!canUndo}
          className="font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-hanko)/30 text-(--color-hanko) disabled:opacity-30 hover:bg-(--color-hanko)/5 transition-colors"
        >
          Clear
        </button>
      </div>
      <Link
        href={backHref}
        className="block w-full text-center font-body text-sm px-4 py-2.5 rounded-sm bg-(--color-aizome) text-(--color-washi) hover:bg-[#254161] transition-colors"
      >
        ← Back to learn page
      </Link>
    </div>
  );
}
