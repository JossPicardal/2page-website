    
      function quadSolve() { //EQ for Quadratic equation section
          // get the input
         var a = document.getElementById("A").value;
         var b = document.getElementById("B").value;
         var c = document.getElementById("C").value;
         var quadAnswer = document.getElementById("quadAnswer");
            
          // validate a, b and c
          if (a == 0) {
              alert("Value cannot equal 0")
          } else if (isNaN(a)) {
              alert("Variable A is not a number")
          } else if (isNaN(b)) {
              alert("Variable B is not a number")
          } else if (isNaN(c)) {
              alert("Variable C is not a number")
          } else {
            var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
            var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
            quadAnswer = "For the equation <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0</strong>, x can equal <strong>" + x1 + "</strong> or <strong>" + x2 + "</strong>";
         }  
        // output the result (or errors)
       document.getElementById("quadAnswer").style.display = 'block';
    }


    function pythSolve() { //EQ for Pythagoerean equation section 
      var aa = document.getElementById("angleA").value;
      var ab = document.getElementById("angleB").value;
      var ac = document.getElementById("angleC").value;
      var pythAnswer = document.getElementById("pythAnswer");

      if (Number.isNaN(aa) && !Number.isNaN(ab) && !Number.isNaN(ac)) {
        const a = Math.sqrt(c ** 2 - b ** 2);
        output.textContent = ' ' + a;
      }

      if (Number.isNaN(ab) && !Number.isNaN(aa) && !Number.isNaN(ac)) {
        const b = Math.sqrt(c ** 2 - a ** 2);
        output.textContent = ' ' + b;
      }

      if (Number.isNaN(ac) && !Number.isNaN(aa) && !Number.isNaN(ab)) {
        const c = Math.sqrt(a ** 2 + b ** 2);
        output.textContent = ' ' + c;
      }
      //output the result
      document.getElementById("pythAnswer").style.display = 'block';
    }


    //Cal for Simultaiuos Equation
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
        
        function start(){
          var oneOne = document.getElementById("oneOne").value;
          var oneTwo = document.getElementById("oneTwo").value;
          var oneThree = document.getElementById("oneThree").value;
          var twoOne = document.getElementById("twoOne").value;
          var twoTwo = document.getElementById("twoTwo").value;
          var twoThree = document.getElementById("twoThree").value;
          
          
          var final = main( one_one , one_two , two_one , two_two , one_three , two_three );
          
          var workArea = document.getElementById("final");
          workArea.innerHTML = final ;
      }
      