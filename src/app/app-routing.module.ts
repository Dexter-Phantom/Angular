import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});
