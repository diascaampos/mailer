# mailer
Mailer

## Sobre o projeto
Esse é um projeto de demonstração para envio de e-mail utilizando Node.js.

## Configurações
Para subir o serviço é necessário criar o arquivo .env ou especificar as seguintes variáveis de ambiente:

```
MAILER_FROM=<EMAIL_REMETENTE>
MAILER_HOST=<SERVIDOR_EMAIL>
MAILER_SECURE_CONNECTION=<TRUE_OU_FALSE>
MAILER_PORT=<PORTA_CONEXAO>
MAILER_USER=<USUARIO>
MAILER_PASSWORD=<SENHA>
```

## Instalação
```
git clone https://github.com/gleissonassis/mailer.git
cd mailer
npm install
npm start
```
## Utilização

### Templates

O projeto utiliza o processador de templates Jade para criar o conteúdo do e-mail. Verifique o template de exemplo em views/email.jade.

### Envio de e-mail

```
POST /
{
	"subject":"Assunto",
	"body":"Corpo do email"
}
```
