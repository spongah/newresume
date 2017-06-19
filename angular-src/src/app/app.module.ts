import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';

const appRoutes: Routes = [
  { path: '', component: QualificationsComponent },
  { path: '**', component: QualificationsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    QualificationsComponent
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
