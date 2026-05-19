export function AppHeader() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] text-lagoon">TABISURU FUKUONNA</p>
        <p className="mt-1 text-base font-bold text-ink">旅する福女</p>
      </div>
      <a
        href="https://note.com/hukuonna"
        className="rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-bold text-cocoa shadow-sm backdrop-blur transition hover:bg-roseMilk"
      >
        noteへ
      </a>
    </header>
  );
}
