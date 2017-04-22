import {Observable} from "rxjs";
import {Clock} from "./clock";

let clockdiv = document.getElementById("myclock");
let clock = new Clock(1492810154000);
let ticker = clock.ticker;

function onNext(value) {
    clockdiv.innerText = value;
}

ticker.subscribe(
    c => {
        onNext(c);
    },
    e => console.log(`error: ${e}`),
    () => console.log("complete")
); 
  
clock.tick(80);

setTimeout(() => {
    clock.update(0);
    console.log("updating");
}, 10000);
