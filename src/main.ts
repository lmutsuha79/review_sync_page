console.log("Hello, world!");
document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".testimonial-column");

  if (!columns.length) return;

  // Duplicate testimonials for a seamless loop effect
  const allTestimonials = [
    ...testimonialData,
    ...testimonialData,
    ...testimonialData,
  ];

  // Distribute testimonials evenly into 3 columns
  allTestimonials.forEach((testimonial, index) => {
    const column = columns[index % 3]; // Assign testimonial to one of the 3 columns
    column.innerHTML += createTestimonialCard(testimonial);
  });

  // Apply scrolling animation to each column
  columns.forEach((column) => {
    column.classList.add("animate-scroll");

    // Pause scrolling on hover
    column.addEventListener("mouseenter", () => column.classList.add("paused"));
    column.addEventListener("mouseleave", () =>
      column.classList.remove("paused")
    );
  });
});

function generateStars(rating: number): string {
  const starSVG = `
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2775 4.7286C17.6739 3.50873 19.3997 3.50873 19.796 4.7286L22.4013 12.7467C22.5785 13.2923 23.0869 13.6616 23.6605 13.6616L32.0912 13.6616C33.3739 13.6616 33.9072 15.3029 32.8695 16.0568L26.0489 21.0123C25.5848 21.3495 25.3906 21.9471 25.5679 22.4927L28.1731 30.5108C28.5695 31.7306 27.1733 32.745 26.1356 31.9911L19.315 27.0356C18.851 26.6985 18.2226 26.6985 17.7585 27.0356L10.9379 31.9911C9.90021 32.745 8.50402 31.7306 8.90038 30.5108L11.5056 22.4927C11.6829 21.9471 11.4887 21.3495 11.0246 21.0123L4.20401 16.0568C3.16633 15.3029 3.69963 13.6616 4.98227 13.6616L13.413 13.6616C13.9866 13.6616 14.495 13.2923 14.6723 12.7467L17.2775 4.7286Z" fill="#FFCD29"/>
    </svg>
  `;
  return Array(rating).fill(starSVG).join(""); // Generates the correct number of stars
}
/**
 * Generates a single testimonial card
 */
function createTestimonialCard(testimonial: any): string {
  return `
    <div class="testimonial-card p-6 bg-white rounded-xl shadow-xs" 
    // style="box-shadow: 0px 0px 10px 0px #d3d3d3;"
    >
      <div class="flex items-center gap-4 mb-4">
        <img src="${
          testimonial.avatarUrl || "https://placehold.co/60"
        }" class="w-[60px] h-[60px] rounded-lg object-cover">
        <h4 class="text-lg font-semibold">${testimonial.name}</h4>
      </div>
      <p class="text-gray-600 text-base">${testimonial.content}</p>
     
      <!-- Star Rating -->
      <div class="flex gap-1 mt-4">
        ${generateStars(testimonial.rating)}
      </div>

      <!-- Star media -->
      <div
            class="mt-8  h-[197px] overflow-hidden bg-gray-400 rounded-[24px]"
          >
            <img
              src="${testimonial.mediaUrl || "https://placehold.co/364x197"}"
              alt="media"
              class="w-full h-full object-cover"
            />
          </div>
    </div>
  `;
}
// Sample testimonial data
const testimonialData = [
  {
    name: "Oussama Mekhaldi",
    content:
      "ReviewSync made my life so much easier! In just a week, I gained the social proof I needed to close more deals. Highly recommend!",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "video",
  },
  {
    name: "Sarah Ahmed",
    content:
      "They helped us double our leads in just two months. Incredible results!",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "none",
  },
  {
    name: "John Doe",
    content: "Highly recommended! The best decision we made for our business.",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "image",
    mediaUrl: "https://placehold.co/364x197/00ff00/ffffff",
  },
  {
    name: "Lina Yassine",
    content: "A game-changer for small businesses like ours!",
    avatarUrl: "https://placehold.co/60",
    rating: 4,
    mediaType: "none",
  },
  {
    name: "Karim Boussa",
    content: "Amazing platform, very easy to use!",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "image",
    mediaUrl: "https://placehold.co/364x197/ff0000/ffffff",
  },
  {
    name: "Sophie Martin",
    content: "Increased our conversion rates significantly! Love it.",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "video",
  },
  {
    name: "Amir Reda",
    content: "Couldn't be happier! My business saw immediate growth.",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "image",
    mediaUrl: "https://placehold.co/364x197/0000ff/ffffff",
  },
  {
    name: "Mona Khalil",
    content: "Great customer support and an amazing product!",
    avatarUrl: "https://placehold.co/60",
    rating: 4,
    mediaType: "none",
  },
  {
    name: "Youssef Bennani",
    content: "I was skeptical at first, but this tool is a game changer!",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "video",
  },
  {
    name: "Fatima Zahra",
    content: "Best investment I’ve made for my online store!",
    avatarUrl: "https://placehold.co/60",
    rating: 5,
    mediaType: "image",
    mediaUrl: "https://placehold.co/364x197/ff9900/ffffff",
  },
];
