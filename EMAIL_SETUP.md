# Configuração de Envio de Email - Cheree Landing

## O que foi modificado

✅ **WaitingListSection.tsx**: O código de verificação agora é **enviado por email** em vez de ser exibido na página.

✅ **server.js**: Novo servidor API que gerencia o envio de emails.

✅ **vite.config.ts**: Configurado proxy para conectar frontend (porta 3000) com API (porta 3001).

✅ **.env.local**: Adicionadas variáveis para configuração de email.

---

## Como configurar o Email (Gmail + App Password)

### 1. Ativa 2-Factor Authentication no Gmail
- Vai para [myaccount.google.com/security](https://myaccount.google.com/security)
- Activa "2-Step Verification"

### 2. Cria uma App Password
- Vai para [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Seleciona: Mail > Windows Computer
- Copia a password gerada (exemplo: `abcd efgh ijkl mnop`)

### 3. Actualiza `.env.local`
```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

---

## Como executar localmente

### Terminal 1 - Inicia o Frontend (Vite):
```bash
npm run dev
```
Acessa: **http://localhost:3000**

### Terminal 2 - Inicia a API (Node.js):
```bash
npm run dev:api
```
API rodará em: **http://localhost:3001**

---

## OU - Rodas tudo de uma vez:
```bash
npm run dev:all
```

---

## Alternativas (se não quiseres usar Gmail)

### SendGrid:
```javascript
// server.js - Substitui transporter
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Resend (Mais fácil!):
```bash
npm install resend
```
```env
RESEND_API_KEY=re_xxxxxx
```

### Mailgun:
```javascript
const mailgun = require('mailgun.js');
// ... configurar com API key
```

---

## Testes:
1. Abre **http://localhost:3000** no browser
2. Introduz um email na secção "Waiting List"
3. Devia receber o código por email (não no ecrã)
4. Copia o código do email e valida na página

---

## Se receberes erros:
- **"Failed to send verification email"**: Verifica EMAIL_USER e EMAIL_PASSWORD em `.env.local`
- **"Cannot connect to localhost:3001"**: Certifica-te que rodou `npm run dev:api` noutro terminal
- **"Invalid credentials"**: Se usares Gmail, usa a App Password, não a senha normal

Boa sorte! 🚀
