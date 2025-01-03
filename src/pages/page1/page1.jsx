import React, { useEffect, useRef, useState } from "react";
import Message from "../../components/message/message";
import "./page1.css";

const PageOne = () => {
  const uncounter = useRef(0);
  const bncounter = useRef(29);
  const messageAfterReach = useRef(
    "Message Sent by user Recieved Succesfully !"
  );
  const [message, setMessage] = useState("");
  const botNodeSending = useRef(false);
  //const [backOffClicked, setBackOffClicked] = useState(false);
  const backOffClicked = useRef(false);
  const [k, setK] = useState(0);
  const [collision, setCollision] = useState(false);

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

  function backOff() {
    //setBackOffClicked(true);
    backOffClicked.current = true;
    console.log("hi");
  }

  function backOffClickedAh() {
    return backOffClicked;
  }

  function kcheck() {
    console.log(inputk.current.value,k);

    if (inputk.current.value === k) {
      alert("correct !");
    } else {
      alert("wrong !");
    }
  }

  function un30() {
    uncounter.current = 0;
    setK(0);
    if (tw29.current) tw29.current.style.backgroundColor = "black";
    setMessage(messageAfterReach.current);
}

function un29() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw28.current) tw28.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw29.current) tw29.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un30();
      }, 500);
    }
}

function un28() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw27.current) tw27.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw28.current) tw28.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un29();
      }, 500);
    }
}

function un27() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw26.current) tw26.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw27.current) tw27.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un28();
      }, 500);
    }
}

function un26() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw25.current) tw25.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw26.current) tw26.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un27();
      }, 500);
    }
}

function un25() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw24.current) tw24.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw25.current) tw25.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un26();
      }, 500);
    }
}

function un24() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw23.current) tw23.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw24.current) tw24.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un25();
      }, 500);
    }
}

function un23() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw22.current) tw22.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw23.current) tw23.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un24();
      }, 500);
    }
}

function un22() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw21.current) tw21.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw22.current) tw22.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un23();
      }, 500);
    }
}

function un21() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw20.current) tw20.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw21.current) tw21.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un22();
      }, 500);
    }
}

function un20() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw19.current) tw19.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw20.current) tw20.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un21();
      }, 500);
    }
}

function un19() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw18.current) tw18.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw19.current) tw19.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un20();
      }, 500);
    }
}

function un18() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw17.current) tw17.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw18.current) tw18.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un19();
      }, 500);
    }
}

function un17() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw16.current) tw16.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw17.current) tw17.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un18();
      }, 500);
    }
}

