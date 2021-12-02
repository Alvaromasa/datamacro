import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private servicios:ServiciosService) { }
imports= [ ];
origenSearch =""
idSearch =""
productSearch =""
enlaceSearch =""
resultfiltro= [ ];

post = null;

beginSearch(event){
  console.log(event)


let filter= {

  provincia : this.origenSearch,
  ano : this.idSearch,
  }

this.resultfiltro = this.imports.filter( post => this.isExist(post, filter));
}

isExist(post , filter){
let findings = true;

Object.keys(filter).forEach((key) =>{

const textToSearch = post[key] &&typeof post[key] === "string" && post[key].toLowerCase() || '';
var res= textToSearch.indexOf(filter[key]) !== -1

if(res==false){
return findings=false;

}



})
return findings;

}
  ngOnInit(): void {
    this.servicios.getAll().subscribe( datos => { console.log(datos);
      this.imports = datos;});

      this.resultfiltro= this.imports;

  }



  key= 'ano';
  reverse:boolean = false;
    sort(key){
      this.key=key;
      this.reverse = !this.reverse;
    }
}
