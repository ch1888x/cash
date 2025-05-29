// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior:'smooth'
            });
        }
    });
});

// 表单提交验证
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('请填写完整信息');
        return;
    }
    // 这里可添加更复杂的验证逻辑，比如邮箱格式等
    alert('信息已提交，感谢您的联系！');
    this.reset();
});
const emailInput = contactForm.querySelector('input[type="email"]');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[a-zA - Z0 - 9_.+-]+@[a-zA - Z0 - 9 -]+\.[a-zA - Z0 - 9 -]+$/;
    if (!emailRegex.test(this.value)) {
        alert('请输入有效的邮箱地址');
        this.value = '';
    }
});
