// jQuery("h1").click(function() {
//   alert("This is a header.");
// });
//
// jQuery("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// jQuery("img").click(function() {
//   alert("This is an image.");
// });

var elements=["header","paragraph","image"];
var elementAbbrevs= ["h1","p","img"];

elementAbbrevs.forEach(function(elementAbbrev){
  $(elementAbbrev).click(function() {
    var index = elementAbbrevs.indexOf(elementAbbrev);
    alert("this is a  " + elements[index]);

  });

});
