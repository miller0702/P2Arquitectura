import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProductoInterface } from 'src/app/interface/producto-interface';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {

  constructor(private service : ServiceService){}

  @Input() id : string = ""

  elemento : ProductoInterface = {
    id: "",
    title: "",
    price: 0,
    images : [],
    categoryId: "",
    description : "",
  }


  updateItem(){
    this.service.putProducto(this.elemento).subscribe(
      (res :any)=>{
        console.log('Elemento Actualizado')
        // this.elemento = res;
      } ,
      (ERR :any)=> {
        console.log("error");
      },
      ()=>{
        console.log("finis");
      }

    );
  }

  closeModal() {
    this.service.$modalInput.emit(false)
  }


}
