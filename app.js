let nameSide = document.querySelector(".name");
let pictureSide = document.querySelector(".picture");
let idSide = document.querySelector(".id");
let bioSide = document.querySelector(".bio");
let companySide = document.querySelector(".company");
let blogSide = document.querySelector(".blog");

fetch("https://api.github.com/users/amilabdullazadeh")
  .then((res) => res.json())
  .then((data) => {
    nameSide.innerText = `${data.name}`;
    pictureSide.innerText = `${data.avatar_url}`;
    idSide.innerText = `${data.id}`;
    bioSide.innerText = `${data.bio}`;
    companySide.innerText = `${data.company}`;
    blogSide.innerText = `${data.blog}`;
  })
  .catch((error) => console.error(error));
