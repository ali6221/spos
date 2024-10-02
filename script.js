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
    
    // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
    setTimeout(() => {
        window.location.href = 'home.html'; // توجيه إلى الصفحة الرئيسية
    }, 1000); // تأخير لمدة ثانية قبل الانتقال
});

// التعامل مع نموذج إنشاء حساب جديد
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // يمكنك إضافة تحقق هنا (مثل التحقق من القيم)
    const registerMessageDiv = document.getElementById('registerMessage');
    registerMessageDiv.classList.remove('hidden');
    registerMessageDiv.innerHTML = `تم إنشاء حساب جديد بنجاح! مرحبًا بك، ${newUsername}!`;
    
    // توجيه المستخدم إلى صفحة تسجيل الدخول بعد فترة
    setTimeout(() => {
        window.location.href = 'login.html'; // توجيه إلى صفحة تسجيل الدخول
    }, 1000); // تأخير لمدة ثانية قبل الانتقال
});
