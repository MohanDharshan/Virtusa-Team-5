const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("",function(input){
    const birthDate=new Date(input);
    const today=new Date();

    if(isNaN(birthDate.getTime())){
        console.log("Invalid date");
        rl.close();
        return;
    }

    let age=today.getFullYear()-birthDate.getFullYear();
    if(
        today.getMonth()<birthDate.getMonth() ||
        (today.getMonth()===birthDate.getMonth() &&
        today.getDate()<birthDate.getDate())
    ){
        age--;
    }
    console.log("Age: "+age);
});