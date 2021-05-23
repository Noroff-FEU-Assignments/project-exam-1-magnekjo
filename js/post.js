// API call

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://magnessite.com/wp-json/wp/v2/posts/${id}?per_page=100&_embed`;
const corsFix = `https://noroffcors.herokuapp.com/`;

async function getPosts() {
  try {
    const response = await fetch(corsFix + url);
    const result = await response.json();

    const date = result.date;
    const dateSplit = date.split("T", 1);

    const container = document.getElementById("post-main");
    const metaTitle = document.getElementById("meta-title");

    metaTitle.innerHTML = `Urban Pilgrim | ${result.title.rendered}`;

    container.innerHTML = `   
    <div class="banner">
    <h1>${result.title.rendered}</h1>
    </div>
    <div class="subinfo">
    <span>Published: ${dateSplit}</span>
    <span>Author: ${result._embedded.author[0].name}</span>
    </div>
    <div class="container-small">${result.content.rendered}
    <span><a class="link" href="posts.html">Return to blog posts >></a></span>
    </div>
    `;

    const modalImg = document.querySelector(".container-small figure img");

    container.innerHTML += `    
    <div class="modal">
    <span class="close-btn"></span>
    <img class="modal-img" src="${modalImg.src}">
    </div>`;

    const figure = document.querySelector(".container-small figure");
    const modal = document.querySelector(".modal");

    figure.addEventListener("click", () => {
      modal.classList.add("modal-open");
    });
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("modal-open");
      }
    };
  } catch (error) {
    console.log(error);
  }
}
getPosts();
