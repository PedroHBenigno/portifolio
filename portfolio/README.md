# Portfólio — Pedro Benigno

Site de portfólio pessoal bilíngue (PT/EN) para Pedro Henrique Benigno Ferreira.
Desenvolvedor Back-End, foco em automação, Python, C#, SQL e integração com IA.

## Estrutura

```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── i18n.js   (textos PT/EN)
│       └── main.js   (skills, projetos, idioma)
```

## Como executar localmente

Abra o `index.html` no navegador ou sirva a pasta:

```bash
# Python
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `portifolio`).
2. Envie os arquivos desta pasta para a branch `main`.
3. Vá em **Settings → Pages** e, em *Source*, escolha `main` (branch) e `/ (root)` (pasta).
4. Salve — seu site ficará disponível em `https://SEU-USUARIO.github.io/portifolio/`.

> Dica: para publicar na raiz (`https://SEU-USUARIO.github.io/`), crie um repositório chamado
> exatamente `SEU-USUARIO.github.io` e envie os arquivos na branch `main`.

## Personalização rápida

- **Projetos**: adicione/edite itens em `assets/js/main.js` (`PROJETOS`) e os textos em
  `assets/js/i18n.js`.
- **Skills**: edite `SKILLS` em `assets/js/main.js`.
- **Contato**: atualize os links na seção `contato` do `index.html`.
