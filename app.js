    var num1 = 0;
    var num2 = 0;
    var score = 0;
    var all = 0;
    var total = 0;
    var showscore = document.getElementById('score'); 
    var showall = document.getElementById('all');
    var showmark = document.getElementById('mark');
    var shownumber1 = document.getElementById('num1');
    var shownumber2 = document.getElementById('num2');
    var showemblem = document.getElementById('plus');
    var showanswer = document.getElementById('answer');
    var showresult = document.getElementById('result');
    showscore.innerHTML = score;
    showall.innerHTML = all;
    showemblem.checked = true;
    showmark.innerHTML = "+";

    function Mathrandom() {
        showall.innerHTML = all;
        num1 = Math.floor(Math.random()*15);
        num2 = Math.floor(Math.random()*15);
        shownumber1.innerHTML = num1;
        shownumber2.innerHTML = num2;
    }

    function Startgame() {
        score = 0;
        all = 0;
        showscore.innerHTML = score;
        showall.innerHTML = all;
        showanswer.value = '';
        Mathrandom();
    }

    function Checkmark() {
        if (showmark.innerHTML == "+") {
            total = num1 + num2;
        } else if (showmark.innerHTML == "-") {
            total = num1 - num2;
        } else if (showmark.innerHTML == "×") {
            total = num1 * num2;
        } else if (showmark.innerHTML == "÷") {
            total = num1 / num2;
        }
    }

    function radiomark(value) {
        showmark.innerHTML = value;
    }

    function btnanswer() {
        Checkmark();
        if (total == showanswer.value) {
            showresult.innerHTML = 'ถูกต้อง';
            showresult.style.color = 'green';
            score += 1;
            showscore.innerHTML = score;
            showanswer.value = '';
        } else {
            showresult.innerHTML = 'ไม่ถูกต้อง';
            showresult.style.color = 'red';
            showanswer.value = '';
        }
        all += 1;
        Mathrandom();
    }

    Mathrandom();