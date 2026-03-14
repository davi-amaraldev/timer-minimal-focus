# Focus Timer

Projeto de estudo feito para praticar **HTML**, **CSS** e **JavaScript modular** na construção de uma aplicação simples de timer.

## Sobre o projeto

O **Focus Timer** é um projeto de estudo com foco em organização de código, separação de responsabilidades e manipulação do DOM.

A aplicação permite:

- iniciar o timer
- pausar o timer
- resetar o timer
- salvar o estado no navegador com `localStorage`
- registrar sessões concluídas por dia

## Objetivo de estudo

Este projeto foi desenvolvido para treinar:

- estruturação de projeto front-end
- divisão de responsabilidades em módulos
- manipulação de interface com JavaScript
- persistência de dados com `localStorage`
- organização de lógica de aplicação sem frameworks

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- LocalStorage
- Python HTTP Server
- Makefile

## Estrutura do projeto

    focus-timer/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   ├── storage.js
    │   ├── timer.js
    │   └── ui.js
    ├── index.html
    ├── Makefile
    └── README.md

## Organização dos arquivos

- **app.js** → coordena a aplicação
- **timer.js** → contém a lógica do cronômetro
- **storage.js** → salva e carrega o estado no `localStorage`
- **ui.js** → atualiza a interface e conecta os botões

## Funcionalidades atuais

- exibição do tempo no formato `mm:ss`
- botão de start
- botão de pause
- botão de reset
- atualização do timer em tempo real
- persistência do estado no navegador
- registro de histórico diário de sessões concluídas

## Como rodar o projeto

Como o projeto usa **módulos JavaScript**, não é recomendado abrir o `index.html` diretamente com `file://`.

Use um servidor local.

### Linux / macOS

    make run

### Windows

    python -m http.server 5500

Depois, abra no navegador:

    http://localhost:5500

## Makefile

    PORT ?= 5500

    run:
	 python3 -m http.server $(PORT)

    run-win:
	 python -m http.server $(PORT)


## Estado da aplicação

A aplicação trabalha com um estado base parecido com este:

    {
      durationSec: 1500,
      remainingSec: 1500,
      running: false,
      endAt: null,
      history: {}
    }

### Significado de cada campo

- `durationSec` → duração total da sessão
- `remainingSec` → tempo restante
- `running` → informa se o timer está em execução
- `endAt` → timestamp previsto para o fim da sessão
- `history` → histórico diário de sessões concluídas

## Próximos passos

Algumas ideias para evoluir este projeto de estudo:

- permitir duração personalizada
- adicionar pausa curta e pausa longa
- mostrar histórico na interface
- melhorar feedback visual dos botões
- adicionar alerta sonoro ao finalizar a sessão

## Autor

Feito por **Davi** como projeto de estudo.
