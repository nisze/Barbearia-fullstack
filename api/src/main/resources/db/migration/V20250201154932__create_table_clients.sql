CREATE TABLE CLIENTE (
    id BIGSERIAL not null primary key,
    nome VARCHAR(255) not null,
    email VARCHAR(255) not null,
    telefone BPCHAR(11) not null,
    CONSTRAINT UK_EMAIL  UNIQUE (email),
    CONSTRAINT UK_PHONE  UNIQUE (telefone)
);
