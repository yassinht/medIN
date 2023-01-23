import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CertifsComponent } from './components/pages/certifs/certifs.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { GeneralComponent } from './components/pages/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent,
    CertifsComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
