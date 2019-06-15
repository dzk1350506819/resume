var btn = document.getElementsByTagName('button');
console.log(btn);
btn[0].innerHTML = 'hello';
btn[1].innerHTML = 'self-introduction';
btn[0].addEventListener('click',popup,false);
btn[1].addEventListener("click",addtext,false);
var count = 0;
function popup() {
    alert('你好，欢迎查看我的简历，我叫段泽昆！')
}

function addtext() {
    
    var span = document.getElementsByTagName('span')[0];
    if(count%2===0){
        span.textContent = "My name is Emlir,I like javascript,html,css,I can't study well,but i still study hard!";
        btn[1].innerHTML = 'close';
        count++;
    }else{
        span.textContent = "";
        count++;
    }
    
}



 var time = new Date();

 var currentTime = time.getHours();
 var strong = document.getElementsByTagName('strong')[0];

if (currentTime > 18 || currentTime<=6){
    let text = document.createTextNode('晚上好！')
    strong.appendChild(text);
    strong.style.color = "#fff";
}else if(currentTime >6 && currentTime<12){
    let text = document.createTextNode('早上好！')
    strong.appendChild(text);
    strong.style.color = "#296c73";
}else if(currentTime >12 && currentTime<15){
    let text = document.createTextNode('中午好！')
    strong.appendChild(text);
    strong.style.color = "#0f0692";
}else{
    let text = document.createTextNode('下午好！')
    strong.appendChild(text);
    strong.style.color = "#cc27b7"; 
}