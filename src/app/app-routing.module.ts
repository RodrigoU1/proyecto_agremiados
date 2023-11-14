import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgremiadosComponent } from './components/agremiados/agremiados.component';
import { CommonModule } from '@angular/common';
import { ListaAgremiadosComponent } from './components/lista-agremiados/lista-agremiados.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'agremiadd' ,
  component: AgremiadosComponent
  },
  { path: 'listagremiados',
  component: ListaAgremiadosComponent
  },
  { path: 'home',
  component: HomeComponent
  },
  { path: 'header',
  component: HeaderComponent
  },
  { path: 'login',
  component: LoginComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterLink,
  CommonModule,
  RouterModule],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
