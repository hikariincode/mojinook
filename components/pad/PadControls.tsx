import Link from "next/link";
import { InkButton, PrimaryButton, SecondaryButton } from "@/components/buttons";

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
        <PrimaryButton onClick={onUndo} disabled={!canUndo}>
          Undo stroke
        </PrimaryButton>
        <SecondaryButton onClick={onClear} disabled={!canUndo}>
          Clear
        </SecondaryButton>
      </div>
      <Link href={backHref}>
        <InkButton variant="primary" className="w-full">
          ← Back to learn page
        </InkButton>
      </Link>
    </div>
  );
}
