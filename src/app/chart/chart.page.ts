import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { CalendarComponentOptions } from 'ion2-calendar';
import { SocialService } from '../social.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  chartTypeString:ChartType = 'bar';
  myItems = [];
  totalIncome: any = null;
  todayDate = new Date();
  fromDate: any = new Date();
  toDate: any;
  selectedDate = "1";
  chartDataArray = {
    data: [],
    date: []
  }
  isPopoverOpen = false;
  optionsRange: CalendarComponentOptions = {
    from: new Date(1),
    pickMode: 'range',
  };
  date: { from: string; to: string; };
  dateRange: { from: string; to: string; };

  constructor(private storageService: SocialService) {
    Chart.register(...registerables);

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.selectRangeDate()
    
  }

  getAllItems() {
    this.myItems = [];
    this.totalIncome = null;
    this.storageService.getItem().then(res => {
      if (res) {
        res.forEach(element => {
          if (element.date >= this.fromDate.toISOString() && element.date < this.toDate.toISOString()) {
            this.myItems.push(element);
          }
        });
      }
      this.getChartData(this.myItems)
    });
  }

  selectRangeDate() {

    switch (this.selectedDate) {
      case "1":
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        this.fromDate = new Date(curr.setDate(first));
        this.toDate = new Date(curr.setDate(last));

        break;
        case "2":
          var curr = new Date; // get current date
          var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
          var last = first - 1; // last day is the first day + 6
          var lastWeekFirst = first - 7;
          
          this.fromDate = new Date(curr.setDate(lastWeekFirst));
          this.toDate = new Date(curr.setDate(last));
         
          break;
          case "3":
            var date = new Date(),
            y = date.getFullYear(),
            m = date.getMonth();
            var firstDay = new Date(y, m, 1);
            var lastDay = new Date(y, m + 1, 0);

            this.fromDate = firstDay;
            this.toDate = lastDay;
          break
      default:
        break;
    }
    this.getAllItems();
  }

  getChartData(myItems) {
    this.chartDataArray.date = [];
    this.chartDataArray.data = [];
    let counter = 0;
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    for (var d = this.fromDate; d <= this.toDate; d.setDate(d.getDate() + 1)) {
      counter += 1;
      this.generateColorArray(counter);
      let incomeTotal = null;
      let firstDate = null;
      firstDate = new Date(d);
      let lastDate = new Date(firstDate);
      lastDate.setDate(lastDate.getDate() + 1);
      
      myItems.forEach(element => {
        if (element.date.substr(0,10) >= firstDate.toISOString().substr(0,10) && element.date.substr(0,10) < lastDate.toISOString().substr(0,10)) {
          incomeTotal += element.amount;
        }
      });
      this.chartDataArray.date.push(firstDate.toLocaleDateString("en-US", options));
      this.chartDataArray.data.push(incomeTotal);
    }
    this.createBarChart(this.chartDataArray)
    console.log('this.chartDataArray  ' , this.chartDataArray);
    
  }

  createBarChart(data) {
    if (this.bars  != undefined) {
      this.bars.destroy();
  }
  this.barChart.height = 400;
    this.bars = new Chart(this.barChart.nativeElement, {
      type: this.chartTypeString,
      data: {
        labels: data.date,
        datasets: [{
          label: 'Expense',
          data: data.data,
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          // xAxes: [{
          //   barPercentage:
          // }]

        }
      }
    });
    this.bars.height = 400;
  }
  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16) + '9f');
    }
    
  }

  onChange($event) {
    if($event.from._d !== null , $event.to._d !== null) {
      this.fromDate = $event.from._d;
      this.toDate = $event.to._d;
      this.getAllItems();
      this.isPopoverOpen = false;
    }
  }
}
