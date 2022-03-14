const store = require("store2");


module.exports = {

  check_userid: (value1,value2) => {
   var myStore = store('user')
    if (value1 === myStore.id) {
 
      return `<button type="button" id=${value2} class="btn2">Delete</button>`;
    }
  },


};
