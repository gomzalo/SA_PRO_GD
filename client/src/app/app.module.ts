import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";


import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Libs
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Config
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import {EditorModule} from 'primeng/editor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VerifyComponent } from './pages/admin/verify/verify.component';
import { VerifyAcountComponent } from './pages/verify-acount/verify-acount.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VerifyComponent,
    VerifyAcountComponent,
  ],
  imports: [
    MatTabsModule,
    AngularDualListBoxModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    EditorModule,
    HttpClientModule,
    NgxDropzoneModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
