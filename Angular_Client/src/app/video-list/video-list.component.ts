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

  populateForm(mr:VideoData){   
    this.service.formData = Object.assign({}, mr);          
  }


}