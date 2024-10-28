import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";

interface ImageSliderProps {
  images?: string[];
  defaultImage?: string;
}

export const ImageSlider = component$<ImageSliderProps>(
  ({ images = [], defaultImage }) => {
    const currentIndex = useSignal(0);
    const isAnimating = useSignal(false);
    const isAutoPlaying = useSignal(false);
    const intervalIdRef = useSignal<number | undefined>(undefined);

    if (!images.length && defaultImage) {
      return (
        <div class="relative w-full">
          <img
            src={defaultImage}
            alt="Default project image"
            class="mb-4 h-auto w-full rounded-lg"
            loading="lazy"
          />
        </div>
      );
    }

    if (!images.length && !defaultImage) {
      return null;
    }

    const startAutoSlide = $(() => {
      if (intervalIdRef.value) return;

      // 즉시 다음 슬라이드로 이동
      if (!isAnimating.value) {
        currentIndex.value =
          currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
      }

      isAutoPlaying.value = true;
      intervalIdRef.value = window.setInterval(() => {
        if (!isAnimating.value) {
          currentIndex.value =
            currentIndex.value === images.length - 1
              ? 0
              : currentIndex.value + 1;
        }
      }, 2000);
    });

    const stopAutoSlide = $(() => {
      isAutoPlaying.value = false;
      if (intervalIdRef.value) {
        window.clearInterval(intervalIdRef.value);
        intervalIdRef.value = undefined;
      }
    });

    useVisibleTask$(({ cleanup }) => {
      cleanup(() => {
        if (intervalIdRef.value) {
          window.clearInterval(intervalIdRef.value);
        }
      });
    });

    const nextSlide = $(() => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value =
        currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
      setTimeout(() => {
        isAnimating.value = false;
      }, 200);
    });

    const prevSlide = $(() => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value =
        currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
      setTimeout(() => {
        isAnimating.value = false;
      }, 200);
    });

    const goToSlide = $((index: number) => {
      if (isAnimating.value || index === currentIndex.value) return;
      isAnimating.value = true;
      currentIndex.value = index;
      setTimeout(() => {
        isAnimating.value = false;
      }, 200);
    });

    const toggleAutoPlay = $(() => {
      if (isAutoPlaying.value) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    });

    const showNavigation = images.length > 1;

    return (
      <div class="group relative w-full">
        <div class="relative w-full overflow-hidden rounded-lg">
          <div
            class="relative flex h-full w-full transition-transform duration-200 ease-out"
            style={{
              transform: `translateX(-${currentIndex.value * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} class="h-full w-full flex-none">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  class="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {showNavigation && (
            <>
              <button
                onClick$={prevSlide}
                class="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 opacity-0 transition-all hover:bg-gray-800 hover:text-white disabled:opacity-50 group-hover:opacity-100 md:p-3 lg:p-4"
                aria-label="Previous slide"
                disabled={isAnimating.value}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick$={nextSlide}
                class="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 opacity-0 transition-all hover:bg-gray-800 hover:text-white disabled:opacity-50 group-hover:opacity-100 md:p-3 lg:p-4"
                aria-label="Next slide"
                disabled={isAnimating.value}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button
                onClick$={toggleAutoPlay}
                class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 p-4 text-gray-400 opacity-0 transition-all hover:bg-gray-800 hover:text-white group-hover:opacity-100 md:p-5 lg:p-6"
                aria-label={isAutoPlaying.value ? "Pause" : "Play"}
              >
                {isAutoPlaying.value ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            </>
          )}
        </div>

        {showNavigation && (
          <div class="mt-2 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick$={() => goToSlide(index)}
                class={{
                  "h-2 w-2 rounded-full transition-all": true,
                  "bg-purple-600": currentIndex.value === index,
                  "bg-gray-600": currentIndex.value !== index,
                }}
                disabled={isAnimating.value}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);
