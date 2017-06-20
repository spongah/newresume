import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Portfolio';
    this.resume.allHeight = '100%';
  }

}
