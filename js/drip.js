$(document).ready(function($) {
  /* Function that calls the REST API*/
  function getHipChat($room, $authToken, $reverse, $target){
    var url = "https://api.hipchat.com/v2/room/"+$room+"/history?auth_token="+$authToken+"&reverse="+$reverse;
    setInterval(function(){
      $.getJSON( url, function( data ) {
        $target.append('<ul id="hipchat-list"></ul>').promise().done(function(){
          for (var i in data.items) {
            $('#hipchat-list').append('<li class="color-'+data.items[i].color+' "><span class="user-name">'+data.items[i].from+'</span><span class="message">  '+ data.items[i].message +'  </span><span class="date">'+data.items[i].date+'</span></li>');
          };
        });
      });
    }, 1000);
  }

  var roomId = '510323';
  var token = 'hVmouQ5E6Zgj6cHzO9E0K5D4I6PE6rSLdyptPlPz';
  var div = $('#hipchat-info');
  getHipChat(roomId, token, false, div);
});
