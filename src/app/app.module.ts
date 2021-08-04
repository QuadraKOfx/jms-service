import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {DefaultModule} from './layouts/default/default.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducerAppState} from './state-manager/users/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {extModules} from './build-specifics';
import {AppEffects} from './state-manager/users/app.effects';
import {AppStateModule} from './state-manager/modules/app.state-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot({
      appState: reducerAppState,
    }),
    EffectsModule.forRoot([AppEffects]),
    ...extModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
