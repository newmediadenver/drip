# DRIP
##A notification widget that integrates with HipChat.

This widget uses a custom jQuery plugin to create a list of messages stored in your chatroom’s history. It is displayed in the same order that the messages are displayed on the HipChat application (user-name, message, date).

***

To use this widget simply create an html document that calls jQuery and then the drip.js file. Once this is done you can call the drip function by calling it after selecting the element you would like to append the HipChat history to. The plugin will then populate that element with a list of the rooms most recent messages.

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.getJSON demo</title>
  <style>
  img {
    height: 100px;
    float: left;
  }
  </style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="js/drip.js"></script>
</head>
<body>

<div id="hipchat-info">

</div>
<script>
  jQuery(document).ready(function($) {
    var roomId  = '510323',
        token   = 'hVmouQ5E6Zgj6cHzO9E0K5D4I6PE6rSLdyptPlPz';
    $('#hipchat-info').drip({
      room: '12345', //room id or name (default: 12345)
      authToken: 'abcdef12345', //your API Access token (default: abcdef12345)
      reverse: 'true', //the order you want your messages in (default: true == newest first)
      delay: ‘60000', // the amount of time (milliseconds) between list refreshes. (default: 60000)
      maxResults: 100 //maximum number of results you want displayed (default: 100)
    });
  });
</script>
</body>
</html>
```
