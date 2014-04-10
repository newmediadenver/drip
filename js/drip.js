(function ( $ ) {
  $.fn.drip = function(options){
    var settings = $.extend({
    // These are the defaults.
      room: '12345',
      authToken: 'abcdef12345',
      reverse: 'true',
      target: $(this),
      delay: 60000,
      maxResults: 25
    }, options );
    // If setting isn't defined it will use default setting defined above as var.
    var $room = settings.room,
        $authToken = settings.authToken,
        $reverse = settings.reverse,
        $target = settings.target,
        $time = settings.delay,
        $maxResults = settings.maxResults,
        $count = 0;
        $url = "https://api.hipchat.com/v2/room/"+$room+"/history?auth_token="+$authToken+"&reverse="+$reverse+"&max-results="+$maxResults;
    //ajax call to HipChat API
    $.getJSON( $url, function( data ) {
      //check to see if list exists then append it if it doesn't
      if (!$target.find('.hipchat-list').length) {
        $target.append('<ul class="hipchat-list"></ul>')
      }else{
        $count = 1;
      };
      //append new messages
      for (var i in data.items) {
        var $date = data.items[i].date,
            $jsDate = new Date($date), //convert to Date
            $simpleDate = $jsDate.toLocaleString(), //convert to local string value
            $messageDate  = $date.replace(/[^0-9.]/g, ""), //convert to numbers
            $prevMessageDate = $target.find('.hipchat-list .date:first').text().replace(/[^0-9.]/g, ""),
            $userName = data.items[i].from;
            if (typeof $userName.name !== "undefined") {
              $userName = $userName.name;
            } else {
              $userName = $userName;
            }
        //if this message doesn't exist then prepend it to the list.
        if ($messageDate > $prevMessageDate) {
          $target.find('.hipchat-list').prepend('<li class="hipchat-message color-'+data.items[i].color+' "><span class="user-name">'+$userName+'</span><span class="message">  '+ data.items[i].message +'  </span><span class="message-date">'+ $simpleDate +'</span><span class="date" style="display: none;">'+$date+'</span></li>');
          if ($count == 1) {
            $target.find('.hipchat-list li').last().remove();
          };
        };
      }; //end for loop
    }); //end ajax
    //If delay is 0 then do not rerun ajax call to HipChat API.
    if ($time != 0) {
      //check the HipChat API every x milliseconds.
      setInterval(function() { $target.drip({ room: $room, authToken: $authToken, reverse: $reverse, delay: $time }); }, $time);
    };
  }
}( jQuery ));
