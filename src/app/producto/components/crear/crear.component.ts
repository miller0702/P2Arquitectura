import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProductoInterface } from 'src/app/interface/producto-interface';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

  constructor(private service : ServiceService){}

  @Input() id : string = ""

  elemento : ProductoInterface = {
    id: "",
    title: "Cachucha",
    price: 1000,
    images : ['miller.png'],
    categoryId: "1",
    description : "Ninguna",
  }


  createItem(){
    this.service.postProducto(this.elemento).subscribe(
      (res :any)=>{
        console.log('Elemento Creado')
        // this.elemento = res;
      } ,
      (ERR :any)=> {
        console.log("error");
        console.log(ERR.message)
      },
      ()=>{
        console.log("finis");
      }

    );
  }

  closeModal() {
    this.service.$modalCreate.emit(false)
  }
}
