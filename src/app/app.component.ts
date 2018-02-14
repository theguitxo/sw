import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {

        console.log(this.activatedRoute.paramMap);

      });

  }

}
