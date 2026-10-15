# Login Page Full Stack

Aplicação full stack de autenticação de usuários, desenvolvida com Java e Spring Boot no backend e Angular com TypeScript no frontend.

## Tecnologias utilizadas

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT (JSON Web Token)
- H2 Database
- Maven

### Frontend
- Angular
- TypeScript
- HTML
- CSS

## Funcionalidades

- Autenticação de usuários
- Segurança e controle de acesso com Spring Security
- Autenticação baseada em JWT
- Integração entre frontend e backend
- Persistência de dados utilizando banco H2 em memória

## Estrutura do projeto

```text
LOGIN-PAGE/
├── LOGIN-PAGE-FRONT/
└── LOGIN-PAGE-BACK/
```

## Como executar o projeto

### Backend

1. Acesse a pasta `LOGIN-PAGE-BACK`.
2. Execute a aplicação Spring Boot pela sua IDE ou utilizando o Maven Wrapper:

```bash
./mvnw spring-boot:run
```

No Windows, você também pode executar:

```powershell
.\mvnw.cmd spring-boot:run
```

### Frontend

1. Acesse a pasta `LOGIN-PAGE-FRONT`.
2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação Angular:

```bash
npx ng serve
```

4. Acesse no navegador o endereço indicado pelo Angular CLI, normalmente `http://localhost:4200`.

## Banco de dados

O projeto utiliza o H2 Database em memória. Os dados são mantidos durante a execução da aplicação e normalmente são perdidos quando ela é encerrada.

## Objetivo

Projeto desenvolvido para praticar conceitos de desenvolvimento full stack, autenticação de usuários, segurança de aplicações web e integração entre frontend e backend.