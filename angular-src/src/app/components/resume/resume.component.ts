import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  currentDisplay: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentDisplay = 'Qualifications';
  }

  goToSkills() {
    this.router.navigate(['/skills']);
  }

}
