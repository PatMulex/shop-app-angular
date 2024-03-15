import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent implements OnInit {

  isClosed : boolean = true;
  @Output() closeModalProductView :
  EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() product : Product | undefined;
  constructor(){}

  ngOnInit(): void {

  }

  closeModalView(){
    this.closeModalProductView.emit(this.isClosed);
  }

}
