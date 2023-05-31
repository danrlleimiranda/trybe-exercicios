function catchNumber(string) {
const num = string.replace(/\D/g, '')
let sum = 0;
for (let index = 0; index < num.length; index++) {
    sum += parseInt(num[index])
}
return sum
}

const hydrate = (string) => (catchNumber(string) === 1)?'1 copo de água':`${catchNumber(string)} copos de água`;

module.exports = hydrate
