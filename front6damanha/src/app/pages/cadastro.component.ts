import { Component } from '@angular/core';
import {CustomerService } from '../services/customer.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
@Component({ selector: 'app-cadastro', templateUrl: './cadastro.component.html' })
export class CadastroComponent {
    nome: string = '';
    email: string = '';
    telefone: string = '';

    customerService: CustomerService;

    constructor(customerService: CustomerService) {
        this.customerService = customerService;
    }

    cadastrar() {
        this.customerService.create({
            email: this.email,
            nome: this.nome,
            telefone: this.telefone,
        }).subscribe((observer) => {
            console.log(observer);
            alert('Cadastramento concluido!');
        }).add(() => {
     
            this.nome = '';
            this.telefone = '';
            this.email = '';
        });
    }
}