function debug(msg) {
  dump("\nSimplePush Test App: " + msg + "\n\n");
}

debug("Started");

addEventListener("push", function(e) {
  dump("Got push! " + JSON.stringify(e) + "\n");
});
