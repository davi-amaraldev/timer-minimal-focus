# Focus Timer

Timer de foco (pomodoro minimal) feito em JavaScript, salvando estado no `localStorage`.

## O que tem

- iniciar / pausar / resetar  
- presets de tempo (ex: 25m, 5m, 50m)  
- continua de onde parou ao recarregar a página  
- histórico por dia (sessões e minutos)  

## Rodando localmente

Como usa ES Modules, precisa de servidor local:

```bash
npx serve .
```

Abra o endereço que aparecer no terminal.

## Estrutura

```
focus-timer/
├─ index.html
├─ css/
│  └─ style.css
└─ js/
   ├─ app.js       # integração geral (eventos + interval + render)
   ├─ timer.js     # regras do timer (start/pause/reset/tick)
   ├─ storage.js   # load/save + histórico por dia
   ├─ ui.js        # renderização do DOM
   └─ utils.js     # helpers (formatar mm:ss, data etc.)
```

## Persistência

Os dados são salvos no `localStorage` usando a chave:

```
focus_timer_v1
```

## Observação

Projeto de estudo para praticar:
- organização em múltiplos arquivos JS
- manipulação de estado
- persistência no navegador
- lógica de tempo com `Date` e `setInterval`