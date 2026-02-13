let PrimeiroHeroi = "Goku"
let expXp = 1000

if (expXp <=1000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Ferro.")
}
else if (expXp >1001 && expXp <=2000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Bronze.")
}
else if (expXp >2001 && expXp <=6000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Prata.")
}
else if (expXp >6001 && expXp <=7000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Ouro.")
}
else if (expXp >7001 && expXp <=8000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Platina Diamante.")
}
else if (expXp >8001 && expXp <=9000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Ascendente.")
}
else if (expXp >9001 && expXp <=10000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Imortal.")
}
else if (expXp >10001 && expXp <=11000){
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, e é um herói de Radiante.")
}
else {
    console.log("O herói " + PrimeiroHeroi + " tem " + expXp + " pontos de experiência, mas não se enquadra em nenhuma categoria.");
}