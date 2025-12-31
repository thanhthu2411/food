export function restTemplate(rest) {
  return `<div class="rest-card ">
                <div class="rest-img-container img-scroll-container">
                  <div class="rest-img fade">
                    <img src="${rest.images[0]}" />
                  </div>
                  <div class="rest-img fade">
                    <img src="${rest.images[1]}" />
                  </div>
                  <div class="rest-img fade">
                    <img src="${rest.images[2]}" />
                  </div>

                  <a class="prev">&#10094;</a>
                  <a class="next">&#10095;</a>
                </div>
                <div class="rest-link">
                  <a href="rest.html/id=${rest.id}">
                    <h2>${rest.name}</h2>
                    <p>${rest.rating.score} (${rest.rating.count}+)</p><span class="dot"></span>
                    <p>${rest.distanceMiles}</p> <span class="dot"></span>
                    <p>${rest.deliveryTimeMinutes} min</p>
                    <p class="delivery-fee">$${rest.deliveryFee} delivery fee</p>
                  </a>
                  <button class="heart-btn" data-id = ${rest.id}>
                    <svg
                      class="heart"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M12 21s-6.7-4.35-9.33-7.35C-1.33 9.65 1.34 3 6.67 3c2.35 0 4.33 1.5 5.33 3 1-1.5 2.98-3 5.33-3 5.33 0 8 6.65 4 10.65C18.7 16.65 12 21 12 21z"/>
                    </svg>
                  </button>
                </div>
              </div>`;
}
