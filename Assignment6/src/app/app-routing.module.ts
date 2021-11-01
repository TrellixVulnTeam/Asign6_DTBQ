import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFormComponent } from './component/add-form/add-form.component';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { NoPageFoundComponent } from './component/no-page-found/no-page-found.component';
import { PegawaiComponent } from './component/pegawai/pegawai.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // load component berdasarkan path yang dituju
  { path: 'home', component: PegawaiComponent },

  { path: 'addpegawai', component: AddFormComponent },

  { path: 'Edit/:id',component:EditFormComponent},

  // jika tidak ada path yang sama, Angular akan load ini
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
