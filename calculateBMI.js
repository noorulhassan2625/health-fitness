
function calculateBMI(event) {
    event.preventDefault();

    const weightKg = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if (isNaN(weightKg) || isNaN(heightCm) || heightCm <= 0) {
        alert("Wrong values");
        return;
    }

    const heightM = heightCm / 100;

    const bmi = weightKg / (heightM * heightM);

    // alert(`Votre BMI est ${bmi.toFixed(2)}`);

    document.getElementById("bmiResult").innerHTML = `<strong>Result:</strong> Your BMI is ${bmi.toFixed(2)}`;

}