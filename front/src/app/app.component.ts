import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './services/hello.service';
import { Hello } from './models/hello';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public helloResponse = '';

  constructor(private service: HelloWorldService) { }

  public ngOnInit(): void {
    this.service.hello('batata')
      .then((data: Hello) => {
        this.helloResponse = data.message;
      });
  }
}
