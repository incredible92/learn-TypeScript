const multiplicator = (a, b, printText) => {
    console.log(printText,  a * b);
  }
  
  multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');

  type Operation = 'multiply' | 'add' | 'division';

  type calculatorfn = number;

  const calculator = (a:number, b: number, op: Operation) => {
    if(op==='multiply'){
      return a * b;
    } else if(op==='add') {
      return a + b;
    } else if(op==="division"){
      return a / b;
    } 
   
  }

  calculator(2, 4, 'null')