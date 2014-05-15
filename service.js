function debug(msg) {
  dump("\nSimplePush Test App: " + msg + "\n\n");
}

debug("Started");

addEventListener("push", function(e) {
  console.log("Got push! " + JSON.stringify(e));
});
