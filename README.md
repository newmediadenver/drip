# DRIP
##A notification widget that integrates with HipChat.

This jQuery widget uses a custom jQuery plugin to create a list of messages stored in your chatroom’s history. It is displayed in the same order that the messages are displayed on the HipChat application (user-name, message, date).

***

To use this widget simply create an html document that calls jQuery and then the drip.js file. Once this is done you can call the drip function by calling it after selecting the element you would like to append the HipChat history to. The plugin will then populate that element with a list of the rooms most recent messages.

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DRIP Test</title>
  <style>
  img {
    height: 100px;
    float: left;
  }
  </style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="js/drip.min.js"></script>
</head>
<body>

<div id="hipchat-room-12345"></div>
<script>
  jQuery(document).ready(function($) {
    var roomId  = '12345', //room id or name
        token   = 'abcdef12345'; //your API Access token
    $('#hipchat-room-12345').drip({
      room: roomId, //room id or name (default: 12345)
      authToken: token, //your API Access token (default: abcdef12345)
      reverse: 'true', //the order you want your messages in (default: true)
      delay: 60000, // the amount of time (milliseconds) between list refreshes. (default: 60000) If this number is to low you may start to see forbiden responces from the HipChat Server.
      maxResults: 25 //maximum number of results you want displayed initially (default: 25)
    });
  });
</script>
</body>
</html>
```
As you can see above this plugin takes 5 parameters (room, authToken, reverse, delay, and maxResults).

- room should be set to the room’s API ID or Name (default is 12345) You can get your room's ID via this page or the rooms/list API method.
- authToken should be the [API Access Token](https://www.hipchat.com/account/api) of an authorized user (default is abcdef12345)
- reverse defines the order at which the messages will be displayed. true = newest on top, false = oldest on top (default is true)
- delay defines the amount of time in milliseconds between list refreshes. (default is 60000) If this number is to low you may start to see forbiden responces from the HipChat Server.
- maxResults defines the number of messages you want displayed on the list on page load. (default is 25)

To test this widget please goto add your user api access token and the room id/name to the test/test.html file then open the file up in your browser.

For more information on the HipChat API history function visit [API Version 2 Documentation](https://www.hipchat.com/docs/apiv2/method/view_history)
