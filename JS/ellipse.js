document.getElementById("ellipseCalculateBtn").addEventListener("click", function(event) {
    const a = document.getElementById("ellipseInputdA").value.trim();
    const b = document.getElementById("ellipseInputdB").value.trim();

    const aNum = a;
    const bNum = b;
    if (!isNaN(aNum) && !isNaN(bNum) && aNum > 0 && bNum > 0) {
        const ellipseArea = 3.1416 * aNum * bNum;

        document.getElementById("ellipseOutput").innerText = ellipseArea.toFixed(2);
        document.getElementById("EvalidAlert").style.display = "none";
        document.getElementById("ellipseAns").style.display = "block";
    } else {
        document.getElementById("EvalidAlert").innerText = "Please Enter a Valid Number!";
        document.getElementById("EvalidAlert").style.display = "block";
        document.getElementById("ellipseAns").style.display = "none";
    }

    document.getElementById("ellipseInputdA").value = "";
    document.getElementById("ellipseInputdB").value = "";
});
