// انتظر حتى يتم تحميل كل محتوى الصفحة
document.addEventListener('DOMContentLoaded', () => {

    // الإمساك بزر الهمبرغر وقائمة الروابط
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // وظيفة تشغيل القائمة
    function toggleMenu() {
        // تفعيل/إلغاء تفعيل كلاس .active
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    // عند الضغط على زر الهمبرغر
    hamburger.addEventListener('click', toggleMenu);

    // (إضافة مميزة): إغلاق القائمة عند الضغط على أي رابط فيها
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(); // أغلق القائمة
            }
        });
    });

    // (إضافة مميزة أخرى): تنقل سلس (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // منع السلوك الافتراضي

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // حركة ناعمة
            });
        });
    });

});