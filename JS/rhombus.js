document.getElementById("rhombusCalculateBtn").addEventListener("click", function(event){
    const d1 = document.getElementById("rhombusInputd1").value;
    const d2 = document.getElementById("rhombusInputd2").value;
    if((d1 >= 0) && (d2 >= 0))
    {
        const rhombusArea = 0.5 * d1 * d2;
        
        document.getElementById("rhombusOutput").innerText = rhombusArea;
        document.getElementById("RHvalidAlert").style.display = "none";
        document.getElementById("rhombusAns").style.display = "block";
    }
    else if(((d1 >= 'A' && d1 <= 'Z') || (d1 >= 'a' && d1 <= 'z')) || ((d2 >= 'A' && d2 <= 'Z') || (d2 >= 'a' && d2 <= 'z')))
    {
        document.getElementById("RHvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("RHvalidAlert").style.display = "block";
        document.getElementById("rhombusAns").style.display = "none";
    }
    document.getElementById("rhombusInputd1").value = "";
    document.getElementById("rhombusInputd2").value = "";
})