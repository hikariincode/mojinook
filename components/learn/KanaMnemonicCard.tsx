import Image from "next/image";
import type { KanaItem } from "@/lib/kanaData";

type KanaMnemonicCardProps = {
  item: KanaItem;
  kanaType: "hiragana" | "katakana";
};

export function KanaMnemonicCard({ item, kanaType }: KanaMnemonicCardProps) {
  const character = kanaType === "hiragana" ? item.h : item.k;
  const mnemonic = kanaType === "hiragana" ? item.mh : item.mk;
  const sayText = item.pron ?? item.r;

  return (
    <div className="brush-in relative flex aspect-5/7 flex-col overflow-hidden rounded-sm border border-(--color-sumi)/10 bg-white/50">
      <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-sm bg-(--color-aizome) font-mono text-sm text-(--color-washi)">
        {item.r[0]}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-6 pt-16 text-center">
        <Image
          src="/images/mascot/welcome-nekochan.svg"
          alt=""
          width={112}
          height={112}
          className="h-28 w-28 object-contain opacity-80"
        />
        <p className="mt-3 font-mono text-[10px] tracking-widest text-(--color-muted) uppercase">
          Image component drawn by me
        </p>
      </div>

      <div className="flex shrink-0 items-stretch gap-3 border-t border-(--color-hanko)/40 bg-(--color-kin)/90 p-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-(--color-washi) shadow-inner">
          <span className="font-display text-3xl text-(--color-sumi)">
            {character}
          </span>
        </div>
        <div className="flex flex-col justify-center text-left">
          <p className="font-body text-sm text-(--color-sumi)">
            <span className="font-semibold">Mnemonic:</span> {mnemonic}
          </p>
          <p className="font-body text-sm text-(--color-sumi)">
            <span className="font-semibold">Say:</span> {sayText}
          </p>
        </div>
      </div>
    </div>
  );
}
