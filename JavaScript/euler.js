let limit = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let large = limit.length;
let total = 0;
for (let i = 1; i < large; i++) {
    if (limit[i] % 2 === 1) 
        total += limit[i];    
}
console.log(total);