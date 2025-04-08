
package com.barbearia.maluca.controller;

import com.barbearia.maluca.model.Agendamento;
import com.barbearia.maluca.service.AgendamentoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

    private final AgendamentoService service;

    public AgendamentoController(AgendamentoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Agendamento> listar() {
        return service.listar();
    }

    @PostMapping
    public Agendamento salvar(@RequestBody Agendamento agendamento) {
        return service.salvar(agendamento);
    }
}
