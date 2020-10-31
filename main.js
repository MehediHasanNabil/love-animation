let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

div3.style.display = 'none';
div4.style.display = 'none';

btn1.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#13896b';
    div4.style.display = 'block';
    div1.remove();
    btn1.remove();
    btn2.remove();
});
btn2.addEventListener('click', () => {
    div3.style.display = 'block';
    div1.remove();
    btn1.remove();
    btn2.remove();
    move();
});

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const move = () => {
    let count = 0;
    setInterval(function () {
        let newDiv = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', 'image/love.png');
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(newDiv);
        newDiv.className = "first";
        newDiv.appendChild(img);
        newDiv.innerHTML = "<div class='text'>&#9825;</div>";
        newDiv.style.left = (randomNum(1, 690) * 2) + "px";
        count++;

        if (count > 18) {
            let id = document.getElementsByClassName('first')[0];
            id.remove();
        }

    }, 100);
}