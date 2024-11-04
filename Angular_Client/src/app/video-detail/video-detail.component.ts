import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoDataService } from '../shared/video-data.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent implements OnInit{
  constructor(public service: VideoDataService) { }
  capacity: any[]= [
    {value:0, text:"請選擇"},
    {value:1, text:"電影"},
    {value:2, text:"劇集"}]
  ngOnInit() {
     this.resetForm();
  }
  resetForm(form?:NgForm){
    if (form!=null)
      form.form.reset();
    this.service.formData = {
      id :0,
      title:"",
      releaseDate:" / / ",
      movieCompany:"",
      starring:"",
      moviePlot:"",
      type:""

    };
  }

  //Insert
  insertRecord(form:NgForm){
    this.service.postMeetingRoom()
    .subscribe({
    next:(data)=>{
      console.log(data);
      this.resetForm(form);
      this.service.GetAll();
    },
    error:(error)=>{
      console.log(error);
    },
  });
}
//Update
updateRecord(form:NgForm){
  this.service.putMeetingRoom()
  .subscribe({
    next:(data)=>{
      this.resetForm(form);
      this.service.GetAll();
    },
    error:(error)=>{
      console.log(error);
    },
  });
}

//Submit事件判斷執行Insert或Update
onSubmit(form: NgForm){
  this.service.formData.type = (this.service.formData.type);
  if(this.service.formData.id==0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}


}
