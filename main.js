onload = () =>{
    document.body.classList.remove("container");
    const el = document.getElementById('giftMessage');
    if (!el) return;
    const text = `Anh không biết phải nói 
thế nào cho thật hay, chỉ biết trong 
thời gian qua, em là người khiến anh 
quan tâm và nghĩ đến nhiều nhất. Anh thật 
sự có tình cảm với emvà mong rằng 
mình có thể ở bên em, cùng nhau 
tìm hiểu nhau nghiêm túc 
hơn em nhé 
❤️`;
    const chars = Array.from(text);
    el.textContent = '';
    let i = 0;
    const speed = 60;
    function step(){
        el.textContent += chars[i];
        i++;
        if (i < chars.length) {
            setTimeout(step, speed);
        }
    }
    step();
};
