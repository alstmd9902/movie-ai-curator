import { Bell, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <div className="flex items-center gap-4 lg:hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="검색"
          aria-expanded={isSearchOpen}
          aria-controls="mobile-search-panel"
          className="rounded-full bg-transparent p-1 text-pf-white/85 hover:bg-transparent hover:text-pf-white"
          onClick={() => {
            setIsSearchOpen((isOpen) => !isOpen);
            setIsMenuOpen(false);
          }}
        >
          <Search className="size-6 sm:size-7" strokeWidth={2.1} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="알림"
          className="relative rounded-full bg-transparent p-1 text-pf-white/85 hover:bg-transparent hover:text-pf-white"
        >
          <Bell className="size-6 sm:size-7" strokeWidth={2} />
          <span className="absolute right-0 top-0 size-1.5 rounded-full bg-pf-orange" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="메뉴 열기"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-header-menu"
          className="rounded-full bg-transparent p-1 text-pf-white/85 hover:bg-transparent hover:text-pf-white"
          onClick={() => {
            setIsMenuOpen((isOpen) => !isOpen);
            setIsSearchOpen(false);
          }}
        >
          <span className="flex size-6 flex-col items-end justify-center gap-1.5 sm:size-7" aria-hidden="true">
            <span className="h-0.5 w-6 rounded-full bg-current sm:w-7" />
            <span className="h-0.5 w-5 rounded-full bg-current sm:w-6" />
            <span className="h-0.5 w-3.5 rounded-full bg-current sm:w-4" />
          </span>
        </Button>
      </div>

      {isSearchOpen && (
        <div
          id="mobile-search-panel"
          className="absolute left-0 top-20 w-full border-t border-pf-charcoal bg-pf-black px-5 py-4 lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative">
              <Input
                id="mobile-header-search"
                type="text"
                inputMode="search"
                enterKeyHint="search"
                aria-label="영화, 배우, 장르 검색"
                value={keyword}
                variant="search"
                className="border-pf-charcoal bg-pf-charcoal/50 text-pf-white placeholder:text-pf-gray/60 focus-visible:border-pf-orange/70 focus-visible:bg-pf-charcoal/70"
                placeholder="영화, 배우, 장르 검색"
                className="outline-none focus-visible:outline-none"
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={keyword ? '검색어 지우기' : '검색 취소'}
                className="absolute right-3 top-1/2 size-7 -translate-y-1/2 rounded-full bg-transparent p-0 text-pf-gray transition-colors hover:bg-transparent hover:text-pf-white active:translate-y-0"
                onPointerDown={(event) => event.preventDefault()}
                onClick={() => {
                  if (keyword) {
                    setKeyword('');
                    return;
                  }

                  setIsSearchOpen(false);
                }}
              >
                <X size={22} strokeWidth={2.1} />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 z-40 bg-pf-black/70 transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-header-menu"
        className={`fixed right-0 top-0 z-50 flex h-screen w-80 max-w-xs flex-col border-l border-pf-charcoal bg-pf-black px-5 py-6 shadow-2xl shadow-black/50 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-pf-charcoal pb-6">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="PICK FLIX 홈"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/logo.png"
              alt=""
              className="h-6 w-6 object-contain"
            />
            <span className="text-base font-bold tracking-tight text-pf-white">
              PICK FLIX
            </span>
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="메뉴 닫기"
            className="rounded-full bg-transparent p-1 text-pf-white/85 hover:bg-transparent hover:text-pf-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="size-7" strokeWidth={2.1} />
          </Button>
        </div>

        <nav
          aria-label="모바일 메뉴"
          className="flex flex-1 flex-col gap-1 py-8"
        >
          <Link
            to="/"
            className="rounded-md px-1 py-3 text-left text-lg font-semibold text-pf-orange"
            onClick={() => setIsMenuOpen(false)}
          >
            홈
          </Link>
          <Button
            type="button"
            variant="ghost"
            className="h-auto justify-start rounded-md bg-transparent px-1 py-3 text-left text-lg font-medium text-pf-gray hover:bg-transparent hover:text-pf-white"
          >
            개봉예정작
          </Button>
        </nav>

        <div className="border-t border-pf-charcoal pt-5">
          <Button
            type="button"
            variant="ghost"
            className="h-auto w-full justify-start bg-transparent px-0 py-3 text-left text-lg font-medium text-pf-gray hover:bg-transparent hover:text-pf-white"
          >
            로그인
          </Button>
        </div>
      </aside>
    </>
  );
}
