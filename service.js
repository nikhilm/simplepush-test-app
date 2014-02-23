function debug(msg) {
  dump("\nSimplePush Test App: " + msg + "\n\n");
}

debug("Started");

addEventListener("push", function(e) {
  debug("Got push! " + JSON.stringify(e));
  //var notification = new Notification('You got a push notification', { body: 'From the SimplePush application' });
  //
  //notification.onclick = function() {
  //  debug("Clicked notification!");
  //};
  //
  //notification.onerror = function(e) {
  //  debug("Notification error " + e.message);
  //}
});

addEventListener("push-register", function(e) {
  debug("Lost all registrations :/");
});

//addEventListener("install", function(e) {
//  debug("Got installed really?!");
//  e.waitUntil(new Promise(function(res) {
//    setTimeout(res, 100);
//  }));
//});

var base = "http://localhost:8000";
var js = new URL("/data.js", base);
var css = new URL("/assets/v1/404.css", base);

/*addEventListener("fetch", function(e) {
  // FIXME(nsm): url will be a URL at some point
  if (e.request.url == js.href) {
    debug("MATCH JS!");
    e.respondWith(new SameOriginResponse({
      statusCode: 200,
      body: "alert('This is the fake deal.');"
    }));
  } else if (e.request.url == css.href) {
    debug("MATCH CSS!");
    e.respondWith(new SameOriginResponse({
      statusCode: 200,
      body: "body { background: red }"
    }));
  }
});*/
