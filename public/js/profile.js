//  const myModal = document.querySelector('#project-modal')
//  const modalHeader = document.querySelector('#modalHeader')
const showModal = document.querySelectorAll(".btn1");
const rName = document.querySelector("#rName");
const ingList = document.querySelector("#ingredientslist");
const singleImage = document.querySelector("#singleImage");
const stepList = document.querySelector("#stepslist");

document.addEventListener("click", async (e) => {
  const viewid = e.target.id;
  if (viewid !== "") {
    if (viewid.substr(0, 4) === "view") {
      const response = await fetch(`/api/recipes/${viewid.substr(5)}`);
      if (response.ok) {
        const recipe = await response.json();
        rName.textContent = recipe?.recipe_name;
        singleImage.setAttribute("src", recipe?.images[0]?.image_link);
        $('#ingredientslist').empty();
          $('#stepslist').empty();
          //crete list of ingredients
          recipe.ingrediants.map((ing) => {
        
            let parentDiv = document.createElement("div");
            parentDiv.classList.add("item");
            const img = document.createElement("img");
            img.classList.add("ui", "avatar", "image");
            img.setAttribute(
              "src",
              recipe.images[0].image_link
            );
            parentDiv.appendChild(img);
        
            let content = document.createElement("div");
            content.classList.add("content");
            parentDiv.appendChild(content);
        
            let pTag = document.createElement("p");
            content.appendChild(pTag);
            pTag.textContent = ing.name;
        
            ingList.appendChild(parentDiv);
          });
        
        recipe.steps.map((step)=>{
          let aTag = document.createElement("a");
          aTag.classList.add("item");
          aTag.textContent = step.name
          stepslist.appendChild(aTag);
        })
      } else {
        alert(response.statusText);
      }
    }
  }
});

