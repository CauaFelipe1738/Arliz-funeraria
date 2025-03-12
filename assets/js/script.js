// menu
let menuOpener = document.querySelector('.menu-opener')
//nav
let nav = document.querySelector('header nav');
//ouvinte para o evento click do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon').style .display='none'
        menuOpener.querySelector('.hamburger-icon') .style .display='flex'
    }else{
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon').style .display='flex'
        menuOpener.querySelector('.hamburger-icon') .style .display='none'
    }
})

//Testemonials
//vetor que contém as variável com texto
//TESTEMONIALS
//vetor de objetos contendo as frases e os icones
let testemonials = [
    {quote:'"A funerária Arliz é uma falta de respeito aos que se foram, essa instituição deve ser fechada imediatamente"', origin:'cbs.svg' },
    {quote:'"A mãe de uma de nossas telespectadoras nos disse que o corpo foi assado e servido para a família, é verdade?"',origin:'forbes.svg' },
    {quote:'"Funerária Arliz oferece serviços extraordinariamentes inadequados, 0/10."', origin:'fox.svg' },
    {quote:'"Vejo você Funerária Arliz como um verdadeiro vilão"' ,origin:'sharktank.svg' }
];
//captura os elementos do html usando queryselector
let testemonialQuote =
document.querySelector('.testemonials .quote');
let testemonialIcons =
document.querySelector('.testemonials .icons');

//repetição para criar as imagens
for(let tindex in testemonials){
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/'+
        testemonials[parseInt(tindex)].origin);
    img.style.cursor='pointer';
    img.addEventListener('click',
        ()=>fillTestemonial(parseInt(tindex)));
    testemonialIcons.appendChild(img);
}
//variavel para controlar o testemunho atual
let currentTestemonial = 0;
//variavel para controlar o tempo de cada testemunho
let testemonialTimer;

//função para preencher o testemunho
const fillTestemonial = (index) =>{
    clearTimeout(testemonialTimer);
    currentTestemonial = index;
    //acessa o item quote dentro do vetor de testemunhos
    testemonialQuote.innerHTML =
        testemonials[currentTestemonial].quote;
    let imgs = testemonialIcons.querySelectorAll('img');
    for(let img of imgs) img.style.opacity=0.2;
    imgs[currentTestemonial].style.opacity=1;
    testemonialTimer = setTimeout(nextTestemonial, 3000);
}

//função que passa para o proximo testemunho
const nextTestemonial = () =>{
    if(testemonials[currentTestemonial+1]){
        fillTestemonial(currentTestemonial+1);
    }else{
        fillTestemonial(0);
    }
}
//inicia a exibição dos testemunhos
nextTestemonial();

//FAQ
//variavel para controlar o item faq atual
let currentFaq =0;
//seleciona os elementos com a classe item dentro do accordion
let faqItems =
document.querySelectorAll('.faq .accordion .item');
//listener para item do faq
faqItems.forEach((el, index)=>{
    el.querySelector('.title').addEventListener('click', ()=>
    setFaq(index));
});
//função para definir o faq a ser exibido
const setFaq = (index) =>{
    currentFaq = index;
    //se o item atual ja estiver aberto, fecha e retorna
    if(faqItems[currentFaq].classList.contains('opened')){
        faqItems[currentFaq].classList.remove('opened');
        return;
    }
    //remove a classe opened de todos os itens
    for(let item of faqItems){
        item.classList.remove('opened');
    }
    //adiciona a classe opened no item atual
    faqItems[currentFaq].classList.add('opened');
}