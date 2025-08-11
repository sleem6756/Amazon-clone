document.addEventListener('DOMContentLoaded', function() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');

    // مقدار التمرير في كل ضغطة (يمكن تعديله)
    const scrollAmount = 200; // بكسل

    // وظيفة التمرير لليسار
    scrollLeftBtn.addEventListener('click', () => {
        buttonsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // وظيفة التمرير لليمين
    scrollRightBtn.addEventListener('click', () => {
        buttonsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // (اختياري) إخفاء/إظهار الأسهم بناءً على إمكانية التمرير
    function checkScrollability() {
        // إخفاء زر اليسار إذا كنت في البداية
        if (buttonsContainer.scrollLeft === 0) {
            scrollLeftBtn.style.visibility = 'hidden';
        } else {
            scrollLeftBtn.style.visibility = 'visible';
        }

        // إخفاء زر اليمين إذا وصلت للنهاية
        // الفرق بين scrollWidth و clientWidth هو ما يمكن تمريره
        if (buttonsContainer.scrollLeft + buttonsContainer.clientWidth >= buttonsContainer.scrollWidth) {
            scrollRightBtn.style.visibility = 'hidden';
        } else {
            scrollRightBtn.style.visibility = 'visible';
        }
    }

    // استدعاء الدالة عند تحميل الصفحة وأثناء التمرير
    buttonsContainer.addEventListener('scroll', checkScrollability);
    window.addEventListener('resize', checkScrollability); // عند تغيير حجم النافذة
    checkScrollability(); // استدعاء أولي عند التحميل
});
//---------------------------footer-scroller----------------------------//
