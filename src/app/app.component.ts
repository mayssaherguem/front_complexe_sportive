import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit{

  currentRoute: string ;
  current;
  curr
  constructor(private route: ActivatedRoute, private router: Router){
   
    // this.current = this.router.url;
    // console.log(this.router);
    
    this.route.url.subscribe(url => {
      console.log('URL:', url)
      this.currentRoute = url[0]?.path;
      console.log('Current Route:', this.currentRoute);
    })
    // this.shouldShow()
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.curr = event.urlAfterRedirects; // Get entire activated route path
        if(this.curr.includes('dashboard'))
        {
          this.current = "Dashboard"
        }
        else if(this.curr.includes('gestion_a'))
        {
          this.current = " Gestion Adherents"
        }
        else if(this.curr.includes('gestion_c'))
        {
          this.current = " Gestion Coachs"
        }
        else if(this.curr.includes('planning'))
        {
          this.current = "Planning"
        }
        else if(this.curr.includes('cours'))
        {
          this.current = "Gestion Cours"
        }
        else if(this.curr.includes('salle'))
        {
          this.current = "Gestion Salle"
        }
        else if(this.curr.includes('padel'))
        {
          this.current = "Gestion Terrain Paddel"
        }
        else if(this.curr.includes('foot'))
        {
          this.current = "Gestion Terrain Foot"
        }
        else if(this.curr.includes('planning'))
        {
          this.current = "Planning"
        }
      }
    });
  }

  menuState:string = 'in';

  toggleMenu(event){
    this.menuState = event;
  }

  shouldShow(): boolean {
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    return currentRoute !== '';
  }

  getTitle(event)
  {
    console.log(event);
    
    //this.current = event;
  }
  
}
