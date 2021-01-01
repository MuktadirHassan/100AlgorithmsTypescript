function allLongestStrings(inputArray: string[]): string[] {
    const longArray: string[] = [];
    let longestLength = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const el = inputArray[i].length;
        if (el > longestLength){
            longestLength = el;
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        const el = inputArray[i];
        if (el.length === longestLength) {
            longArray.push(inputArray[i])
        }
    }
    return longArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcdd3", "aasd"]));