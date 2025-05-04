document.getElementById("pentagonCalculateBtn").addEventListener("click", function(event){
    const p = document.getElementById("pentagonInputdP").value;
    const b = document.getElementById("pentagonInputdB").value;
    if((p >= 0) && (b >= 0))
    {
        const pentagonArea = 0.5 * p * b;
        
        document.getElementById("pentagonOutput").innerText = pentagonArea;
        document.getElementById("pentagonvalidAlert").style.display = "none";
        document.getElementById("pentagonAns").style.display = "block";
    }
    else if(((p >= 'A' && p <= 'Z') || (p >= 'a' && p <= 'z')) || ((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z')))
    {
        document.getElementById("pentagonvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("pentagonvalidAlert").style.display = "block";
        document.getElementById("pentagonAns").style.display = "none";
    }
    document.getElementById("pentagonInputdP").value = "";
    document.getElementById("pentagonInputdB").value = "";
})