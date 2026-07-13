import InkButton from "@/components/buttons/InkButton";

export default function QuizPage() {
  return (
    <div className="washi-bg min-h-screen px-6 py-10">
      <div className="brush-in mx-auto max-w-md">
        <h1 className="font-display mb-1 text-2xl text-[--color-sumi]">
          Choose your rows
        </h1>
        <p className="font-body mb-6 text-sm text-[--color-muted]">
          Tested kana → romaji, mixed multiple-choice and typed answers.
        </p>

        <div className="mb-5 flex gap-2"></div>

        <div className="mb-6 grid grid-cols-2 gap-2">
          <button
            className={`font-body ? "bg-[--color-aizome]/10 text-[--color-aizome]" : "border-[--color-sumi]/10 text-[--color-muted]"} rounded-sm border border-[--color-aizome] px-3 py-2.5 text-left text-sm transition-colors`}
          >
            <div className="font-display flex gap-1 text-lg text-[--color-sumi]"></div>
            <div className="mt-0.5 font-mono text-[10px]"></div>
          </button>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <span className="font-body text-sm text-[--color-muted]">
            Questions
          </span>
          <div className="flex gap-2">
            {[5, 10, 15].map((n) => (
              <button
                key={n}
                className={`"bg-[--color-hanko] border-[--color-hanko]" : "border-[--color-muted]/40 text-[--color-muted]"} h-9 w-9 rounded-sm border font-mono text-xs text-[--color-washi]`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <InkButton className="w-full" variant="primary">
          {"Select at least one row"}
        </InkButton>
      </div>
    </div>
  );
}
