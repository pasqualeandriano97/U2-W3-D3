fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })

  .then((bookArray) => {
    console.log(bookArray);
    bookArray.forEach((book, i) => {
      const row = document.getElementById("row");
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      col.innerHTML = `<div class="card h-100" >
      <img src=${book.img} class="card-img-top w-100" alt="..." style="height:350px">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Price:${book.price}</p>
        <button class="btn btn-danger" onclick="removeCardFromDOM(event, ${i})">ELIMINA</button>
      </div>
    </div>`;
    });
  });

const removeCardFromDOM = function (event) {
  event.target.closest(".col").remove();
};
