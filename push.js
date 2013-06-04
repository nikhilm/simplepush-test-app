navigator.mozSetMessageHandler('push', function(e) {
    localStorage.setItem("time", (new Date()).toString());

    var notification = navigator.mozNotification.createNotification('Push notification', 'From the SimplePush application');

    notification.onclick = function test_notificationClick() {
        console.log("FOOBARBAZ!");
    };

    notification.show();

    var win = open('/index.html');
});

navigator.mozSetMessageHandler('push-register', function(e) {
    var notification = navigator.mozNotification.createNotification('Lost all push registrations :(', 'From the SimplePush application');
    notification.show();
});
