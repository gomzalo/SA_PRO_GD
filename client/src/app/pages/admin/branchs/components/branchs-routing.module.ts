import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BranchsComponent } from './branchs/branchs.component';
import { FormBranchsComponent } from './form-branchs/form-branchs.component';

const routes: Routes = [
  {
    path: '',
    component: BranchsComponent
  },
  {
    path: 'new',
    component: FormBranchsComponent
  },
  {
    path: 'edit/:status',
    component: FormBranchsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchsRoutingModule { }
