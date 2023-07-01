import{Component, OnInit} from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
    selector: 'app-additem',
    templateUrl: './additem.component.html',
    styleUrls: ['./additem.component.css']
})
export class AddItemComponent implements OnInit{ //creacion de propiedades
    id: string= '';
    title: string='';
    price: number=0;
    quantity: number=0;

    constructor(){ }

    ngOnInit(): void {
        
    }
    //definir el onSubmit y crear los elementos
    onSubmit(){
        const item= new Item();
        item.id= this.id;
        item.title= this.title;
        item.price= this.price;
        item.quantity= this.quantity
    }
}