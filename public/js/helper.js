const myAlert = (type, message, position) => {
    switch (type) {
      case "error":
        alertify.set("notifier", "position", position);
        alertify.error(message);
        break;
  
      case "confirm":
        alertify.set("notifier", "position", position);
        alertify.confirm(message);
        break;
  
      case "success":
        alertify.set("notifier", "position", position);
        alertify.success(message);
        break;
  
      case "warning":
        alertify.set("notifier", "position", position);
        alertify.warning(message);
        break;
  
      default:
        alertify.set("notifier", "position", position);
        alertify.alert(message);
  
        break;
    }
  };
  
  //positions
  //top-right top-center top-left bottom-right bottom-center bottom-left
  module.exports={
      myAlert
  }