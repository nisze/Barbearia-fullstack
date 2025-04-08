import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
@Component({ selector: 'app-agendamento', templateUrl: './agendamento.component.html' })
export class AgendamentoComponent {
    nome: string = '';
    data: string = '';
    horario: string = '';

    bookingService: BookingService;

    constructor(bookingService: BookingService) {
        this.bookingService = bookingService;
    }


    agendar() {
        const dataHora = new Date(`${this.data}T${this.horario}`);

        this.bookingService.create({
            id: 0,
            nome: this.nome,
            dataHora: dataHora,
        }).subscribe((observer) => {
            console.log(observer);
            alert('Agendamento realizado com sucesso!');
        }).add(() => {
            // Reset the form fields
            this.nome = '';
            this.data = '';
            this.horario = '';
        });
    }
}