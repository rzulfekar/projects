import { Observable, BehaviorSubject } from "rxjs";

export class Clock {

    private _time : Date;
    private _interval: any;
    private _ticker : BehaviorSubject<string>;

    constructor(msSeed : number) {
        this._ticker = new BehaviorSubject(null);
        this._time = new Date(msSeed);
        this._ticker.next(this.getFormattedTime());
    }

    tick( msTickFrequency: number) {
        this._interval = setInterval( () => 
        {
            let prev = this._time.getTime();
            let newVal = prev + msTickFrequency;
            this._time.setTime(newVal);

            this._ticker.next(this.getFormattedTime());

        }, msTickFrequency);
    }

    get ticker() : any {
        return this._ticker.asObservable();
    }

    getFormattedTime() : string{
        let hours = this.pad(this._time.getHours());
        let minutes = this.pad(this._time.getMinutes());
        let seconds = this.pad(this._time.getSeconds());
        let frames = this.pad(Math.floor((this._time.getMilliseconds() / 33.33)));

        return `${hours}:${minutes}:${seconds}.${frames}`;
    }

    pad(value : number) : string{
        if (value < 10) 
        {
            return `0${value}`;
        }
        return `${value}`;
    }

    stop() {
        this._ticker.complete();
        clearInterval(this._interval);
    }
}