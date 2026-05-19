export function TopBanner() {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 pb-4">
      <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white shadow-soft">
        <img src="/images/top-banner.png" alt="" className="h-36 w-full object-cover sm:h-44" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-5 py-4">
          <p className="text-sm font-bold text-lagoon">旅する福女</p>
          <p className="mt-1 max-w-[15rem] text-xl font-bold leading-snug text-ink">
            あなたに合う海外旅行先診断
          </p>
        </div>
      </div>
    </section>
  );
}
