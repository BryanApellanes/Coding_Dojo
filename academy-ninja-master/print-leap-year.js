
//Leap Year
function leapyear(year){    
    console.log(`${year} % 4 == 0: ` + (year % 4 == 0).toString());
    console.log(`${year} % 100 != 0: ` + (year % 100 != 0).toString());
    console.log(`${year} % 400 == 0: ` + (year % 400 == 0).toString());
    if(year % 4 == 0 && year % 100 != 0 && year % 400 == 0){
        console.log(year + " is a leap year.");
    }else{
        console.log(year + " is not a leap year.");
    }
}

function goodLeapYear(year, someOtherVariable){
    var isLeapyear = false;
    // if a year is divisible by 4 it's a leap year
    if(year % 4 == 0){
        isLeapyear = true;
    //      unless it is divisible by 100 then it's not a leap year
        if(year % 100 == 0){
            isLeapyear = false;
            //      however if its divisible by 400 then it is 
            if(year % 400 == 0){
                isLeapyear = true;
            }
        }        
    }
    if(isLeapyear){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
    return isLeapyear;
}

function test(){
    var mod4 = 4;
    var mod100 = 100;
    var mod400 = 400;

    console.log(`${mod4} should be true: ${goodLeapYear(mod4).toString()}`);
    console.log(`${mod100} should be false: ${goodLeapYear(mod100).toString()}`);
    console.log(`${mod400} should be true: ${goodLeapYear(mod400).toString()}`);
}

test();