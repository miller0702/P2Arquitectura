import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProductoInterface } from 'src/app/interface/producto-interface';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent {

  constructor(private service : ServiceService){}

  @Input() id : string = ""

  elemento : ProductoInterface = {
    id: "",
    title: "",
    price: 0,
    images : [],
    description : "",
  }


  deleteItem() : void {
    this.service.deleteProducto(this.id).subscribe(
      (res :any)=>{
        this.elemento = res;
      } ,
      (ERR :any)=> {
        console.log("error", ERR);
      },
      ()=>{
        console.log("finis");
      }

    );
  }

  closeModal() {
    this.service.$modalDelete.emit(false)
  }
}
