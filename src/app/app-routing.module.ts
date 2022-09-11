import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Pages
import { AboutComponent } from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: ':id/:username', component: AboutComponent }],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (module) => module.DashboardModule,
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
