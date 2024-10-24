import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mx-auto max-w-4xl">
      <h2 class="gradient-text mb-8 text-3xl font-bold md:mb-12 md:text-4xl">
        Contact
      </h2>
      <div class="card-gradient rounded-lg p-6 md:p-8">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <div class="space-y-3 md:space-y-4">
              {[
                { icon: "📧", text: "whdtnxd@gmail.com" },
                { icon: "📱", text: "010-8073-5606" },
                { icon: "📍", text: "대전 서구" },
                { icon: "🤖", text: "https://github.com/eonduck2" },
              ].map((item) => (
                <div
                  key={item.text}
                  class="hover-transform flex items-center space-x-3"
                >
                  <span class="text-base md:text-lg">{item.icon}</span>
                  {item.icon === "🤖" ? (
                    <a
                      href={item.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-gray-300 md:text-base"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span class="text-sm text-gray-300 md:text-base">
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="group relative">
              <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
