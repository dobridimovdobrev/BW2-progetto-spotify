const searchInput = document.getElementById("search");
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const search = function (event) {
  if (event) {
    event.preventDefault();
  }

  if (searchInput.value.trim() === "") {
    console.log("Input vuoto!");
    return;
  }

  fetch(url + searchInput.value.trim(), {
    method: "GET",
    headers: {
      "x-rapidapi-key": "38a13a7d0dmshccf622dd4609bcbp1d0e43jsna16f457d9c68",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`error-status: ${response.status}`);
      }
    })
    .then((response) => {
      console.log("data array", response);

      //   console.log("songs", response.data.artist.id);

      //   const artistId = response.data[0].artist.id;
      //   window.location.href = `album.html?artistId=${artistId}`;
    })
    .catch((error) => {
      console.error("Errore durante la ricerca:", error);
    });
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[role="search"]');
  if (form) {
    form.addEventListener("submit", search);
  }
});
