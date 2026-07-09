export default function HandwritingPage() {
  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6 py-10 font-body">
      <div className="max-w-sm w-full brush-in">
        <div className="text-center mb-6">
          <div className="font-mono text-[10px] tracking-widest text-[--color-muted] uppercase mb-1">Writing Pad · Prototype</div>
          <h1 className="font-display text-2xl text-[--color-sumi]">Practice a stroke</h1>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button className="font-body text-[--color-muted] hover:text-[--color-aizome] px-2">←</button>
          <div className="text-center">
            <div className="font-display text-xl text-[--color-aizome]">kana</div>
            <div className="font-mono text-[10px] text-[--color-muted]">strokes</div>
          </div>
          <button className="font-body text-[--color-muted] hover:text-[--color-aizome] px-2">→</button>
        </div>

        <div className="relative mx-auto" style={{ width: 500, height: 500 }}>
          <canvas
            className="bg-white/60 rounded-sm border border-[--color-sumi]/15 touch-none cursor-crosshair"
          />
        </div>

        

        <div className="grid grid-cols-2 gap-2 mb-2">
          <button className="font-body text-sm text-[--color-muted] hover:text-[--color-aizome] px-3 py-2.5 rounded-sm border border-[--color-sumi]/10 transition-colors">
            Clear
          </button>
          <button className="font-body text-sm text-[--color-muted] hover:text-[--color-aizome] px-3 py-2.5 rounded-sm border border-[--color-sumi]/10 transition-colors">
            Submit
          </button>
        </div>
        <p className="font-mono text-[10px] text-[--color-muted] text-center mt-6 leading-relaxed">
          This captures each stroke as a point path <br/>
        </p>
      </div>
    </div>
  );
}