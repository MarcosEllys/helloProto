import { Injectable } from '@angular/core';
import { HelloRequest, HelloResponse } from 'proto/generated/hello_pb';
import { HelloClient } from 'proto/generated/hello_pb_service';
import { Hello } from '../models/hello';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private client: HelloClient;

  constructor() {
    this.client = new HelloClient('http://localhost:8080', {});
  }

  hello(name: string): Promise <Hello> {
    return new Promise((resolve, reject) => {
      const req = new HelloRequest();
      req.setName(name);
      this.client.sayHello(req, null, (err, response: HelloResponse) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  }

}
