import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoData } from './video-data'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  //constructor() { }
  formData!: VideoData;
  list!: VideoData[];
  readonly rootUrl='http://localhost:5141/api/Movies'
  constructor(private http:HttpClient) { }
  GetAll(){

  firstValueFrom(this.http.get<VideoData[]>(this.rootUrl  ))
    .then(data=>this.list=data as VideoData[]);
  }

  ///實作Service新增(HttpPost)功能
  postMeetingRoom(){
    console.log(this.formData);
    return this.http.post(this.rootUrl , this.formData);
  }

  //實作Service修改(HttpPut)功能
  putMeetingRoom() {
    console.log(this.formData);
    return this.http.put(this.rootUrl + '/'+ this.formData.id, this.formData);
  }

  //實作Service刪除(HttpDelete)功能
  deleteMeetingRoom(id: number) {
    console.log(this.formData);
    return this.http.delete(this.rootUrl + '/'+ id);
  }


}
