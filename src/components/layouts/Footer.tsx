export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950 px-5 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/images/logo.png" alt="" className="h-6 w-6 object-contain" />
          <span className="text-sm font-bold tracking-tight text-white">PICK FLIX</span>
        </div>

        <a
          href="https://github.com/alstmd9902/movie-ai-curator"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub 저장소 열기"
          className="text-white/60 transition hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="size-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.87c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.78c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
