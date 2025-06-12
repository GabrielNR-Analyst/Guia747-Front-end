import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-shape01">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo site" width={116} height={32} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-heading-xs font-barlow text-textComplement">
            <Link href="/termos-de-uso" className="hover:text-textComplement/80">
              Termos de uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-textComplement/80"
            >
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-textComplement/80">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};