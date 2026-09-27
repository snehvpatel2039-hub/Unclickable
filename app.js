let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let a = 100;
let b = 100;

let change_a = (d1) => {
    let k = Math.random();
    let r1 = Math.random();
    if(k < d1/1386 && d1>150){
        a = (d1-150)*(r1);
    }
    else if(d1<=1236){
        a = (d1+150) + (1236-d1)*(r1);
    }
    else{
        a = (d1-150)*(r1);
    }
    console.log(k);
    console.log(r1);
}

let change_b = (d2) => {
    let k2 = Math.random();
    let r2 = Math.random();
    if(k2< d2/580 && d2>150){
        b = (d2-150)*(r2);
    }
    else if(d2<430){
        b = (d2+150) + (430-d2)*(r2);
    }
    else{
        b = (d2-150)*(r2);
    }
    console.log(k2);
    console.log(r2);
}

btn.addEventListener("mouseover", () => {
    change_a(btn.offsetLeft);
    change_b(btn.offsetTop);
    btn.style.left = `${a}px`;
    btn.style.top = `${b}px`;
    console.log(a, b);
});


btn.addEventListener("click", () => {
    body.style.backgroundColor = "red";
});