class Calculator{
    add(a,b,c){
        if(arguments.length===2){
            return a+b;
        }
        else if(arguments.length===3){
            return a+b+c;
        }
        else{
            return "Invalid no of arguments";
        }
    }
}
const calculator=new Calculator();

const a=Number(process.argv[2]);
const b=Number(process.argv[3]);
const c=process.argv[4];
if(c===undefined){
    console.log(calculator.add(a,b));
}
else{
    console.log(calculator.add(a,b,Number(c)));
}