const  NetSlary = GrossPay - Deductions;
const BasicSalary = parseFloat(prompt("basicsalry value"));
const Benefits = parseFloat(prompt("benefit value"));

// KRA tax rates.
const incomeTax = [
    if (BasicSalary <=20000)
        incomeTax = "10";
    else if (BasicSalary <= 24000)
        incomeTax = "25";
    else (BasicSalary <= 30000)
        incomeTax = "30";
];
// NHIF values
const nhifRates = [
  if (GrossPay <= 5999)
    Deduction = "150";
    else if (GrossPay >= 5999 <= 7999)
    Deduction = "300"

];
// NSSF Values
const nssfRates = {
employee: 6,
employer: 6
}
