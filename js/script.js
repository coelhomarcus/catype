import generateSentence from "./modules/sGenerate.js";

function initializeText() {
    let fullText = generateSentence();
    const div = document.querySelector(".div-wtext");
    div.innerHTML = '';

    Array.from(fullText).forEach((letter) => {
        div.innerHTML += `<span>${letter}</span>`;
    });

    return document.querySelectorAll("span");
}

let span = initializeText();
let index = 0;
let currentWord = '';

span[index].classList.add("cursor");

document.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === "Backspace") {
        handleBackspace();
        return;
    }

    if (index < span.length && ((e.key.length === 1 && /[a-zA-Z]/.test(e.key)) || e.key === " ")) {
        handleKeyPress(e.key);
    } else {
        location.reload();
    }
});

function handleKeyPress(key) {
    if (key === span[index].innerText) {
        span[index].classList.remove("cursor", "wrong");
        span[index].classList.add("correct");
        currentWord += key;
    } else {
        span[index].classList.remove("cursor", "correct");
        span[index].classList.add("wrong");
        currentWord += key;
    }

    if (currentWord === span[index].innerText || currentWord.length === span[index].innerText.length) {
        currentWord = '';
        index++;
        if (index < span.length) {
            span[index].classList.add("cursor");
        } else {
            resetText();
        }
    }
}

function handleBackspace() {
    if (index > 0) {
        span[index].classList.remove("cursor", "wrong", "correct");
        index--;
        span[index].classList.add("cursor");
    }
}

function resetText() {
    const div = document.querySelector(".div-wtext");
    div.classList.add("fade-out");

    setTimeout(() => {
        index = 0;
        currentWord = '';

        span.forEach((spanElement) => {
            spanElement.classList.remove("cursor", "wrong", "correct");
        });

        span = initializeText();
        span[index].classList.add("cursor");

        div.classList.remove("fade-out");
        div.classList.add("fade-in");
    }, 500);

    setTimeout(() => {
        div.classList.remove("fade-in");
    }, 1000);
}