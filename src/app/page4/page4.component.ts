import { Component, Renderer2, ElementRef, ViewChild, SimpleChange } from '@angular/core';

var uncounter = 0;
var bncounter = 31;
var collision = false;
var backoffclicked=false; 
var k = 0; // backoff parameter
var signalcolor = "cyan";
var listening = 0;
var botsigreached = false;
var usersigreached = false;
var collisionoccurredthistime = false;

var messageaftercollisionifpacketsizeisless = "Collision occurred , but it went undetected as the packet size was too low";
var messageaftercollisionifpacketsizeislarge = "Collision occurred and it was detected by the user node";

var messageAfterReach = "Node Sent by user Recieved Succesfully !";
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  @ViewChild('tw1',{static: true}) tw1!: ElementRef; 
  @ViewChild('tw2',{static: true}) tw2!: ElementRef; 
  @ViewChild('tw3',{static: true}) tw3!: ElementRef; 
  @ViewChild('tw4',{static: true}) tw4!: ElementRef; 
  @ViewChild('tw5',{static: true}) tw5!: ElementRef; 
  @ViewChild('tw6',{static: true}) tw6!: ElementRef; 
  @ViewChild('tw7',{static: true}) tw7!: ElementRef; 
  @ViewChild('tw8',{static: true}) tw8!: ElementRef; 
  @ViewChild('tw9',{static: true}) tw9!: ElementRef; 
  @ViewChild('tw10',{static: true}) tw10!: ElementRef; 
  @ViewChild('tw11',{static: true}) tw11!: ElementRef; 
  @ViewChild('tw12',{static: true}) tw12!: ElementRef; 
  @ViewChild('tw13',{static: true}) tw13!: ElementRef; 
  @ViewChild('tw14',{static: true}) tw14!: ElementRef; 
  @ViewChild('tw15',{static: true}) tw15!: ElementRef; 
  @ViewChild('tw16',{static: true}) tw16!: ElementRef; 
  @ViewChild('tw17',{static: true}) tw17!: ElementRef; 
  @ViewChild('tw18',{static: true}) tw18!: ElementRef; 
  @ViewChild('tw19',{static: true}) tw19!: ElementRef; 
  @ViewChild('tw20',{static: true}) tw20!: ElementRef; 
  @ViewChild('tw21',{static: true}) tw21!: ElementRef; 
  @ViewChild('tw22',{static: true}) tw22!: ElementRef; 
  @ViewChild('tw23',{static: true}) tw23!: ElementRef; 
  @ViewChild('tw24',{static: true}) tw24!: ElementRef; 
  @ViewChild('tw25',{static: true}) tw25!: ElementRef; 
  @ViewChild('tw26',{static: true}) tw26!: ElementRef; 
  @ViewChild('tw27',{static: true}) tw27!: ElementRef; 
  @ViewChild('tw28',{static: true}) tw28!: ElementRef; 
  @ViewChild('tw29',{static: true}) tw29!: ElementRef; 
  @ViewChild('status',{static: true}) status!: ElementRef; 
  @ViewChild('inputk',{static: true}) inputk!: ElementRef; 
  @ViewChild('packetsize',{static: true}) packetsize!: ElementRef; 
  @ViewChild('usernode',{static: true}) usernode!: ElementRef; 

  // network speed = 0.5 MBPS

  
  statusDisplay(s1: string) {
    if (s1 === "Collision occurred!")
    {

      if (collisionoccurredthistime === false)
      {
      collisionoccurredthistime = true;
      uncounter=0;
      if (listening<0)
      {
        if (this.packetsize.nativeElement.value < 15)
        {
          s1 = messageaftercollisionifpacketsizeisless;
        }
        else{
          s1="This case wont happen";
        }
        this.status.nativeElement.innerHTML = "Status : <br><br>"+s1;
      }
      else
      {
        if (this.packetsize.nativeElement.value >= 15)
        {
          s1 = messageaftercollisionifpacketsizeislarge

        }
        else{
          s1 = "The collision was detected since the collision occurred near the user node , If it occurred farer from the current position with respect to user node, it will go undetected for this packet size";
        }
        this.status.nativeElement.innerHTML = "Status : <br><br>"+s1;
      }
      }
    }
    else{
      this.status.nativeElement.innerHTML = "Status : <br><br>"+s1;
    }
  }


  backoff(){
    backoffclicked=true;
  }

  kcheck(){
    console.log(k);
    console.log(this.inputk.nativeElement.value);
    
    
    if (this.inputk.nativeElement.value == k)
    {
      alert("correct !"); 
    }
    else{
      alert("wrong !");
    }
  }


  un33(){
    if (botsigreached)
    {
      signalcolor="cyan";
    }
    this.usernode.nativeElement.innerHTML="User Node";
    usersigreached = true;
    uncounter=0;
    this.tw29.nativeElement.style.backgroundColor = "black";
  }


  un32(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    usersigreached = true;
    this.tw28.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      setTimeout(() => {
        this.un33();
      }, 500); 
    }
  }



  un31(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    usersigreached = true;
    this.tw27.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      setTimeout(() => {
        this.un32();
      }, 500); 
    }
  }

  un30(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    usersigreached = true;
    this.tw26.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      setTimeout(() => {
        this.un31();
      }, 500); 
    }
  }

  un29(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw25.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw29.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un30();
      }, 500); 
    }
  }

  un28(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw24.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw28.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un29();
      }, 500); 
    }
  }

  un27(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw23.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw27.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un28();
      }, 500); 
    }
  }

  un26(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw22.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw26.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un27();
      }, 500); 
    }
  }

  un25(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw21.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw25.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un26();
      }, 500); 
    }
  }
  un24(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw20.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw24.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un25();
      }, 500); 
    }
  }
  un23(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw19.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw23.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un24();
      }, 500); 
    }
  }
  un22(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw18.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw22.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un23();
      }, 500); 
    }
  }
  un21(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw17.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw21.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un22();
      }, 500); 
    }
  }
  un20(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw16.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw20.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un21();
      }, 500); 
    }
  }
  un19(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw15.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw19.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un20();
      }, 500); 
    }
  }
  un18(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw14.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw18.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un19();
      }, 500); 
    }
  }
  un17(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw13.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw17.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un18();
      }, 500); 
    }
  }
  un16(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw12.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw16.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un17();
      }, 500); 
    }
  }
  un15(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw11.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw15.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un16();
      }, 500); 
    }
  }
  un14(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw10.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw14.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un15();
      }, 500); 
    }
  }

  un13(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw9.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw13.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un14();
      }, 500); 
    }
  }

  un12(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw8.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw12.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un13();
      }, 500); 
    }
  }


  un11(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw7.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw11.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un12();
      }, 500); 
    }
  }


  un10(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw6.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw10.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un11();
      }, 500); 
    }
  }

  un9(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw5.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw9.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un10();
      }, 500); 
    }
  }
  un8(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw4.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw8.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un9();
      }, 500); 
    }
  }

  un7(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw3.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw7.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un8();
      }, 500); 
    }
  }


  un6(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw2.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw6.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un7();
      }, 500); 
    }
  }

  un5(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    this.tw1.nativeElement.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw5.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un6();
      }, 500); 
    }
  }


  un4(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw4.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un5();
      }, 500); 
    }
  }

  
  un3(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw3.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un4();
      }, 500); 
    }
  }


  un2(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw2.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un3();
      }, 500); 
    }
  }

  un1(){
    uncounter++;
    listening--;
    if (listening === 0)
    {
      this.usernode.nativeElement.innerHTML="User Node : Sending Data"
    }
    if (Math.abs(uncounter-bncounter)<=1)
    {
      k++;
      collision=true;
      signalcolor="red";
      this.statusDisplay("Collision occurred!");
      messageAfterReach="Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked){
      this.statusDisplay("User Clicked on Back Off");
      uncounter=0;
      setTimeout(() => {
        this.sendNode();
      },x*10000);
    }
    else
    {
      this.tw1.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.un2();
      }, 500); 
    }
  }

  sendNode(){ 
    collisionoccurredthistime=false;
    usersigreached=false;
    listening = 2*this.packetsize.nativeElement.value;
    console.log(listening);
    signalcolor = "cyan";
    
    if (this.packetsize.nativeElement.value === '')
    {
      alert("enter packet size !")
    }   
    else
    {
      if (uncounter > 0)
      {
        alert("Already Sending one message !");
      }
      else{
        messageAfterReach="Node Sent by user Recieved Succesfully";
        backoffclicked=false;
        uncounter=0;
        this.usernode.nativeElement.innerHTML = "User Node : Sending Data <br> Listening to the channel"
        this.statusDisplay("Signal is being sent from User Node ")
        this.un1();
      }
    }
  }


  // bot node
  bn0(){
    bncounter=31;
    botsigreached = true;
    this.tw1.nativeElement.style.backgroundColor = "black";
    if (usersigreached)
    {
      signalcolor = "cyan";
    }
      this.botNode();
  }

  bn1(){
    bncounter--;
    this.tw2.nativeElement.style.backgroundColor = "black";
    {
      this.tw1.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn0();
      }, 500); 
    }
  }

  bn2(){
    bncounter--;
    this.tw3.nativeElement.style.backgroundColor = "black";

    {
      this.tw2.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn1();
      }, 500); 
    }
  }

  bn3(){
    bncounter--;
    this.tw4.nativeElement.style.backgroundColor = "black";

    {
      this.tw3.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn2();
      }, 500); 
    }
  }

  bn4(){
    bncounter--;
    this.tw5.nativeElement.style.backgroundColor = "black";

    {
      this.tw4.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn3();
      }, 500); 
    }
  }

  bn5(){
    bncounter--;
    this.tw6.nativeElement.style.backgroundColor = "black";

    this.tw5.nativeElement.style.backgroundColor = signalcolor;
    setTimeout(() => {
      this.bn4();
    }, 500); 
  }
  bn6(){
    bncounter--;
    this.tw7.nativeElement.style.backgroundColor = "black";

    {
      this.tw6.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn5();
      }, 500); 
    }
  }
  bn7(){
    bncounter--;
    this.tw8.nativeElement.style.backgroundColor = "black";

    {
      this.tw7.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn6();
      }, 500); 
    }
  }
  bn8(){
    bncounter--;
    this.tw9.nativeElement.style.backgroundColor = "black";

    {
      this.tw8.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn7();
      }, 500); 
    }
  }
  bn9(){
    bncounter--;
    this.tw10.nativeElement.style.backgroundColor = "black";

    {
      this.tw9.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn8();
      }, 500); 
    }
  }
  bn10(){
    bncounter--;
    this.tw11.nativeElement.style.backgroundColor = "black";
      this.tw10.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn9();
      }, 500); 
  }
  bn11(){
    bncounter--;
    this.tw12.nativeElement.style.backgroundColor = "black";
      this.tw11.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn10();
      }, 500); 
    
  }
  bn12(){
    bncounter--;
    this.tw13.nativeElement.style.backgroundColor = "black";
    {
      this.tw12.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn11();
      }, 500); 
    }
  }
  bn13(){
    bncounter--;
    this.tw14.nativeElement.style.backgroundColor = "black";
    {
      this.tw13.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn12();
      }, 500); 
    }
  }
  bn14(){
    bncounter--;
    this.tw15.nativeElement.style.backgroundColor = "black";
    {
      this.tw14.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn13();
      }, 500); 
    }
  }
  bn15(){
    bncounter--;
    this.tw16.nativeElement.style.backgroundColor = "black";
    {
      this.tw15.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn14();
      }, 500); 
    }
  }
  bn16(){
    bncounter--;
    this.tw17.nativeElement.style.backgroundColor = "black";
    {
      this.tw16.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn15();
      }, 500); 
    }
  }
  bn17(){
    bncounter--;
    this.tw18.nativeElement.style.backgroundColor = "black";
    {
      this.tw17.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn16();
      }, 500); 
    }
  }
  bn18(){
    bncounter--;
    this.tw19.nativeElement.style.backgroundColor = "black";
    {
      this.tw18.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn17();
      }, 500); 
    }
  }
  bn19(){
    bncounter--;
    this.tw20.nativeElement.style.backgroundColor = "black";

    {
      this.tw19.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn18();
      }, 500); 
    }
  }
  bn20(){
    bncounter--;
    this.tw21.nativeElement.style.backgroundColor = "black";

    {
      this.tw20.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn19();
      }, 500); 
    }
  }

  bn21(){
    bncounter--;
    this.tw22.nativeElement.style.backgroundColor = "black";

    {
      this.tw21.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn20();
      }, 500); 
    }
  }
  bn22(){
    bncounter--;
    this.tw23.nativeElement.style.backgroundColor = "black";

    {
      this.tw22.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn21();
      }, 500); 
    }
  }

  bn23(){
    bncounter--;
    this.tw24.nativeElement.style.backgroundColor = "black";

    {
      this.tw23.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn22();
      }, 500); 
    }
  }


  bn24(){
    bncounter--;
    this.tw25.nativeElement.style.backgroundColor = "black";

    {
      this.tw24.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn23();
      }, 500); 
    }
  }

  bn25(){
    bncounter--;
    this.tw26.nativeElement.style.backgroundColor = "black";

    {
      this.tw25.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn24();
      }, 500); 
    }
  }


  bn26(){
    bncounter--;
    this.tw27.nativeElement.style.backgroundColor = "black";

    {
      this.tw26.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn25();
      }, 500); 
    }
  }

  bn27(){
    bncounter--;
    this.tw28.nativeElement.style.backgroundColor = "black";

    {
      this.tw27.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn26();
      }, 500); 
    }
  }

  bn28(){
    bncounter--;
    this.tw29.nativeElement.style.backgroundColor = "black";
    {
      this.tw28.nativeElement.style.backgroundColor = signalcolor;
      setTimeout(() => {
        this.bn27();
      }, 500); 
    }
  }

  bn29(){
    bncounter--;
    this.tw29.nativeElement.style.backgroundColor = signalcolor;
    setTimeout(() => {
      this.bn28();
    }, 500); 
  }

  botNode(){
    if (bncounter!=31)
    {
      setTimeout(() => {
        this.botNode();
      },1000);
    }
    else{
    bncounter=31;
    collision=false;
    botsigreached=false;
    let x = Math.random();
    setTimeout(() => {
      this.bn29();
    }, x*40000); 
    }
  }

  ngOnInit(){
    signalcolor = "cyan"
    this.botNode();
  }
}
