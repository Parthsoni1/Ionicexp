import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import * as uuid from 'uuid';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements ViewWillEnter {
  myItems = [];
  isPopoverOpen = false;
  isFabPopoverOpen = false;
  todayDate = new Date();
  fromDate = new Date();
  toDate: Date;
  taskByDate = [];
  totalIncome = null;
  alreadyId = '';
  income = '';
  AverageDailyExpense = null;
  constructor(private storageService: SocialService) {
    this.fromDate = this.storageService.fromDate;
    this.toDate = this.storageService.toDate;
    console.log(this.todayDate.toISOString(), 'this.fromDate   ', this.fromDate.toISOString(), 'this.toDate  ', this.toDate.toISOString());
  
  }
  ionViewWillEnter() {
    this.fromDate = this.storageService.fromDate;
    this.toDate = this.storageService.toDate;
    console.log(this.todayDate.toISOString(), 'this.fromDate   ', this.fromDate, 'this.toDate  ', this.toDate);
    this.getAllItems();
  }
  data = {
    id: '', date: '', type: '', description: '', amount: 0
  };


  getAllItems() {
    this.myItems = [];
    this.totalIncome = null;
    let counter = 0;
    this.storageService.getItem().then(res => {
      
      if (res) {
        res.forEach((element) => {
          counter += 1;
          if (element.date >= this.fromDate.toISOString() && element.date < this.toDate.toISOString()) {
            this.myItems.push(element);
            this.totalIncome += element.amount;
          }
        });
        console.log('this.totalIncome  ' , this.totalIncome , this.myItems);
    
        if(this.myItems.length > 2) {
          this.AverageDailyExpense = this.totalIncome/this.myItems.length;
        }
      }
    });

  }
  async saveData() {

    if (this.data.date === "") {
      this.data.date = new Date().toISOString();
    } else {
      this.data.date = new Date(this.data.date).toISOString();
    }
    const myId = uuid.v4();
    this.data.id = myId;
    await this.storageService.addItem(this.data).then(res => {
      this.getAllItems();
      let dataClean = {
        id: '', date: '', type: '', description: '', amount: 0
      };
      Object.assign(this.data, dataClean);
    });
    this.isPopoverOpen = false;
  }

  editItem() {
    this.deleteItem(this.data.id);
    setTimeout(() => {
      if (this.data.date === "") {
        this.data.date = new Date().toISOString();
      } else {
        this.data.date = new Date(this.data.date).toISOString();
      }
      this.storageService.addItem(this.data).then(res => {
        console.log('added', res);
        this.getAllItems();
        let dataClean = {
          id: '', date: '', type: '', description: '', amount: 0
        };
        Object.assign(this.data, dataClean);
      });
      this.alreadyId = '';
      this.isPopoverOpen = false;
    }, 1000);

  }

  editItemPopup(item) {
    this.alreadyId = item.id;
    Object.assign(this.data, item);
    this.isPopoverOpen = true;
  }

  cleanExit() {
    this.isPopoverOpen = false;
    this.alreadyId = '';
    let dataClean = {
      id: '', date: '', type: '', description: '', amount: 0
    };
    Object.assign(this.data, dataClean);
  }
  deleteItem(id) {
    this.storageService.deleteItem(id).then(res => {
      this.getAllItems();
    });
  }

  colorPicker(type) {
    switch (type) {

      case '1':
        return 'hsl(56, 85%, 58%)';
      case '2':
        return 'rgb(51, 39, 211)';

      case '3':
        return 'rgb(36, 185, 7)';

      case '4':
        return 'rgb(0, 0, 0)';

      case '5':
        return 'rgb(230, 10, 10)';

      case '6':
        return 'rgb(226, 230, 10)';

      case '7':
        return 'rgb(230, 142, 10)';

      case '8':
        return 'rgb(142, 10, 230)';

      case '9':
        return 'rgb(10, 223, 230)';

      case '10':
        return 'rgb(121, 121, 121)';


      default:

    }
  }
  iconGet(type) {
    console.log(type);
    
    switch (type) {
        case '1':
          return 'cart-outline';
        case '2':
          return 'file-tray-stacked-outline';
  
        case '3':
          return 'medkit-outline';
  
        case '4':
          return 'medkit-outline';
  
        case '5':
          return 'receipt-outline';
  
        case '6':
          return 'home-outline';
  
        case '7':
          return 'fast-food-outline';
  
        case '8':
          return 'attach-outline';
  
        case '9':
          return 'build-outline';
  
        case '10':
          return 'wallet-outline';
  
  
      default:
        break;
    }
  }

  AddOrSubractDays(startingDate,endDate, method) {
    if (method =='add') {
     this.fromDate =  new Date(new Date().setDate(startingDate.getDate() + 1));
     this.toDate =  new Date(new Date().setDate(endDate.getDate() + 1));
    } else {
      this.fromDate =  new Date(new Date().setDate(startingDate.getDate() - 1));
      this.toDate =  new Date(new Date().setDate(endDate.getDate() - 1));
    }
    this.getAllItems();
  }
}
