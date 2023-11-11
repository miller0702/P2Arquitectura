import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ListaComponent } from '../../components/lista/lista.component';
import { HeaderComponent } from 'src/app/public/header/header.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ServiceService){}

  itemId! : string

  modalView! : boolean;

  modalDelete! : boolean;

  modalInput! : boolean;

  modalCreate! : boolean;

  elementos :  ProductoInterface[] = [];


  ngOnInit() : void{
    this.service.$modal.subscribe((valor) => {
      this.modalView = valor
    })

    this.service.$modalDelete.subscribe((valor) => {
      this.modalDelete = valor
    })
    
    this.service.$modalInput.subscribe((valor) => {
      this.modalInput = valor
    })
    this.service.$modalCreate.subscribe((valor) => {
      this.modalCreate = valor
    })

    this.service.getAll().subscribe(
      (res :any)=>{
        this.elementos = res;
      } ,
      (ERR :any)=> {
        console.log("error");
      },
      ()=>{
        console.log("finis");
      }

    );

  }

  openModalView(id: string) {
    this.itemId = id;
    this.modalView = true;
  }

  openModalDelete(id: string){
    console.log('abrir modal');

    this.itemId = id
    this.modalDelete = true
  }

  openModalInput(id: string){
      this.itemId = id
      this.modalInput = true
  }
  openModalCreate(){
      this.modalCreate = true
  }

}
