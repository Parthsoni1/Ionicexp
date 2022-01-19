import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { Storage } from '@ionic/storage-angular';

const ITEMKEY = 'myitem';
const Income = 'income';
@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private _storage: Storage | null = null;
  fromDate:any = new Date();
  toDate:any = new Date();
  dateRange;
  constructor(private storage: Storage, private toast: ToastController) {
    this.fromDate.setUTCHours(0,0,0,0);
    this.toDate.setDate(this.toDate.getDate() + 1);
 this.toDate.setUTCHours(0,0,0,0);
//     var d = new Date();
// d.setUTCHours(0,0,0,0);
// console.log(d.toISOString());

    console.log(' this.fromDate  ',  this.fromDate, 'this.toDate  '   , this.toDate);
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  addItem(item) {
    return this.storage.get(ITEMKEY).then(items => {
      if (items) {
        if (items.length !== 0) {
          items.push(item);
          return this.storage.set(ITEMKEY, items)
        } else {
          return this.storage.set(ITEMKEY, [item]);
        }
      }
      else {
        return this.storage.set(ITEMKEY, [item]);
        this.presentToast('Added Successfully')
      }
    });
  }

  getItem() {
    return this.storage.get(ITEMKEY);
  }

  deleteItem(id) {
    return this.storage.get(ITEMKEY).then(items => {
      if(!items || items.length === 0) {
        return null;
      }
      const keep = [];
      for(const i of items) {
        if(i.id !== id) {
          keep.push(i)
        }
      }
      this.presentToast('Deleted Successfully');
      return this.storage.set(ITEMKEY,keep)
    });
  }
  async presentToast(messege) {
    const toast = await toastController.create({
      message: messege,
      duration:2000
    });
    toast.present();
  }
  storeDate(from,to) {
    this.fromDate = from,
    this.toDate = to
    console.log('this.fromDate ini',  this.fromDate , 'this.toDate  ini'  , this.toDate );
    
    this.fromDate.setDate(this.fromDate.getDate() + 1);
    this.toDate.setDate(this.toDate.getDate() + 1 );
    this.fromDate.setUTCHours(0,0,0,0)
    this.toDate.setUTCHours(0,0,0,0);
    console.log(this.fromDate, this.toDate);
  }
  setCalendar(dateRange) {
    this.dateRange = dateRange;
  }
}
