const primeiro = 5;
const segundo  = 10;
const terceiro = 5;

console.log(primeiro == segundo);
console.log(primeiro == terceiro);

/*
==  haverá uma coerção do valor para que ambos os lados da expressão tenham o mesmo tipo.
=== não haverá coerção e por isso o código abaixo dará falso:*/
if(1 ==  '1') console.log('igual'); else console.log('diferente'); //igual
if(1 === '1') console.log('igual'); else console.log('diferente'); //diferente