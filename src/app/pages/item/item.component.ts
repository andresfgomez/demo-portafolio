import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoId: string;

  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.productoService.getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          console.log(producto);
          this.producto = producto;
          this.productoId = parametros['id'];
        });
    });
  }

}
