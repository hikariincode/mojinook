import Link from "next/link";
import { routes } from "@/lib/routes";
import Image from "next/image";
import { InkButton } from "@/components/buttons";

export default function WelcomePage() {
  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center brush-in">
          <Image
            src="/images/mascot/welcome-nekochan.svg"
            alt="Study companion"
            width={160}
            height={160}
            className="w-60 h-auto mx-auto mb-2"
          />
        <div className="w-16 h-[2px] bg-(--color-hanko) mx-auto mb-6" />
        <h1 className="font-display text-4xl text-(--color-sumi) mb-3">
          MojiNook
        </h1>
        <p className="font-body text-(--color-muted) mb-10 leading-relaxed">
          Learn hiragana and katakana through mnemonics
        </p>
        <Link href={routes.learn}>
          <InkButton variant="primary" className="w-full max-w-sm mx-auto">
            Begin
          </InkButton>
        </Link>
      </div>
    </div>
  );
}