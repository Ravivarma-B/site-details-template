import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackupsComponent } from './backups/backups.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SupportComponent } from './support/support.component';

enum APP_ROUTES {
  DEFAULT = '',
  DASHBOARD = 'dashboard',
  MIGRATIONS = 'migrations',
  COLLABORATORS = 'collaborators',
  BACKUPS = 'backups',
  SUPPORT = 'support',
  NEW_TICKET = 'new-ticket',
  SITE_DETAILS = 'site-details'
}

const routes: Routes = [
  {path: APP_ROUTES.DEFAULT, pathMatch: 'full', redirectTo: APP_ROUTES.SITE_DETAILS},
  {path: APP_ROUTES.SITE_DETAILS, component: SiteDetailsComponent},
  {path: APP_ROUTES.DASHBOARD, component: DashboardComponent},
  {path: APP_ROUTES.MIGRATIONS, component: MigrationsComponent},
  {path: APP_ROUTES.SUPPORT, component: SupportComponent},
  {path: APP_ROUTES.BACKUPS, component: BackupsComponent},
  {path: APP_ROUTES.NEW_TICKET, component: NewTicketComponent},
  {path: APP_ROUTES.COLLABORATORS, component: CollaboratorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
