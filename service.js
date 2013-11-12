function debug(msg) {
  dump("\nSimplePush Test App: " + msg + "\n\n");
}

debug("Started");

addEventListener("push", function(e) {
  debug("Got push!");
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

addEventListener("install", function(e) {
  debug("Got installed really?!");
});
