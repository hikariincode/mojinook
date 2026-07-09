import InkButton from "@/components/buttons/InkButton";

export default function ResultsPage() {
 return (<div className="min-h-screen washi-bg px-6 py-10">
      <div className="max-w-md mx-auto brush-in">
        <div className="text-center bg-white/50 border border-[--color-sumi]/10 rounded-sm p-8 mb-8">
          <div className={`stamp-anim inline-block font-display text-6xl mb-2 "text-[--color-aizome]"`}>
            {100}%
          </div>
          <p className="font-body text-[--color-muted]">
            You answered {10} out of {10} questions correctly.
          </p>
        </div>

        <h2 className="font-display text-lg text-[--color-sumi] mb-3">Review mistakes</h2>
            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-between bg-white/40 border border-[--color-hanko]/20 rounded-sm px-4 py-3">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl text-[--color-sumi]">
                      
                    </span>
                    <div className="font-body text-xs text-left">
                      <div className="text-[--color-hanko]">you: userAnswer</div>
                      <div className="text-[--color-aizome]">correct: correctAnswer</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[--color-muted] uppercase">kanarow</span>
                </div>
            </div>
            <InkButton variant="danger" className="w-full mb-3">
              Retry mistakes only
            </InkButton>
          
        
        <InkButton variant="ghost" className="w-full">
          Back to home
        </InkButton>
      </div>
      </div>  
  );
}