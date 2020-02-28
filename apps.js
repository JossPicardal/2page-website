       
        function quadSolve() { //EQ for Quadratic equation section
            // get the input
           var a = document.getElementById("A").value;
           var b = document.getElementById("B").value;
           var c = document.getElementById("C").value;
            
            // validate a, b and c
            if (a == 0) {
                quadAnswer = "<em>a</em> cannot equal zero!";
            } else if (isNaN(a)) {
                quadAnswer = "<em>a</em> must be a number!";
            } else if (isNaN(b)) {
                quadAnswer = "<em>b</em> must be a number!";
            } else if (isNaN(c)) {
                quadAnswer = "<em>c</em> must be a number!";
            } else {
                var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
                var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
                quadAnswer = "For the equation <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0</strong>, x can equal <strong>" + x1 + "</strong> or <strong>" + x2 + "</strong>";
            }
            
            // output the result (or errors)
            document.getElementById("quadAnswer").style.display = "block";
            document.getElementById("answer").innerHTML = "total";
        }


		document.getElementById("Calculate").onclick = function() {
		quadSolve()
		};
		//Cal for Simultaiuos
		function multiply2(a,b){
				var c = [ ( (a[0]*b[0]) + (a[1]*b[1]) ) , ( (a[2]*b[0]) + (a[3]*b[1]) ) ];
						return c;
		}
					
		function inverse(a){
				var det = (1/((a[0]*a[3]) - (a[2]*a[1])));
				var result = [(det*a[3]) , (-(det*a[1])) , (-(det*a[2])) , (det*a[0])] ;
				return result;
		}
				
		function main(a,b,c,d,x,y){
									
			var A = [
				a , b,
				c , d
			];
			var B = [
				x,
				y
			];
		
			var result = multiply2( inverse(A) , B );
			return "x = " + String(result[0]) + "y = " + String(result[1]);
			}
				
		function simAnswer(){
			var oneOne = document.getElementById("A1").value;
			var oneTwo = document.getElementById("A2").value;
			var oneThree = document.getElementById("B1").value;
			var twoOne = document.getElementById("B2").value;
			var twoTwo = document.getElementById("C1").value;
			var twoThree = document.getElementById("C2").value;
					
					
			var final = main( one_one , one_two , two_one , two_two , one_three , two_three );
					
			var workArea = document.getElementById("final");
			workArea.innerHTML = final ;
			}
		document.getElementById("Calculate").onclick = function() {
		simAnswer()
		};
			
