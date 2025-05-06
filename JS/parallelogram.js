document.getElementById("parallelCalculateBtn").addEventListener("click", function(event) {
    const b = document.getElementById("parallelogramInputB").value.trim();
    const h = document.getElementById("parallelogramInputH").value.trim();

    if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
        document.getElementById("PvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("PvalidAlert").style.display = "block";
        document.getElementById("parallelogramAns").style.display = "none";
    } else {
        const parallelogramArea = b * h;
        document.getElementById("parallelogramOutput").innerText = parallelogramArea.toFixed(2);
        document.getElementById("PvalidAlert").style.display = "none";
        document.getElementById("parallelogramAns").style.display = "block";
    }

    document.getElementById("parallelogramInputB").value = "";
    document.getElementById("parallelogramInputH").value = "";
});
