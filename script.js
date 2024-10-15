// script.js
document.getElementById('age-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    // حساب العمر
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // تعديل العمر إذا لم يأتي تاريخ الميلاد بعد هذا العام
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // عرض النتيجة
    document.getElementById('result').textContent = `You are ${age} years old.`;
});
