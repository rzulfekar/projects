import { Component, OnInit } from '@angular/core';
import { MdButtonModule, MdIcon } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare const $: JQueryStatic;

export class Page {
    private size : number;
    private current: number;
    private data: any[];

    constructor(data : any[], size: number) {
      this.data = data;
      this.size = size;
      this.current = this.size;
    }

    next() : any {
      let end = 0;

      if (this.current + this.size > this.data.length) {
          end = this.data.length;
      }
      else {
          end = this.current + this.size;
      }

      let next = this.data.slice(this.current, end);
      this.current += this.size;
      return next;
    }

    prev() : any {
      let start = 0;

      if (this.current - this.size < 0) {
          start = 0;
      }
      else {
          start = this.current - this.size;
      }

      let prev = this.data.slice(start, (start + this.size));
      this.current -= this.size;

      return prev;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('pageTransition', [
      state('current', style({
        backgroundColor: '#eee',
//        transform: 'scale(1)',
        opacity: 1
      })),
      state('next',   style({
        backgroundColor: '#cfd8dc',
 //       transform: 'scale(1.1)',
        opacity: 0.3
      })),
      transition('current <=> next', animate('10000ms ease-in')),
      transition('next <=> current', animate('10000ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
    title = 'app works...!';
    displayData: any[];
    start: number;
    pageSize: number;
    pageTransition: string;
    page : Page;
    data = {
      "Person" : 
        [
          {
            "name" : "rex",
            "age" : "42"
          },
          {
            "name" : "jenn",
            "age" : "42"
          },
          {
            "name" : "jaz",
            "age" : "8"
          },
          {
            "name" : "mom",
            "age" : "63"
          },
          {
            "name" : "rocco",
            "age" : "2"
          },
          {
            "name" : "wolverine",
            "age" : "88"
          }
        ]
    }

    ngOnInit() {
      //$("#mytbl").fadeOut(1000);

      //$( "#resizable" ).resizable();
      this.showData();
    }

    constructor() {
      this.start = 0;
      this.pageSize = 3;
      debugger;
        console.log("hello world" + this.data);

      this.page = new Page(this.data.Person, 3);  
    }

    getClass(person: any) : string{
        return "my-class";
    }

    showData() {
      this.displayData = this.data.Person.slice(this.start, (this.start + this.pageSize));
      this.start += this.pageSize;
      this.pageTransition = "current";
      console.log(this.pageTransition);
    }

    pageNext() {
      this.pageTransition = "next";
      console.log(this.pageTransition);
//      this.showData();
      this.displayData = this.page.next();
 //     this.pageTransition = "current";
      
    }

}
