let n = 10
if (n > 0) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
else if (n <= 0) {
    console.log("Please enter a positive number.");
}
else{
    console.log("Invalid input.");
}