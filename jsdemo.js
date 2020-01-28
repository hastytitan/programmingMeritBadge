// JavaScript Document
// Note: lines that start with two backslashes are comments - not code!
 
var bePrepared = function () {
       // = = = = = = = declare all the variables = = = = = = = = 
       var tempF, tempC, myActionText, newText, tempWc, wc, tempCWc;
       //get the temp (F) from the HTML page
       tempF = document.getElementById('MyInputTemp').value;
       tempWc = document.getElementById('MyInputWindSpeed').value;

       wc = 35.74+0.6215*tempF-35.75*Math.pow(tempWc,0.16)+0.4275*tempF*Math.pow(tempWc,0.16)
    
       // = = = = = = = convert the temp to Celsius (with only one decimal place)
       tempC = (5 / 9 * (tempF - 32)).toFixed(1);
       tempCWc = (5 / 9 * (wc - 32)).toFixed(1);
 
      // = = = = = = = evaluate the temp (three categories) = = = = = = =  
      if ((tempF < 60) && (tempF >= 0)) {
            myActionText = " Take long-johns!";
        }
      if ((tempF >= 60) && (tempF < 75)) {
                myActionText = " Have Fun!";
        }
      if (tempF >= 75) {
                myActionText = " Take Sunscreen!";
      }
      if (tempF >=100) {
                myActionText = " Take water and stay hydrated!";    
       }
      if (tempF >= -50) {
                myActionText = " stay indoors and keep warm!"
        }
 
      // = = = = = = = build a complete sentence = = = = = = =  
      newText = "If the temperature is " + tempF + " &deg;F (" + tempC + " &deg;C) but it feels like " + wc.toFixed(2) + "&deg;F (" + tempCWc + " &deg;C)" + myActionText;
      //push the sentence back to the HTML page (using the ID of the markup element: 'myAnswer')
      document.getElementById('myAnswer').innerHTML = newText;
    };