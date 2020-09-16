import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: string ='My facorite links:'
  favLinks: string[] =['https://www.launchcode.org/','https://www.google.com/'];
  constructor() { }

  ngOnInit() {
  }

}
