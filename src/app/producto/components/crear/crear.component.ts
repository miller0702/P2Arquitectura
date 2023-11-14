import { ProductoInterface } from 'src/app/interface/producto-interface';
import Swal from 'sweetalert2';
import { ServiceService } from '../../service.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent {

  constructor(private service: ServiceService) {}

  @Input() id!: string;

  elemento: ProductoInterface = {
    id: '',
    title: '',
    price: 0,
    images: [],
    categoryId: '',
    description: '',
  };

  createItem() {
    Swal.fire({
      title: '¿Estás seguro de que quieres crear este producto?',
      text: 'El producto se creará y se agregará a la base de datos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, crear',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.postProducto(this.elemento).subscribe(
          (res: any) => {
            console.log('Elemento creado');
            Swal.fire('¡Producto creado!', '', 'success');
            window.location.href = '/producto';
          },
          (ERR: any) => {
            console.log('error');
            console.log(ERR.message);
            Swal.fire('Error al crear el producto.', '', 'error');
          },
          () => {
            console.log('finis');
          }
        );
      }
    });
  }

  closeModal() {
    this.service.$modalCreate.emit(false);
  }
}
