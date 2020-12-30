let myHeading = document.querySelector('h1');
myHeading.onclick = function(){
    if(myHeading.textContent === 'Hello world!'){
        myHeading.textContent = 'Mozilla is cool';
    }else{
        myHeading.textContent = 'Hello world!';
    }
}
let iceCrean = 'chocolate';
if(iceCrean === 'chocolate'){
    alert('我最喜歡巧克力冰淇淋了。');
}else{
    alert('但是巧克力才是我的最愛...');
}
alert('hello!');
/*document.querySelector('h1').onclick = function(){
    alert('別戳我，我怕疼。');
}*/
test();
alert(4*7);
var n = multiply(4,7);
alert(n);
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg'){
        myImage.setAttribute('src','images/mozilla_firefox_logo.jpg');
    }else{
        myImage.setAttribute('src','images/test.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('h1');
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading1.textContent = 'Mozilla is cool, '+storeName;
}
myButton.onclick = function(){
    setUserName();
}
function setUserName(){
    let myName = prompt('請輸入你的名字。');
    if(!myName || myName === null){setUserName();}
    localStorage.setItem('name',myName);
    myHeading1.textContent = 'Mozilla is cool, '+myName;
}

function multiply(num1,num2){
    let result = num1*num2;
    alert(num1+'*'+num2+'='+result);
    return result;
}

function test(){
    document.querySelector('html').onclick = function(){
        alert('別戳我，我怕疼。');
    }
}