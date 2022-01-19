import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements ViewWillEnter{

  constructor(private router: Router) {
    this.router.navigate(['tabs/expense']);
  }
  ionViewWillEnter() {
    this.router.navigate(['tabs/expense']);
  }
}
