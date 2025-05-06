document.getElementById("rectangleCalculateBtn").addEventListener("click", function(event){
    const w = document.getElementById("rectangleInputW").value.trim();
    const l = document.getElementById("rectangleInputL").value.trim();

    const wNum = w;
    const lNum = l;

    if (!isNaN(wNum) && !isNaN(lNum) && wNum >= 0 && lNum >= 0) {
        const rectangleArea = wNum * lNum;
        document.getElementById("rectangleOutput").innerText = rectangleArea.toFixed(2);
        document.getElementById("RvalidAlert").style.display = "none";
        document.getElementById("rectangleAns").style.display = "block";

        document.getElementById("triangleInputB").style.outline = "none";
        document.getElementById("triangleInputH").style.outline = "none";
    }
    else {
        document.getElementById("triangleInputB").style.outline = "2px solid red";
        document.getElementById("triangleInputH").style.outline = "2px solid red";
        
        document.getElementById("RvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("RvalidAlert").style.display = "block";
        document.getElementById("rectangleAns").style.display = "none";
    }

    document.getElementById("rectangleInputW").value = "";
    document.getElementById("rectangleInputL").value = "";
});
