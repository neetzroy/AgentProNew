import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layout/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ColumnsTwoComponent } from './layout/columns-two/columns-two.component';






@NgModule({
  declarations: [
    ColumnOneComponent,
    HeaderComponent,
    FooterComponent,
    ColumnsTwoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ColumnOneComponent]
})
export class SharedModule { }
