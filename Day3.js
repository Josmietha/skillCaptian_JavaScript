function ConvertTemp(temp){
    if (temp === undefined || temp === null) {
        return "Invalid input";
    }
    
    if (typeof temp !== 'number') {
        return "Input must be a number";
    }

    let F = (temp * 9/5) + 32;
    return F.toFixed(2);
}

let temp = 25; 
let convertedTemp = ConvertTemp(temp);
console.log(convertedTemp);