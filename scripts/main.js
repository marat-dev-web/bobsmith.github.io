
var myButton = document.querySelector('button');
// var myButton2 = document.querySelector('button');

var myHeading = document.querySelector('h1');
var myHeading2 = myHeading;
//alert(myHeading2);
//myHeading.textContent = 'Hello world!';
//alert(myHeading);


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}

function setUserNameClean() {
  // localStorage.setItem('name', myName);
  myHeading.innerHTML  = myHeading2;
}

if(!localStorage.getItem('name')) {
  // setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}

// myButton2.onclick = function() {
//   setUserNameClean();
//   // myHeading.innerHTML  = myHeading2;
// }




myHeading.onclick = function() {
	// var myHeadingColor = myHeading.getAttribute('color');
	// alert(myHeadingColor);
	// var myHeading = document.querySelector('h1');
	// var myHeading = 
	//var myClass = myHeading.getAttribute('class');
	if(myHeading.textContent === 'Мой главный заголовок') {
		myHeading.textContent = 'Мой ВТОРОЙ! заголовок';
		myHeading.setAttribute('class','header-h1');
		//alert(myHeading.textContent)
	} else {
		myHeading.textContent = 'Мой главный заголовок';
		myHeading.setAttribute('class','h1');
		//myHeading.setAttribute('class','header-h1-2');
		//alert(myHeading.textContent)
	}
}




var myImage = document.querySelector('img');
//alert(myImage);
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	var myAlt = myImage.getAttribute('alt');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src','images/firefox2.png');
	} else {
		myImage.setAttribute('src','images/firefox-icon.png');
	}
	if(myAlt === 'Моё тестовое изображение') {
		myImage.setAttribute('alt','Моё тестовое изображение2');
	} else {
		myImage.setAttribute('alt','Моё тестовое изображение');
	}
}

