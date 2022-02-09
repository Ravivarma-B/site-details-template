import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { BackupsComponent } from './backups/backups.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { SupportComponent } from './support/support.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SiteDetailsComponent,
    DashboardComponent,
    MigrationsComponent,
    BackupsComponent,
    CollaboratorsComponent,
    SupportComponent,
    NewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
