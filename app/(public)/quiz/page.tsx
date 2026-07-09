import InkButton from "@/components/buttons/InkButton";

export default function QuizPage() {
  return (
    <div className="min-h-screen washi-bg px-6 py-10">
      <div className="max-w-md mx-auto brush-in">
        <h1 className="font-display text-2xl text-[--color-sumi] mb-1">Choose your rows</h1>
        <p className="font-body text-sm text-[--color-muted] mb-6">Tested kana → romaji, mixed multiple-choice and typed answers.</p>

        <div className="flex gap-2 mb-5">
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
              className={`font-body text-sm text-left px-3 py-2.5 rounded-sm border transition-colors ? "bg-[--color-aizome]/10 border-[--color-aizome] text-[--color-aizome]" : "border-[--color-sumi]/10 text-[--color-muted]"}`}
            >
              <div className="flex gap-1 font-display text-lg text-[--color-sumi]">
              </div>
              <div className="font-mono text-[10px] mt-0.5"></div>
            </button>  
        </div>

        <div className="flex items-center justify-between mb-8">
          <span className="font-body text-sm text-[--color-muted]">Questions</span>
          <div className="flex gap-2">
            {[5, 10, 15].map((n) => (
              <button
                key={n}
                className={`font-mono text-xs w-9 h-9 rounded-sm border "bg-[--color-hanko] text-[--color-washi] border-[--color-hanko]" : "border-[--color-muted]/40 text-[--color-muted]"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <InkButton
          className="w-full"
          variant="primary"
        >
          {"Select at least one row"}
        </InkButton>
      </div>
    </div>
  );
}