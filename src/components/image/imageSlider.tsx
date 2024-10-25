import { component$, useSignal, $ } from "@builder.io/qwik";

interface ImageSliderProps {
  images?: string[];
  defaultImage?: string;
}

export const ImageSlider = component$<ImageSliderProps>(
  ({ images = [], defaultImage }) => {
    const currentIndex = useSignal(0);
    const isAnimating = useSignal(false);

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

    const nextSlide = $(() => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value =
        currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
      setTimeout(() => {
        isAnimating.value = false;
      }, 500);
    });

    const prevSlide = $(() => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value =
        currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
      setTimeout(() => {
        isAnimating.value = false;
      }, 500);
    });

    const goToSlide = $((index: number) => {
      if (isAnimating.value || index === currentIndex.value) return;
      isAnimating.value = true;
      currentIndex.value = index;
      setTimeout(() => {
        isAnimating.value = false;
      }, 500);
    });

    const showNavigation = images.length > 1;

    return (
      <div class="relative w-full">
        {/* Slider Container */}
        <div class="relative w-full overflow-hidden rounded-lg">
          <div
            class="relative flex h-full w-full transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex.value * 100}%)`,
            }}
          >
            {/* All Images */}
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
              {/* Navigation Buttons */}
              <button
                onClick$={prevSlide}
                class="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white disabled:opacity-50"
                aria-label="Previous slide"
                disabled={isAnimating.value}
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
                class="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/70 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white disabled:opacity-50"
                aria-label="Next slide"
                disabled={isAnimating.value}
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
            </>
          )}
        </div>

        {/* Dots Indicator - Outside of the slider container */}
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
