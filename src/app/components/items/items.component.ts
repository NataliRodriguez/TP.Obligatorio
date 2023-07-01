import { Component } from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[]=[];
  total: number=0//variable que se va actualizando cada vez que se realiza una operacion
  constructor() {}
  ngOnInit(): void{
    this.items=[
      {
        id:0,
        title:'manzana',
        price:10.5,
        quantity:4,
        completed:false
      },
      {
        id:1,
        title:'pan',
        price:3.5,
        quantity:8,
        completed:true
      },
      {
        id:2,
        title:'campera',
        price:300,
        quantity:1,
        completed:false
      }
    ];
    this.getTotal();
    
  }

  deleteItem(item:Item){//para borrar productos
    this.items= this.items.filter(x => x.id != item.id);
    this.getTotal();
  }
  toggleItem(item:Item){
    this.getTotal();

  }

  getTotal(){ //funcion para poder sacar el total
    this.total= this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce((acc,item)=> acc+= item,0);

  }

}
