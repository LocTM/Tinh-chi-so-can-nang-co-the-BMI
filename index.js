function calculateBMI() {
    let weight = +document.getElementById("weight").value;
    let height =document.getElementById("height").value;
    let bmi = weight / (height * height);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br>";
    if (bmi < 18.5) {
        resultElement.innerText += "Tình trạng của bạn: Underweight";
    } else if (bmi < 25.0) {
        resultElement.innerText += "Tình trạng của bạn: Normal";
    } else if (bmi < 30.0) {
        resultElement.innerText += "Tình trạng của bạn: Overweight";
    } else {
        resultElement.innerText += "Tình trạng của bạn: Obese";
    }
}
