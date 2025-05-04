document.getElementById("parallelCalculateBtn").addEventListener("click", function(event){
    const b = document.getElementById("parallelogramInputB").value;
    const h = document.getElementById("parallelogramInputH").value;
    if((b >= 0) && (h >= 0))
    {
        const parallelogramArea = b * h;
        
        document.getElementById("parallelogramOutput").innerText = parallelogramArea;
    }
    else if(((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z')) || ((h >= 'A' && h <= 'Z') || (h >= 'a' && h <= 'z')))
    {
        document.getElementById("PvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("PvalidAlert").style.display = "block";
        document.getElementById("parallelogramAns").style.display = "none";
        // console.log(5);
    }
    document.getElementById("parallelogramInputB").value = "";
    document.getElementById("parallelogramInputH").value = "";
})