function un16() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw15.current) tw15.current.style.backgroundColor = "black";
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw16.current) tw16.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un17();
      }, 500);
    }
}


  function un15() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw14.current) {
      tw14.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw15.current) {
        tw15.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un16();
      }, 500);
    }
  }
  
  function un14() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw13.current) {
      tw13.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw14.current) {
        tw14.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un15();
      }, 500);
    }
  }
  
  function un13() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw12.current) {
      tw12.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw13.current) {
        tw13.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un14();
      }, 500);
    }
  }
  
  function un12() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw11.current) {
      tw11.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw12.current) {
        tw12.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un13();
      }, 500);
    }
  }
  
  function un11() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw10.current) {
      tw10.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw11.current) {
        tw11.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un12();
      }, 500);
    }
  }
  
  function un10() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw9.current) {
      tw9.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw10.current) {
        tw10.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un11();
      }, 500);
    }
  }
  
  function un9() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw8.current) {
      tw8.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw9.current) {
        tw9.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un10();
      }, 500);
    }
  }
  
  function un8() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw7.current) {
      tw7.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw8.current) {
        tw8.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un9();
      }, 500);
    }
  }
  
  function un7() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw6.current) {
      tw6.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw7.current) {
        tw7.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un8();
      }, 500);
    }
  }
  
  function un6() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw5.current) {
      tw5.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw6.current) {
        tw6.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un7();
      }, 500);
    }
  }
  
  function un5() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw4.current) {
      tw4.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw5.current) {
        tw5.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un6();
      }, 500);
    }
  }
  
  function un4() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw3.current) {
      tw3.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw4.current) {
        tw4.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un5();
      }, 500);
    }
  }
  
  function un3() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw2.current) {
      tw2.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw3.current) {
        tw3.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un4();
      }, 500);
    }
  }
  
  function un2() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);
  
    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");
  
      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    if (tw1.current) {
      tw1.current.style.backgroundColor = "black";
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");
  
      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      if (tw2.current) {
        tw2.current.style.backgroundColor = "cyan";
      }
      setTimeout(() => {
        un3();
      }, 500);
    }
  }
  
  function un1() {
    uncounter.current = uncounter.current + 1;
    console.log(uncounter.current, bncounter.current);

    if (
      bncounter.current !== 29 &&
      Math.abs(uncounter.current - bncounter.current) <= 1
    ) {
      setK(k + 1);
      setCollision(true);
      setMessage("Collision occurred !");

      messageAfterReach.current = "Damaged Packet Recieved !";
      console.log(messageAfterReach);
    }
    let x = Math.random();
    if (backOffClicked.current === true) {
      console.log("bt");

      setMessage("User Clicked on Back Off");
      uncounter.current = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
      return;
    } else {
      tw1.current.style.backgroundColor = "cyan";
      setTimeout(() => {
        un2();
      }, 500);
    }
  }
  

  function sendNode() {
    if (uncounter > 0) {
      alert("Already Sending one message !");
    } else {
      messageAfterReach.current = "Node Sent by user Recieved Succesfully";
      //setBackOffClicked(false);
      backOffClicked.current = false;
      uncounter.current = 0;
      setMessage("Signal is being sent from User Node ");
      un1();
    }
  }

  // bot node
  function bn0() {
    botNodeSending.current = false;
    bncounter.current = 29;
    if (tw1.current) tw1.current.style.backgroundColor = "black";
    botNode();
  }
  
  function bn1() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw2.current) tw2.current.style.backgroundColor = "black";
    if (tw1.current) tw1.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn0();
    }, 500);
  }
  
  function bn2() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw3.current) tw3.current.style.backgroundColor = "black";
    if (tw2.current) tw2.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn1();
    }, 500);
  }
  
  function bn3() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw4.current) tw4.current.style.backgroundColor = "black";
    if (tw3.current) tw3.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn2();
    }, 500);
  }
  
  function bn4() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw5.current) tw5.current.style.backgroundColor = "black";
    if (tw4.current) tw4.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn3();
    }, 500);
  }
  
  function bn5() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw6.current) tw6.current.style.backgroundColor = "black";
    if (tw5.current) tw5.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn4();
    }, 500);
  }
  
  function bn6() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw7.current) tw7.current.style.backgroundColor = "black";
    if (tw6.current) tw6.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn5();
    }, 500);
  }
  
  function bn7() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw8.current) tw8.current.style.backgroundColor = "black";
    if (tw7.current) tw7.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn6();
    }, 500);
  }
  
  function bn8() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw9.current) tw9.current.style.backgroundColor = "black";
    if (tw8.current) tw8.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn7();
    }, 500);
  }
  
  function bn9() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw10.current) tw10.current.style.backgroundColor = "black";
    if (tw9.current) tw9.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn8();
    }, 500);
  }
  
  function bn10() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw11.current) tw11.current.style.backgroundColor = "black";
    if (tw10.current) tw10.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn9();
    }, 500);
  }
  
  function bn11() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw12.current) tw12.current.style.backgroundColor = "black";
    if (tw11.current) tw11.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn10();
    }, 500);
  }
  
  function bn12() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw13.current) tw13.current.style.backgroundColor = "black";
    if (tw12.current) tw12.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn11();
    }, 500);
  }
  
  function bn13() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw14.current) tw14.current.style.backgroundColor = "black";
    if (tw13.current) tw13.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn12();
    }, 500);
  }
  
  function bn14() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw15.current) tw15.current.style.backgroundColor = "black";
    if (tw14.current) tw14.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn13();
    }, 500);
  }
  
  function bn15() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw16.current) tw16.current.style.backgroundColor = "black";
    if (tw15.current) tw15.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn14();
    }, 500);
  }
  
  function bn16() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw17.current) tw17.current.style.backgroundColor = "black";
    if (tw16.current) tw16.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn15();
    }, 500);
  }
  
  function bn17() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw18.current) tw18.current.style.backgroundColor = "black";
    if (tw17.current) tw17.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn16();
    }, 500);
  }
  
  function bn18() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw19.current) tw19.current.style.backgroundColor = "black";
    if (tw18.current) tw18.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn17();
    }, 500);
  }
  
  function bn19() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw20.current) tw20.current.style.backgroundColor = "black";
    if (tw19.current) tw19.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn18();
    }, 500);
  }
  
  function bn20() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw21.current) tw21.current.style.backgroundColor = "black";
    if (tw20.current) tw20.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn19();
    }, 500);
  }
  
  function bn21() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw22.current) tw22.current.style.backgroundColor = "black";
    if (tw21.current) tw21.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn20();
    }, 500);
  }
  
  function bn22() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw23.current) tw23.current.style.backgroundColor = "black";
    if (tw22.current) tw22.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn21();
    }, 500);
  }
  
  function bn23() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw24.current) tw24.current.style.backgroundColor = "black";
    if (tw23.current) tw23.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn22();
    }, 500);
  }
  
  function bn24() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw25.current) tw25.current.style.backgroundColor = "black";
    if (tw24.current) tw24.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn23();
    }, 500);
  }
  
  function bn25() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw26.current) tw26.current.style.backgroundColor = "black";
    if (tw25.current) tw25.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn24();
    }, 500);
  }
  
  function bn26() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw27.current) tw27.current.style.backgroundColor = "black";
    if (tw26.current) tw26.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn25();
    }, 500);
  }
  
  function bn27() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw28.current) tw28.current.style.backgroundColor = "black";
    if (tw27.current) tw27.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn26();
    }, 500);
  }
  
  function bn28() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw29.current) tw29.current.style.backgroundColor = "black";
    if (tw28.current) tw28.current.style.backgroundColor = "red";
    setTimeout(() => {
      bn27();
    }, 500);
  }
  
  function bn29() {
    if (!bncounter.current) return;
    bncounter.current = bncounter.current - 1;
    console.log(uncounter.current, bncounter.current);
    if (tw29) { 
      if (tw29.current) tw29.current.style.backgroundColor = "red";
    }
    setTimeout(() => {
      bn28();
    }, 500);
  }
  

  function botNode() {
    botNodeSending.current = true;
    bncounter.current = 29;
    let x = Math.random();
    setTimeout(() => {
      bn29();
    }, x * 40000);
  }

  useEffect(() => {
    if (botNodeSending.current === false) botNode();
  }, [botNodeSending]);

  return (
    <div>
      <Message
        message="Collision : It is a term in networking where more than one signals from different nodes travel in a medium and the meet each other. Whenever multiple signals meet, they become scrambled and hence the data sent in the signal is damaged.
        Here, in page try sending signals from the User node and visualise the collision between the signal sent by you and the bot Node ( The bot node sends signal on its own at random time intervals )"
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
              <button className="node">User Node</button>
              <button onClick={sendNode} className="sendbutton">
                Send Data
              </button>
              <button onClick={backOff} class="sendbutton">
                Back Off
              </button>
            </div>
            <div className="botnode">
              <button className="node">Bot Node</button>
            </div>
          </div>
        </div>
        <div>
          <div className="status">
            Status :<br></br>
            {message}
          </div>
          <div class="kval">
            <input
              type="number"
              ref={inputk}
              placeholder="Enter K value"
              className="inputk"
            />{" "}
            <button className="checkk" onClick={kcheck} class="checkk">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
