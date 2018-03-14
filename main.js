

let pos = 0,
	wheelpos = 0,
	box = document.querySelectorAll('.box'),
	boxHeight = document.querySelector('.box').scrollHeight;

let pertama = document.querySelector('.pertama'),
	kedua = document.querySelector('.kedua'),
	ketiga = document.querySelector('.ketiga'),
	keempat = document.querySelector('.keempat');



let screenHeight = window.innerHeight,
	initScreen  = 0,
	screenTimes2 = screenHeight*2,
	screenTimes3 = screenHeight*3,
	screenPlus5 = screenHeight,
	screenTimes2Plus5 = screenHeight*2,
	screen2680 = 2680;
	screenTimes4 = screenHeight*3+5;

for(let i=0; i<box.length; i++){
	box[i].style.height = `${screenHeight}px`;
}

let falldown = false;

//_______________________listener remove______________________________________________

let pertamaRem = function(){
	pertama.removeEventListener('wheel', makescrollOne);
}
let keduaRem = function(){
	kedua.removeEventListener('wheel', makescrollTwo);
}
let ketigaRem = function(){
	ketiga.removeEventListener('wheel', makescrollThree);
}
let keempatRem = function(){
	keempat.removeEventListener('wheel', makescrollFour);
}

//______________________________listener add_____________________________________________
let pertamaAdd = function(){
	pertama.addEventListener('wheel', makescrollOne);
}
let keduaAdd = function(){
	kedua.addEventListener('wheel', makescrollTwo);
}
let ketigaAdd = function(){
	ketiga.addEventListener('wheel', makescrollThree);
}
let keempatAdd = function(){
	keempat.addEventListener('wheel', makescrollFour);
}
//_______________________screen height construct____________________________________


function one(wow, satu, dua, tiga, empat, lima, enam, tujuh){
	if(wow.deltaY> 0){
		function scrl(){
			if(tujuh){
				return tujuh;
			}
			pos+=4;
			let timeout = setTimeout(function(){
				scrl();
			},1);
			window.scroll(0, pos);
			if(pos>=lima){
				clearTimeout(timeout);
			}
		}
		scrl();
		if(satu){
			satu();	
		}
		if(dua){
			dua();
		}
	}else{
		function scrUp(){
			pos-=4;
			let timeout = setTimeout(function(){
				scrUp();
			},1);
			window.scroll(0, pos);
			if(pos<=enam){
				clearTimeout(timeout);
			}
		}
		scrUp();
		tiga();
		if(empat){
			empat();
		}
	}
}



function makescrollOne(e){
	one(e, pertamaRem, keduaAdd, pertamaAdd, null, screenHeight, initScreen);
}

function makescrollTwo(e){
	one(e, keduaRem, ketigaAdd, pertamaAdd, keduaRem, screenTimes2, initScreen);
}

function makescrollThree(e){
	one(e, ketigaRem, keempatAdd, keduaAdd, ketigaRem, screenTimes3, screenPlus5);
}

function makescrollFour(e){
	one(e, null, null, ketigaAdd, keempatRem, null, screenTimes2Plus5, falldown);
}


pertama.addEventListener('wheel', makescrollOne);

kedua.addEventListener('wheel', makescrollTwo );

ketiga.addEventListener('wheel', makescrollThree );

keempat.addEventListener('wheel', makescrollFour );


//	JALAN MASIH PANJANG.... !!!!
//OK 20% I THINK....

//14th March, 10:29 am... All WOrk but the code is freakin redundant, try to save some bits by making the code modular
// Anyway, it works (at least in this case)... 
//14th March, 4:39 am... The code is much more modular, but if there will be a custom in a section, it takes time for adjustment
//Anyway, still getting closer...


//IMPORTANT...!!!! window.innerHeight dont work for IE, consider a fallback...

