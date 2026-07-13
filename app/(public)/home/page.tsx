import Link from "next/link";
import { routes } from "@/lib/routes";
import Image from "next/image";
import { InkButton } from "@/components/buttons";

export default function WelcomePage() {
  return (
    <div className="washi-bg flex min-h-screen items-center justify-center px-6">
      <div className="brush-in w-full max-w-md text-center">
        <Image
          src="/images/mascot/welcome-nekochan.svg"
          alt="Study companion"
          width={160}
          height={160}
          className="mx-auto mb-2 h-auto w-60"
        />
        <div className="mx-auto mb-6 h-[2px] w-16 bg-(--color-hanko)" />
        <h1 className="font-display mb-3 text-4xl text-(--color-sumi)">
          MojiNook
        </h1>
        <p className="font-body mb-10 leading-relaxed text-(--color-muted)">
          Learn hiragana and katakana through mnemonics
        </p>
        <Link href={routes.learn}>
          <InkButton variant="primary" className="mx-auto w-full max-w-sm">
            Begin
          </InkButton>
        </Link>
      </div>
    </div>
  );
}
