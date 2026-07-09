import Image from "next/image";
import { InkButton } from "@/components/buttons";

export default function WelcomePage() {
  return(<div className="min-h-screen washi-bg flex items-center justify-center px-6">
  <div className="max-w-md w-full text-center animate-brush">

    <Image
      src="/images/mascot/welcome-chibicat.svg"
      alt="Study companion"
      width={160}
      height={160}
      className="w-40 h-auto mx-auto mb-6"
    />

    <h1 className="font-display text-4xl text-[#262220] mb-3">
      Welcome to Moji Nook
    </h1>

    <p className="font-body text-[#8C8478]">
      Learn hiragana and katakana through mnemonics.
    </p>
    <InkButton
            variant="ghost"
            className= "opacity-30 pointer-events-none"
          >
            Begin
          </InkButton>
  </div>
</div>)
}