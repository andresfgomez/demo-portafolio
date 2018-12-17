import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve) => {
      return this.http.get('https://angular-portafolio-45671.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          this.cargando = false;
          this.productos = resp;
          resolve();
        });
    });
  };

  public getProducto(id: String) {
    return this.http.get(`https://angular-portafolio-45671.firebaseio.com/productos/${id}.json`);
  };

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

  };

  private filtrarProductos(termino: string) {
    termino = termino.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto => {
      const tituloLower = producto.titulo.toLowerCase();
      return producto.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0;
    });

    console.log(this.productosFiltrados);
  }

}
