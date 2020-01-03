import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TaskService} from '../task.service';
//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload';
//define the constant url we would be uploading to.
const URL = 'http://localhost:4500/upload';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  visible: Boolean = false;
  tasks: any = [{title:'',notes:'',image:''}];
  titles: any ="";
  notess: any ="";
  id: number;

  constructor(public dialog: MatDialog, private ts: TaskService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    this.getTaskList();
  }

  deleteTask(id){
    const del = confirm("Are you sure want to delete?");
    if(del){
      this.ts.deleteTask(id).subscribe
      (res=>{
        console.log('Deleted');
      })
    }
  }

  getTaskList(){
    this.ts.getTasks().subscribe(res=>{
      this.tasks = res['data'];
      console.log('tasks');
      console.log(res);
    });
  }

  imageUpload(image){
    console.log(image);
  }

  displayNotes(){
    this.visible = true;
    this.getTaskList();
  }
  saveData(title,notes){
    if(title || notes){
    this.tasks = [{title: title,notes: notes}];
    this.ts.addTask(this.tasks)
    .subscribe(res=>{
      console.log('Added');
      alert('Added');
      this.getTaskList();
    });
  }
  this.visible = false;
  }
  editTask(id,titles,notess){
    const dialogRef = this.dialog.open(EditPopup, {
      width: '650px',
      data: {id: id,title: titles, notes: notess}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.getTaskList();
      this.titles = result.title;
      this.notess = result.notes;
      this.id = result.id;
    });
  }

}


@Component({
  selector: 'edit-box',
  templateUrl: 'edit-box.html',
  styleUrls:['./note.component.css']
})
export class EditPopup { 

  constructor(
    public dialogRef: MatDialogRef<EditPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private ts: TaskService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.data);
    this.ts.updateTask(this.data)
    .subscribe(res=>{
      console.log('updated');
      console.log(res);
    this.dialogRef.close(this.data);
    });
  }
  

}