import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IntroComponent } from './components/intro/intro.component';

const appRoutes: Routes = [
  { path: 'introduction', component: IntroComponent },
  { path: 'qualifications', component: QualificationsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '/introduction' }

];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    QualificationsComponent,
    SkillsComponent,
    EmploymentComponent,
    PortfolioComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
