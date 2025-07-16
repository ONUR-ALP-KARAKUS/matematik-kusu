/*=============== SSS AKORDİYON ===============*/
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-item.active');
        
        // Eğer tıklanan öğe zaten açık değilse, önce diğer açık olanı kapat
        if(openItem && openItem !== item){
            openItem.classList.remove('active');
        }

        // Tıklanan öğenin durumunu değiştir (aç/kapat)
        item.classList.toggle('active');
    });
});
