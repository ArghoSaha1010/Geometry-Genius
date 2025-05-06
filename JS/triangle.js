document.getElementById("triangleCalculateBtn").addEventListener("click", function(event) {
    const w = document.getElementById("triangleInputB").value.trim();
    const l = document.getElementById("triangleInputH").value.trim();

    const wNum = w;
    const lNum = l;

    if (!isNaN(wNum) && !isNaN(lNum) && wNum > 0 && lNum > 0) {
        const rectangleArea = 0.5 * wNum * lNum;

        document.getElementById("answerOfTriangle").innerText = rectangleArea.toFixed(2);
        document.getElementById("trivalidAlert").style.display = "none";
        document.getElementById("triangleOutput").style.display = "block";
    } else {
        document.getElementById("trivalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("trivalidAlert").style.display = "block";
        document.getElementById("triangleOutput").style.display = "none";
    }

    document.getElementById("triangleInputB").value = "";
    document.getElementById("triangleInputH").value = "";
});
