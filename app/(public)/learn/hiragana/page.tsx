import { InkButton } from "@/components/buttons";

export default function HiraganaPage() {
  return (
    <div className="washi-bg flex min-h-screen flex-col px-6 py-10">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="mb-6 flex justify-center gap-2">
          <button
            className={`"bg-[--color-aizome] border-[--color-aizome]" rounded-sm border px-3 py-1.5 font-mono text-[10px] text-[--color-washi]`}
          >
            HIRAGANA
          </button>
          <button
            className={`"bg-[--color-aizome] border-[--color-aizome]" rounded-sm border px-3 py-1.5 font-mono text-[10px] text-[--color-washi]`}
          >
            KATAKANA
          </button>
        </div>

        <div className="brush-in flex flex-1 flex-col items-center justify-center rounded-sm border border-[--color-sumi]/10 bg-white/50 p-10 text-center">
          {/* space reserved for a future hand-drawn mnemonic image */}
          <div className="font-display mb-4 text-[7rem] leading-none text-[--color-sumi]"></div>
          <div className="mb-6 font-mono text-sm tracking-widest text-[--color-hanko] uppercase"></div>
          <p className="font-body max-w-xs leading-relaxed text-[--color-muted]"></p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <InkButton variant="ghost">← Prev</InkButton>
          <div className="flex gap-1.5">
            (
            <div
              key={1}
              className={`h-1.5 w-1.5 rounded-full ${"bg-[--color-hanko]"}`}
            />
            )
          </div>
          <InkButton variant="ghost" className="pointer-events-none opacity-30">
            Next →
          </InkButton>
        </div>
      </div>
    </div>
  );
}
