# Teste Técnico -  Desenvolvedor NodeJs

* O arquivo .env foi mantido apenas com o intuito de facilitar a execução.

### Utilizando a aplicação
```JS
git clone https://github.com/FelippeBritto/teste_tecnico.git

cd teste_tecnico

npm install ou yarn

npm run server ou yarn server

//localhost:4000
```
### Rotas da API

``` RUBY
GET:  /token              = Gerar token (Não exige credenciais)
POST: /analise/:token    = Envio da amostra (exige o token na url)
GEL:  /analise:token      = Lista todas as analises já feitas(Exige o token na url)

```
