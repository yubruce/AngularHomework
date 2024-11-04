import { Component, OnInit } from '@angular/core';
import { VideoData } from '../shared/video-data';
import { VideoDataService } from '../shared/video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent implements OnInit {

  constructor(public service: VideoDataService) { }
  ngOnInit(): void {
    this.service.GetAll();
  }
  //實作List 選取呈現在Detail
  populateForm(mr:VideoData){
    this.service.formData = Object.assign({}, mr);
  }
//4.5
onInsert(){
  this.service.formData={
    id :0,
    title:"",
    releaseDate:" / / ",
    movieCompany:"",
    starring:"",
    moviePlot:"",
    type:"0"
  };
}
 //4.5
 onDelete(mr:VideoData){
  if(confirm(`確定刪除 電影:${mr.title} 資料?`))
  {
    this.service.deleteMeetingRoom(mr.id)
    .subscribe({
      next:(data)=>{
        this.service.GetAll();
      },
      error:(error)=>{
        console.log(error);
      },
    });
  }
}


}
