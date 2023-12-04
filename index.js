/*Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/




let ranqueadas = subtracao(1000, 5)
        if(ranqueadas < 10){
        console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Ferro")
    } else if (ranqueadas >=11 && ranqueadas <=20){
    console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Bronze")
    } else if (ranqueadas >= 21 && ranqueadas <=50) {
        console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Prata")
    } else if (ranqueadas >= 51 && ranqueadas <= 80) {
        console.log("O Herói tem de saldo de está no nível de Ouro")
    } else if (ranqueadas >= 81 && ranqueadas <=90) {
        console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Diamante")
    } else if (ranqueadas >= 91 && ranqueadas <= 100) {
        console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Lendario")
    } else if (ranqueadas >= 101) {
        console.log("O Herói tem de saldo de " + ranqueadas + " está no nível de Imortal")
    }
    
function subtracao (vitorias, derrotas){
    let sub = vitorias - derrotas
    return sub
}