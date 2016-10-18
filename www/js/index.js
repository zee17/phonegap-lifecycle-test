var key1 = "pen";
var value1 = "blue";
var key2 = "Money";
var value2 = "Wallet";
var key3 = "Drive";
var value3 = "Car";
var key4 = "Win";
var value4 = "Play";
var key5 = "Game";
var value5 = "Loss";

    function onLoad() {
        
        window.localStorage.setItem( key1, value1 )
        window.localStorage.setItem( key2, value2 )
        window.localStorage.setItem( key3, value3 )
        window.localStorage.setItem( key4, value4 )
        window.localStorage.setItem( key5, value5 )
        
        
        
        
        window.alert(window.localStorage.getItem( key1));
        window.alert(window.localStorage.getItem( key2));
        window.alert(window.localStorage.getItem( key3));
        window.alert(window.localStorage.getItem( key4));
        window.alert(window.localStorage.getItem( key5));
    }
    
	
	
