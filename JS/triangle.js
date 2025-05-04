document.getElementById("triangleCalculateBtn").addEventListener("click", function(event){
    const b = document.getElementById("triangleInputB").value;
    const h = document.getElementById("triangleInputH").value;
    if((b >= 0) && (h >= 0))
    {
        const triangleArea = 0.5 * b * h;
        document.getElementById("answerOfTriangle").innerText = triangleArea;
    }
    else if(((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z')) || ((h >= 'A' && h <= 'Z') || (h >= 'a' && h <= 'z')))
    {
        // alert("please enter a valid number");
        document.getElementById("validAlert").style.display = "block";
        document.getElementById("triangleOutput").style.display = "none";
    }
    document.getElementById("triangleInputB").value = null;
    document.getElementById("triangleInputH").value = null;
})