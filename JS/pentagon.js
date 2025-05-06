document.getElementById("pentagonCalculateBtn").addEventListener("click", function(event) {
    const p = document.getElementById("pentagonInputdP").value.trim();
    const b = document.getElementById("pentagonInputdB").value.trim();

    const pNum = p;
    const bNum = b;

    if (!isNaN(pNum) && !isNaN(bNum) && pNum > 0 && bNum > 0) {
        const pentagonArea = 0.5 * pNum * bNum;
        document.getElementById("pentagonOutput").innerText = pentagonArea.toFixed(2);
        document.getElementById("pentagonvalidAlert").style.display = "none";
        document.getElementById("pentagonAns").style.display = "block";

        document.getElementById("triangleInputB").style.outline = "none";
        document.getElementById("triangleInputH").style.outline = "none";
    } else {
        document.getElementById("triangleInputB").style.outline = "2px solid red";
        document.getElementById("triangleInputH").style.outline = "2px solid red";
        
        document.getElementById("pentagonvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("pentagonvalidAlert").style.display = "block";
        document.getElementById("pentagonAns").style.display = "none";
    }

    document.getElementById("pentagonInputdP").value = "";
    document.getElementById("pentagonInputdB").value = "";
});
