//  const myModal = document.querySelector('#project-modal')
//  const modalHeader = document.querySelector('#modalHeader')
const showModal = document.querySelectorAll(".btn1");
const rName = document.querySelector("#rName");
const ingList = document.querySelector("#ingredientslist");

document.addEventListener("click", async function (e) {
  let id = e.target.id;
  const response = await fetch(`/api/recipes/${id}`);
  if (response.ok) {
    const recipe = await response.json();
    rName.textContent = recipe.recipe_name;
    // ingList.removeChild()
    //crete list of ingredients
    recipe.ingrediants.map((ing) => {

      let parentDiv = document.createElement("div");
      parentDiv.classList.add("item");
      const img = document.createElement("img");
      img.classList.add("ui", "avatar", "image");
      img.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/carrot-picture-id619252960?s=612x612"
      );
      parentDiv.appendChild(img);

      let content = document.createElement("div");
      content.classList.add("content");
      parentDiv.appendChild(content);

      let pTag = document.createElement("p");
      content.appendChild(pTag);
      pTag.textContent = "name";

      ingList.appendChild(parentDiv);
    });

    // end of list
  } else {
    alert(response.statusText);
  }
});
