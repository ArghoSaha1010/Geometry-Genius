document.getElementById("ellipseCalculateBtn").addEventListener("click", function(event){
    const a = document.getElementById("ellipseInputdA").value;
    const b = document.getElementById("ellipseInputdB").value;
    if((a >= 0) && (b >= 0))
    {
        const ellipseArea = 3.1416 * a * b;
        
        document.getElementById("ellipseOutput").innerText = ellipseArea;
        document.getElementById("EvalidAlert").style.display = "none";
        
        document.getElementById("ellipseAns").style.display = "block";
        
        
    }
    else if(((a >= 'A' && a <= 'Z') || (a >= 'a' && a <= 'z')) || ((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z')))
    {
        
        document.getElementById("EvalidAlert").innerText = "Please Enter a Valid Number!";
        
        document.getElementById("EvalidAlert").style.display = "block";
        document.getElementById("ellipseAns").style.display = "none";
        
        
    }
    document.getElementById("ellipseInputdA").value = "";
    document.getElementById("ellipseInputdB").value = "";
})