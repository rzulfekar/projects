import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works...!';
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
          }
        ]
    }



    constructor() {
      debugger;
        console.log("hello world" + this.data);
    }

    getClass(person: any) : string{
        return "my-class";
    }


}
