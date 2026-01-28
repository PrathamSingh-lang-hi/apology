document.addEventListener("DOMContentLoaded", () => {
    const forgiveBtn = document.getElementById("forgiveBtn");
    const sound = document.getElementById("forgiveSound");

    forgiveBtn.addEventListener("click", () => {
        sound.play();
        forgiveBtn.innerText = "Thank you for forgiving me";
        forgiveBtn.disabled = true;
        forgiveBtn.classList.add("opacity-70");
    });

    // Floating hearts background
    setInterval(createHeart, 700);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 14 + 12 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
});
