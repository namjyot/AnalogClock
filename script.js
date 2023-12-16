const mode = document.getElementById('mode');
const hour = document.getElementById('hour');
const main = document.getElementById('main');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const circle = document.getElementById('circle');
const image = document.getElementById('image');
const clock = document.getElementById('clock');

setInterval(()=>{
    const time = new Date();
    let hr = time.getHours();
    let mn = time.getMinutes();
    let sc = time.getSeconds();
    if(hr > 12){
        hr -= 12;
    }
    hourDeg = (30 * hr) + (0.5 * mn);
    minDeg = (6 * (mn + 1)) - ((60 - sc) * 0.1)
    secDeg = sc * 6;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
} ,1000);


const toggleMode = () => {
    if(mode.innerHTML == 'Dark'){
        hour.style.backgroundColor = "white";
        main.style.backgroundColor = "rgb(52, 52, 52)";
        box1.style.backgroundColor = "rgb(43, 43, 43)";
        box2.style.backgroundColor = "rgb(0, 0, 0)";
        box1.style.boxShadow = "0px 0px 15px rgb(42, 42, 42)";
        box2.style.boxShadow = "0px 0px 15px rgb(14, 14, 14) inset";
        min.style.backgroundColor = "white";
        sec.style.backgroundColor = "white";
        circle.style.backgroundColor = "white";
        image.style.filter = "invert(1)";
        mode.style.backgroundColor = 'white';
        mode.style.color = 'black';
        clock.style.backgroundColor = 'white';
        clock.style.color = 'black';
        mode.innerHTML = 'Light';
    }
    else{
        main.style.backgroundColor = "white";
        box1.style.backgroundColor = "white";
        box2.style.backgroundColor = "white";
        box1.style.boxShadow = "0px 0px 15px rgb(194, 194, 194)";
        box2.style.boxShadow = "0px 0px 15px rgb(194, 194, 194) inset";
        hour.style.backgroundColor = "rgb(216, 30, 6)";
        min.style.backgroundColor = "rgb(43, 18, 184)";
        sec.style.backgroundColor = "rgb(229, 233, 19)";
        circle.style.backgroundColor = "rgb(0,0,0)";
        image.style.filter = "none";
        mode.style.backgroundColor = 'rgb(31, 31, 31)';
        mode.style.color = 'white';
        clock.style.backgroundColor = 'rgb(31, 31, 31)';
        clock.style.color = 'white';
        mode.innerHTML = 'Dark';
    }
}

const clockFace = () => {
    if(image.getAttribute("src") == 'img/clock_roman.png'){
        image.setAttribute("src", "img/clock.png");
    }
    else{
        image.setAttribute("src", "img/clock_roman.png");
    }
}
