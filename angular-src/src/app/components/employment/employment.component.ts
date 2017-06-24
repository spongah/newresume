import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  employmentHistory: Object = [
    {
      company: 'Plansource',
      location: 'Salt Lake City, UT',
      position: 'EDI Analyst',
      startdate: '2016',
      enddate: '2017'
    },
    {
      company: 'The Royal',
      location: 'Murray, UT',
      position: 'Audio Engineer',
      startdate: '2013',
      enddate: '2017'
    },
    {
      company: 'Rock Solid Studios',
      location: 'Salt Lake City, UT',
      position: 'Owner / Engineer',
      startdate: '2005',
      enddate: '2016'
    },
    {
      company: 'Rock Solid Sound',
      location: 'Salt Lake City, UT',
      position: 'Owner / Engineer',
      startdate: '2008',
      enddate: '2017'
    },
    {
      company: 'Feature Films For Families',
      location: 'Murray, UT',
      position: 'Helpdesk / Software QA',
      startdate: '2005',
      enddate: '2008'
    }
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Employment';
  }

}
