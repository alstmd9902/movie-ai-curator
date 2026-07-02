import { useEffect, useMemo, useState } from 'react';

import { motion } from 'motion/react';

// 메인 배너에서 사용하는 영화 데이터 형태.
interface Movie {
  title: string;
}

// 현재는 목데이터를 사용하며, 이후 TMDB API 데이터로 교체될 예정이다.
const movies: Movie[] = [
  { title: 'The Prestige' },
  { title: 'Tenet' },
  { title: 'Inception' },
  { title: 'The Dark Knight' },
  { title: 'Dune' },
  { title: 'Interstellar' },
  { title: 'Gravity' },
  { title: 'Whiplash' },
  { title: 'The Godfather' },
  { title: 'La La Land' },
];

const CARD_ANGLE = 16;
const CAROUSEL_RADIUS = 920;
const CAROUSEL_SPREAD = 1.08;

// 선택된 카드를 기준으로 현재 카드가 몇 칸 떨어져 있는지 계산한다.
// 무한 캐러셀을 위해 가장 가까운 거리(-5 ~ +5)를 반환한다.
function getRelativeIndex(index: number, selectedIndex: number) {
  const raw = index - selectedIndex;
  const half = movies.length / 2;

  if (raw > half) return raw - movies.length;
  if (raw < -half) return raw + movies.length;

  return raw;
}

// 상대 위치를 화면에 표시할 3D 좌표로 변환한다.
// x : 좌우 위치
// y : 아래로 내려가는 정도
// z : 카메라와의 거리
// rotateY : 카드 회전
// scale : 중앙 카드 강조
// dimOpacity : 뒤쪽 카드 어둡기
function getSlot(relativeIndex: number) {
  const angle = relativeIndex * CARD_ANGLE;
  const radians = (angle * Math.PI) / 250;
  const distance = Math.abs(relativeIndex);

  return {
    x: Math.sin(radians) * CAROUSEL_RADIUS * CAROUSEL_SPREAD,
    y: distance * 3,
    z: Math.cos(radians) * CAROUSEL_RADIUS - CAROUSEL_RADIUS + 100,
    rotateY: -angle,
    scale: relativeIndex === 0 ? 1.3 : 1 - distance * 0.03,
    dimOpacity: relativeIndex === 0 ? 0 : 0.7,
  };
}

export default function MainPage() {
  const [selectedIndex, setSelectedIndex] = useState(4);

  // 현재 선택된 카드를 기준으로 화면에 표시할 위치 정보를 계산한다.
  const visibleMovies = useMemo(
    () =>
      movies.map((movie, index) => ({
        movie,
        index,
        relativeIndex: getRelativeIndex(index, selectedIndex),
      })),
    [selectedIndex],
  );

  // 이전 카드로 이동한다.
  const goPrev = () => {
    setSelectedIndex(
      (current) => (current - 1 + movies.length) % movies.length,
    );
  };

  // 다음 카드로 이동한다.
  const goNext = () => {
    setSelectedIndex((current) => (current + 1) % movies.length);
  };

  useEffect(() => {
    // 키보드 방향키로도 캐러셀을 조작할 수 있도록 이벤트를 등록한다.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goPrev();
      }

      if (event.key === 'ArrowRight') {
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 mx-auto h-full max-w-7xl cursor-grab active:cursor-grabbing perspective-origin-[50%_42%] perspective-distant"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={(_, info) => {
          // 드래그 방향에 따라 이전/다음 카드로 이동한다.
          if (info.offset.x < -45) goNext();
          if (info.offset.x > 45) goPrev();
        }}
      >
        <div className="absolute left-1/2 top-[44%] h-96 w-48 -translate-x-1/2 -translate-y-1/2 transform-3d">
          {visibleMovies.map(({ movie, index, relativeIndex }) => {
            const slot = getSlot(relativeIndex);

            return (
              <motion.button
                key={movie.title}
                type="button"
                aria-label={movie.title}
                onClick={() => setSelectedIndex(index)}
                animate={{
                  // 계산된 슬롯 정보를 기반으로 3D 위치와 크기를 애니메이션한다.
                  x: slot.x,
                  y: slot.y,
                  z: slot.z,
                  rotateY: slot.rotateY,
                  scale: slot.scale,
                  filter: `brightness(${1 - slot.dimOpacity * 0.35})`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 90,
                  damping: 20,
                  mass: 1.1,
                }}
                className="absolute left-1/2 top-0 -ml-24 aspect-2/3 w-48 rounded-md shadow-2xl transform-3d"
                style={{ zIndex: 50 - Math.abs(relativeIndex) }}
              >
                <span className="absolute inset-0 overflow-hidden rounded-md bg-black [-webkit-box-reflect:below_10px_linear-gradient(transparent_48%,rgba(0,0,0,.72))]">
                  {/*
                   * TODO: TMDB API 연동
                   * - 현재는 레이아웃 확인을 위한 플레이스홀더 영역.
                   * - TMDB API 연결 후 영화 포스터(path)를 표시할 예정.
                   * - 포스터 로딩 실패 시 기본 Placeholder 이미지를 노출한다.
                   */}
                  <span className="block size-full bg-neutral-500" />
                  <motion.span
                    // 중앙 카드만 밝게 유지하고, 나머지 카드는 깊이감을 위해 어둡게 처리한다.
                    className="absolute inset-0 bg-black"
                    animate={{ opacity: slot.dimOpacity }}
                    transition={{
                      duration: 0.28,
                      ease: 'easeOut',
                    }}
                  />
                </span>
                <span className="absolute right-0 top-0 h-full w-4 origin-left translate-x-4 rounded-r-sm bg-linear-to-b from-white/20 via-neutral-900 to-black transform-[rotateY(90deg)]" />
                <span className="absolute left-0 top-0 h-full w-4 origin-right -translate-x-4 rounded-l-sm bg-linear-to-b from-white/10 via-neutral-950 to-black transform-[rotateY(90deg)]" />
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/45 to-transparent" />
    </section>
  );
}
