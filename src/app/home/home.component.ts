import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //store returned data as object
  users: Object;

  
  //constructor dependency injection for dataservice.
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data => {
      this.users = data
      console.log(data);
    })
  }

}
