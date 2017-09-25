var show = function (item) {
  var text = document.getElementById('textbox');
  var set = document.getElementById('set');
  var char = document.getElementById('char');
  var con = document.getElementById('con');
  var main = document.getElementById('main');
  var sum = document.getElementById('sum');
  var charb = document.getElementById('charb').innerHTML;
  var setb = document.getElementById('setb').innerHTML;
  if (item == 1){
    text.innerHTML = setb;
    set.className = "selected";
    char.className = "buttons";
    con.className = "buttons";
    main.className = "buttons";
    sum.className = "buttons";
  }
  else{
    if (item == 2){
      text.innerHTML = charb;
      set.className = "buttons";
      char.className = "selected";
      con.className = "buttons";
      main.className = "buttons";
      sum.className = "buttons";
    }
    else{
      if (item == 3){
        text.innerHTML = "Conflict";
        set.className = "buttons";
        char.className = "buttons";
        con.className = "selected";
        main.className = "buttons";
        sum.className = "buttons";
      }
      else {
        if (item == 4){
          text.innerHTML = "Main Idea";
          set.className = "buttons";
          char.className = "buttons";
          con.className = "buttons";
          main.className = "selected";
          sum.className = "buttons";
        }
        else{
          text.innerHTML = "Summary";
          set.className = "buttons";
          char.className = "buttons";
          con.className = "buttons";
          main.className = "buttons";
          sum.className = "selected";
        }
      }
    }
  }
}
/*if (item == 1) {
  text.innerHTML = "The characters include Cole, Dalton, Jenna, and Ansel.<br><br><a href='Report.docx' class='copyright' download=''>Click here to download Microsoft Word Document</a>";
  char.className = "selected";
  sum.className = "buttons";
} else {
  if (item == 2) {
text.innerHTML = "Cole got kidnapped and sold as a slave to the Sky Raiders.";
sum.className = "selected";
char.className = "buttons";
  } else {
    if (item == 2) {
    text.innerHTML = "Cole got kidnapped and sold as a slave to the Sky Raiders.";
    sum.className = "selected";
    char.className = "buttons";
    } else {
    }
  }
}
}
var Welcome = function(){
alert("Welcome! This is my site for my book report project on Brandon Mull's book, Sky Raiders. I hope you enjoy it!\n-Dallin Guisti");
}*/
set
char
con
main
sum
