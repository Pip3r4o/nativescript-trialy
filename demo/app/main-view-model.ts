import { Observable } from 'data/observable';
import { Trialy } from 'nativescript-trialy';

export class HelloWorldModel extends Observable {
  public message: string;
  private trialy: Trialy;

  constructor() {
    super();

    this.trialy = new Trialy();
    this.message = this.trialy.message;
  }
}