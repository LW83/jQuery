$(document).ready(function() {
    $('h2').css("text-decoration", "underline"); //underlines all <h2> elements
    $("ul").css("border", "solid 1px  #ccc"); //Adds a border to all lists
}); // Bad practice to run jQuery until page loaded thenfore will only run once page fully loaded. 

//However using .css not a good idea as changes HTML using inline styles.

$(document).ready(function() {
    $('h2').addClass("underline"); //underlines all <h2> elements
    $("ul").addClass("border"); //Adds a border to all lists
    //can also use removeClass
}); 
