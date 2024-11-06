const { gets, print } = require("./funcAuxiliares")

const n = gets()
let maiorNumPar = 0
let menorNumImpar = 0

for (let i = 0; i < n; i++) {
    const numero = gets()
    if (numero % 2 === 0) {


        if (numero > maiorNumPar) {
            maiorNumPar = numero
        }
    } else{
        numero>menorNumImpar
        menorNumImpar = numero
        }
}

print(maiorNumPar)
print(menorNumImpar)