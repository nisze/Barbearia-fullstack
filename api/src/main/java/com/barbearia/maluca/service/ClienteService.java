
package com.barbearia.maluca.service;

import com.barbearia.maluca.model.Cliente;
import com.barbearia.maluca.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    private final ClienteRepository repo;

    public ClienteService(ClienteRepository repo) {
        this.repo = repo;
    }

    public List<Cliente> listar() {
        return repo.findAll();
    }

    public Cliente salvar(Cliente cliente) {
        return repo.save(cliente);
    }
}
