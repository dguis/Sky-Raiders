var show = function(item){
  var text = document.getElementById('textbox');
  var char = document.getElementById('char');
  var sum = document.getElementById('sum');
if (item == 1) {
  text.innerHTML = "The characters include Cole, Dalton, Jenna, and Ansel.<br><br><a href='Report.docx' class='copyright' download=''>Click here to download Microsoft Word Document</a>";
  char.className = "selected";
  sum.className = "buttons";
} else {
  if (item == 2) {
text.innerHTML = "Cole got kidnapped and sold as a slave to the Sky Raiders.";
sum.className = "selected";
char.className = "buttons";
  } else {
text.innerHTML = "Nothing yet!";
  }
}
}
