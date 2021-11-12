import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data:any;
  constructor(private http: HttpService) { }
  
  onClick=(username: string)=> {
    if(username === '') {
      username = "EndingNever"
    }
    this.http.getConfig(username).subscribe((data)=>{
      this.data = data;
    })
    console.log(username)
  }
  
  ngOnInit(): void {
    this.http.getConfig("EndingNever").subscribe((data)=>{
      this.data = data;
      console.log(data)
    });
  }


}
