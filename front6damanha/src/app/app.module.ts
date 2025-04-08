
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { ServicosComponent } from './pages/servicos.component';
import { AgendamentoComponent } from './pages/agendamento.component';
import { CadastroComponent } from './pages/cadastro.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'agendamento', component: AgendamentoComponent },
    { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
    declarations: [AppComponent, HomeComponent, ServicosComponent, AgendamentoComponent, CadastroComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
