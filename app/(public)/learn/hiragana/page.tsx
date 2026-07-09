import { InkButton } from "@/components/buttons";

export default function HiraganaPage() {
  return (<div className="min-h-screen washi-bg px-6 py-10 flex flex-col">
      <div className="max-w-md w-full mx-auto flex-1 flex flex-col">

        <div className="flex justify-center gap-2 mb-6">
          <button            
            className={`font-mono text-[10px] px-3 py-1.5 rounded-sm border "bg-[--color-aizome] text-[--color-washi] border-[--color-aizome]"`}
          >
            HIRAGANA
          </button>
          <button           
            className={`font-mono text-[10px] px-3 py-1.5 rounded-sm border "bg-[--color-aizome] text-[--color-washi] border-[--color-aizome]"`}
          >
            KATAKANA
          </button>
        </div>

        <div className="brush-in bg-white/50 border border-[--color-sumi]/10 rounded-sm p-10 flex-1 flex flex-col items-center justify-center text-center">
          {/* space reserved for a future hand-drawn mnemonic image */}
          <div className="font-display text-[7rem] leading-none text-[--color-sumi] mb-4">
            
          </div>
          <div className="font-mono text-sm text-[--color-hanko] tracking-widest uppercase mb-6"></div>
          <p className="font-body text-[--color-muted] max-w-xs leading-relaxed">
            
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <InkButton
            variant="ghost"
          >
            ← Prev
          </InkButton>
          <div className="flex gap-1.5">
            (
              <div key={1} className={`w-1.5 h-1.5 rounded-full ${ "bg-[--color-hanko]"}`} />
            )
          </div>
          <InkButton
            variant="ghost"
            className= "opacity-30 pointer-events-none"
          >
            Next →
          </InkButton>
        </div>
      </div>
    </div>
  );
}