import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './component/add-form/add-form.component';
import { PegawaiComponent } from './component/pegawai/pegawai.component';
import { NoPageFoundComponent } from './component/no-page-found/no-page-found.component';
import { ButtonComponent } from './component/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { EditFormComponent } from './component/edit-form/edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    PegawaiComponent,
    NoPageFoundComponent,
    ButtonComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
