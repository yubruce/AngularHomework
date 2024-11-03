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
    {value:0, text:"電影"},{value:1, text:"劇集"}] 
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
      type:"0"
  
    };
  }


}
