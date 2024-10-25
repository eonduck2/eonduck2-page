import { component$, useSignal, $ } from "@builder.io/qwik";

interface ImageSliderProps {
  images?: string[];
  defaultImage?: string;
}

export const ImageSlider = component$<ImageSliderProps>(
  ({ images = [], defaultImage }) => {
    const currentIndex = useSignal(0);

    // 이미지가 없거나 빈 배열일 경우 기본 이미지만 표시
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

    // 이미지가 없고 기본 이미지도 없는 경우 아무것도 표시하지 않음
    if (!images.length && !defaultImage) {
      return null;
    }

    const nextSlide = $(() => {
      currentIndex.value =
        currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
    });

    const prevSlide = $(() => {
      currentIndex.value =
        currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
    });

    // 이미지가 하나뿐이면 네비게이션 버튼과 도트를 표시하지 않음
    const showNavigation = images.length > 1;

    return (
      <div class="relative w-full">
        {/* Main Image */}
        <div class="relative h-auto w-full">
          <img
            src={images[currentIndex.value]}
            alt={`Slide ${currentIndex.value + 1}`}
            class="mb-4 h-auto w-full rounded-lg"
            loading="lazy"
          />

          {showNavigation && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick$={prevSlide}
                class="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
                class="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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

              {/* Dots Indicator */}
              <div class="mt-2 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick$={() => (currentIndex.value = index)}
                    class={{
                      "h-2 w-2 rounded-full transition-all": true,
                      "bg-purple-600": currentIndex.value === index,
                      "bg-gray-600": currentIndex.value !== index,
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  },
);
