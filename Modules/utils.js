export function factorial(n){
    if (n<0){
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n===0){
        return 1;
    }
    return n * factorial(n-1);
}
