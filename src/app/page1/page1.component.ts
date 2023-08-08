import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  
}


const tw1 = document.getElementById("tw1")as HTMLInputElement | null;
const tw2 = document.getElementById("tw2")as HTMLInputElement | null;
const tw3 = document.getElementById("tw3")as HTMLInputElement | null;
const tw4 = document.getElementById("tw4")as HTMLInputElement | null;
const tw5 = document.getElementById("tw5")as HTMLInputElement | null;
const tw6 = document.getElementById("tw6")as HTMLInputElement | null;
const tw7 = document.getElementById("tw7")as HTMLInputElement | null;
const tw8 = document.getElementById("tw8")as HTMLInputElement | null;
const tw9 = document.getElementById("tw9")as HTMLInputElement | null;
const tw10 = document.getElementById("tw10")as HTMLInputElement | null;
const tw11 = document.getElementById("tw11")as HTMLInputElement | null;
const tw12 = document.getElementById("tw12")as HTMLInputElement | null;
const tw13 = document.getElementById("tw13")as HTMLInputElement | null;
const tw14 = document.getElementById("tw14")as HTMLInputElement | null;
const tw15 = document.getElementById("tw15")as HTMLInputElement | null;
const tw16 = document.getElementById("tw16")as HTMLInputElement | null;
const tw17 = document.getElementById("tw17")as HTMLInputElement | null;
const tw18 = document.getElementById("tw18")as HTMLInputElement | null;
const tw19 = document.getElementById("tw19")as HTMLInputElement | null;
const tw20 = document.getElementById("tw20")as HTMLInputElement | null;
const tw21 = document.getElementById("tw21")as HTMLInputElement | null;
const tw22 = document.getElementById("tw22")as HTMLInputElement | null;
const tw23 = document.getElementById("tw23")as HTMLInputElement | null;
const tw24 = document.getElementById("tw24")as HTMLInputElement | null;
const tw25 = document.getElementById("tw25")as HTMLInputElement | null;
const tw26 = document.getElementById("tw26")as HTMLInputElement | null;
const tw27 = document.getElementById("tw27")as HTMLInputElement | null;
const tw28 = document.getElementById("tw28")as HTMLInputElement | null;
const tw29 = document.getElementById("tw29")as HTMLInputElement | null;

function r20(){
  if (tw21!=null)
  {
    tw21.style.backgroundColor="black";
  }
  if (tw20!=null)
  {
    console.log(20);
    tw20.style.backgroundColor="red";
  }
  setTimeout(r20,1000);
}

function r21(){
  if (tw22!=null)
  {
    tw22.style.backgroundColor="black";
  }
  if (tw21!=null)
  {
    console.log(21);
    tw21.style.backgroundColor="red";
  }
  setTimeout(r20,1000);
}


function r22(){
  if (tw23!=null)
  {
    tw23.style.backgroundColor="black";
  }
  if (tw22!=null)
  {
    console.log(22);
    tw22.style.backgroundColor="red";
  }
  setTimeout(r21,1000);
}



function r23(){
  if (tw24!=null)
  {
    tw24.style.backgroundColor="black";
  }
  if (tw23!=null)
  {
    console.log(23);
    tw23.style.backgroundColor="red";
  }
  setTimeout(r22,1000);
}


function r24(){
  if (tw25!=null)
  {
    tw25.style.backgroundColor="black";
  }
  if (tw24!=null)
  {
    console.log(24);
    tw24.style.backgroundColor="red";
  }
  setTimeout(r23,1000);
}


function r25(){
  if (tw26!=null)
  {
    tw26.style.backgroundColor="black";
  }
  if (tw25!=null)
  {
    console.log(25);
    tw25.style.backgroundColor="red";
  }
  setTimeout(r24,1000);
}

function r26(){
  if (tw27!=null)
  {
    tw27.style.backgroundColor="black";
  }
  if (tw26!=null)
  {
    console.log(26);
    tw26.style.backgroundColor="red";
  }
  setTimeout(r25,1000);
}

function r27(){  
  if (tw27!=null)
  {
    console.log(27);
    tw27.style.backgroundColor="red";
  }
  setTimeout(r26,1000);
}




// bot node functionalities

function botnode(){  
  r27();
}setTimeout(botnode,10000);

botnode();
