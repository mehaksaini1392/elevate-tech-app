import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [AppRoutingModule],
  exports: [HeaderComponent,FooterComponent],
  declarations: [HeaderComponent,FooterComponent],
  providers: [],
})
export class BaseModule { }
