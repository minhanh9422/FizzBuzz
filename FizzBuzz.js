let i=1
// 1 2 fizz 4 buzz fizz 7 8 fizz
while (i<=100){
    if(i%3==0||i%5==0){
        if(i%3==0&&i%5==0){document.write("FizzBuzz"+"<br>")}
        else{
           if (i%5==0){document.write("Buzz"+"<br>")}
           if (i%3==0){document.write("Fizz" +"<br>")}
        }
    }
    else{
    document.write(i+"<br>")}
    i++
}