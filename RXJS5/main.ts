import {Observable} from "rxjs";
import {Clock} from "./clock";

let numbers = [1, 5, 10];
let source = Observable.from(numbers);


let clockdiv = document.getElementById("clock");

let clock = new Clock(1492810154000);
let ticker = clock.ticker;

ticker.subscribe(
    c => {
        console.log(`time : ${c}`)
        //clockdiv.innerHTML = c;
    },
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

clock.tick(50);
