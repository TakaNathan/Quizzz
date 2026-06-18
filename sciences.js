const Reponsessciences = [
    "Mercure",                  // Q1
    "206",                      // Q2
    "H2O",                      // Q3
    "Le pancréas",              // Q4
    "300 000 km/s",             // Q5
    "Fer",                      // Q6
    "Loi de Newton",            // Q7
    "23 paires",                // Q8
    "Azote",                    // Q9
    "100°C",                    // Q10
    "79",                       // Q11
    "Neutron",                  // Q12
    "5 730 ans",                // Q13
    "Violet",                   // Q14
    "6,626 × 10⁻³⁴ J·s",       // Q15
    "9,109 × 10⁻³¹ kg",        // Q16
    "Non-localité quantique",   // Q17
    "ADN polymérase",           // Q18
    "Relativité générale",      // Q19
    "Boson de Higgs"            // Q20
];

const formSciences = document.getElementById("questionformsciences");
const ValiderSciences = document.getElementById("btn-valider-Sciences");
const ResetSciences = document.getElementById("btn-reset-Sciences");
formSciences.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log("prevent on");
});

ValiderSciences.addEventListener("click", () =>{
Valid(Reponsessciences, "scoreSciences");
});

ResetSciences.addEventListener("click", () => {
    // Reset the form (unchecks radio buttons)
    formSciences.reset();

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
    document.getElementById("scoreSciences").textContent = "";
})