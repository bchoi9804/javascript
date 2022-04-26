        var num1 = parseInt(prompt("첫 번째 숫자는? "));
        var num2 = parseInt(prompt("두 번째 숫자는? "));

        function Whichisbig(a, b) {
            if (a == b) alert(a + "와(과)" + b + "는 같습니다.");
            else if (a > b) alert(a + "가(이)" + b + "보다 큽니다.");
            else alert(b + "가(이)" + a + "보다 큽니다.");
        };

        Whichisbig(num1, num2);