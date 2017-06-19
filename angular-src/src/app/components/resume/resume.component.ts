import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changePage(e) {
    console.log('changing page modal!');
    e.stopPropagation();
  }

}
