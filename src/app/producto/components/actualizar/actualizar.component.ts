import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProductoInterface } from 'src/app/interface/producto-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {

  constructor(private service: ServiceService) { }

  @Input() id: string = ""




  elemento: ProductoInterface = {
    id: this.id,
    title: "",
    price: 0,
    images: [],
    categoryId: "",
    description: "",
  }

  ngOnInit(): void {
    this.service.getOne(this.id).subscribe(
      (res :any)=>{
        this.elemento = res;
      } ,
      (ERR :any)=> {
        console.log("error");
      },
      ()=>{
        console.log("finis");
      }

    );
  }

  updateItem() {
    console.log(this.id)
    Swal.fire({
      title: '¿Está seguro de que desea actualizar el producto?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, actualizar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.putProducto(this.id, this.elemento).subscribe(
          (res: any) => {
            console.log('Elemento Actualizado')
            // this.elemento = res;
            window.location.href = '/producto';
          },
          (ERR: any) => {
            console.log("error");
            console.log(ERR.message)
          },
          () => {
            console.log("finis");
          }
        );
      }
    });

  }

  closeModal() {
    this.service.$modalInput.emit(false)
  }


}
