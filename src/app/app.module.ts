import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CertificationsComponent } from './certifications/certifications.component';

const appRoutes: Routes = [
  /*{path: 'home', component: AppComponent},*/
  /*{path: 'projects', component: PPageComponent},*/
  {path: 'certifications', component: CertificationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BackgroundComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
