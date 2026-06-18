// Personnages Importants
const ReponsesPersonnages = [
  "Isaac Newton",          // Q1  - Gravité
  "Léonard de Vinci",      // Q2  - Joconde
  "George Washington",     // Q3  - 1er président USA
  "Alexandre le Grand",    // Q4  - Empire Grèce-Inde
  "Alexander Graham Bell", // Q5  - Téléphone
  "Cléopâtre VII",         // Q6  - Égypte
  "Socrate",               // Q7  - Ciguë
  "Charles Darwin",        // Q8  - Évolution
  "Ernesto Che Guevara",   // Q9  - Révolution cubaine
  "Florence Nightingale",  // Q10 - Soins infirmiers
  "Mehmed II",             // Q11 - Constantinople
  "Al-Khwarizmi",          // Q12 - Algèbre
  "Cixi",                  // Q13 - Impératrice Chine
  "Yamamoto Isoroku",      // Q14 - Pearl Harbor
  "Narmer",                // Q15 - Unification Égypte
  "Hannibal Barca",        // Q16 - Alpes + éléphants
  "Xerxès Ier",            // Q17 - Thermopyles
  "Shakuntala Devi",       // Q18 - Calculatrice humaine
  "Thalès de Milet",       // Q19 - Eau primordiale
  "Piyale Pacha",          // Q20 - Bataille de Djerba
];

const formPerso = document.getElementById("questionformperso");
const ValiderPerso= document.getElementById("btn-valider-Perso");
const ResetPerso = document.getElementById("btn-reset-Perso");
formPerso.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log("prevent on");
});

ValiderPerso.addEventListener("click", () =>{
Valid(ReponsesPersonnages, "scorePerso");
});

ResetPerso.addEventListener("click", () => {
    // Reset the form (unchecks radio buttons)
    formPerso.reset();

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
    document.getElementById("scorePerso").textContent = "";
})