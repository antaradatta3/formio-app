import { ViewerComponent } from './viewer/viewer.component';
import { HomeComponent } from './home/home.component';
import { NgModule, ViewRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'design', component: DesignerComponent },
    { path: 'view', component: ViewerComponent },
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
