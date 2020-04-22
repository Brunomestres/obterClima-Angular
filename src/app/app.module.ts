import { ClimaService } from './clima/clima.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaAtualComponent } from './clima-atual/clima-atual.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaAtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
