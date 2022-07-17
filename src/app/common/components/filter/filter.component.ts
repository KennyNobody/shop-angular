import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  age = new FormControl('');
  ageList: string[] = ['1.5+', '4+', '6+', '9+', '13+', '8+'];

  minifigures = new FormControl('');
  minifiguresList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  valueDetails: number = 0;
  highValueDetails: number = 10000;
  optionsDetails = {
    floor: 0,
    ceil: 10000
  };

  valuePrice: number = 0;
  highValuePrice: number = 10000;
  optionsPrice = {
    floor: 0,
    ceil: 10000
  };
}
