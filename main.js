const collections = document.querySelectorAll(".collections");
collections.forEach((collection) => {
  collection.addEventListener("click", (e) => {
    // document.querySelector(".collection.active").classList.remove("active");
    // collection.classList.add("active");
    const activeConnection = document.querySelector(".connections .active");
    activeConnection.classList.remove(".active");
    connection.classList.add("active");
  });
});
