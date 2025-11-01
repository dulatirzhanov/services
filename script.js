(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const school = form.elements['school'].value.trim();
        const message = form.elements['message'].value.trim();

        const subject = encodeURIComponent('Запрос консультации');
        const bodyLines = [
            `Имя: ${name}`,
            `Email: ${email}`,
            `Школа: ${school}`,
            '',
            'Сообщение:',
            message
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailtoUrl = `mailto:dulatirzhanov@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
    });
})();
