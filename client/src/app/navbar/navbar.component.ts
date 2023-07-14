import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loggedIn = false
  ngOnInit(): void {
    if(localStorage.getItem('userID')){
      this.loggedIn = true
    }
  }
  logout(){
    localStorage.clear()
    this.loggedIn = false
  }
}
