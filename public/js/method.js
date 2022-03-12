

const stepNumber = 1;
const stepContainer = document.querySelector("#steps");
addStepButton.addEventListener("click", (e) => {
    stepNumber++;
    liElement = document.createElement("li");
    li.setAttribute("data-step", stepNumber);
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    liElement.append(inputElement);
    stepContainer.append(liElement);
});

document.querySelectorAll("step-input").map(el => el.value).filter((el) => !!el)

// !!"" ==> false;