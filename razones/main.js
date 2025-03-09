const razones = [
    "Siempre me haces sonreír.",
    "Tu apoyo significa mucho para mí.",
    "Amo lo dedicada que eres.",
    "Eres mi lugar seguro.",
    "Tus abrazos son los mejores.",
    "Haces mi mundo más bonito.",
    "Eres única y especial.",
    "Siempre me inspiras a ser mejor.",
    "Tu risa ilumina mis días.",
    "Tus ojos tienen un brillo que no puedo dejar de admirar.",
    "Cada momento contigo es especial.",
    "Eres mi persona favorita en el mundo.",
    "Tu inteligencia no tiene limites",
];

let indice = 0;

function MostarRazones(){
    if (indice < razones.length){
        const lista = document.getElementById('Lista');
        const item = document.createElement('li');
        item.textContent = razones[indice];
        lista.appendChild(item);
        indice++;
    }else{
        alert("Y faltan muchas mas");
        alert("Te quiero muchisimo");
    }
}