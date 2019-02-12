"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Connor J Webdale 
   Date: 2.12.19 

*/

// Declares a variable names thisTime containing a Date object. 
var thisTime = new Date();

// Used the toLocaleString() to save the text of the thisTime variable in the timeStr variable. 
var timeStr = thisTime.toLocaleTimeString();

// Changes the inner HTML code of the element with the ID timestamp to the value of the timeStr variable. 
document.getElementById("timeStamp").innerHTML = timeStr;

// Creates a variable named thisHour using the getHours() method to extract the hour value from the thisTime variable. 
var thisHour = thisTime.getHours();

// Creates a variable named thisMonth using the getMonth() method to extract the month number from the thisTime variable. 
var thisMonth = thisTime.getMonth();

// Calculates the number of the map to use with the given hour and month. 
var mapNum = ((2 * thisMonth + thisHour) % 24);

// Uses JavaScript to write HTML code for an inline element showing the sky image to use in the web page. 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Inserts the value of the imgStr variable directly after the elements opening tag. 
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);