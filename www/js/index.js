var key1 = "pen";
var value = "blue";
var key2 = "Money";
var value = "Wallet";
var key3 = "Drive";
var value = "Car";
var key4 = "Win";
var value = "Play";
var key5 = "Game";
var value = "Loss";
var value = window.localStorage.getItem(key);

    function onLoad() {
        window.localStorage.setItem( key, value );
    }
    
    function Display(){
        alert("hello my friends");
    }
	
	
