
package com.barbearia.maluca.repository;

import com.barbearia.maluca.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {}
