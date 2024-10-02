document.getElementById('actionButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    messageDiv.innerHTML = 'شكرًا لزيارتك لموقع Spos!';
});


document.getElementById('actionButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    messageDiv.innerHTML = 'شكرًا لزيارتك لموقع Spos!';
});

// التعامل مع نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // يمكنك إضافة تحقق هنا (مثل التحقق من القيم)
    const loginMessageDiv = document.getElementById('loginMessage');
    loginMessageDiv.classList.remove('hidden');
    loginMessageDiv.innerHTML = `مرحبًا بك، ${username}!`;
});
