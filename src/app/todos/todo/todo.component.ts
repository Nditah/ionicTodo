import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent {
  @Input()
  todo: Todo;
}
