function addTwoDigits(n: any): number {
    const numArray = n.toString().split('');
    let total = 0;
    for (let i = 0; i < numArray.length; i++) {
        const el = parseInt(numArray[i]);
        total += el;
    }
    return total;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(26));