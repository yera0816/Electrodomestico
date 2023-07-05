import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Electrodomestico } from './interfaces/Electrodomestico.model';
import { ManageProductsService } from './manage-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openDialogProductForm() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: '',
    });
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './components/modal/modal.component.html',
  styleUrls: ['./components/modal/modal.component.css']
})
export class ModalComponent implements OnInit {

  formElect!: FormGroup;

  constructor(private _fb: FormBuilder, private _product: ManageProductsService) {}

  ngOnInit(): void {
   this.formElect = this._fb.group({
    nombre: [
      '',
    ],
    descripcion: [
      '',
    ],
    numeroReferencia: [
      '',
    ],
    unidadesDisponibles: [
      '',
    ],
    TiempoGarantia: [
      '',
    ],
    Alto: [
      '',
    ],
    Largo: [
      '',
    ],
    Ancho: [
      '',
    ],
  });
  }

  async onSave() {
    const valores = this.formElect.value;
    console.log('Datos: ', valores);
    //const data: Electrodomestico = {
      //nombre: this.formElect.nombre;
    }
    //if (this.formElect.valid) {
      //const req = await this._product.createProduct();
    //}
  }

}
