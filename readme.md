# Radar da Conversão — Consórcio

Sistema de análise comportamental (DISC) para vendedores de **consórcio de imóveis e carros**, com foco em **fechamento de vendas**: leitura do cliente, micropactos, sinais de compra e timing da oferta.

Adaptado do CXconversão (Código da Conversão) para o contexto da Demicon.

## ✨ Como funciona

1. **Durante o atendimento** (presencial, telefone ou WhatsApp), marque os sinais comportamentais que o cliente demonstra
2. O sistema identifica automaticamente o **perfil DISC dominante**
3. Você recebe, calibrado para aquele perfil:
   - 💬 **Objeções** — as 9 objeções clássicas do consórcio com pergunta calibrada + resposta pronta
   - 📋 **Script de Conexão** — abertura + metodologia SPIN adaptada para consórcio
   - 🤔 **Perguntas Abertas** — 5 perguntas para abrir a conversa do jeito certo
   - 🎯 **Fechamento** — sinais de compra, micropactos, scripts de fechamento e timing da oferta

## 🎯 Perfis DISC

- **🟥 Dominante (D)**: fecha por vantagem e controle — oferte quando ele negociar
- **🟨 Influente (I)**: fecha pela emoção — oferte no pico do sonho
- **🟩 Estável (S)**: fecha pela segurança — oferte depois de remover os medos
- **🟦 Conforme (C)**: fecha pela lógica — oferte quando a análise dele concluir

## 💬 As 9 objeções do consórcio (calibradas por perfil)

1. "Consórcio demora demais, quero algo mais rápido"
2. "Prefiro financiamento"
3. "E se eu não for contemplado logo?"
4. "Preciso falar com minha esposa/meu marido antes"
5. "Conheço gente que se deu mal com consórcio"
6. "A taxa de administração é cara"
7. "Não tenho dinheiro pra dar lance"
8. "Agora não é um bom momento"
9. "Vou esperar juntar dinheiro e comprar à vista"

Cada uma com **pergunta calibrada** (para entender a raiz) e **resposta adaptada** ao perfil comportamental do cliente.

## 🚀 Tecnologias

- React 18 + Vite
- Deploy: Netlify

## 📋 Rodar localmente

```bash
npm install
npm run dev
```

## 🌐 Deploy no Netlify

1. Suba este repositório no GitHub
2. No Netlify: "Add new site" → "Import an existing project" → conecte o repositório
3. Build command: `npm run build` · Publish directory: `dist` (o `netlify.toml` já configura)
4. Deploy automático a cada push

## ⚠️ Nota importante

Os textos citam verificação da administradora no **site do Banco Central** — mantenha essa orientação em todos os atendimentos. Nunca prometa contemplação garantida: além de ilegal, é o argumento que diferencia o vendedor sério do golpista.

---

**Radar da Conversão — Consórcio** · Metodologia CX — Código da Conversão
