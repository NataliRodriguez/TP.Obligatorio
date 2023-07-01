import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/additem/additem.component';

const routes: Routes = [//creacion de objetos
  {
    path:'',
    component: ItemsComponent//propiedad necesaria para especificar el componente que se necesita cargar 
  },
  {
    path:'add',
    component: AddItemComponent //cear componente para que funcione
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
