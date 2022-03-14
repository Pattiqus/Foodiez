//ingeredients
var ing_display = document.querySelector("#ingredients-display");
var add_ing = document.querySelector("#add-ing");
var ing_text = document.querySelector("#ing_text");
var table_data = [];

//steps
var stepslist = document.querySelector("#stepslist");
var steps_text = document.querySelector("#steps_text");
var add_steps = document.querySelector("#add-steps");
var steps = [];

//image
var gallery = document.querySelector("#gallery");
let dropArea = document.getElementById("drop-area");
var img_list = document.querySelector("#imagelist");
var img_text = document.querySelector("#pic_text");
var add_img = document.querySelector("#add-pictures");
var images = [];


const handleformSubmit = async () => {
  const id = Math.floor(Math.random() * 2000);
  const user_id = document.querySelector("#user_id").value.trim();
  const recipe_name = document.querySelector("#recipe_name").value.trim();
  const preperation_time = document
    .querySelector("#preperation_time")
    .value.trim();
  // session.user_id,
  const obj = {
    id,
    user_id,
    recipe_name,
    preperation_time,
    ingrediants: table_data,
    images: images,
    steps: steps,
  };
  console.log(obj);

  if (user_id && recipe_name && preperation_time && table_data.length && steps.length) {
    console.log();
    const response = await fetch("./api/recipes", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alertify.set("notifier", "position", "top-right");
      alertify.success("Succefully Added to the Database");
      window.location.replace("/profile");
    } else {
      alertify.set("notifier", "position", "top-right");
      alertify.error(response.statusText);
    }
  }
};

//add ingredients
add_ing.addEventListener("click", () => {
  var tr = document.createElement("tr");

  const td = document.createElement("td");
  td.setAttribute("data-label", "Ingredients");
  td.textContent = ing_text.value.trim();
  tr.appendChild(td);
  table_data.push({
    id: Math.floor(Math.random() * 999),
    name: ing_text.value.trim(),
  });
  ing_display.appendChild(tr);
});


//add steps
add_steps.addEventListener("click", () => {
  let aTag = document.createElement("a");
  aTag.classList.add("item");
  aTag.textContent = steps_text.value.trim();
  stepslist.appendChild(aTag);
  steps.push({
    id: Math.floor(Math.random() * 999),
    name: steps_text.value.trim(),
  });
});


//add images

add_img.addEventListener("click", () => {
  let aTag = document.createElement("a");
  aTag.classList.add("item");
  aTag.textContent = img_text.value.trim();
  img_list.appendChild(aTag);
  images.push({
    id: Math.floor(Math.random() * 999),
    image_link: img_text.value.trim(),
  });
});



// need to work on this function
function handleFiles(files) {


  for (let index = 0; index < files.length; index++) {
    const img = document.createElement("img");
    img.classList.add("ui", "image");
    img.setAttribute("src", URL.createObjectURL(files[index]));
   
    gallery.appendChild(img);
  }
}
