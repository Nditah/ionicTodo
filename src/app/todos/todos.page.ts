import { Component, OnInit } from "@angular/core";
import { TodosService } from "../providers/todos/todos.service";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.page.html",
  styleUrls: ["./todos.page.scss"]
})
export class TodosPage implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }
}
