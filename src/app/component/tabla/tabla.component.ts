import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private servicios:ServiciosService) { }
imports;
  ngOnInit(): void {
    this.servicios.getAll().subscribe( datos => { console.log(datos);
      this.imports = datos;});
  }
  key= 'ano';
  reverse:boolean = false;
    sort(key){
      this.key=key;
      this.reverse = !this.reverse;
    }
}
