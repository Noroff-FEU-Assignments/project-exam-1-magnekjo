// API call
const url = "https://magnessite.com/wp-json/wp/v2/posts?_embed";
const corsFix = `https://noroffcors.herokuapp.com/`;

async function getPosts() {
  try {
    const response = await fetch(corsFix + url);
    const result = await response.json();

    const postCards = document.querySelectorAll(".post-card");
    const date = result[0].date;
    const dateSplit = date.split("T", 1);

    for (let i = 0; i < postCards.length; i++) {
      postCards[i].innerHTML = " ";
    }

    for (let i = 0; i < 9; i++) {
      postCards[i].innerHTML += `
      <a class="card-link" href="blogpost.html?id=${result[i].id}">
        <div class="post-card">
          <img class="card-img" src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" />
          <div class="card-info">
            <div>
              <h3>${result[i].title.rendered}</h3>
              <p>${result[i].excerpt.rendered}
              </p>
            </div>
            <div class="card-footer">
              <p>${dateSplit}</p>
              <p>Author: ${result[i]._embedded.author[0].name}</p>
            </div>
          </div>
        </div>
      </a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();

// Carousel
const carouselSlide = document.querySelector(".carousel-slide");
const carouselSlides = document.querySelectorAll(".carousel-slides");

const buttons = document.querySelectorAll(".buttons button");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let counter = 0;

console.log(counter);

const circles = document.querySelectorAll(".counter span");

function checkBtn() {
  if (counter > 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
  if (counter > 0) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }
  for (let i = 0; i < circles.length; i++) {
    if (counter === i) {
      circles[i].style.backgroundColor = "#060710";
    } else {
      circles[i].style.backgroundColor = "#e8e8e8";
    }
  }
}
checkBtn();

nextBtn.addEventListener("click", () => {
  const size = carouselSlides[0].clientWidth;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
  checkBtn();
});

prevBtn.addEventListener("click", () => {
  const size = carouselSlides[0].clientWidth;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
  checkBtn();
});

// Misc
const travelBtn = document.querySelectorAll(".city a");

for (let i = 0; i < travelBtn.length; i++) {
  travelBtn[i].addEventListener("click", () => {
    alert("Sorry, but this content is currently not available.");
  });
}
