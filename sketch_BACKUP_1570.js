/*lang="pt-BR"*/
const botaonoite = document.querySelector('divbotaonoite p');
const botaodia = document.querySelector('divbotaodia p')
const fundo = document.querySelector('body');

const texto = document.querySelector('main p');
const titulo = document.querySelector('h1');

const estiloclarotexto = document.getElementsByClassName('estiloclarotexto')
const estiloescurotexto = document.getElementsByClassName('estiloescurotexto')

const sectionbatman = document.querySelector('sectionbatman')
const sectionsuper = document.querySelector('sectionsuper')

const imgbatman = document.querySelector('sectionbatman img')
const imgsuperman = document.querySelector('sectionsuper img')
const hiddenimgbat = document.getElementById('escondeimgbatman')

botaonoite.onclick = function(ativamodoescuro){
   (fundo.classList.add('estiloescurobody')||texto.classList.add('estiloescurotexto')||titulo.classList.add('fundoescuroh1')||(imgsuperman.classList.add('hiddenimgsuper'))||(imgbatman.classList.remove('hiddenimgbat')))
}

botaodia.onclick = function(ativamodoclaro){ 
   (fundo.classList.remove('estiloescurobody')||texto.classList.remove('estiloescurotexto')||titulo.classList.remove('fundoescuroh1'))||(imgsuperman.classList.remove('hiddenimgsuper'))||(imgbatman.classList.add('hiddenimgbat'))
}

console.log (click)

console.log(enviando para o github)
 
