const generateUser = (fullName) => {
    const people = {
        fullName,
        email: `${fullName.split(' ').join('_')}@trybe.com`.toLowerCase()
    }
    return people
}




const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  const checkNumber = (myNumber, sorted) => {
    if (sorted === myNumber) {
        return 'Parabéns, você ganhou'
    }
    return 'Tente novamente'
  }

  const checkWinner = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1)
    return callback(myNumber, number)
  }

  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

  const arrayCompare = (rightAnswer, studentAnswer) => {
    let result = 0;
    studentAnswer.forEach((answer, index) => {
        if (answer === rightAnswer[index]) {
            result += 1
        }
        if (answer !== rightAnswer[index] && answer !== 'N.A') {
            result -= 0.5
        }
    })
    return `Sua pontuação é: ${result}`
  }

  const answerChecker = (rightAnswer, studentAnswer, callback) => {
    return callback(rightAnswer, studentAnswer)
  }

  

  