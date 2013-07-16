navigator.mozSetMessageHandler('push', function(e) {
    //document.getElementById('theform').submit();
    localStorage.setItem("time", (new Date()).toString());
    //$('#thelink').click();

    var notification = navigator.mozNotification.createNotification('SimplePush: New IM', 'You got a new message from your best friend EVER! Open it please');

    notification.onclick = function test_notificationClick() {
      //launch('/index.html', {message: 'eventPage says you got a message'});
    };

    notification.show();
});

navigator.mozSetMessageHandler('push-register', function(e) {
    var notification = navigator.mozNotification.createNotification('SimplePush', 'Lost all push registrations :(');
    notification.show();
});

onconnect = function(w) {
  var notification = navigator.mozNotification.createNotification(w, 'Connected to a window');
  //notification.show();
}
