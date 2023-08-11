import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
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

  
  updateStatus(s1 : string){
      this.status.nativeElement=s1;
  }



  un30(){
    this.tw29.nativeElement.style.backgroundColor = "black";
    this.updateStatus("Node Sent by user Recieved Succesfully !")
  }

  un29(){
    this.tw28.nativeElement.style.backgroundColor = "black";
    this.tw29.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un30();
    }, 500); 
  }

  un28(){
    this.tw27.nativeElement.style.backgroundColor = "black";
    this.tw28.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un29();
    }, 500); 
  }

  un27(){
    this.tw26.nativeElement.style.backgroundColor = "black";
    this.tw27.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un28();
    }, 500); 
  }

  un26(){
    this.tw25.nativeElement.style.backgroundColor = "black";
    this.tw26.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un27();
    }, 500); 
  }

  un25(){
    this.tw24.nativeElement.style.backgroundColor = "black";
    this.tw25.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un26();
    }, 500); 
  }
  un24(){
    this.tw23.nativeElement.style.backgroundColor = "black";
    this.tw24.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un25();
    }, 500); 
  }
  un23(){
    this.tw22.nativeElement.style.backgroundColor = "black";
    this.tw23.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un24();
    }, 500); 
  }
  un22(){
    this.tw21.nativeElement.style.backgroundColor = "black";
    this.tw22.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un23();
    }, 500); 
  }
  un21(){
    this.tw20.nativeElement.style.backgroundColor = "black";
    this.tw21.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un22();
    }, 500); 
  }
  un20(){
    this.tw19.nativeElement.style.backgroundColor = "black";
    this.tw20.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un21();
    }, 500); 
  }
  un19(){
    this.tw18.nativeElement.style.backgroundColor = "black";
    this.tw19.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un20();
    }, 500); 
  }
  un18(){
    this.tw17.nativeElement.style.backgroundColor = "black";
    this.tw18.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un19();
    }, 500); 
  }
  un17(){
    this.tw16.nativeElement.style.backgroundColor = "black";
    this.tw17.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un18();
    }, 500); 
  }
  un16(){
    this.tw15.nativeElement.style.backgroundColor = "black";
    this.tw16.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un17();
    }, 500); 
  }
  un15(){
    this.tw14.nativeElement.style.backgroundColor = "black";
    this.tw15.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un16();
    }, 500); 
  }
  un14(){
    this.tw13.nativeElement.style.backgroundColor = "black";
    this.tw14.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un15();
    }, 500); 
  }
  un13(){
    this.tw12.nativeElement.style.backgroundColor = "black";
    this.tw13.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un14();
    }, 500); 
  }
  un12(){
    this.tw11.nativeElement.style.backgroundColor = "black";
    this.tw12.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un13();
    }, 500); 
  }
  un11(){
    this.tw10.nativeElement.style.backgroundColor = "black";
    this.tw11.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un12();
    }, 500); 
  }
  un10(){
    this.tw9.nativeElement.style.backgroundColor = "black";
    this.tw10.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un11();
    }, 500); 
  }
  un9(){
    this.tw8.nativeElement.style.backgroundColor = "black";
    this.tw9.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un10();
    }, 500); 
  }
  un8(){
    this.tw7.nativeElement.style.backgroundColor = "black";
    this.tw8.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un9();
    }, 500); 
  }
  un7(){
    this.tw6.nativeElement.style.backgroundColor = "black";
    this.tw7.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un8();
    }, 500); 
  }


  un6(){
    this.tw5.nativeElement.style.backgroundColor = "black";
    this.tw6.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un7();
    }, 500); 
  }

  un5(){
    this.tw4.nativeElement.style.backgroundColor = "black";
    this.tw5.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un6();
    }, 500); 
  }


  un4(){
    this.tw3.nativeElement.style.backgroundColor = "black";
    this.tw4.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un5();
    }, 500); 
  }

  un3(){
    this.tw3.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.un4();
    }, 500); 
  }

  sendNode(){
    this.un3();
  }


  // bot node
  bn0(){
    this.tw1.nativeElement.style.backgroundColor = "black";
    this.botNode();
  }

  bn1(){
    this.tw2.nativeElement.style.backgroundColor = "black";
    this.tw1.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn0();
    }, 500); 
  }

  bn2(){
    this.tw3.nativeElement.style.backgroundColor = "black";
    this.tw2.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn1();
    }, 500); 
  }

  bn3(){
    this.tw4.nativeElement.style.backgroundColor = "black";
    this.tw3.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn2();
    }, 500); 
  }

  bn4(){
    this.tw5.nativeElement.style.backgroundColor = "black";
    this.tw4.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn3();
    }, 500); 
  }

  bn5(){
    this.tw6.nativeElement.style.backgroundColor = "black";
    this.tw5.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn4();
    }, 500); 
  }
  bn6(){
    this.tw7.nativeElement.style.backgroundColor = "black";
    this.tw6.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn5();
    }, 500); 
  }
  bn7(){
    this.tw8.nativeElement.style.backgroundColor = "black";
    this.tw7.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn6();
    }, 500); 
  }
  bn8(){
    this.tw9.nativeElement.style.backgroundColor = "black";
    this.tw8.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn7();
    }, 500); 
  }
  bn9(){
    this.tw10.nativeElement.style.backgroundColor = "black";
    this.tw9.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn8();
    }, 500); 
  }
  bn10(){
    this.tw11.nativeElement.style.backgroundColor = "black";
    this.tw10.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn9();
    }, 500); 
  }
  bn11(){
    this.tw12.nativeElement.style.backgroundColor = "black";
    this.tw11.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn10();
    }, 500); 
  }
  bn12(){
    this.tw13.nativeElement.style.backgroundColor = "black";
    this.tw12.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn11();
    }, 500); 
  }
  bn13(){
    this.tw14.nativeElement.style.backgroundColor = "black";
    this.tw13.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn12();
    }, 500); 
  }
  bn14(){
    this.tw15.nativeElement.style.backgroundColor = "black";
    this.tw14.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn13();
    }, 500); 
  }
  bn15(){
    this.tw16.nativeElement.style.backgroundColor = "black";
    this.tw15.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn14();
    }, 500); 
  }
  bn16(){
    this.tw17.nativeElement.style.backgroundColor = "black";
    this.tw16.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn15();
    }, 500); 
  }
  bn17(){
    this.tw18.nativeElement.style.backgroundColor = "black";
    this.tw17.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn16();
    }, 500); 
  }
  bn18(){
    this.tw19.nativeElement.style.backgroundColor = "black";
    this.tw18.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn17();
    }, 500); 
  }
  bn19(){
    this.tw20.nativeElement.style.backgroundColor = "black";
    this.tw19.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn18();
    }, 500); 
  }
  bn20(){
    this.tw21.nativeElement.style.backgroundColor = "black";
    this.tw20.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn19();
    }, 500); 
  }
  bn21(){
    this.tw22.nativeElement.style.backgroundColor = "black";
    this.tw21.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn20();
    }, 500); 
  }
  bn22(){
    this.tw23.nativeElement.style.backgroundColor = "black";
    this.tw22.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn21();
    }, 500); 
  }
  bn23(){
    this.tw24.nativeElement.style.backgroundColor = "black";
    this.tw23.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn22();
    }, 500); 
  }


  bn24(){
    this.tw25.nativeElement.style.backgroundColor = "black";
    this.tw24.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn23();
    }, 500); 
  }

  bn25(){
    this.tw26.nativeElement.style.backgroundColor = "black";
    this.tw25.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn24();
    }, 500); 
  }


  bn26(){
    this.tw27.nativeElement.style.backgroundColor = "black";
    this.tw26.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn25();
    }, 500); 
  }

  bn27(){
    this.tw27.nativeElement.style.backgroundColor = "red";
    setTimeout(() => {
      this.bn26();
    }, 500); 
  }

  botNode(){
    let x = Math.random();
    setTimeout(() => {
      this.bn27();
    }, x*20000); 
  }

  ngOnInit(){
    this.botNode();
  }
}



