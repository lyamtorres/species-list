import { Component, OnInit } from '@angular/core';
import { EspecesService } from '../../services/especes.service';

@Component({
  selector: 'app-liste-especes',
  templateUrl: './liste-especes.component.html',
  styleUrls: ['./liste-especes.component.scss']
})
export class ListeEspecesComponent implements OnInit {

  data: any;
  constructor(private especeData:EspecesService) {}
  ngOnInit() {
    this.especeData.getEspeces().subscribe((result) => {
      this.data = result;
    })
  }


}
