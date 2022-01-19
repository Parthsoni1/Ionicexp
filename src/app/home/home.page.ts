import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date: { from: string; to: string; };
  dateRange: { from: string; to: string; };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    from: new Date(1),
    pickMode: 'range',
  };

  constructor(private socialService: SocialService, private router: Router) {
    console.log('socialService.dateRange  ' , socialService.dateRange);
    this.dateRange = socialService.dateRange;
    // this.dateRange.from = socialService.fromDate.toUTC
    // this.dateRange.to = socialService.toDate
   }

  onChange($event) {
    console.log(this.dateRange);
    
    if($event.from._d !== null , $event.to._d !== null) {
      this.socialService.storeDate($event.from._d,$event.to._d);
      this.socialService.setCalendar(this.dateRange);
      this.router.navigate(['tabs/tab3']);
    }
  }

}
