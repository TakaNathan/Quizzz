const Reponses = [
  "Paris",               // Q1  - France
  "Rome",                // Q2  - Italie
  "Tokyo",               // Q3  - Japon
  "Brasília",            // Q4  - Brésil
  "Ottawa",              // Q5  - Canada
  "Canberra",            // Q6  - Australie
  "Buenos Aires",        // Q7  - Argentine
  "New Delhi",           // Q8  - Inde
  "Berne",               // Q9  - Suisse
  "Ankara",              // Q10 - Turquie
  "Astana",              // Q11 - Kazakhstan
  "Naypyidaw",           // Q12 - Myanmar
  "Sri Jayawardenepura Kotte", // Q13 - Sri Lanka
  "La Paz",              // Q14 - Bolivie
  "Thimphu",             // Q15 - Bhoutan
  "Majuro",              // Q16 - Îles Marshall
  "Palikir",             // Q17 - Micronésie
  "Yaren",               // Q18 - Nauru
  "Tórshavn",            // Q19 - Îles Féroé
  "Ngerulmud"            // Q20 - Palau
];

const form = document.getElementById("questionform");
const Valider= document.getElementById("btn-valider");
const Reset = document.getElementById("btn-reset");
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log("prevent on");
}); 

Valider.addEventListener("click", () =>{
Valid(Reponses, "score");
});

Reset.addEventListener("click", () => {
    // Reset the form (unchecks radio buttons)
    form.reset();

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
    document.getElementById("score").textContent = "";
})
