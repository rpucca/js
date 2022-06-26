const valor = 3000;
const horas = 176;
const minhaString = "teste;"

function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);
    return salarioHora;
  }   

  lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]

console.log("Divisão:"+ganhoPorHora(valor,horas));
console.log("Math.round:"+ Math.round(ganhoPorHora(valor,horas)));
console.log("ToFixed:"+ ganhoPorHora(valor,horas).toFixed(4));
console.log("ToLocaleString:"+ ganhoPorHora(valor,horas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
