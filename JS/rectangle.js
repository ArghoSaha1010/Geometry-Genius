document.getElementById("rectangleCalculateBtn").addEventListener("click", function(event){
    document.getElementById("validAlert").style.display = "none";
    document.getElementById("triangleOutput").style.display = "none";
    const w = document.getElementById("rectangleInputW").value;
    const l = document.getElementById("rectangleInputL").value;
    if((w >= 0) && (l >= 0))
    {
        const rectangleArea = w * l;
        document.getElementById("rectangleOutput").innerText = rectangleArea;
    }
    else if(((w >= 'A' && w <= 'Z') || (w >= 'a' && w <= 'z')) || ((l >= 'A' && l <= 'Z') || (l >= 'a' && l <= 'z')))
    {
        document.getElementById("RvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("RvalidAlert").style.display = "block";
        document.getElementById("rectangleAns").style.display = "none";
        console.log(5);
    }
    document.getElementById("rectangleInputW").value = null;
    document.getElementById("rectangleInputL").value = null;
})