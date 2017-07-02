import { Component, OnInit } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioSites = [
    // {
    //   img: 'portfolio-hireasoundguy.jpg',
    //   name: 'Hire A Sound Guy . COM',
    //   link: 'http://www.ericeschelbach.com:8888/',
    //   github: 'https://github.com/spongah/hireasoundguy',
    //   description: `My flagship web app, currently in development. Will connect
    //   audio engineers with venues who need their services. Node.js, Express,
    //   MongoDB, and Angular 4 front-end.`
    // },
    {
      // img: 'portfolio-rta3.jpg',
      img: 'screen-capture---rta.gif',
      name: 'Real Time Analyzer',
      link: 'https://rta3.herokuapp.com',
      github: 'https://github.com/spongah/rta3',
      description: `Sleek, customizable RTA tool in a responsive browser based
      app. Uses "P5.sound" JavaScript library to access mic input and perform
      frequency analysis (via Fast Fourier transform). Perfect for ringing out
      feedback in a PA system! (Does not currently work with mobile devices)`
    },
    {
      // img: 'portfolio-markco.jpg',
      img: 'screen-capture---markco.gif',
      name: 'Markco Beta',
      link: 'https://markco1.herokuapp.com',
      github: 'https://github.com/spongah/markco1',
      description: `Mobile-first web app that allows groups of people to track
      each others location in real time. Uses HTML5 geolocation and Google Maps
      API along with Ruby on Rails and JavaScript to create a simple, effective
      user experience. I could code this so much better now, but it works!`
    },
    {
      // img: 'portfolio-garden.jpg',
      img: 'screen-capture---garden.gif',
      name: 'Garden Automator',
      link: 'http://www.ericeschelbach.com:8080/',
      github: '',
      description: `Remote automation using 120v relays based on termperature
      and humidity data. Graph of data is displayed, and a control panel allows
      the administrator access to heating and cooling threshold settings. Fans
      or heaters can turn on or off to control the climate of an indoor garden.
      Apache web server and Python back end code.`
    },
    {
      // img: 'portfolio-chakra.jpg',
      img: 'screen-capture---chakratuner.gif',
      name: 'Chakra Tuner',
      link: 'https://soundtools2.herokuapp.com',
      github: 'https://github.com/spongah/soundtools2',
      moreinfo: 'http://www.collective-evolution.com/2013/12/21/heres-why-you-should-convert-your-music-to-432hz/',
      description: `Responsive audio tool designed to calculate custom tuning.
      Many musicians prefer to tune their recordings to a 432hz A4
      instead of the standard 440hz because they feel it holds a more mystical
      connection to the universe, hence the name "Chakra Tuner". This was my
      first Angular project, and was designed to be part of a bigger collection
      of audio tools.`
    },
    {
      img: 'portfolio-mudcraft.jpg',
      name: 'Mudcraft',
      link: 'https://mudkraft.herokuapp.com',
      github: 'https://github.com/spongah/mudcraft',
      description: `Experimenting with a web-based text adventure game, mixed
      with a litle Minecraft. This game allows digging, and moving, through
      randomly generated maps in 3 dimensions (N, S, E, W, U, D). I made this to
      try React.js, but ended up mostly using plain Javascript and a Rails back
      end to display the room data.`
    },
    {
      img: 'portfolio-newresume.jpg',
      name: 'MEAN Web Resume',
      link: '/',
      github: 'https://github.com/spongah/newresume',
      description: `This app! My web-based resume in MEAN-stack form. I
      pictured the design and drew some rough sketches, then built the CSS and
      HTML before creating a simple Node app an Angular app using the CLI.
      I use ng build to compile to the public folder that Node hosts from,
      which is then pushed to GitHub then pulled from my web server.`
    },
    {
      img: 'portfolio-honeypot.jpg',
      name: 'Honeypot Glass Comp',
      link: 'http://honeypotglasscomp.com',
      github: '',
      description: `Simple Bootstrap website I created for a client who needed
      some info and online forms for his glass blowing competition.`
    },
    {
      img: 'portfolio-rocksolidsound.jpg',
      name: 'Rock Solid Sound',
      link: 'https://www.rocksolidsound.net',
      github: '',
      description: `Template website that I created for my live sound business
      while learning HTML and CSS. PHP was used to give functionality to the
      contact form.`
    },
    {
      img: 'portfolio-freqtrainer.jpg',
      name: 'Frequency Trainer',
      link: 'https://freqtrainer.herokuapp.com',
      github: 'https://github.com/spongah/freqtrainer',
      description: `Simple audio game that plays a tone then asks the user to
      guess the frequency. Designed to help audio engineers train their ears!`
    },
  ];

  constructor(private resume: ResumeComponent) { }

  ngOnInit() {
    this.resume.currentDisplay = 'Portfolio';
  }

}
