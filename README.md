# 🚀 Node.js Basic API

Este é um projeto básico de API utilizando **Node.js**, **Express** e **TypeScript**, com suporte a variáveis de ambiente, segurança com `helmet`, reinicialização automática com `nodemon` e tipagem forte via TypeScript. O fluxo de versionamento segue o modelo **Git Flow**.

---

## 📦 Tecnologias e Dependências

### Dependências principais:
- [express](https://expressjs.com/) — framework minimalista e flexível
- [dotenv](https://www.npmjs.com/package/dotenv) — para utilizar variáveis de ambiente
- [helmet](https://helmetjs.github.io/) — proteção contra vulnerabilidades HTTP
- [nodemon](https://nodemon.io/) — reinicialização automática durante o desenvolvimento

### Dependências de desenvolvimento:
- [typescript](https://www.typescriptlang.org/) — superset do JavaScript com tipagem
- [ts-node](https://typestrong.org/ts-node/) — executa arquivos `.ts` diretamente
- [@types/express](https://www.npmjs.com/package/@types/express) — definições de tipos para o Express

---



## 🛠 Scripts

### Iniciar a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

## 🌐 Rotas Disponíveis
> GET /hello

Retorna uma saudação simples.

---

## 🔁 Git Flow

Este projeto utiliza o fluxo de versionamento Git Flow, com os seguintes ramos principais:

| Branch         | Finalidade                     |
|----------------|--------------------------------|
| `main`         | Código de produção             |
| `develop`      | Ambiente de desenvolvimento    |
| `feature/*`    | Novas funcionalidades          |
| `hotfix/*`     | Correções emergenciais         |
| `release/*`    | Preparação para novo release   |


## Como iniciar o Git Flow:
``` cmd
git flow init
```

---

## 📦 Instalação

1. Crie um repositório a partir deste template:

Clique em **"Use this template"** no GitHub, ou acesse diretamente:

```bash
https://github.com/gabrielpovoa/nodejs-template/generate
```
2. Clone o repositório criado:
```bash
    git clone https://github.com/seu-usuario/nome-do-seu-repo.git
    cd nome-do-seu-repo
```
3. Instale as dependências:
```cmd
    npm install
```
4. Renomeie o arquivo .env-example para .env (se necessário):
```.env
    PORT=3000
```
5. Inicie a aplicação:
```cmd
    npm run dev
``` 

O seu servidor vai estar rodando em `https:/localhost:<PORT || 3000>`