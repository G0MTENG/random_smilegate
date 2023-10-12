document.getElementById("generate").addEventListener("click", function () {
    const minX = -5;
    const maxX = 5;
    const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const y = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    document.getElementById("coordinates").textContent = `생성된 좌표: (${x}, ${y})`;
});
