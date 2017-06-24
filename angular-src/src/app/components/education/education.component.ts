import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationHistory: Object = [
    {
      school: 'Salt Lake Community College',
      location: 'West Valley, UT',
      notes: 'CCNA Classes',
      startdate: '2002',
      enddate: '2003'
    },
    {
      school: 'Honoka\'a High School',
      location: 'Honoka\'a, HI',
      notes: '3.5 GPA, National Honor Society',
      startdate: '1995',
      enddate: '1999'
    }
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Education';
  }

}
