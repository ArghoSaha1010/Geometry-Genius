document.getElementById("rhombusCalculateBtn").addEventListener("click", function(event) {
    const d1 = document.getElementById("rhombusInputd1").value.trim();
    const d2 = document.getElementById("rhombusInputd2").value.trim();
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        document.getElementById("triangleInputB").style.outline = "2px solid red";
        document.getElementById("triangleInputH").style.outline = "2px solid red";
        
        document.getElementById("RHvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("RHvalidAlert").style.display = "block";
        document.getElementById("rhombusAns").style.display = "none";
    }
    else {
        const rhombusArea = 0.5 * d1 * d2;
        document.getElementById("rhombusOutput").innerText = rhombusArea.toFixed(2);
        document.getElementById("RHvalidAlert").style.display = "none";
        document.getElementById("rhombusAns").style.display = "block";

        document.getElementById("triangleInputB").style.outline = "none";
        document.getElementById("triangleInputH").style.outline = "none";
    }

    document.getElementById("rhombusInputd1").value = "";
    document.getElementById("rhombusInputd2").value = "";
});
