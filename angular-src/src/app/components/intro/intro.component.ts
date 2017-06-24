import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Introduction';
  }

}
