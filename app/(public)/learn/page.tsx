
export default function HomePage() {
  return (
    <div className="min-h-screen washi-bg px-6 py-10">
      <div className="max-w-3xl mx-auto .animate-brush">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-3xl text-[--color-sumi]">Gojūon Table</h1>
            <p className="font-body text-sm text-[--color-muted] mt-1">Tap a row to study its mnemonics</p>
          </div>
          <div className="flex gap-2">
            <button              
              className={`font-mono text-xs px-4 py-2 rounded-sm border transition-colors`}
            >
              HIRAGANA
            </button>
            <button
              className={`font-mono text-xs px-4 py-2 rounded-sm border transition-colors`}
            >
              KATAKANA
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          <button              
              className="group flex items-center gap-4 bg-white/40 hover:bg-white/70 border border-[--color-sumi]/10 rounded-sm px-4 py-3 transition-colors text-left"
            >
              <div className="font-mono text-[10px] text-[--color-muted] w-14 shrink-0 uppercase tracking-wider"></div>
              <div className="flex gap-3 flex-wrap flex-1">
                
                  <div key="a" className="flex flex-col items-center">
                    <span className="font-display text-2xl text-[--color-sumi] group-hover:text-[--color-aizome] transition-colors">
                    </span>
                    <span className="font-mono text-[10px] text-[--color-muted]"></span>
                  </div>
                
              </div>
              <span className="text-[--color-hanko] opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
            </button>
        </div>
        
      </div>
    </div>
  );
}