document.addEventListener("DOMContentLoaded", () => {
    const divtest = document.getElementById("divtest");
    const bestTime = document.getElementById("bestTime");
    const latestClick = document.getElementById("latestClick");
    const goblinsSlayed = document.getElementById("goblinsSlayed");
    const slashEffect = document.getElementById("slash-effect");

    let start = new Date();
    let best = 1000000;
    let slayCount = 0;

    function moveGobbo() {
        const gameArea = document.getElementById("game-area");
        const gameAreaWidth = gameArea.clientWidth;
        const gameAreaHeight = gameArea.clientHeight;

        const newx = Math.max(0, Math.random() * (gameAreaWidth - 50));
        const newy = Math.max(0, Math.random() * (gameAreaHeight - 50));

        divtest.style.left = `${newx}px`;
        divtest.style.top = `${newy}px`;

        slashEffect.style.left = `${newx}px`;
        slashEffect.style.top = `${newy}px`;
    }

    function onClick() {
        const end = new Date();
        const reactionTime = end - start;
        start = end;

        slayCount += 1;
        goblinsSlayed.innerHTML = `Goblins Slayed: ${slayCount}`;

        if (reactionTime < best) {
            best = reactionTime;
            bestTime.innerHTML = `Fastest Slay! = ${best} ms`;
        }

        latestClick.innerHTML = `Latest Reaction Slay = ${reactionTime} ms`;

        slashEffect.style.display = "block";
        setTimeout(() => {
            slashEffect.style.display = "none";
        }, 200);

        moveGobbo();
    }

    divtest.addEventListener("click", onClick);
    moveGobbo();
});