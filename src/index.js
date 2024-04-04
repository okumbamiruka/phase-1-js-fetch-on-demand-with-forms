// const init = () => {
//     const inputForm = document.querySelector("form");
//     inputForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const input = document.querySelector("input#searchByID");
//         const id = input.value;
//         console.log(id);
//         input.value = "";
//         getMovie(id);
//     });
    
// };


// function getMovie(id){
//   fetch(`http://localhost:3000/movies/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const movieDetails = document.querySelector("section#movieDetails");
//       const title = movieDetails.querySelector("h4");
//       const summary = movieDetails.querySelector("p");
//       title.textContent = data.title;
//       summary.textContent = data.summary;
//     });
// }

// document.addEventListener('DOMContentLoaded', init);


function init() {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // prevent the page from refreshing
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json()) // parse response as JSON
        .then((data) => { // on success data = response.json()
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.textContent = data.title;
          summary.textContent = data.summary;
          input.value = "";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);