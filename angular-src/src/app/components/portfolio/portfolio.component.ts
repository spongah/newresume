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
      link: 'http://www.ericeschelbach.com:8888/',
      github: 'https://github.com/spongah/hireasoundguy',
      description: `My flagship web app, currently in development. Will connect
      audio engineers with venues who need their services. Node.js, Express,
      MongoDB, and Angular 4 front-end.`
    },
    {
      img: 'portfolio-markco.jpg',
      name: 'Markco Beta',
      link: 'https://markco1.herokuapp.com',
      github: 'https://github.com/spongah/markco1',
      description: `GPS tracker for groups using Google maps and GPS API's.
      Complete, functioning minimum viable product using Javascript and a Rails
      back end. Needs some serious refactoring, but it is fully functional.
      Give it a try!`
    },
    {
      img: 'portfolio-chakra.jpg',
      name: 'Chakra Tuner',
      link: 'https://soundtools2.herokuapp.com',
      github: 'https://github.com/spongah/soundtools2',
      description: `Audio tool designed for musicians who want to tune their
      instruments to something other than 440-A (usually 432hz). This was my
      first experience with Angular.`
    },
    {
      img: 'portfolio-rta3.jpg',
      name: 'RTA3 - Real Time Analyzer',
      link: 'https://rta3.herokuapp.com',
      github: 'https://github.com/spongah/rta3',
      description: `Audio tool using FFT to analyze mic input and display
      frequency information in real time. Audio engineers will use this to cut
      frequencies which cause feedback in a particular venue. (Desktop Only)`
    },
    {
      img: 'portfolio-freqtrainer.jpg',
      name: 'Frequency Trainer',
      link: 'https://freqtrainer.herokuapp.com',
      github: 'https://github.com/spongah/freqtrainer',
      description: `Audio tool that plays a tone and asks the user to guess the
      frequency. Helps audio engineers train for feedback during shows.`
    },
    {
      img: 'portfolio-mudcraft.jpg',
      name: 'Mudcraft',
      link: 'https://mudkraft.herokuapp.com',
      github: 'https://github.com/spongah/mudcraft',
      description: `Experimental adopotion of a classic text-based MUD into the
      web browser environment. I made this to try React, but mostly used
      plain Javascript to interact with a Rails back end.`
    },
    {
      img: 'portfolio-rocksolidsound.jpg',
      name: 'Rock Solid Sound',
      link: 'https://www.rocksolidsound.net',
      github: '',
      description: `Website I created by manipulating a template for my own
      live-sound business.`
    },
    {
      img: 'portfolio-honeypot.jpg',
      name: 'Honeypot Glass Competition',
      link: 'http://honeypotglasscomp.com',
      github: '',
      description: `Website I created for a client who mostly needed an online
      form for competition entry submissions and sponsorship applications.`
    },
    {
      img: 'portfolio-garden.jpg',
      name: 'Garden Automator',
      link: '',
      github: '',
      description: `I build this app to track temperature and humidity data
      while giving remote access to relays and any other physical hardware
      via a Raspberry Pi server. Apache web server and Python back end code.
      Data is currently stored in a CSV but I want to move to a MySQL database
      eventually.`
    },
    {
      img: 'portfolio-newresume.jpg',
      name: 'MEAN Web Resume',
      link: '/',
      github: 'https://github.com/spongah/newresume',
      description: `This app. Eric Eschelbach's web-based resume in MEAN-stack
      form. Built from the ground up using Node.js and Express server for
      back-end, and Angular 4 with TypeScript for the front end.`
    },
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Portfolio';
  }

}
