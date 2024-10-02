document.getElementById('actionButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    messageDiv.innerHTML = 'شكرًا لزيارتك لموقع Spos!';
});
