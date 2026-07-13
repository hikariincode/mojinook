import InkButton from "@/components/buttons/InkButton";

export default function ResultsPage() {
  return (
    <div className="washi-bg min-h-screen px-6 py-10">
      <div className="brush-in mx-auto max-w-md">
        <div className="mb-8 rounded-sm border border-[--color-sumi]/10 bg-white/50 p-8 text-center">
          <div
            className={`stamp-anim font-display "text-[--color-aizome]" mb-2 inline-block text-6xl`}
          >
            {100}%
          </div>
          <p className="font-body text-[--color-muted]">
            You answered {10} out of {10} questions correctly.
          </p>
        </div>

        <h2 className="font-display mb-3 text-lg text-[--color-sumi]">
          Review mistakes
        </h2>
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between rounded-sm border border-[--color-hanko]/20 bg-white/40 px-4 py-3">
            <div className="flex items-center gap-4">
              <span className="font-display text-3xl text-[--color-sumi]"></span>
              <div className="font-body text-left text-xs">
                <div className="text-[--color-hanko]">you: userAnswer</div>
                <div className="text-[--color-aizome]">
                  correct: correctAnswer
                </div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[--color-muted] uppercase">
              kanarow
            </span>
          </div>
        </div>
        <InkButton variant="danger" className="mb-3 w-full">
          Retry mistakes only
        </InkButton>

        <InkButton variant="ghost" className="w-full">
          Back to home
        </InkButton>
      </div>
    </div>
  );
}
