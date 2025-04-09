CREATE TABLE AGENDAMENTO (
    id BIGSERIAL not null primary key,
    data_hora timestamp(6) not null,
    nome varchar(250) not null,
    CONSTRAINT UK_SCHEDULE_INTERVAL UNIQUE (data_hora)
);
