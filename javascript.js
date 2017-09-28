var show = function (item) {
  var text = document.getElementById('textbox');
  var set = document.getElementById('set');
  var char = document.getElementById('char');
  var con = document.getElementById('con');
  var main = document.getElementById('main');
  var sum = document.getElementById('sum');
  if (item == 1){
      var setb = document.getElementById('setb').innerHTML;
    text.innerHTML = setb;
    set.className = "selected";
    char.className = "buttons";
    con.className = "buttons";
    main.className = "buttons";
    sum.className = "buttons";
  }
  else{
    if (item == 2){
      var charb = document.getElementById('charb').innerHTML;
      text.innerHTML = charb;
      set.className = "buttons";
      char.className = "selected";
      con.className = "buttons";
      main.className = "buttons";
      sum.className = "buttons";
    }
    else{
      if (item == 3){
        text.innerHTML = "<p>The characters' goal is to overthrow the king of <span onClick='scrollWin();'>the Outskirts</span> and save many kidnapped children. The problem is that they were all branded as slaves and have many armed soldiers trying to capture them.</p>";
        set.className = "buttons";
        char.className = "buttons";
        con.className = "selected";
        main.className = "buttons";
        sum.className = "buttons";
      }
      else {
        if (item == 4){
          text.innerHTML = "<p>The story was about a few slave children that live in a magical land called the Outskirts who were forced to do dangerous jobs until they escaped to go overthrow the king. A few slaves, such as Dalton and Jenna, were sent to the king and from there sent to anonymous places around the land. Another group of slaves, including Cole, Mira, and a few others, were sold to a company called the Sky Raiders, from where this group escaped and went on the run from the king, potentially trying to destroy him.</p>";
          set.className = "buttons";
          char.className = "buttons";
          con.className = "buttons";
          main.className = "selected";
          sum.className = "buttons";
        }
        else{
          var conb = document.getElementById('conb').innerHTML;
          text.innerHTML = conb;
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
function scrollWin() {
    window.scrollTo(0, document.getElementById('words').getBoundingClientRect().top-350);
}
