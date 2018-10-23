import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../../interfaces/todo";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  url = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  
}
