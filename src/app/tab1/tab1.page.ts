import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
todos = [
  { done: false, text: 'finish Svelte tutorial' },
  { done: false, text: 'build an app' },
  { done: false, text: 'world domination' }
];
 add() {
  this.todos = this.todos.concat({ done: false, text: '' });
}
 clear() {
  this.todos= this.todos.filter(t => !t.done);

}
  constructor() {}
}