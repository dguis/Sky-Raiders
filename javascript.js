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
          text.innerHTML = "<p>The main idea of the story was that you can do great things no matter where you come from. For instance, Cole, was just a regular 6th grader but when he was brought into <span onClick='scrollWin();'>the Outskirts</span>, he saved many people many times. Also, as ordinary slave forced to work on many long and dangerous missions, Jace continued to be brave and continued to keep up his hard work and eventually escape his owners. Mira, although a princess, was treated badly by her father. Despite her unfair treatment, she kept up hope of someday escaping her father's wrath and made incredible progress towards her goal.</p>";
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
