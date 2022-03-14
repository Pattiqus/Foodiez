const res = require("express/lib/response");

const returnHomeHandler = async (event) => {
    event.preventDefault();
        res.render(homepage);
};

document.querySelector('#homeButton').addEventListener('click', returnHomeHandler);

