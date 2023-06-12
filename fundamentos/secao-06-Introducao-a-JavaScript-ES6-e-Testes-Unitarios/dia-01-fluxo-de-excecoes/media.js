// const checkMedia = (n1, n2, n3, n4) => {
//     try {
//       checkNumber(n1, n2, n3, n4)
//       const sum = n1 + n2 + n3 + n4
//       const media = sum / 4
//       return media
//     }
//  catch(err) {
//     return err.message
//  }
 
// }

// const checkNumber = (n1, n2, n3, n4) => {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
//       throw new Error('Apenas números são aceitos');
//     }
//   }

//   console.log(checkMedia(1, '2', 3, 4));



  let studentGame = [18, 26, 35, 50, 60];
let rodsGame = [10, 20, 30, 40, 50, 60];

// Jogo sorteado
let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
}


const checkGame = (game) => {
    if (game.length < 6) {
        throw new Error('Você não pode jogar com menos do que 6 números!')
    } else {
        
    }
}


// Confere o jogo
function megaSenaChecker (game) {
  let numberOfHits = 0;
    try {
        checkGame(game);
        for (let index = 0; index < megaSenaNumbers.length; index += 1) {
        let drawnNumber = megaSenaNumbers[index];
      
            for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
                let studentNumber = game[gameIndex];
        
                if (drawnNumber === studentNumber) {
                numberOfHits += 1;
        }
      }
    }
    return numberOfHits;
} catch (error) {
   return error.message
}
}

console.log("jogo sorteado", megaSenaNumbers);
console.log("Jogo do Neidson:", studentGame);
console.log("Número de acertos:", megaSenaChecker(studentGame));
console.log("--------");
console.log("jogo sorteado", megaSenaNumbers);
console.log("Jogo do Rods:", rodsGame);
console.log("Número de acertos:", megaSenaChecker(rodsGame));