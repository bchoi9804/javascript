        function sumMulti(a, b) {
            if(a == b) {
                var Multi = a * b;
                return Multi;
            }
            else {
                var sum = a + b;
                return sum;
            }	
        };

        var result = sumMulti(10, 9);
        document.write(result);