/*===========================================================
------------------------------------------------------------*/


/*===========================================================
      Initialize Firebase                                              
------------------------------------------------------------*/
  var config = {
    apiKey: "AIzaSyASmDqJlDYDHXDMNw1pnwB1Vs2bkD4dfJk",
    authDomain: "rockpaperscissorsmultipl-45179.firebaseapp.com",
    databaseURL: "https://rockpaperscissorsmultipl-45179.firebaseio.com",
    projectId: "rockpaperscissorsmultipl-45179",
    storageBucket: "rockpaperscissorsmultipl-45179.appspot.com",
    messagingSenderId: "221257007823"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

/*===========================================================
      Connections                                              
-----------------------------------------------------------*/
    // Where all connection are stored
    var connectionsRef = database.ref("/connections"); 
    // '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes. '.info/connected' is a boolean value, true if the client is connected and false if they are not.
    var connectedRef = database.ref(".info/connected");  

    // When the client's connection state changes...
    connectedRef.on("value", function(snap) {
      // If they are connected..
      if (snap.val()) {
        // Add user to the connections list. 
        var con = connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
      }
    });

    // When first loaded or when the connections list changes...
    connectionsRef.on("value", function(snap) {
      $('#num-spectators').text(snap.numChildren());

    });

/*===========================================================
      User
------------------------------------------------------------*/
  var playerRef = database.ref('/players');
  var playerPath = '/players';
  var ref1 = database.ref('/players/1');
  var ref2 = database.ref('/players/2');

  for (var i=1; i<3; i++) {
    var dataPath = '/players/'+i;

    var newPlayer = database.ref(dataPath).push();

    newPlayer.set({
      "name": null,
      "choice": null,
      "wins": 0,
      "losses": 0,
      "status": "empty",
    });    
  };


  $('#enter').on('click', function(event) {
    event.preventDefault();
    
    // Check statuses
    ref1.once("value")
      .then(function(snapshot) {
        var key = snapshot.key; 
      });

    // if (ref1)
      var playerObj = {
        name: $('playerNameInput').val().trim(),
        choice: '',
        wins: 0,
        losses: 0,
      }

  });
