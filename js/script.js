let container = document.querySelector(".container");
// container.setAttribute("class", "row container");
// container.setAttribute("style", "margin:0 auto;");

let request = new XMLHttpRequest();
let URL = "https://ghibliapi.herokuapp.com/films";
request.open("GET", URL, true);
request.onload = function() {
  let data = JSON.parse(this.response);

  data.map(movie => {
    // //container card
    // let card = document.createElement("div");
    // card.setAttribute("class", "card m-2");
    // card.setAttribute("style", "width: 15rem;");

    // //card body
    // let cardBody = document.createElement("div");
    // cardBody.setAttribute("class", "card-body");

    // //card title
    // let cardTitle = document.createElement("h5");
    // cardTitle.setAttribute("class", "card-title");
    // cardTitle.innerHTML = movie.title;

    // //card description
    // let cardDescription = document.createElement("p");
    // cardDescription.setAttribute("class", "card-text");
    // cardDescription.innerHTML = movie.description.substring(0, 300);

    // container.appendChild(card);
    // card.appendChild(cardBody);
    // cardBody.appendChild(cardTitle);
    // cardBody.appendChild(cardDescription);

    // console.log(movie.title);
    // console.log(movie.description);

    let card = `<div class="card m-2" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
         ${movie.description.substring(0, 300)}
          </p>
        </div>
      </div>`;
    container.insertAdjacentHTML("afterbegin", card);
  });
};

request.send();
