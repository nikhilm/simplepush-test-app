function debug(msg) {
  dump("SimplePush Test App: " + msg + "\n");
}

debug("Started");

addEventListener("push", function(e) {
  var notification = new Notification('You got a push notification', { body: 'From the SimplePush application' });
  
  notification.onclick = function() {
    debug("Clicked notification!");
  };
  
  notification.onerror = function(e) {
    debug("Notification error " + e.message);
  }
});

addEventListener("push-register", function(e) {
  debug("Lost all registrations :/");
});
