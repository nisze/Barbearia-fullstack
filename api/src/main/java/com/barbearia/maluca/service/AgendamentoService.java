
package com.barbearia.maluca.service;

import com.barbearia.maluca.model.Agendamento;
import com.barbearia.maluca.repository.AgendamentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentoService {
    private final AgendamentoRepository repo;

    public AgendamentoService(AgendamentoRepository repo) {
        this.repo = repo;
    }

    public List<Agendamento> listar() {
        return repo.findAll();
    }

    public Agendamento salvar(Agendamento agendamento) {
        agendamento.setId(null);
        return repo.save(agendamento);
    }
}
