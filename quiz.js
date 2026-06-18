function Valid(Tab, scoreDisplayId) {
    let proposition;
let i=0;
let score=0;
for(i=0;i<20;i++){
    proposition = document.querySelector(`input[name="q${i+1}"]:checked`)
    const tousLesInputs = document.querySelectorAll(`input[name="q${i+1}"]`);

    tousLesInputs.forEach(input => {
        const label = input.closest('label');
        input.disabled = true;
        if (input.value === Tab[i]) {
            label.classList.add('bonne');
        }
    });

    // ✅ On vérifie d'abord si quelque chose est coché
    if (proposition !== null) {
        if(proposition.value === Tab[i]){
            console.log(proposition.value);
            score++;
        }
        else{
            console.log("Reponse incorrecte");
            proposition.closest('label').classList.add('mauvaise');
        }
    } else {
        console.log(`Question ${i+1} : pas de réponse`);
    }
}
const Affiche_Score = document.getElementById(scoreDisplayId);
Affiche_Score.textContent = "Votre Score:"+ score +"/20";  
}