// choose elements
let nameSide = document.querySelector(".name");
let pictureSide = document.querySelector(".picture");
let idSide = document.querySelector(".id");
let bioSide = document.querySelector(".bio");
let companySide = document.querySelector(".company");
let blogSide = document.querySelector(".blog");
// comming data from api.github
fetch("https://api.github.com/users/amilabdullazadeh")
  .then((res) => res.json())
  .then((data) => {
    nameSide.innerText = `${data.name}`;
    idSide.innerText = `${data.id}`;
    bioSide.innerText = `${data.bio}`;
    companySide.innerText = `${data.company}`;

    // create new img and this img adding pictureSide
    let sekil = document.createElement("img");
    sekil.src = `${data.avatar_url}`;
    pictureSide.appendChild(sekil);
    
    //  crate new a'tag' and adding blogSide
    let linkedin = document.createElement("a");
    linkedin.href = `${data.blog}`;
    linkedin.innerText = " page";
    blogSide.appendChild(linkedin);
  })
  .catch((error) => console.error(error));
