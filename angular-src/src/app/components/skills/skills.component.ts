import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsHeight: String = '100%';
  skills1: Object = [
    { name: 'AngularJS / Angular' },
    { name: 'Node.js / Express' },
    { name: 'Ruby on Rails' },
    { name: 'JavaScript ES6' },
    { name: 'TypeScript 2.0+' },
    { name: 'HTML5, CSS3, jQuery' },
    { name: 'LAMP, MEAN Stacks' },
    { name: 'MongoDB, PostgreSQL, MySQL, SQLite' },
    { name: 'RESTful API’s' },
    { name: 'Python, PHP, Assembly' },
    { name: 'Object Oriented Programming' }
  ];
  skills2: Object = [
    { name: 'Test Driven Design' },
    { name: 'Version Control (GitHub, Heroku)' },
    { name: 'vim, bash, ssh' },
    { name: 'UX/UI Design' },
    { name: 'Problem solving' },
    { name: 'Strong work ethic' },
    { name: 'Passion for technology' },
    { name: 'Teamwork and communication' },
    { name: 'Project Management' },
    { name: 'Strong focus and determination' },
    { name: 'Well-rounded' }
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Skills';
  }

}
