module.exports = function toReadable (number) {
    let arr =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr1=[ 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
    let arr2=['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr3=['hundred'];
    if (number < 10) {
        return arr[number]; // 0-10
        }
        else if ((number > 10) && (number < 20)){ // 11-19
        return arr1[number-11]; 
        }
        else if (number===10){ //10
                return arr2[0];
        }
        else if ((number>= 20) && (number <100) && (number%10 !==0)){ //21-35-99        
                return arr2[Math.trunc(number/10-1)] +' '+ arr[number%10];
        }
        else if((number>= 20) && (number <100) && (number%10 ===0)){  // 20-90
            return arr2[Math.trunc(number/10-1)];
        }
        else if((number >= 100) && (number<1000) && (number% 10 !== 0) && (number%100 >= 20)){ //123 -999
            return arr[Math.trunc(number/100)]+' '+ arr3[0]+' '+ arr2[(Math.trunc(number/10-1)) % 10 ] + ' '+arr[number%10];
        }
        else if((number >= 100) && (number<1000) && (number% 10 !== 0) && (number%100 <10)){ // 106-709
            return arr[Math.trunc(number/100)]+' '+ arr3[0]+' '+ arr[(number%100) ];
        }
        else if((number >= 100) && (number<1000) && (number% 10 !== 0) && (number%100 < 20) && (number%100 > 10)){ //211-319
            return arr[Math.trunc(number/100)]+' '+ arr3[0]+' '+ arr1[(number % 100)-11] ; 
        }
         else if ((number >= 100) && (number<1000) && (number% 100 === 0)){ //500-900
            return arr[Math.trunc(number/100)]+' '+ arr3[0];
         }
         else if((number >= 100) && (number<1000) && (number% 10 === 0) && (number% 100 ===10)) { //510-610
            return arr[Math.trunc(number/100)]+' '+ arr3[0]+' '+ arr2[0];
        }
        else if((number >= 100) && (number<1000) && (number% 10 === 0) && (number%10 !==10)){ // 560-890
            return arr[Math.trunc(number/100)]+' '+ arr3[0]+' '+ arr2[(Math.trunc(number/10) % 10)-1];
        }
    }

