//o código abaixo roda no site playcode.io/javascript

let numberOfVictories = "";
while(numberOfVictories === ""){
numberOfVictories = prompt("Qual o número de vitórias do seu herói? (Digite o número de vitórias)");
}

let numberOfDefeats = "";
while(numberOfDefeats === ""){
numberOfDefeats = prompt("Qual o número de derrotas do seu herói? (Digite o número de derrotas)");
}

let balance = calculateBalance(numberOfVictories, numberOfDefeats);
let level = "";

function calculateBalance(a, b){
    let calculus = a - b
    return calculus
}

let response = rank(balance);

function rank(c){
    if (c < 0){
        let messageNeg = console.log("O herói não possui saldo positivo de vitórias.")
        return messageNeg    
    }else {
        if(c >= 0 && c <= 10){
        level = "Ferro"
        }else if(c > 10 && c <= 20){
        level = "Bronze"
        }else if(c > 20 && c <= 50){
        level = "Prata"
        }else if(c > 50 && c <= 80){
        level = "Ouro"
        }else if(c > 80 && c <= 90){
        level = "Diamante"
        }else if(c > 90 && c <= 100){
        level = "Lendário"
        }else {
        level = "Imortal"
        }
        let messagePos = console.log("O herói tem saldo de " + c + " vitórias e está no nível " + level + ".")
        return messagePos
    }
}