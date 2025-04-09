
package com.barbearia.maluca.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "data_hora")
    private LocalDateTime dataHora;
    private String nome;

    public Agendamento() {}

    public Agendamento(LocalDateTime dataHora, Cliente cliente) {
        this.dataHora = dataHora;
    }

    public Long getId() { return id; }
    public LocalDateTime getDataHora() { return dataHora; }
    public String getNome() { return nome; }

    public void setId(Long id) { this.id = id; }
    public void setDataHora(LocalDateTime dataHora) { this.dataHora = dataHora;}
    public void setNome(String nome) { this.nome = nome; }
}
