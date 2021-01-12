import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {IntroduceComponent} from './components/introduce/introduce.component';
import {HttpClientModule} from '@angular/common/http';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import {ContactComponent} from './components/contact/contact.component';
import {PhoneNumberCustomInput} from './components/contact/phone-input/phone-input.component';
import {StoreModule} from '@ngrx/store';
import {appReducer, metaReducers} from './store/reducer/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ConfigEffect} from './store/effect/config.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from 'src/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ConfigService} from './service/config.service';
import {IsoCodeService} from './service/iso-code.service';
import {IsoCodeffect} from './store/effect/isoCode.effects';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { LangMenuComponent } from './components/lang-menu/lang-menu.component';
import { SocialComponent } from './components/social/social.component';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent,
    ContactComponent,
    PhoneNumberCustomInput,
    LangMenuComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    StoreModule.forRoot(appReducer, {metaReducers}),
    EffectsModule.forRoot([ConfigEffect, IsoCodeffect]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [ScrollDispatcher, ConfigService, IsoCodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
