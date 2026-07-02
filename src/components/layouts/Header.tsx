import { Bell, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import MobileHeader from '@/components/layouts/MobileHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function SearchField({ id, onClose }: { id?: string; onClose?: () => void }) {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const showClearButton = isFocused || keyword.length > 0;

  return (
    <div className="relative">
      <Input
        id={id}
        type="text"
        inputMode="search"
        enterKeyHint="search"
        aria-label="영화, 배우, 장르 검색"
        value={keyword}
        variant="search"
        className="border-pf-charcoal bg-pf-charcoal/50 text-pf-white placeholder:text-pf-gray/60 focus-visible:border-pf-orange/70 focus-visible:bg-pf-charcoal/70"
        placeholder="영화, 배우, 장르 검색"
        className="outline-none focus-visible:outline-none"
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setKeyword(event.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      {showClearButton ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={keyword ? '검색어 지우기' : '검색 취소'}
          className="absolute right-3 top-1/2 size-7 -translate-y-1/2 rounded-full bg-transparent p-0 text-pf-gray hover:bg-transparent hover:text-pf-white"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            if (keyword) {
              setKeyword('');
              return;
            }

            onClose?.();
          }}
        >
          <X size={22} strokeWidth={2.1} />
        </Button>
      ) : (
        <Search
          aria-hidden="true"
          size={22}
          strokeWidth={2.2}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-pf-gray/70"
        />
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="relative border-b border-pf-charcoal bg-pf-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-14">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="PICK FLIX 홈"
          >
            <img
              src="/images/logo.png"
              alt=""
              className="h-6 w-6 object-contain"
            />
            <span className="hidden text-base font-bold tracking-tight whitespace-nowrap text-pf-white sm:inline">
              PICK FLIX
            </span>
          </Link>
          <nav
            aria-label="주요 메뉴"
            className="hidden items-center gap-9 text-lg lg:flex"
          >
            <Link
              to="/"
              className="font-semibold text-pf-orange underline decoration-pf-orange underline-offset-4"
            >
              홈
            </Link>
            <Button
              type="button"
              variant="ghost"
              className="h-auto bg-transparent p-0 font-medium whitespace-nowrap text-pf-gray hover:bg-transparent hover:text-pf-white"
            >
              개봉예정작
            </Button>
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="w-64 xl:w-72">
            <SearchField />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="알림"
            className="relative rounded-full bg-transparent p-1 text-pf-white/85 hover:bg-transparent hover:text-pf-white"
          >
            <Bell size={28} strokeWidth={2} className="md:size-6" />
            <span className="absolute right-0 top-0 size-1.5 rounded-full bg-pf-orange" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-auto bg-transparent p-0 text-lg font-medium text-pf-gray hover:bg-transparent hover:text-pf-white"
          >
            로그인
          </Button>
        </div>

        <MobileHeader />
      </div>
    </header>
  );
}
