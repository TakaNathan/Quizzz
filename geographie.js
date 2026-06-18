const Reponses = [
    "Océan Pacifique",          // Q1
    "Afrique",                  // Q2
    "Le Nil",                   // Q3
    "Russie",                   // Q4
    "Asie",                     // Q5
    "Lac Supérieur",            // Q6
    "Détroit de Gibraltar",     // Q7
    "Pérou et Bolivie",         // Q8
    "Mer Morte",                // Q9
    "L'Oural",                  // Q10
    "Grande Barrière de Corail",// Q11
    "Mer Méditerranée",         // Q12
    "Le Danube",                // Q13
    "14 millions km²",          // Q14
    "Suède",                    // Q15
    "Fosse de Porto Rico",      // Q16
    "Désert Antarctique",       // Q17
    "0°",                       // Q18
    "Vatican",                  // Q19
    "Îles Galápagos"            // Q20
];

const formGeo = document.getElementById("questionformgeo");
const ValiderGeo = document.getElementById("btn-valider-Geo");
const ResetGeo = document.getElementById("btn-reset-Geo");
formGeo.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log("prevent on");
});

ValiderGeo.addEventListener("click", () =>{
Valid(Reponses, "scoreGeo");
});

ResetGeo.addEventListener("click", () => {
    // Reset the form (unchecks radio buttons)
    formGeo.reset();

    // Remove styling and re-enable inputs for all questions
    for (let i = 0; i < 20; i++) {
        const tousLesInputs = document.querySelectorAll(`input[name="q${i+1}"]`);
        tousLesInputs.forEach(input => {
            const label = input.closest('label');
            label.classList.remove('bonne');
            label.classList.remove('mauvaise');
            input.disabled = false; // Re-enable the inputs
        });
    }

    // Clear the score display
    document.getElementById("scoreGeo").textContent = "";
})