import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioSites = [
    {
      img: 'portfolio-hireasoundguy.jpg',
      name: 'Hire A Sound Guy . COM',
      link: '/portfolio',
      description: "My flagship web app, currently in development. Will connect audio engineers with venues who need their services. Node.js, Express, MongoDB, and Angular 4 front-end."
    },
    {
      img: 'portfolio-markco.jpg',
      name: 'Markco Beta',
      link: 'https://markco1.herokuapp.com',
      description: "GPS tracker for groups using Google maps and GPS API's. Complete, functioning minimum viable product completed. Rails back end, and vanilla javascript up front (this was before I learned Angular)."
    },
    {
      img: 'portfolio-chakra.jpg',
      name: 'Chakra Tuner',
      link: 'https://soundtools.herokuapp.com',
      description: "Audio tool designed for musicians who want to tune their instruments to something other than 440 A tuning (usually 432hz). This was my first experience with Angular."
    },
    {
      img: 'portfolio-rta3.jpg',
      name: 'RTA3 - Real Time Analyzer',
      link: 'https://rta2.herokuapp.com',
      description: "Audio tool using FFT to analyze mic input and display frequency information in real time. Audio engineers will use this to cut frequencies which cause feedback in a particular venue."
    },
    {
      img: 'portfolio-rocksolidsound.jpg',
      name: 'Rock Solid Sound',
      link: 'https://www.rocksolidsound.net',
      description: "Website I created by manipulating a template for my own live-sound business."
    },
    {
      img: 'portfolio-honeypot.jpg',
      name: 'Honeypot Glass Competition',
      link: 'http://honeypotglasscomp.com',
      description: "Website I created for a client who mostly needed an online form for competition entry submissions and sponsorship applications."
    },
    {
      img: 'portfolio-mudcraft.jpg',
      name: 'Mudcraft',
      link: 'https://mudkraft.herokuapp.com',
      description: "Experimental adopotion of a classic text-based MUD into the web browser environment. I made this to try out React, but mostly used vanilla javascript to interact with a Rails back end."
    },
    {
      img: 'portfolio-freqtrainer.jpg',
      name: 'Frequency Trainer',
      link: 'https://freqtrainer.herokuapp.com',
      description: "Audio tool that plays a tone and asks the user to guess the frequency. Helps audio engineers train for feedback during shows."
    },
    {
      img: 'portfolio-garden.jpg',
      name: 'Garden Automator',
      link: 'https://localhost:666',
      description: "I build this app to track temperature and humidity data while giving remote access to relays and any other physical hardware via a Raspberry Pi server. Apache web server and Python back end code. Data is currently stored in a CSV but I want to move to a MySQL database eventually."
    },
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Portfolio';
  }

}
