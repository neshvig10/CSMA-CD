import React, { useEffect, useRef, useState } from "react";
import Message from "../../components/message/message";
import "./page3.css";

const PageTwo = () => {
  const uncounter = useRef(0);
  const bncounter = useRef(31);
  const messageAfterReach = useRef(
    "Message Sent by user Recieved Succesfully !"
  );
  var collision = false;
  var backoffclicked = false;
  var k = 0; // backoff parameter
  const signalcolor = useRef("cyan");
  var listening = 0;
  var botsigreached = false;
  var usersigreached = false;
  var collisionoccurredthistime = false;

  var messageaftercollisionifpacketsizeisless =
    "Collision occurred , but it went undetected as the packet size was too low";
  var messageaftercollisionifpacketsizeislarge =
    "Collision occurred and it was detected by the user node";

  const tw1 = useRef();
  const tw2 = useRef();
  const tw3 = useRef();
  const tw4 = useRef();
  const tw5 = useRef();
  const tw6 = useRef();
  const tw7 = useRef();
  const tw8 = useRef();
  const tw9 = useRef();
  const tw10 = useRef();
  const tw11 = useRef();
  const tw12 = useRef();
  const tw13 = useRef();
  const tw14 = useRef();
  const tw15 = useRef();
  const tw16 = useRef();
  const tw17 = useRef();
  const tw18 = useRef();
  const tw19 = useRef();
  const tw20 = useRef();
  const tw21 = useRef();
  const tw22 = useRef();
  const tw23 = useRef();
  const tw24 = useRef();
  const tw25 = useRef();
  const tw26 = useRef();
  const tw27 = useRef();
  const tw28 = useRef();
  const tw29 = useRef();
  const inputk = useRef();
  const [status,setStatus] = useState();
  const usernode = useRef("User Node");
  const packetsize = useRef();

  // network speed = 0.5 MBPS

  function changecolortoblack() {
    tw1.current.style.backgroundColor = "black";
    tw2.current.style.backgroundColor = "black";
    tw3.current.style.backgroundColor = "black";
    tw4.current.style.backgroundColor = "black";
    tw5.current.style.backgroundColor = "black";
    tw6.current.style.backgroundColor = "black";
    tw7.current.style.backgroundColor = "black";
    tw8.current.style.backgroundColor = "black";
    tw9.current.style.backgroundColor = "black";
    tw10.current.style.backgroundColor = "black";
    tw11.current.style.backgroundColor = "black";
    tw12.current.style.backgroundColor = "black";
    tw13.current.style.backgroundColor = "black";
    tw14.current.style.backgroundColor = "black";
    tw15.current.style.backgroundColor = "black";
    tw16.current.style.backgroundColor = "black";
    tw17.current.style.backgroundColor = "black";
    tw18.current.style.backgroundColor = "black";
    tw19.current.style.backgroundColor = "black";
    tw20.current.style.backgroundColor = "black";
    tw21.current.style.backgroundColor = "black";
    tw22.current.style.backgroundColor = "black";
    tw23.current.style.backgroundColor = "black";
    tw24.current.style.backgroundColor = "black";
    tw25.current.style.backgroundColor = "black";
    tw26.current.style.backgroundColor = "black";
    tw27.current.style.backgroundColor = "black";
    tw28.current.style.backgroundColor = "black";
    tw29.current.style.backgroundColor = "black";
  }

  function statusDisplay(s1) {
    if (s1 === "Collision occurred!") {
      if (collisionoccurredthistime === false) {
        collisionoccurredthistime = true;
        uncounter.current = 0;
        if (listening < 0) {
          s1 = messageaftercollisionifpacketsizeisless;
          setStatus(s1);
        } else {
          s1 = messageaftercollisionifpacketsizeislarge;
          setStatus(s1);
        }
      }
    } else {
      setStatus(s1);
    }
  }

  function backoff() {
    backoffclicked = true;
  }

  function kcheck() {
    console.log(k);
    console.log(inputk.current.value);

    if (inputk.current.value == k) {
      alert("correct !");
    } else {
      alert("wrong !");
    }
  }

  function un33() {
    if (botsigreached) {
      signalcolor.current = "cyan";
    }
    statusDisplay(messageAfterReach.current);
    usernode.current = "User Node";
    usersigreached = true;
    uncounter.current = 0;
    tw29.current.style.backgroundColor = "black";
  }

  function un32() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    usersigreached = true;
    tw28.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else{
      setTimeout(() => {
        un33();
      }, 500);
    }
  }

  function un31() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    usersigreached = true;
    tw27.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else{
      setTimeout(() => {
        un32();
      }, 500);
    }
  }

  function un30() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    usersigreached = true;
    tw26.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else {
      setTimeout(() => {
        un31();
      }, 500);
    }
  }

  function un29() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw25.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw29.current !== null) {
      tw29.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un30();
      }, 500);
    }
  }

  function un28() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw24.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw28.current !== null) {
      tw28.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un29();
      }, 500);
    }
  }

  function un27() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw23.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw27.current !== null) {
      tw27.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un28();
      }, 500);
    }
  }

  function un26() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw22.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw26.current !== null) {
      tw26.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un27();
      }, 500);
    }
  }

  function un25() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw21.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw25.current !== null) {
      tw25.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un26();
      }, 500);
    }
  }
  function un24() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw20.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw24.current !== null) {
      tw24.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un25();
      }, 500);
    }
  }
  function un23() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw19.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw23.current !== null) {
      tw23.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un24();
      }, 500);
    }
  }
  function un22() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw18.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw22.current !== null) {
      tw22.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un23();
      }, 500);
    }
  }
  function un21() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw17.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw21.current !== null) {
      tw21.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un22();
      }, 500);
    }
  }
  function un20() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw16.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw20.current !== null) {
      tw20.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un21();
      }, 500);
    }
  }
  function un19() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw15.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw19.current !== null) {
      tw19.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un20();
      }, 500);
    }
  }
  function un18() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw14.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw18.current !== null) {
      tw18.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un19();
      }, 500);
    }
  }
  function un17() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw13.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw17.current !== null) {
      tw17.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un18();
      }, 500);
    }
  }
  function un16() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw12.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw16.current !== null) {
      tw16.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un17();
      }, 500);
    }
  }
  function un15() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw11.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw15.current !== null) {
      tw15.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un16();
      }, 500);
    }
  }
  function un14() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw10.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw14.current !== null) {
      tw14.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un15();
      }, 500);
    }
  }

  function un13() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw9.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw13.current !== null) {
      tw13.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un14();
      }, 500);
    }
  }

  function un12() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw8.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw12.current !== null) {
      tw12.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un13();
      }, 500);
    }
  }

  function un11() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw7.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw11.current !== null) {
      tw11.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un12();
      }, 500);
    }
  }

  function un10() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw6.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw10.current !== null) {
      tw10.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un11();
      }, 500);
    }
  }

  function un9() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw5.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw9.current !== null) {
      tw9.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un10();
      }, 500);
    }
  }
  function un8() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw4.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw8.current !== null) {
      tw8.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un9();
      }, 500);
    }
  }

  function un7() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw3.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw7.current !== null) {
      tw7.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un8();
      }, 500);
    }
  }

  function un6() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw2.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw6.current !== null) {
      tw6.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un7();
      }, 500);
    }
  }

  function un5() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    tw1.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw5.current !== null) {
      tw5.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un6();
      }, 500);
    }
  }

  function un4() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw4.current !== null) {
      tw4.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un5();
      }, 500);
    }
  }

  function un3() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw3.current !== null) {
      tw3.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un4();
      }, 500);
    }
  }

  function un2() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw2.current !== null) {
      tw2.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un3();
      }, 500);
    }
  }

  function un1() {
    uncounter.current = uncounter.current + 1;
    listening--;
    if (listening === 0) {
      usernode.current = "User Node : Sending Data";
    }
    if (Math.abs(uncounter.current - bncounter.current) <= 1) {
      k++;
      collision = true;
      signalcolor.current = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach.current = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else {
      tw1.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        un2();
      }, 500);
    }
  }

  function sendNode() {
    collisionoccurredthistime = false;
    usersigreached = false;
    listening = 2 * packetsize.current.value;
    console.log(listening);
    signalcolor.current = "cyan";

    if (packetsize.current.value === "") {
      alert("enter packet size !");
    } else {
      if (uncounter.current > 0) {
        alert("Already Sending one message !");
      } else {
        messageAfterReach.current = "Node Sent by user Recieved Succesfully";
        backoffclicked = false;
        uncounter.current = 0;
        usernode.current =
          "User Node : Sending Data <br> Listening to the channel";
        statusDisplay("Signal is being sent from User Node ");
        un1();
      }
    }
  }

  // bot node
  function bn0() {
    console.log("bn",bncounter,uncounter);
    bncounter.current = 31;
    botsigreached = true;
    if (tw1.current) tw1.current.style.backgroundColor = "black";
    if (usersigreached) {
      signalcolor.current = "cyan";
    }
    botNode();
  }

  function bn1() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw2.current) tw2.current.style.backgroundColor = "black";
    else console.error("tw2.current is null or undefined");
  
    if (tw1.current) {
      tw1.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn0(), 500);
    } else console.error("tw1.current is null or undefined");
  }
  
  function bn2() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw3.current) tw3.current.style.backgroundColor = "black";
    else console.error("tw3.current is null or undefined");
  
    if (tw2.current) {
      tw2.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn1(), 500);
    } else console.error("tw2.current is null or undefined");
  }
  
  function bn3() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw4.current) tw4.current.style.backgroundColor = "black";
    else console.error("tw4.current is null or undefined");
  
    if (tw3.current) {
      tw3.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn2(), 500);
    } else console.error("tw3.current is null or undefined");
  }
  
  function bn4() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw5.current) tw5.current.style.backgroundColor = "black";
    else console.error("tw5.current is null or undefined");
  
    if (tw4.current) {
      tw4.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn3(), 500);
    } else console.error("tw4.current is null or undefined");
  }
  
  function bn5() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw6.current) tw6.current.style.backgroundColor = "black";
    else console.error("tw6.current is null or undefined");
  
    if (tw5.current) {
      tw5.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn4(), 500);
    } else console.error("tw5.current is null or undefined");
  }
  
  function bn6() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw7.current) tw7.current.style.backgroundColor = "black";
    else console.error("tw7.current is null or undefined");
  
    if (tw6.current) {
      tw6.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn5(), 500);
    } else console.error("tw6.current is null or undefined");
  }
  
  function bn7() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw8.current) tw8.current.style.backgroundColor = "black";
    else console.error("tw8.current is null or undefined");
  
    if (tw7.current) {
      tw7.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn6(), 500);
    } else console.error("tw7.current is null or undefined");
  }
  
  function bn8() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw9.current) tw9.current.style.backgroundColor = "black";
    else console.error("tw9.current is null or undefined");
  
    if (tw8.current) {
      tw8.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn7(), 500);
    } else console.error("tw8.current is null or undefined");
  }
  
  function bn9() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw10.current) tw10.current.style.backgroundColor = "black";
    else console.error("tw10.current is null or undefined");
  
    if (tw9.current) {
      tw9.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn8(), 500);
    } else console.error("tw9.current is null or undefined");
  }
  
  function bn10() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw11.current) tw11.current.style.backgroundColor = "black";
    else console.error("tw11.current is null or undefined");
  
    if (tw10.current) {
      tw10.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn9(), 500);
    } else console.error("tw10.current is null or undefined");
  }
  
  function bn11() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw12.current) tw12.current.style.backgroundColor = "black";
    else console.error("tw12.current is null or undefined");
  
    if (tw11.current) {
      tw11.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn10(), 500);
    } else console.error("tw11.current is null or undefined");
  }
  
  function bn12() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw13.current) tw13.current.style.backgroundColor = "black";
    else console.error("tw13.current is null or undefined");
  
    if (tw12.current) {
      tw12.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn11(), 500);
    } else console.error("tw12.current is null or undefined");
  }
  
  function bn13() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw14.current) tw14.current.style.backgroundColor = "black";
    else console.error("tw14.current is null or undefined");
  
    if (tw13.current) {
      tw13.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn12(), 500);
    } else console.error("tw13.current is null or undefined");
  }
  
  function bn14() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw15.current) tw15.current.style.backgroundColor = "black";
    else console.error("tw15.current is null or undefined");
  
    if (tw14.current) {
      tw14.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn13(), 500);
    } else console.error("tw14.current is null or undefined");
  }
  
  function bn15() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw16.current) tw16.current.style.backgroundColor = "black";
    else console.error("tw16.current is null or undefined");
  
    if (tw15.current) {
      tw15.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn14(), 500);
    } else console.error("tw15.current is null or undefined");
  }
  
  function bn16() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw17.current) tw17.current.style.backgroundColor = "black";
    else console.error("tw17.current is null or undefined");
  
    if (tw16.current) {
      tw16.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn15(), 500);
    } else console.error("tw16.current is null or undefined");
  }
  
  function bn17() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw18.current) tw18.current.style.backgroundColor = "black";
    else console.error("tw18.current is null or undefined");
  
    if (tw17.current) {
      tw17.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn16(), 500);
    } else console.error("tw17.current is null or undefined");
  }
  
  function bn18() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw19.current) tw19.current.style.backgroundColor = "black";
    else console.error("tw19.current is null or undefined");
  
    if (tw18.current) {
      tw18.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn17(), 500);
    } else console.error("tw18.current is null or undefined");
  }
  
  function bn19() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw20.current) tw20.current.style.backgroundColor = "black";
    else console.error("tw20.current is null or undefined");
  
    if (tw19.current) {
      tw19.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn18(), 500);
    } else console.error("tw19.current is null or undefined");
  }
  
  function bn20() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw21.current) tw21.current.style.backgroundColor = "black";
    else console.error("tw21.current is null or undefined");
  
    if (tw20.current) {
      tw20.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn19(), 500);
    } else console.error("tw20.current is null or undefined");
  }
  
  function bn21() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw22.current) tw22.current.style.backgroundColor = "black";
    else console.error("tw22.current is null or undefined");
  
    if (tw21.current) {
      tw21.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn20(), 500);
    } else console.error("tw21.current is null or undefined");
  }
  
  function bn22() {
    console.log("bn", bncounter, uncounter);
    bncounter.current -= 1;
  
    if (tw23.current) tw23.current.style.backgroundColor = "black";
    else console.error("tw23.current is null or undefined");
  
    if (tw22.current) {
      tw22.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => bn21(), 500);
    } else console.error("tw22.current is null or undefined");
  }
  

  function bn23() {
    console.log("bn", bncounter, uncounter);
    bncounter.current = bncounter.current - 1;
  
    // Null check for tw24
    if (tw24.current) {
      tw24.current.style.backgroundColor = "black";
    } else {
      console.error("tw24.current is null or undefined");
    }
  
    // Null check for tw23
    if (tw23.current) {
      tw23.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        bn22();
      }, 500);
    } else {
      console.error("tw23.current is null or undefined");
    }
  }
  

  function bn24() {
    console.log("bn", bncounter, uncounter);
    bncounter.current = bncounter.current - 1;
  
    // Null check for tw25
    if (tw25.current) {
      tw25.current.style.backgroundColor = "black";
    } else {
      console.error("tw25.current is null or undefined");
    }
  
    // Null check for tw24
    if (tw24.current) {
      tw24.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        bn23();
      }, 500);
    } else {
      console.error("tw24.current is null or undefined");
    }
  }
  

  function bn25() {
    console.log("bn", bncounter, uncounter);
    bncounter.current = bncounter.current - 1;
  
    // Null check for tw26
    if (tw26.current) {
      tw26.current.style.backgroundColor = "black";
    } else {
      console.error("tw26.current is null or undefined");
    }
  
    // Null check for tw25
    if (tw25.current) {
      tw25.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        bn24();
      }, 500);
    } else {
      console.error("tw25.current is null or undefined");
    }
  }
  

  function bn26() {
    console.log("bn", bncounter, uncounter);
    bncounter.current = bncounter.current - 1;
  
    // Null check for tw27
    if (tw27.current) {
      tw27.current.style.backgroundColor = "black";
    } else {
      console.error("tw27.current is null or undefined");
    }
  
    // Null check for tw26
    if (tw26.current) {
      tw26.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        bn25();
      }, 500);
    } else {
      console.error("tw26.current is null or undefined");
    }
  }
  

  function bn27() {
    console.log("bn", bncounter, uncounter);
    bncounter.current = bncounter.current - 1;
  
    // Null check for tw28
    if (tw28.current) {
      tw28.current.style.backgroundColor = "black";
    } else {
      console.error("tw28.current is null or undefined");
    }
  
    // Null check for tw27
    if (tw27.current) {
      tw27.current.style.backgroundColor = signalcolor.current;
      setTimeout(() => {
        bn26();
      }, 500);
    } else {
      console.error("tw27.current is null or undefined");
    }
  }
  

  function bn28() {
    console.log("bn",bncounter,uncounter);
    bncounter.current = bncounter.current - 1;
    if (tw29.current){
      tw29.current.style.backgroundColor = "black";
    }
    {
      if(tw28.current){
        tw28.current.style.backgroundColor = signalcolor.current;
      }
      setTimeout(() => {
        bn27();
      }, 500);
    }
  }

  function bn29() {
    console.log("bn",bncounter,uncounter);
    bncounter.current = bncounter.current - 1;
    if (tw29.current){
      tw29.current.style.backgroundColor = signalcolor.current;
    }
    setTimeout(() => {
      bn28();
    }, 500);
  }

  function botNode() {
    if (bncounter.current !== 31) {
      console.log("bncounter",bncounter.current);
      setTimeout(() => {
        botNode();
      }, 1000);
    } else {
      bncounter.current = 31;
      collision = false;
      botsigreached = false;
      let x = Math.random();
      signalcolor.current = "cyan";
      setTimeout(() => {
        bn29();
      }, x * 40000);
    }
  }

  useEffect(() => {
    console.log("botnode");
    
    signalcolor.current = "cyan";
    botNode();
  },[]);

  return (
    <div>
      <Message
        message="Now your work is to find the minumum packet size for this network whose speed of transfer is 0.5 MBPS
The maximum time after which collision can happen is the  time t - which is the time taken to travel from one end to the other
The collision can happen at time t = (travel time for this channel) and the damaged signal can reach back the node which sent it in t more time . Hence total time for which the channel should be listening is 2t.
Now you can calculate the size of packet using the formula sizeof packet = speed of channel * time taken to travel
Hint : The time taken for a signal to pass through the channel is 15 seconds
Start guessing and find the minimum size"
      />

      <div className="a">
        <div className="b">
          <div class="transmitwire">
            <button ref={tw1} className="transmit"></button>
            <button ref={tw2} className="transmit"></button>
            <button ref={tw3} className="transmit"></button>
            <button ref={tw4} className="transmit"></button>
            <button ref={tw5} className="transmit"></button>
            <button ref={tw6} className="transmit"></button>
            <button ref={tw7} className="transmit"></button>
            <button ref={tw8} className="transmit"></button>
            <button ref={tw9} className="transmit"></button>
            <button ref={tw10} className="transmit"></button>
            <button ref={tw11} className="transmit"></button>
            <button ref={tw12} className="transmit"></button>
            <button ref={tw13} className="transmit"></button>
            <button ref={tw14} className="transmit"></button>
            <button ref={tw15} className="transmit"></button>
            <button ref={tw16} className="transmit"></button>
            <button ref={tw17} className="transmit"></button>
            <button ref={tw18} className="transmit"></button>
            <button ref={tw19} className="transmit"></button>
            <button ref={tw20} className="transmit"></button>
            <button ref={tw21} className="transmit"></button>
            <button ref={tw22} className="transmit"></button>
            <button ref={tw23} className="transmit"></button>
            <button ref={tw24} className="transmit"></button>
            <button ref={tw25} className="transmit"></button>
            <button ref={tw26} className="transmit"></button>
            <button ref={tw27} className="transmit"></button>
            <button ref={tw28} className="transmit"></button>
            <button ref={tw29} className="transmit"></button>
          </div>
          <div className="nodes">
            <div className="usernodeandsend">
              <button className="node">{usernode.current}</button>
              <div className="packets">
                <br />
                <div>
                  <button className="enterpacketsize">Enter Packet Size</button>
                </div>
                <div>
                  <input type="number" ref={packetsize} className="inputn" /> MB
                </div>
              </div>
              <button onClick={sendNode} class="sendbutton">
                Send Data
              </button>
              <button onClick={backoff} class="sendbutton">
                Back Off
              </button>
            </div>
            <div className="botnode">
              <button className="node">Bot Node</button>
            </div>
          </div>
        </div>
        <div className="statusk">
          <div className="status">
            Status : {status}
          </div>
          <div className="kval">
            <div>
              <input
                type="number"
                ref={inputk}
                placeholder="Enter K value"
                className="inputk"
              />
            </div>
            <div>
              <button onClick={kcheck} className="checkk">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageTwo;
