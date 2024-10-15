// script.js
document.getElementById('age-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust age if birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display result
    document.getElementById('result').textContent = `You are ${age} years old.`;
});
