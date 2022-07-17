import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {

 private _data: string = '';

  constructor() {
    // console.log('SomeServiceService');

    // console.log(this._data);
  }

  initialize() {
    this._data = 'test';
  }


  get data(): string {
    return this._data;
  }
}
