const url = "https://magnessite.com/wp-json/wp/v2/posts?per_page=100&_embed";
const corsFix = `https://noroffcors.herokuapp.com/`;

const postsBtn = document.querySelector(".posts-btn");

async function getPosts() {
  try {
    const response = await fetch(corsFix + url);
    const result = await response.json();

    console.log(result);

    const postsBtn = document.querySelector(".posts-btn");
    const morePosts = document.querySelector(".more-posts");
    const postCards = document.querySelector(".posts-container");
    const date = result[0].date;
    const dateSplit = date.split("T", 1);

    postCards.innerHTML = " ";

    for (let i = 0; i < 9; i++) {
      postCards.innerHTML += ` <a class="card-link" href="blogpost.html?id=${result[i].id}">
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

    for (let i = 9; i < 12; i++) {
      morePosts.innerHTML += ` <a class="card-link" href="blogpost.html?id=${result[i].id}">
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

    postsBtn.addEventListener("click", () => {
      morePosts.style.display = "flex";
      postsBtn.style.display = "none";
    });
  } catch (error) {
    console.log(error);
  }
}

getPosts();
