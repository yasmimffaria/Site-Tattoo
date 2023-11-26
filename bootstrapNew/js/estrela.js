document.addEventListener("DOMContentLoaded", function () {
  const starContainers = document.querySelectorAll(".star-rating");

  starContainers.forEach((container) => {
      const stars = container.querySelectorAll(".star");
      const result = container.nextElementSibling; // O próximo elemento é o div de resultado

      stars.forEach((star) => {
          star.addEventListener("click", rateStar);
          star.addEventListener("mouseover", hoverStar);
      });

      function rateStar() {
          const rating = this.getAttribute("data-value");
          result.innerHTML = `Você avaliou com ${rating} estrelas!`;
          container.setAttribute("data-rating", rating);
      }

      function hoverStar() {
          const rating = this.getAttribute("data-value");
          const starsArray = Array.from(stars);
          starsArray.forEach((star) => {
              const starValue = star.getAttribute("data-value");
              if (starValue <= rating) {
                  star.classList.add("active");
              } else {
                  star.classList.remove("active");
              }
          });
      }
  });
});
