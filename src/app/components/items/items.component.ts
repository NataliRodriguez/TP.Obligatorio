import { Component } from '@angular/core';
import {Item} from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[]= [];
  total: number=0//variable que se va actualizando cada vez que se realiza una operacion

  constructor(private itemService:ItemService) {}


  ngOnInit(): void {
    //this.items=[]
    this.items=this.itemService.getItems();
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
