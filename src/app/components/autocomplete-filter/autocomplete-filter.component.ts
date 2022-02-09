import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EspecesService } from '../../services/especes.service';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-autocomplete-filter',
  templateUrl: './autocomplete-filter.component.html',
  styleUrls: ['./autocomplete-filter.component.scss']
})
export class AutocompleteFilterComponent implements OnInit {
  data: any;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private especeData:EspecesService) {}

  ngOnInit() {
    this.especeData.getEspeces().subscribe((result) => {
      this.data = result["data"];

      for (const element of this.data) {
        this.options.push(`${element.frenchName} - ${element.faoCode}` );
      }
      console.log(this.options);
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
