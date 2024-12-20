const steps = [
    { instruction: "Pleese-a idd in a feggee", options: ["Putetu", "Zuoccheeni", "Cerrut"] },
    { instruction: "Pleese-a idd in a feggee", options: ["Putetu", "Cebbege", "Cerrut"] },
    { instruction: "Nuo it's time-a tu idd in sume-a meet", options: ["Cheecken", "Beeff", "Purk"] },
    { instruction: "Pleese-a idd in a feggee", options: ["Cebbege", "Zuoccheeni", "Cerrut"] },
    { instruction: "FEEnelly, sumezeeng tu seesun", options: ["Selt", "Oreguonu", "Rusemery"] },
];

let currentStep = 0;
let userSelections = [];

const instructionsEl = document.getElementById("instructions");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function renderStep() {
    instructionsEl.textContent = steps[currentStep].instruction;
    optionsEl.innerHTML = "";
    steps[currentStep].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.onclick = () => {
            userSelections.push(option);
            nextBtn.disabled = false;
        };
        optionsEl.appendChild(btn);
    });
    nextBtn.disabled = true;
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
    } else {
        showResult();
    }
});

function showResult() {
    instructionsEl.classList.add("hidden");
    optionsEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = "Stirring...";
    setTimeout(() => {
        const response = getResponse(userSelections);
        resultEl.textContent = response;
    }, 10000);
}

function getResponse(selections) {
    const [veg1, veg2, meat, veg3, seasoning] = selections;
    if (veg1 === "Putetu" && veg2 === "Putetu" && meat === "Beeff" && veg3 === "Cebbege" && seasoning === "Selt") {
        return "Beeff Stuo. Testy buot nut right. Try sterting vit a cerrut";
    }
    if (veg1 === "Cerrut" && veg2 === "Putetu" && meat === "Beeff" && veg3 === "Cebbege" && seasoning === "Selt") {
        return "Beeff und Cerrut Stuo. Cluse-a, buot nut quoite-a. Try iddeeng purk next time-a. Bork Bork Bork!";
    }
    if (veg1 === "Cerrut" && veg2 === "Putetu" && meat === "Purk" && veg3 === "Cebbege" && seasoning === "Selt") {
        return "Purk Feggee-a Stuo. Nut quoite-a seesuned tu my teste-a. Try unuzeer seesuning! Bork Bork Bork!";
    }
    if (veg1 === "Cerrut" && veg2 === "Putetu" && meat === "Purk" && veg3 === "Cebbege" && seasoning === "Rusemery") {
        return "Purk Feggee-a Stuo. Nut quoite-a seesuned tu my teste-a. Try unuzeer seesuning! Bork Bork Bork!";
    }
    if (veg1 === "Cerrut" && veg2 === "Putetu" && meat === "Purk" && veg3 === "Cebbege" && seasoning === "Oreguonu") {
        return "Purk Feggee-a Stuo. Perffectisimu! Megniffeecent! Nuo gu feend Zee-a Ixplurer. I heer he-a ves tekeeng a ride-a oun a treen. Bork Bork Bork!";
    }
    return "Juonk! DEEsguosting! HOOOO! I lefft my receepe-a here-a sumuohere-a...";
}

renderStep();
