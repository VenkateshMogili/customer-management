import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private hc: HttpClient) { }

  getTasks(){
    return this.hc.get('http://localhost:4500/api/getTasks');
  }

  addTask(data){
    console.log(data[0]);
    return this.hc.post('http://localhost:4500/api/addTask',data[0]);
  }
  updateTask(data){
    const id = data['id'];
    console.log(data);
    return this.hc.put(`http://localhost:4500/api/updateTask/${id}`,data);
  }
  deleteTask(id){
    console.log(id);
    return this.hc.delete(`http://localhost:4500/api/deleteTask/${id}`);
  }

}
