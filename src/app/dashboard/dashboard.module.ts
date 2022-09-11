import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './pages/home/home.component'

// Routes
import { DashboardRoutingModule } from './dashboard-routing.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [HomeComponent],
})
export class DashboardModule {}
