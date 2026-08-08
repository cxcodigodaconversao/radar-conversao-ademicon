import React, { useState } from 'react';

const markers = [
  { label: "Fala rápida, quer ir direto ao ponto", profile: "D" },
  { label: "Fala animada, conta histórias da família", profile: "I" },
  { label: "Fala pausada, pensa antes de responder", profile: "S" },
  { label: "Fala técnica, pergunta números e taxas", profile: "C" },
  { label: "Tom de voz firme, quer decidir logo", profile: "D" },
  { label: "Tom de voz expressivo, empolgado com o sonho", profile: "I" },
  { label: "Tom de voz suave, com medo de errar", profile: "S" },
  { label: "Tom de voz neutro, quer entender tudo antes", profile: "C" },
  { label: "Olhar direto, negocia e pressiona", profile: "D" },
  { label: "Sorri, se imagina usando o bem", profile: "I" },
  { label: "Expressão calma, busca segurança", profile: "S" },
  { label: "Expressão séria, compara e analisa", profile: "C" }
];

const suggestions = {
  D: {
    label: "🟥 Perfil Dominante",
    approach: "🎯 Seja direto. Mostre o caminho mais inteligente pra chegar no imóvel ou no carro",
    trigger: "🔥 Resultado, economia real, decisão rápida, vantagem sobre o financiamento",
    perguntas_abertas: {
      titulo: "Perguntas Abertas Estratégicas",
      objetivo: "fazer o cliente falar de objetivo e prazo sem enrolação — ele odeia conversa fiada",
      caracteristicas: "Direto, Prático, Negociador",
      perguntas: [
        "Qual é o seu plano: imóvel pra morar, pra investir, ou trocar de carro?",
        "Em quanto tempo você quer estar com esse bem na mão?",
        "O que já te impediu de resolver isso antes?",
        "Se eu te mostrar o caminho mais barato pra chegar lá, o que te faria fechar hoje?",
        "Quanto do seu orçamento mensal você já separou pra esse objetivo?"
      ]
    },
    social_selling: {
      titulo: "Fechamento — Timing e Micropactos",
      objetivo: "fechar com o Dominante no momento em que ele sente que está no controle e fazendo o melhor negócio",
      caracteristicas: "Decide rápido, odeia sentir que está sendo empurrado, fecha quando enxerga vantagem",
      estrategia_aproximacao: {
        titulo: "🚦 SINAIS DE COMPRA — HORA DE OFERTAR",
        descricao: "O Dominante avisa que vai comprar quando começa a negociar. Fique atento a:",
        tacticas: [
          "Pergunta 'quanto fica a parcela?' ou 'qual o melhor que você faz pra mim?'",
          "Começa a negociar taxa, prazo ou condição — negociar É sinal de compra",
          "Pergunta sobre lance: 'com quanto eu contemplo mais rápido?'",
          "Olha o relógio ou diz 'vamos resolver isso logo'",
          "Compara com o financiamento por conta própria: 'e no banco, quanto ficaria?'"
        ]
      },
      conteudo_engajamento: {
        titulo: "🤝 MICROPACTOS — OS PEQUENOS SIMS",
        descricao: "Colecione pequenos acordos antes da oferta final. Com o Dominante, micropacto tem que ter lógica de ganho:",
        tipos: [
          "\"Se a parcela couber no valor que você me falou, faz sentido a gente avançar?\"",
          "\"Se eu te mostrar que aqui você economiza em relação ao financiamento, a gente fecha hoje?\"",
          "\"Posso te mostrar a estratégia de lance que contempla mais rápido?\"",
          "\"Se o prazo bater com o seu plano, tem mais alguma coisa que te impede?\"",
          "\"Fechando hoje, você já entra no próximo grupo. Faz sentido pra você?\""
        ]
      },
      scripts_dm: {
        titulo: "💬 SCRIPTS DE FECHAMENTO",
        descricao: "Fechamento direto, sem rodeio — ele respeita quem vai ao ponto",
        scripts: [
          {
            situacao: "1. Fechamento direto (quando os micropactos foram todos 'sim')",
            script: "Fulano, a parcela cabe, o prazo bate com o seu plano e você economiza em relação ao banco. Vamos fechar? Só preciso do seu documento pra garantir a cota nesse grupo."
          },
          {
            situacao: "2. Fechamento por alternativa (dá o controle pra ele)",
            script: "Você prefere entrar com a cota de crédito de 300 ou de 350? As duas cabem no que você me passou — qual faz mais sentido pro seu objetivo?"
          },
          {
            situacao: "3. Quando ele pede desconto ou vantagem",
            script: "O que eu posso fazer por você é o seguinte: [condição real]. Isso vale pra quem fecha hoje, porque o grupo assembleia dia [data]. Fechamos?"
          },
          {
            situacao: "4. Quando ele diz 'vou pensar' (Dominante pensando = perdeu vantagem)",
            script: "Justo. Só me responde uma coisa: o que falta pra ser um sim? Se for número, eu resolvo agora. Se for outra coisa, me fala que eu te ajudo a decidir com clareza."
          }
        ]
      },
      timing_frequencia: {
        titulo: "⏰ TIMING DA OFERTA",
        descricao: "Quando ofertar e quando segurar com o Dominante",
        diretrizes: [
          "OFERTE assim que ele começar a negociar — esperar demais faz ele esfriar",
          "NÃO oferte enquanto ele ainda estiver comparando com o financiamento sem você ter mostrado os números",
          "Ele decide na primeira ou segunda conversa — não estique pra uma terceira sem motivo",
          "Se ele disse 'me liga semana que vem', marque dia e hora na hora: ele respeita compromisso",
          "Nunca enrole: se ele perguntou o preço, dê o preço e emende a pergunta de fechamento"
        ]
      },
      gatilhos_psicologicos: {
        titulo: "🧠 GATILHOS QUE FUNCIONAM COM ELE",
        descricao: "O que ativa a decisão do Dominante",
        gatilhos: [
          "Vantagem: 'Você paga menos que no financiamento e o crédito é o mesmo'",
          "Controle: 'A decisão é sua — eu só te mostro o caminho mais inteligente'",
          "Escassez real: 'Esse grupo fecha a assembleia dia X'",
          "Status de bom negociador: 'Poucos clientes conseguem essa condição'",
          "Velocidade: 'Fechando hoje, você já concorre na próxima assembleia'"
        ]
      }
    },
    script: {
      objetivo: {
        caracteristicas: "Pessoa prática, impaciente e direta. Quer o melhor negócio.",
        busca: "chegar no imóvel ou no carro pelo caminho mais inteligente e barato",
        evita: "enrolação, vendedor que empurra, detalhes que não pediu",
        foco: "Quanto custa? Quanto economizo? Em quanto tempo chego lá?"
      },
      abertura: {
        titulo: "ABERTURA RÁPIDA (CONEXÃO)",
        script: "Fulano, vou direto ao ponto: meu papel aqui é te mostrar se o consórcio é o caminho mais barato pra você chegar no seu imóvel (ou carro). Se não for, eu mesmo te falo. Fechado?",
        gatilhos: "Controle, franqueza, economia"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "entender rápido o objetivo e o orçamento — sem alongar",
          perguntas: [
            "Você está buscando imóvel ou carro? Pra quando?",
            "Hoje você paga aluguel ou financiamento? De quanto?",
            "Quanto por mês você consegue destinar pra esse objetivo sem apertar?"
          ],
          gatilhos: "Clareza, objetivo, prazo"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "expor o que está travando ele de conquistar o bem",
          perguntas: [
            "O que te impediu de comprar até agora — entrada, juros, ou timing?",
            "Você já simulou financiamento? O que te travou lá?",
            "Quanto você já 'perdeu' esperando o momento perfeito?"
          ],
          gatilhos: "Urgência, custo de esperar, frustração com juros"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "fazer ele calcular o custo de continuar como está",
          perguntas: [
            "Se você seguir pagando aluguel por mais 2 anos, quanto vai ter jogado fora?",
            "No financiamento, você sabe quanto pagaria só de juros no total?",
            "Cada mês que passa o imóvel valoriza — quanto isso te custa esperando?"
          ],
          gatilhos: "Perda financeira concreta, senso de urgência"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE (SPIN: N)",
          objetivo: "fazer ele verbalizar o ganho de resolver agora",
          perguntas: [
            "Se eu te mostrar um caminho onde a parcela cabe e você não paga juros de banco, resolve teu problema?",
            "Ter esse bem no prazo que você quer, pagando menos — é isso que você busca?",
            "O que muda no teu jogo quando esse objetivo estiver resolvido?"
          ],
          gatilhos: "Ganho declarado pelo próprio cliente"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO CONSÓRCIO",
        script: "Funciona assim, direto: você entra num grupo, paga uma parcela sem juros de banco — só a taxa de administração, que eu te mostro na ponta do lápis — e concorre todo mês à contemplação por sorteio ou lance. Com estratégia de lance, dá pra acelerar. No fim das contas: mesmo crédito, custo total menor que o financiamento. Quer ver os números do seu caso?",
        gatilhos: "Economia comprovada, controle da decisão, comparação direta com o financiamento"
      },
      chamada: {
        titulo: "CHAMADA PARA AÇÃO",
        script: "A parcela cabe, o custo é menor e o grupo assembleia dia [data]. Vamos garantir sua cota agora? Só preciso do seu documento."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO",
        script: "Vou te mandar o contrato e a simulação por WhatsApp agora. Assinou, sua cota tá garantida pra próxima assembleia. Qualquer dúvida, me chama direto — eu resolvo."
      }
    },
    objections: [
      {
        title: "❌ Consórcio demora demais, quero algo mais rápido",
        question: "Rápido pra você é quanto tempo? E quanto a mais você aceita pagar por essa pressa?",
        response: "Justo. Só que 'rápido' no banco custa caro: nos juros do financiamento, você paga quase dois imóveis pra levar um. No consórcio, com estratégia de lance, muita gente contempla nos primeiros meses — pagando muito menos. Posso te mostrar a estratégia de lance do seu caso?"
      },
      {
        title: "❌ Prefiro financiamento",
        question: "Você já colocou na ponta do lápis quanto vai pagar de juros no total do financiamento?",
        response: "Então vamos comparar agora, número contra número. Mesmo crédito: total pago no financiamento X total pago no consórcio. A diferença normalmente dá outro carro — ou boa parte de outro imóvel. Se os números não te convencerem, você fecha o financiamento em paz. Topa ver?"
      },
      {
        title: "❌ E se eu não for contemplado logo?",
        question: "Se eu te mostrar como acelerar a contemplação com lance, isso resolve sua preocupação?",
        response: "Existem 3 caminhos: sorteio, lance livre e lance embutido — e tem estratégia pra cada orçamento. Quem entra com plano de lance não fica esperando a sorte. Te mostro o histórico de contemplação do grupo e montamos sua estratégia agora."
      },
      {
        title: "❌ Preciso falar com minha esposa/meu marido antes",
        question: "O que exatamente ele(a) precisa ver pra apoiar: a parcela, o prazo ou a segurança?",
        response: "Perfeito — decisão de patrimônio é dos dois. Faz o seguinte: te mando um resumo de uma página com os números comparados com o financiamento. Você apresenta como quem achou um bom negócio. E se quiser, faço uma call de 10 minutos com vocês dois. Que dia fica bom?"
      },
      {
        title: "❌ Conheço gente que se deu mal com consórcio",
        question: "O que aconteceu com essa pessoa — era administradora autorizada pelo Banco Central?",
        response: "Existem golpes por aí, sim — normalmente empresa sem autorização ou promessa de contemplação garantida, o que é ilegal. Aqui é administradora fiscalizada pelo Banco Central, você consulta em 2 minutos no site oficial. Te mostro agora no celular. Quem se protege com informação não cai em cilada."
      },
      {
        title: "❌ A taxa de administração é cara",
        question: "Cara comparada com o quê — com os juros totais do financiamento?",
        response: "Vamos aos números: taxa de administração total do plano contra juros totais do financiamento no mesmo prazo. A conta não é próxima — é desproporcional. Te mostro no papel e você mesmo tira a conclusão."
      },
      {
        title: "❌ Não tenho dinheiro pra dar lance",
        question: "Você sabia que dá pra dar lance usando o próprio crédito, sem tirar do bolso?",
        response: "Existe o lance embutido: você usa parte do próprio crédito como lance. E tem o FGTS no caso de imóvel. Ou seja: dá pra jogar o jogo da contemplação mesmo sem reserva hoje. Te mostro as 3 formas e você escolhe a sua."
      },
      {
        title: "❌ Agora não é um bom momento",
        question: "O que precisa mudar pra ser o momento certo — e quanto custa esperar isso acontecer?",
        response: "Enquanto o momento perfeito não chega, o aluguel continua saindo e o imóvel continua valorizando. Começar com uma parcela que cabe no bolso é justamente o jeito de aproveitar o tempo a seu favor, não contra. Qual parcela caberia hoje sem apertar?"
      },
      {
        title: "❌ Vou esperar juntar dinheiro e comprar à vista",
        question: "Quanto tempo você levaria juntando — e quanto o bem valoriza nesse mesmo período?",
        response: "O problema de juntar é que o alvo anda: você poupa 10, o imóvel sobe 12. O consórcio é uma poupança forçada com uma vantagem: a qualquer momento a contemplação antecipa sua compra com o preço travado no crédito. É juntar dinheiro — só que com chave na mão no meio do caminho."
      }
    ]
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com o sonho: a casa nova, o carro novo, a família. Emoção primeiro, número depois",
    trigger: "🔥 Sonho realizado, reconhecimento, história de quem conseguiu, pertencimento",
    perguntas_abertas: {
      titulo: "Perguntas Abertas Estratégicas",
      objetivo: "fazer o cliente falar do sonho e se imaginar com o bem — ele compra pela emoção",
      caracteristicas: "Comunicativo, Otimista, Emocional",
      perguntas: [
        "Me conta: como você imagina a sua casa nova (ou o seu carro novo)?",
        "Quem da sua família vai comemorar mais quando isso acontecer?",
        "O que essa conquista significaria pra você neste momento da vida?",
        "Você conhece alguém que já realizou esse sonho? Como foi?",
        "Se tudo der certo, qual é a primeira coisa que você faz quando pegar a chave?"
      ]
    },
    social_selling: {
      titulo: "Fechamento — Timing e Micropactos",
      objetivo: "fechar com o Influente no pico da emoção — ele decide quando está empolgado e se sentindo especial",
      caracteristicas: "Decide pela emoção, adia por distração, precisa de condução leve mas firme",
      estrategia_aproximacao: {
        titulo: "🚦 SINAIS DE COMPRA — HORA DE OFERTAR",
        descricao: "O Influente avisa que vai comprar quando começa a sonhar alto. Fique atento a:",
        tacticas: [
          "Se imagina usando o bem: 'nossa, ia ser incrível levar as crianças nesse carro'",
          "Chama alguém da família pra ouvir ou manda áudio pro cônjuge na hora",
          "Conta a própria história e cria intimidade com você",
          "Pergunta 'e aí, o que você faria no meu lugar?'",
          "Fala do futuro no presente: 'quando eu estiver na casa nova...'"
        ]
      },
      conteudo_engajamento: {
        titulo: "🤝 MICROPACTOS — OS PEQUENOS SIMS",
        descricao: "Com o Influente, os micropactos conectam o sonho com o passo prático:",
        tipos: [
          "\"Se a parcela couber no seu bolso, você toparia começar esse sonho hoje?\"",
          "\"Imagina a cena da entrega da chave... se eu te mostrar o caminho até ela, você vem comigo?\"",
          "\"Posso montar a simulação do SEU plano, do seu jeito?\"",
          "\"Se sua esposa/seu marido amar a ideia, fechamos essa semana?\"",
          "\"Você prefere realizar em 5 anos com folga ou acelerar com lance? Vamos escolher juntos?\""
        ]
      },
      scripts_dm: {
        titulo: "💬 SCRIPTS DE FECHAMENTO",
        descricao: "Fechamento com emoção e celebração — ele precisa sentir que está começando algo especial",
        scripts: [
          {
            situacao: "1. Fechamento no pico da emoção",
            script: "Fulana, olha só: a parcela cabe, o plano é a sua cara, e daqui a pouco você vai estar me mandando a foto da chave. Vamos garantir sua cota agora? Eu cuido de toda a papelada pra você."
          },
          {
            situacao: "2. Fechamento com visualização",
            script: "Fecha os olhos rapidinho: primeira festa na casa nova. Quem tá lá? [deixa responder] Então bora fazer isso acontecer — me passa seu documento que eu garanto sua vaga no grupo hoje."
          },
          {
            situacao: "3. Quando ele empolga mas dispersa",
            script: "Adorei nossa conversa! Pra esse sonho não ficar só na conversa, vamos dar o primeiro passo agora: reservo sua cota e te mando tudo certinho no WhatsApp. Topa?"
          },
          {
            situacao: "4. Quando ele diz 'vou pensar' (Influente pensando = vai esfriar)",
            script: "Claro! Só me conta: o que ficou faltando pra ser um 'sim' com o coração tranquilo? Se for a parcela, ajustamos juntos. Se for conversar em casa, te mando um resumo lindo pra você mostrar. Qual dos dois?"
          }
        ]
      },
      timing_frequencia: {
        titulo: "⏰ TIMING DA OFERTA",
        descricao: "Quando ofertar e quando segurar com o Influente",
        diretrizes: [
          "OFERTE no pico da emoção — quando ele estiver se imaginando com o bem",
          "NÃO deixe pra depois: o entusiasmo dele evapora em 24-48h",
          "Se não fechou na hora, mande mensagem no MESMO dia relembrando o sonho (foto do modelo do carro, imóvel parecido)",
          "NÃO oferte no início frio: primeiro faça ele sonhar, depois traga o número",
          "Follow-up leve e caloroso: áudio funciona melhor que texto com esse perfil"
        ]
      },
      gatilhos_psicologicos: {
        titulo: "🧠 GATILHOS QUE FUNCIONAM COM ELE",
        descricao: "O que ativa a decisão do Influente",
        gatilhos: [
          "História real: 'Semana passada entreguei a carta de crédito de uma cliente que começou igualzinho a você'",
          "Pertencimento: 'Você vai entrar num grupo de pessoas realizando o mesmo sonho'",
          "Celebração: 'Vou comemorar com você no dia da contemplação'",
          "Exclusividade afetiva: 'Vou montar um plano do seu jeito'",
          "Prova social: fotos e depoimentos de contemplados (com autorização)"
        ]
      }
    },
    script: {
      objetivo: {
        caracteristicas: "Pessoa calorosa, comunicativa e otimista. Compra pela emoção e confia em quem gosta.",
        busca: "realizar o sonho, ser reconhecida, fazer parte, viver a experiência",
        evita: "frieza, planilha demais, vendedor sem energia",
        foco: "Como vai ser quando eu conquistar? Quem vai comemorar comigo?"
      },
      abertura: {
        titulo: "ABERTURA RÁPIDA (CONEXÃO)",
        script: "Fulana, que bom falar com você! Antes de qualquer número, me conta: que sonho é esse que trouxe você aqui — casa nova ou carro novo? Quero entender direitinho pra montar algo do seu jeito.",
        gatilhos: "Acolhimento, sonho, personalização"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "entender o momento de vida e o sonho por trás do bem",
          perguntas: [
            "Como é sua situação hoje — mora de aluguel, com família, como é?",
            "Esse carro/imóvel novo é pra qual momento da sua vida?",
            "Quem mais vai aproveitar essa conquista com você?"
          ],
          gatilhos: "Conexão, escuta, história pessoal"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "tocar com delicadeza na frustração de ainda não ter realizado",
          perguntas: [
            "O que já te impediu de realizar isso antes?",
            "Como você se sente vendo outras pessoas conquistando e você adiando?",
            "O que mais te incomoda na sua situação atual — o aluguel, o carro velho?"
          ],
          gatilhos: "Emoção da frustração, comparação social suave"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "mostrar o custo emocional de continuar adiando o sonho",
          perguntas: [
            "Se mais um ano passar do mesmo jeito, como você vai se sentir?",
            "Quantos aniversários, natais e visitas ainda vão acontecer na casa alugada?",
            "O que sua família deixa de viver enquanto esse sonho fica pra depois?"
          ],
          gatilhos: "Tempo passando, momentos perdidos, família"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE (SPIN: N)",
          objetivo: "fazer ele declarar o desejo em voz alta — com o Influente isso fecha meio caminho",
          perguntas: [
            "Imagina receber a carta de contemplação — o que você faz primeiro?",
            "Se existisse um caminho com parcela que cabe no bolso, você começaria hoje?",
            "O que significaria pra você dar esse presente pra sua família?"
          ],
          gatilhos: "Visualização vívida, emoção positiva declarada"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO CONSÓRCIO",
        script: "Deixa eu te contar como funciona, do jeito simples: é como uma vaquinha organizada e fiscalizada pelo Banco Central. Todo mundo do grupo paga sua parcela, e todo mês tem gente sendo contemplada — por sorteio ou lance. A [cliente exemplo] começou em janeiro e em maio me mandou foto com a chave. Sua parcela cabe no bolso, sem juros de banco, e o sonho sai do papel. Quer ver como ficaria o SEU plano?",
        gatilhos: "História real de contemplação, visualização do sonho, plano personalizado"
      },
      chamada: {
        titulo: "CHAMADA PARA AÇÃO",
        script: "Vamos começar essa história hoje? Eu garanto sua cota, cuido de tudo pra você, e daqui a pouco quem vai estar contando a história de conquista pros outros é você."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO",
        script: "Vou te mandar tudo bonitinho no seu WhatsApp — resumo do plano e contrato. Assinou, me manda um 'FEITO!' que eu já deixo tudo pronto pra próxima assembleia. E guarda meu contato: quero ser a primeira pessoa que você avisa quando contemplar!"
      }
    },
    objections: [
      {
        title: "❌ Consórcio demora demais, quero algo mais rápido",
        question: "Se eu te contar como uma cliente minha contemplou em 4 meses, você quer saber como ela fez?",
        response: "Entendo a ansiedade — sonho bom a gente quer pra ontem! Mas olha: tem gente contemplando nos primeiros meses com estratégia de lance. E sabe o que é melhor? Enquanto espera, você não está pagando juros de banco. Deixa eu te contar a história da [nome] e te mostrar a estratégia dela?"
      },
      {
        title: "❌ Prefiro financiamento",
        question: "Você sabia que nos juros do financiamento cabe quase um segundo imóvel?",
        response: "Muita gente pensa assim até ver a conta. No financiamento, o sonho vem com um peso enorme de juros — dinheiro que podia virar a mobília da casa, a festa de inauguração, a viagem em família. Vamos comparar juntos? Se depois você preferir o banco, sem problema — mas quero que você escolha sabendo."
      },
      {
        title: "❌ E se eu não for contemplado logo?",
        question: "E se eu te mostrar as formas de acelerar — sorteio, lance livre e lance embutido — qual te animaria mais?",
        response: "Olha que legal: todo mês tem contemplação no grupo, e você concorre de mais de um jeito. E enquanto seu momento não chega, cada parcela é um tijolinho do seu sonho — não é dinheiro jogado fora como o aluguel. Te mostro o histórico do grupo? Você vai gostar de ver."
      },
      {
        title: "❌ Preciso falar com minha esposa/meu marido antes",
        question: "Que tal a gente montar juntos uma apresentação do plano que vai fazer ele(a) amar a ideia?",
        response: "Amei — sonho realizado a dois é ainda melhor! Faço assim: te mando um resumo caprichado, com os números e o caminho até a chave. Se quiser, entro numa chamada rapidinha com vocês dois pra responder tudo. Aposto que ele(a) vai ficar tão animado(a) quanto você. Que dia fica bom?"
      },
      {
        title: "❌ Conheço gente que se deu mal com consórcio",
        question: "O que aconteceu com essa pessoa? Deixa eu te mostrar como garantir que isso nunca aconteça com você.",
        response: "Poxa, sinto muito por essa pessoa — e agradeço a confiança de me contar. Na maioria desses casos, era empresa sem autorização do Banco Central ou promessa ilegal de contemplação garantida. Aqui você pode consultar a administradora no site do Banco Central agora, comigo do seu lado. Seu sonho merece segurança — e é exatamente isso que vou te dar."
      },
      {
        title: "❌ A taxa de administração é cara",
        question: "Posso te mostrar a comparação com os juros do financiamento? Você vai se surpreender.",
        response: "Parece, né? Até colocar do lado dos juros do banco. A taxa aqui é o custo de ter todo um sistema fiscalizado trabalhando pelo seu sonho — e no total, fica muito abaixo do que o financiamento cobra. Te mostro no papel, do jeito simples, e você vê com seus olhos."
      },
      {
        title: "❌ Não tenho dinheiro pra dar lance",
        question: "E se eu te contar que dá pra dar lance sem tirar nada do bolso?",
        response: "Boa notícia: existe o lance embutido — você usa parte do próprio crédito. E no imóvel, dá pra usar o FGTS, aquele dinheiro que está lá paradinho esperando um propósito. Ou seja: mesmo sem reserva hoje, você joga o jogo da contemplação. Vamos ver qual caminho combina com você?"
      },
      {
        title: "❌ Agora não é um bom momento",
        question: "Se não for agora com uma parcela que cabe no bolso, quando vai ser — e como você vai se sentir esperando?",
        response: "Te entendo — a vida anda corrida. Mas deixa eu te falar com carinho: o 'momento perfeito' é o maior ladrão de sonhos que existe. Começar pequeno, com uma parcela confortável, é como plantar a semente hoje pra colher a chave amanhã. Qual parcela seria confortável pra você agora?"
      },
      {
        title: "❌ Vou esperar juntar dinheiro e comprar à vista",
        question: "Enquanto você junta, o imóvel valoriza — já pensou que o alvo fica sempre um passo à frente?",
        response: "Admiro a disciplina! O detalhe é: poupança sozinha corre atrás de um alvo que anda. O consórcio é justamente uma poupança com superpoder — você junta todo mês E concorre à chave antecipada. É o melhor dos dois mundos: a disciplina que você já tem, com a chance de realizar muito antes."
      }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, dê segurança e conduza passo a passo. Nunca pressione",
    trigger: "🔥 Segurança, estabilidade, acompanhamento, garantias, sem sustos",
    perguntas_abertas: {
      titulo: "Perguntas Abertas Estratégicas",
      objetivo: "criar confiança e deixar o cliente confortável pra falar — ele só compra de quem confia",
      caracteristicas: "Calmo, Cauteloso, Fiel",
      perguntas: [
        "Me conta com calma: o que te fez pensar em imóvel/carro nesse momento?",
        "O que é mais importante pra você numa decisão como essa?",
        "Você já teve alguma experiência com consórcio ou financiamento? Como foi?",
        "O que te deixaria totalmente tranquilo(a) pra dar esse passo?",
        "Como sua família enxerga esse plano?"
      ]
    },
    social_selling: {
      titulo: "Fechamento — Timing e Micropactos",
      objetivo: "fechar com o Estável removendo o medo — ele decide quando se sente seguro e acompanhado",
      caracteristicas: "Decide devagar, odeia pressão, fecha quando confia no vendedor e no processo",
      estrategia_aproximacao: {
        titulo: "🚦 SINAIS DE COMPRA — HORA DE OFERTAR",
        descricao: "O Estável avisa que vai comprar quando começa a perguntar sobre segurança. Fique atento a:",
        tacticas: [
          "Pergunta 'e se eu atrasar uma parcela, o que acontece?'",
          "Pergunta 'e se eu quiser desistir, como funciona?'",
          "Pergunta se você vai acompanhar ele depois da venda",
          "Menciona a família concordando: 'conversei em casa e a gente gostou'",
          "Repete as informações pra confirmar: 'então quer dizer que...' (ele está se convencendo)"
        ]
      },
      conteudo_engajamento: {
        titulo: "🤝 MICROPACTOS — OS PEQUENOS SIMS",
        descricao: "Com o Estável, os micropactos removem medo, um por vez:",
        tipos: [
          "\"Se eu te mostrar que a administradora é fiscalizada pelo Banco Central, fica mais tranquilo(a)?\"",
          "\"Se a parcela ficar num valor que não aperta o orçamento, faz sentido pra você?\"",
          "\"Posso te explicar com calma o que acontece em cada situação — atraso, desistência, contemplação?\"",
          "\"Se sua família estiver de acordo, a gente dá o próximo passo juntos?\"",
          "\"Você prefere que eu te acompanhe mês a mês depois de fechar? Porque é isso que eu faço.\""
        ]
      },
      scripts_dm: {
        titulo: "💬 SCRIPTS DE FECHAMENTO",
        descricao: "Fechamento suave, passo a passo, sem pressão — pressão faz ele recuar",
        scripts: [
          {
            situacao: "1. Fechamento passo a passo (o mais eficaz com esse perfil)",
            script: "Fulano, vamos fazer assim, com calma: hoje a gente só garante sua cota — é um passo simples e seguro. Depois eu te explico cada etapa e te acompanho em todas. Você nunca vai estar sozinho nisso. Podemos dar esse primeiro passo?"
          },
          {
            situacao: "2. Fechamento com garantia de acompanhamento",
            script: "O que eu te garanto é o seguinte: fechou comigo, você tem meu telefone pessoal. Qualquer dúvida, qualquer assembleia, qualquer boleto — você me chama e eu resolvo com você. Assim fica tranquilo pra começar?"
          },
          {
            situacao: "3. Quando ele pede tempo (dê o tempo, mas com estrutura)",
            script: "Claro, decisão importante merece calma. Faço assim: te mando o resumo com tudo explicadinho pra você ler com a família. E quinta eu te ligo, não pra pressionar, mas pra responder as dúvidas que surgirem. Combinado assim?"
          },
          {
            situacao: "4. Quando ele diz 'vou pensar' (Estável pensando = com medo de algo)",
            script: "Sem problema nenhum. Só me ajuda a te ajudar: o que ainda te deixa inseguro(a)? Pode falar com sinceridade — se esse plano não for bom pra você, eu mesmo te falo. Minha palavra vale mais que uma venda."
          }
        ]
      },
      timing_frequencia: {
        titulo: "⏰ TIMING DA OFERTA",
        descricao: "Quando ofertar e quando segurar com o Estável",
        diretrizes: [
          "NÃO oferte na primeira conversa se ele ainda demonstra medo — construa confiança primeiro",
          "OFERTE depois de responder as perguntas de segurança dele (atraso, desistência, fiscalização)",
          "Use fechamento em etapas: 'hoje só garantimos a cota' reduz o tamanho da decisão",
          "Follow-up gentil e constante: ele demora, mas quando fecha, é fiel e indica",
          "NUNCA use urgência agressiva ('só hoje!') — isso destrói a confiança com esse perfil"
        ]
      },
      gatilhos_psicologicos: {
        titulo: "🧠 GATILHOS QUE FUNCIONAM COM ELE",
        descricao: "O que ativa a decisão do Estável",
        gatilhos: [
          "Segurança: 'Administradora fiscalizada pelo Banco Central — te mostro agora'",
          "Acompanhamento: 'Eu vou estar com você em cada etapa'",
          "Estabilidade: 'Parcela fixa que não aperta seu orçamento'",
          "Família: 'Um patrimônio seguro pra quem você ama'",
          "Passos pequenos: 'Hoje é só o primeiro passo, sem compromisso de pressa'"
        ]
      }
    },
    script: {
      objetivo: {
        caracteristicas: "Pessoa tranquila, cautelosa e leal. Decide devagar e valoriza relações de confiança.",
        busca: "segurança, estabilidade, alguém que acompanhe, decisão sem riscos",
        evita: "pressão, urgência artificial, promessas exageradas, mudanças bruscas",
        foco: "Isso é seguro? Vou conseguir manter? Quem me acompanha nisso?"
      },
      abertura: {
        titulo: "ABERTURA RÁPIDA (CONEXÃO)",
        script: "Fulano, fica tranquilo que essa conversa é sem compromisso, tá? Meu papel é entender o que você precisa e te explicar tudo com calma. No final, a decisão é sua, no seu tempo. Pode ser assim?",
        gatilhos: "Segurança, ausência de pressão, respeito ao tempo dele"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "entender o contexto com calma, sem parecer interrogatório",
          perguntas: [
            "Me conta um pouco de como está sua situação hoje — mora de aluguel, como é?",
            "Esse plano do imóvel/carro é pra quando, mais ou menos?",
            "Vocês já pesquisaram alguma coisa? O que acharam?"
          ],
          gatilhos: "Escuta paciente, tom acolhedor"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "identificar a dor sem gerar ansiedade",
          perguntas: [
            "O que hoje te impede de dar esse passo com tranquilidade?",
            "O aluguel pesa no orçamento de vocês?",
            "O que te preocupa mais quando pensa em financiamento?"
          ],
          gatilhos: "Dor reconhecida com empatia, sem dramatizar"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "mostrar com suavidade o custo de não decidir",
          perguntas: [
            "Se nada mudar, daqui a 5 anos vocês ainda estarão pagando aluguel — como isso soa pra você?",
            "Já pensou que o dinheiro do aluguel poderia estar construindo um patrimônio seguro pra família?",
            "O que aconteceria com os planos da família se a casa própria demorasse mais 10 anos?"
          ],
          gatilhos: "Futuro da família, patrimônio, segurança de longo prazo"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE (SPIN: N)",
          objetivo: "fazer ele verbalizar o desejo de segurança realizada",
          perguntas: [
            "Como seria pra vocês ter a casa própria, sem dever pra banco?",
            "Se existisse um caminho seguro, fiscalizado, com parcela que cabe — valeria a pena conhecer?",
            "O que mudaria na tranquilidade da família com esse patrimônio garantido?"
          ],
          gatilhos: "Tranquilidade declarada, segurança conquistada"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO CONSÓRCIO",
        script: "Vou te explicar com calma, do jeito mais simples: o consórcio é um grupo de pessoas com o mesmo objetivo, administrado por uma empresa fiscalizada pelo Banco Central — igual banco, com regras e proteção. Você paga uma parcela fixa, que a gente escolhe junto pra caber no seu orçamento sem apertar. Todo mês tem contemplação, e quando chegar a sua vez, o crédito é seu. E o mais importante: eu te acompanho em cada etapa. Alguma parte que você quer que eu explique de novo?",
        gatilhos: "Fiscalização do Banco Central, parcela confortável, acompanhamento em cada etapa"
      },
      chamada: {
        titulo: "CHAMADA PARA AÇÃO",
        script: "Que tal darmos só o primeiro passo hoje? Garantimos sua cota, sem pressa, e eu te acompanho em tudo daqui pra frente. Se em qualquer momento você tiver dúvida, me chama que eu resolvo com você."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO",
        script: "Vou te mandar tudo por escrito, bem explicadinho, pra você guardar e mostrar pra família. Meu telefone fica com você — pode chamar a hora que precisar. E antes de cada assembleia, eu mesmo te aviso. Você nunca vai estar sozinho nessa caminhada."
      }
    },
    objections: [
      {
        title: "❌ Consórcio demora demais, quero algo mais rápido",
        question: "O que é mais importante pra você: velocidade ou chegar lá com segurança e sem dívida pesada?",
        response: "Entendo. Mas deixa eu te tranquilizar: demorar não é ruim quando cada parcela está construindo seu patrimônio com segurança — diferente do aluguel, que vai embora. E existem formas de acelerar quando você quiser, com calma e planejamento. O importante é que você chega lá sem sustos no caminho."
      },
      {
        title: "❌ Prefiro financiamento",
        question: "O que te atrai no financiamento — a rapidez? E o tamanho da dívida com juros, como você se sente com ela?",
        response: "É uma opção válida, e não vou falar mal dela. Só quero que você compare com calma: no financiamento, a dívida com juros é bem maior e mais longa. No consórcio, a parcela é menor, sem juros de banco, e cabe melhor no orçamento — com menos risco de aperto lá na frente. Posso montar a comparação pra você levar pra casa e analisar com a família?"
      },
      {
        title: "❌ E se eu não for contemplado logo?",
        question: "Se eu te mostrar que mesmo sem contemplar cedo seu dinheiro está seguro e construindo patrimônio, isso te tranquiliza?",
        response: "Ótima pergunta — e a resposta vai te acalmar: enquanto a contemplação não vem, seu dinheiro não está parado nem perdido. Está guardado num sistema fiscalizado, virando seu crédito. E todo mês você concorre. Não existe 'perder': existe 'ainda não chegou minha vez'. E quando chegar, eu estarei aqui pra celebrar com você."
      },
      {
        title: "❌ Preciso falar com minha esposa/meu marido antes",
        question: "Claro! O que você acha que ele(a) vai querer saber? Assim eu já te preparo tudo.",
        response: "Faz muito bem — decisão de família se toma em família. Vou te mandar um resumo simples e completo, com tudo explicado, pra vocês lerem juntos com calma. E se ficar qualquer dúvida, posso conversar com os dois numa chamada tranquila, sem compromisso. Combinado?"
      },
      {
        title: "❌ Conheço gente que se deu mal com consórcio",
        question: "Sinto muito por essa pessoa. Posso te mostrar exatamente como saber se uma administradora é confiável?",
        response: "Que bom que você me contou — é exatamente essa cautela que protege sua família. Esses casos quase sempre envolvem empresa sem autorização ou promessas ilegais. Aqui, você mesmo pode verificar a administradora no site do Banco Central — te mostro agora, no seu celular, pelo site oficial. Você nunca deve fechar nada, comigo ou com ninguém, sem essa verificação. Segurança em primeiro lugar, sempre."
      },
      {
        title: "❌ A taxa de administração é cara",
        question: "Posso te mostrar com calma a comparação entre a taxa total e os juros totais do financiamento?",
        response: "Entendo a preocupação — ninguém gosta de pagar mais do que precisa. Vamos ver juntos, sem pressa: a taxa de administração, somada no plano inteiro, fica bem abaixo dos juros totais de um financiamento. E ela paga justamente a estrutura fiscalizada que garante sua segurança. Te mostro os números no papel e você confere no seu tempo."
      },
      {
        title: "❌ Não tenho dinheiro pra dar lance",
        question: "E se eu te mostrar que dá pra concorrer sem tirar nada do seu bolso, usando o próprio plano?",
        response: "Fica tranquilo: lance não é obrigatório. Você pode ir pelo sorteio, no seu ritmo. E se um dia quiser acelerar, existe o lance embutido, que usa parte do seu próprio crédito — sem mexer na sua reserva. No imóvel, dá até pra usar o FGTS. Ou seja: você joga do jeito que for confortável pro seu orçamento."
      },
      {
        title: "❌ Agora não é um bom momento",
        question: "O que precisaria estar diferente pra você se sentir seguro(a) de começar?",
        response: "Respeito totalmente. Só te convido a pensar numa coisa, com carinho: começar com uma parcela pequena, que não aperta, é justamente o jeito mais seguro de aproveitar o tempo. Sem pressa, sem risco, um passo por vez. Se quiser, montamos uma simulação com a menor parcela possível, só pra você visualizar. Sem compromisso nenhum."
      },
      {
        title: "❌ Vou esperar juntar dinheiro e comprar à vista",
        question: "Onde você guarda hoje — e esse dinheiro está rendendo mais do que o imóvel valoriza?",
        response: "É um plano prudente, do seu jeito — e eu respeito. O único cuidado é: na poupança, o dinheiro rende menos do que o imóvel sobe, então a meta vai se afastando devagarinho. O consórcio funciona como a mesma poupança disciplinada que você faria, só que protegida da tentação de gastar e com a chance de antecipar a conquista. É a prudência que você já tem, trabalhando a seu favor."
      }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga números, regulamento e comparações. Ele decide por lógica, não por emoção",
    trigger: "🔥 Dados, tabelas, regulamento do Banco Central, comparativo de custo total",
    perguntas_abertas: {
      titulo: "Perguntas Abertas Estratégicas",
      objetivo: "deixar o cliente analítico conduzir a análise — ele compra quando os números fecham",
      caracteristicas: "Analítico, Detalhista, Cético saudável",
      perguntas: [
        "Que critérios você está usando pra comparar as formas de comprar seu imóvel/carro?",
        "Você já simulou financiamento? Quais números você encontrou?",
        "O que você já sabe sobre consórcio — e o que ainda quer verificar?",
        "Que informação te faltaria pra tomar essa decisão com total segurança?",
        "Você prefere que eu te apresente os dados em tabela ou explicando ponto a ponto?"
      ]
    },
    social_selling: {
      titulo: "Fechamento — Timing e Micropactos",
      objetivo: "fechar com o Conforme quando todas as dúvidas técnicas foram respondidas — ele fecha por conclusão lógica",
      caracteristicas: "Decide devagar e por análise, odeia pressão e exagero, fecha quando a conta fecha",
      estrategia_aproximacao: {
        titulo: "🚦 SINAIS DE COMPRA — HORA DE OFERTAR",
        descricao: "O Conforme avisa que vai comprar quando entra nos detalhes finais. Fique atento a:",
        tacticas: [
          "Pede a tabela completa ou o regulamento do grupo pra ler",
          "Pergunta detalhes finais: reajuste, fundo de reserva, seguro, o que acontece na contemplação",
          "Faz as próprias contas na sua frente (calculadora, papel, celular)",
          "Compara sua proposta com outra que ele pesquisou — e a sua está ganhando",
          "Diz 'então confirmando: o custo total seria X, correto?' — ele está fechando a análise"
        ]
      },
      conteudo_engajamento: {
        titulo: "🤝 MICROPACTOS — OS PEQUENOS SIMS",
        descricao: "Com o Conforme, cada micropacto valida uma etapa da análise:",
        tipos: [
          "\"Se os números da comparação com o financiamento fecharem, faz sentido avançarmos?\"",
          "\"Posso te mandar o regulamento e a consulta da administradora no Banco Central pra você validar?\"",
          "\"Se o custo total ficar abaixo do financiamento, esse critério está atendido pra você?\"",
          "\"Alguma outra informação técnica falta pra sua análise ficar completa?\"",
          "\"Se todas as suas perguntas forem respondidas com dados, a decisão sai essa semana?\""
        ]
      },
      scripts_dm: {
        titulo: "💬 SCRIPTS DE FECHAMENTO",
        descricao: "Fechamento por conclusão lógica — resuma os dados e deixe a conta decidir",
        scripts: [
          {
            situacao: "1. Fechamento por resumo lógico (o mais eficaz com esse perfil)",
            script: "Fulano, recapitulando o que analisamos: custo total do consórcio X custo total do financiamento — diferença de R$ [valor]. Administradora verificada no Banco Central. Parcela dentro do seu orçamento. Pelos seus próprios critérios, a conclusão é essa. Formalizamos?"
          },
          {
            situacao: "2. Fechamento com documentação",
            script: "Vou te enviar agora: o contrato, o regulamento do grupo e a simulação completa em PDF. Você confere tudo ponto a ponto. Estando de acordo com o que analisamos, assina digitalmente e a cota fica garantida pra próxima assembleia."
          },
          {
            situacao: "3. Quando ele quer 'analisar mais um pouco'",
            script: "Perfeito, análise bem feita evita arrependimento. Me ajuda só a fechar o escopo: qual ponto específico falta analisar? Assim eu te mando exatamente o dado que falta, e definimos juntos um prazo pra sua decisão. Que dia fica bom pra retomarmos?"
          },
          {
            situacao: "4. Quando ele diz 'vou pensar' (Conforme pensando = falta um dado)",
            script: "Claro. Só uma pergunta objetiva: falta alguma informação pra sua análise, ou os dados estão completos e é uma questão de tempo? Se falta dado, eu envio hoje. Se está completo, o que os números te dizem?"
          }
        ]
      },
      timing_frequencia: {
        titulo: "⏰ TIMING DA OFERTA",
        descricao: "Quando ofertar e quando segurar com o Conforme",
        diretrizes: [
          "NÃO oferte antes de responder TODAS as perguntas técnicas — oferta prematura soa como empurrão",
          "OFERTE quando ele confirmar os dados ('então o total é X, correto?') — é o sinal de análise concluída",
          "Envie material por escrito ANTES de pedir a decisão: ele precisa conferir",
          "Nunca exagere ou arredonde número — um dado impreciso destrói toda a confiança",
          "Dê prazo estruturado: 'te retorno quinta pra fecharmos a análise' funciona melhor que urgência"
        ]
      },
      gatilhos_psicologicos: {
        titulo: "🧠 GATILHOS QUE FUNCIONAM COM ELE",
        descricao: "O que ativa a decisão do Conforme",
        gatilhos: [
          "Prova documental: 'Consulta pública no site do Banco Central'",
          "Precisão: 'Custo total na ponta do lápis, item por item'",
          "Comparativo técnico: 'Tabela lado a lado: consórcio X financiamento X à vista'",
          "Processo claro: 'Etapas documentadas do contrato à contemplação'",
          "Coerência: manter exatamente o que foi dito em todas as conversas"
        ]
      }
    },
    script: {
      objetivo: {
        caracteristicas: "Pessoa analítica, precisa e cética. Confia em documento, não em promessa.",
        busca: "dados exatos, comparações justas, processo claro e verificável",
        evita: "exagero, pressa, vendedor que não sabe responder tecnicamente",
        foco: "Qual o custo total real? Onde está escrito? Como eu verifico?"
      },
      abertura: {
        titulo: "ABERTURA RÁPIDA (CONEXÃO)",
        script: "Fulano, vou te propor o seguinte método: eu te apresento os números completos — custo total, taxas, regras — com tudo documentado pra você verificar. Você analisa nos seus critérios e a conclusão é sua. Justo?",
        gatilhos: "Método, transparência, respeito à análise dele"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "mapear os critérios e o que ele já pesquisou",
          perguntas: [
            "Que alternativas você já está comparando — financiamento, à vista, consórcio?",
            "Quais números você já levantou em cada uma?",
            "Qual critério pesa mais na sua decisão: custo total, prazo ou flexibilidade?"
          ],
          gatilhos: "Organização, critérios claros"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "expor com dados as falhas das alternativas que ele considera",
          perguntas: [
            "Na sua simulação de financiamento, qual foi o total de juros no fim do contrato?",
            "Você calculou o custo de oportunidade de esperar juntando na poupança?",
            "Que riscos você enxerga em cada alternativa?"
          ],
          gatilhos: "Inconsistências numéricas das alternativas"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "quantificar o custo da decisão errada ou adiada",
          perguntas: [
            "Se o financiamento custa R$ [X] a mais no total, o que esse valor representaria investido?",
            "Considerando a valorização média do imóvel ao ano, quanto custa cada ano de espera?",
            "Qual o impacto no seu planejamento se a alternativa escolhida consumir o dobro em juros?"
          ],
          gatilhos: "Custo de oportunidade calculado"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE (SPIN: N)",
          objetivo: "levá-lo a concluir logicamente qual alternativa atende os critérios",
          perguntas: [
            "Se uma alternativa tiver o menor custo total, com fiscalização do Banco Central e parcela dentro do seu orçamento — ela atende seus critérios?",
            "Que evidência faltaria pra essa alternativa ser a escolhida?",
            "Com os dados completos na mesa, o que a análise te diz?"
          ],
          gatilhos: "Conclusão lógica verbalizada por ele mesmo"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO CONSÓRCIO",
        script: "Vou te apresentar em 4 pontos verificáveis: 1) Estrutura: grupo administrado por empresa autorizada e fiscalizada pelo Banco Central — consulta pública no site oficial. 2) Custo: parcela composta por fundo comum + taxa de administração + fundo de reserva, sem juros — te mostro o custo total do plano na tabela. 3) Contemplação: sorteio mensal e lances, com regras definidas em regulamento que você recebe por escrito. 4) Comparativo: custo total do consórcio contra o financiamento no mesmo crédito e prazo. Quer começar pela tabela ou pelo regulamento?",
        gatilhos: "Dados verificáveis, regulamento por escrito, comparativo técnico de custo total"
      },
      chamada: {
        titulo: "CHAMADA PARA AÇÃO",
        script: "Os dados estão completos e a comparação fecha a favor. Te envio o contrato e o regulamento agora pra sua conferência final. Estando tudo conforme analisamos, formalizamos hoje e sua cota entra na próxima assembleia."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO",
        script: "Enviando por e-mail e WhatsApp: contrato, regulamento do grupo, simulação em PDF e o link da consulta da administradora no Banco Central. Confere no seu tempo. Qualquer divergência entre o que falei e o que está escrito, me aponta — respondo por escrito. Retomamos [dia] pra formalizar."
      }
    },
    objections: [
      {
        title: "❌ Consórcio demora demais, quero algo mais rápido",
        question: "Qual prazo você definiu como aceitável — e quanto de custo adicional você aceita pagar por velocidade?",
        response: "Vamos quantificar: o financiamento entrega o bem imediato, mas com juros que podem dobrar o custo total. O consórcio tem prazo variável, com média de contemplação que te mostro no histórico do grupo — e custo total muito menor. A pergunta técnica é: a diferença de R$ [X] compensa a diferença de tempo? Vamos calcular com seus números."
      },
      {
        title: "❌ Prefiro financiamento",
        question: "Qual foi o CET — Custo Efetivo Total — da sua simulação de financiamento?",
        response: "Ótimo, então você tem números pra comparar. Coloco lado a lado: CET do financiamento contra custo total do consórcio (taxa de administração + fundo de reserva), mesmo crédito, mesmo prazo. A diferença costuma ficar entre 30% e 50% do valor do bem. Analisando as duas tabelas, a conclusão fica evidente — e é sua."
      },
      {
        title: "❌ E se eu não for contemplado logo?",
        question: "Você gostaria de ver o histórico real de contemplações desse grupo antes de decidir?",
        response: "Pergunta correta. A contemplação tem dois mecanismos definidos em regulamento: sorteio (probabilístico) e lance (estratégico). Te apresento o histórico de contemplações do grupo — médias, percentuais de lance vencedor — e o regulamento com as regras. Com esses dados, você calcula cenários realistas em vez de depender de promessa."
      },
      {
        title: "❌ Preciso falar com minha esposa/meu marido antes",
        question: "Que dados ele(a) vai querer ver? Preparo um dossiê completo pra análise de vocês.",
        response: "Correto — decisão patrimonial se analisa em conjunto. Envio o material completo por escrito: simulação, comparativo com financiamento, regulamento e a consulta da administradora no Banco Central. Assim vocês analisam com os mesmos dados. Se surgirem dúvidas técnicas, respondo por escrito ou em chamada. Que prazo faz sentido pra retomarmos?"
      },
      {
        title: "❌ Conheço gente que se deu mal com consórcio",
        question: "Você sabe se a empresa do caso era autorizada pelo Banco Central? Esse é o dado decisivo.",
        response: "Caso real e relevante. Estatisticamente, esses problemas concentram-se em empresas não autorizadas ou em promessas ilegais de contemplação garantida. O procedimento de verificação é objetivo: consulta pública no site do Banco Central, que lista todas as administradoras autorizadas e fiscalizadas. Fazemos a consulta agora, juntos — é o mesmo procedimento que eu recomendaria pra qualquer empresa, inclusive a minha."
      },
      {
        title: "❌ A taxa de administração é cara",
        question: "Comparada a qual referência — você tem o total de juros da sua simulação de financiamento?",
        response: "Análise justa exige a mesma base: taxa de administração TOTAL do plano contra juros TOTAIS do financiamento, mesmo crédito e prazo. Exemplo com números redondos: taxa de 18% no plano inteiro contra juros que frequentemente passam de 80% do valor financiado. Monto a tabela com seu caso específico e você audita cada linha."
      },
      {
        title: "❌ Não tenho dinheiro pra dar lance",
        question: "Você conhece o mecanismo do lance embutido previsto em regulamento?",
        response: "Tecnicamente existem três modalidades: lance livre (recurso próprio), lance embutido (percentual do próprio crédito, definido em regulamento) e, para imóveis, uso do FGTS conforme regras da Caixa. Ou seja: há mecanismo de aceleração sem desembolso imediato. Te mostro no regulamento onde cada um está previsto e simulamos os três cenários."
      },
      {
        title: "❌ Agora não é um bom momento",
        question: "Que variável precisa mudar — e qual o custo mensurável de esperar essa mudança?",
        response: "Vamos tratar como análise de cenário: cenário A, você espera 12 meses — custo: valorização do bem no período + aluguel pago + reajuste das tabelas. Cenário B, você inicia agora com parcela mínima — custo: a parcela, que já constitui patrimônio. Coloco os dois cenários em números com suas variáveis e a decisão sai da planilha, não da opinião."
      },
      {
        title: "❌ Vou esperar juntar dinheiro e comprar à vista",
        question: "Qual a taxa de rendimento da sua reserva hoje — e ela supera a valorização média do bem?",
        response: "Análise válida. As variáveis: rendimento real da sua aplicação X valorização do bem + inflação dos preços. Historicamente, imóveis e veículos novos sobem acima do rendimento líquido da poupança — a meta se afasta. O consórcio mantém sua disciplina de aporte mensal com uma opção adicional: a contemplação antecipa a compra com crédito corrigido. Posso montar a projeção dos dois cenários em 5 anos pra você auditar."
      }
    ]
  }
};

export default function RadarConversaoConsorcio() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);
  const [expandedObjections, setExpandedObjections] = useState({});
  const [expandedScripts, setExpandedScripts] = useState({});
  const [expandedSocialSelling, setExpandedSocialSelling] = useState({});
  const [viewMode, setViewMode] = useState({}); // 'objections' or 'scripts' or 'perguntas' or 'social'

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    setSelected(exists ? selected.filter((s) => s.label !== label) : [...selected, { label, profile }]);
  };

  const toggleExpand = (profile) => {
    setExpandedProfiles((prev) =>
      prev.includes(profile) ? prev.filter((p) => p !== profile) : [...prev, profile]
    );
    // Set default view mode to objections when first expanding
    if (!expandedProfiles.includes(profile) && !viewMode[profile]) {
      setViewMode(prev => ({ ...prev, [profile]: 'objections' }));
    }
  };

  const toggleViewMode = (profile, mode) => {
    setViewMode(prev => ({ ...prev, [profile]: mode }));
  };

  const toggleObjection = (profile, index) => {
    const key = `${profile}-${index}`;
    setExpandedObjections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleScript = (profile, section) => {
    const key = `${profile}-${section}`;
    setExpandedScripts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSocialSelling = (profile, section) => {
    const key = `${profile}-${section}`;
    setExpandedSocialSelling(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort((a, b) => profileCount[b] - profileCount[a]);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      backgroundColor: '#0c121c',
      color: 'white',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        color: '#d2bc8f'
      }}>
        Radar da Conversão
      </div>
      <p style={{
        textAlign: 'center',
        color: '#888',
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>
        Consórcio de Imóveis e Carros · Leia o cliente. Feche na hora certa.
      </p>

      {/* Marcadores de Observação */}
      <div style={{
        background: '#1a2332',
        border: '1px solid #333',
        borderRadius: '10px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease'
      }}>
        <h2 style={{ color: '#d2bc8f' }}>Marque os sinais observados durante o atendimento:</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {markers.map((item, index) => (
            <label key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.label, item.profile)}
                checked={selected.some((s) => s.label === item.label)}
                style={{
                  width: '18px',
                  height: '18px',
                  marginRight: '0.75rem',
                  accentColor: '#d2bc8f'
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Análise de Perfis */}
      {sortedProfiles.length > 0 && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>
            🎯 Análise de Perfil Comportamental
          </h2>
          
          {sortedProfiles.map((profileKey) => {
            const suggestion = suggestions[profileKey];
            const count = profileCount[profileKey];
            
            return (
              <div key={profileKey} style={{
                background: '#1a2332',
                border: '1px solid #333',
                borderLeft: profileKey === 'D' ? '4px solid #ff6b6b' :
                           profileKey === 'I' ? '4px solid #ffd43b' :
                           profileKey === 'S' ? '4px solid #51cf66' :
                           '4px solid #339af0',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: '#d2bc8f', margin: '0 0 0.5rem 0' }}>
                      {suggestion.label} ({count} indicadores)
                    </h2>
                    <p>{suggestion.approach}</p>
                    <p>{suggestion.trigger}</p>
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', flexDirection: 'column'}}>
                    <button onClick={() => toggleExpand(profileKey)} style={{
                      background: '#d2bc8f',
                      color: '#0c121c',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}>
                      {expandedProfiles.includes(profileKey) ? 'Ocultar Conteúdo' : 'Ver Conteúdo'}
                    </button>
                  </div>
                </div>
                
                {expandedProfiles.includes(profileKey) && (
                  <div style={{marginTop: '1.5rem'}}>
                    {/* Botões para alternar entre as 4 abas */}
                    <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap'}}>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'objections')}
                        style={{
                          background: viewMode[profileKey] === 'objections' || !viewMode[profileKey] ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'objections' || !viewMode[profileKey] ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                      >
                        💬 Objeções
                      </button>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'scripts')}
                        style={{
                          background: viewMode[profileKey] === 'scripts' ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'scripts' ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                      >
                        📋 Script de Conexão
                      </button>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'perguntas')}
                        style={{
                          background: viewMode[profileKey] === 'perguntas' ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'perguntas' ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                      >
                        🤔 Perguntas Abertas
                      </button>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'social')}
                        style={{
                          background: viewMode[profileKey] === 'social' ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'social' ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                      >
                        🎯 Fechamento
                      </button>
                    </div>

                    {/* Seção de Objeções */}
                    {(viewMode[profileKey] === 'objections' || !viewMode[profileKey]) && (
                      <div>
                        <h3>💬 Objeções e Respostas Calibradas:</h3>
                        {suggestion.objections.map((objection, index) => (
                          <div key={index} style={{
                            background: '#2a3441',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            padding: '1rem',
                            marginBottom: '1rem'
                          }}>
                            <div 
                              onClick={() => toggleObjection(profileKey, index)}
                              style={{
                                cursor: 'pointer', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                color: '#ff6b6b',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                              }}
                            >
                              <span>{objection.title}</span>
                              <span>{expandedObjections[`${profileKey}-${index}`] ? '▼' : '▶'}</span>
                            </div>
                            
                            {expandedObjections[`${profileKey}-${index}`] && (
                              <div style={{marginTop: '1rem'}}>
                                <div style={{
                                  background: '#1a2332',
                                  borderLeft: '4px solid #4dabf7',
                                  padding: '0.75rem',
                                  margin: '0.5rem 0',
                                  borderRadius: '0 6px 6px 0'
                                }}>
                                  <div style={{ color: '#4dabf7', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    💬 Pergunta Calibrada:
                                  </div>
                                  <em>"{objection.question}"</em>
                                </div>
                                <div style={{
                                  background: '#1a2332',
                                  borderLeft: '4px solid #51cf66',
                                  padding: '0.75rem',
                                  margin: '0.5rem 0',
                                  borderRadius: '0 6px 6px 0'
                                }}>
                                  <div style={{ color: '#51cf66', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    💡 Resposta Adaptada:
                                  </div>
                                  "{objection.response}"
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Seção de Perguntas Abertas */}
                    {viewMode[profileKey] === 'perguntas' && (
                      <div>
                        <h3>🤔 {suggestion.perguntas_abertas.titulo}:</h3>
                        <div style={{
                          background: '#2a3441',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1.5rem',
                          marginBottom: '1.5rem'
                        }}>
                          <div style={{marginBottom: '1rem'}}>
                            <p><strong>🎯 Objetivo:</strong> {suggestion.perguntas_abertas.objetivo}</p>
                            <p><strong>🔍 Características:</strong> {suggestion.perguntas_abertas.caracteristicas}</p>
                          </div>
                          
                          <div>
                            <strong style={{color: '#d2bc8f', fontSize: '1.1rem'}}>📝 Perguntas Estratégicas:</strong>
                            <ul style={{marginTop: '1rem', listStyle: 'none', padding: 0}}>
                              {suggestion.perguntas_abertas.perguntas.map((pergunta, idx) => (
                                <li key={idx} style={{
                                  background: '#1a2332',
                                  borderLeft: '4px solid #d2bc8f',
                                  padding: '1rem',
                                  margin: '0.75rem 0',
                                  borderRadius: '0 8px 8px 0',
                                  fontSize: '1rem',
                                  lineHeight: '1.5'
                                }}>
                                  <span style={{color: '#d2bc8f', fontWeight: 'bold', marginRight: '0.5rem'}}>
                                    {idx + 1}.
                                  </span>
                                  <em>"{pergunta}"</em>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div style={{
                            marginTop: '1.5rem',
                            padding: '1rem',
                            background: '#1a2332',
                            borderRadius: '8px',
                            border: '1px solid #333'
                          }}>
                            <strong style={{color: '#51cf66'}}>💡 Dica de Uso:</strong>
                            <p style={{margin: '0.5rem 0 0 0', color: '#ccc'}}>
                              Use estas perguntas para quebrar o gelo, criar conexão e entender as motivações profundas da pessoa antes de partir para o SPIN Selling.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Seção de Social Selling */}
                    {viewMode[profileKey] === 'social' && (
                      <div>
                        <h3>📊 {suggestion.social_selling.titulo}:</h3>
                        <div style={{
                          background: '#2a3441',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1.5rem',
                          marginBottom: '1rem'
                        }}>
                          <div style={{marginBottom: '1rem'}}>
                            <p><strong>🎯 Objetivo:</strong> {suggestion.social_selling.objetivo}</p>
                            <p><strong>🔍 Características:</strong> {suggestion.social_selling.caracteristicas}</p>
                          </div>
                        </div>

                        {/* Estratégia de Aproximação */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleSocialSelling(profileKey, 'aproximacao')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>{suggestion.social_selling.estrategia_aproximacao.titulo}</strong></span>
                            <span>{expandedSocialSelling[`${profileKey}-aproximacao`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedSocialSelling[`${profileKey}-aproximacao`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Descrição:</strong> {suggestion.social_selling.estrategia_aproximacao.descricao}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Táticas:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.social_selling.estrategia_aproximacao.tacticas.map((tatica, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      {tatica}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Conteúdo para Engajamento */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleSocialSelling(profileKey, 'conteudo')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>{suggestion.social_selling.conteudo_engajamento.titulo}</strong></span>
                            <span>{expandedSocialSelling[`${profileKey}-conteudo`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedSocialSelling[`${profileKey}-conteudo`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Descrição:</strong> {suggestion.social_selling.conteudo_engajamento.descricao}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Tipos de Conteúdo:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.social_selling.conteudo_engajamento.tipos.map((tipo, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      {tipo}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Scripts para DM */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleSocialSelling(profileKey, 'scripts')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>{suggestion.social_selling.scripts_dm.titulo}</strong></span>
                            <span>{expandedSocialSelling[`${profileKey}-scripts`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedSocialSelling[`${profileKey}-scripts`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Descrição:</strong> {suggestion.social_selling.scripts_dm.descricao}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Scripts:</strong>
                                {suggestion.social_selling.scripts_dm.scripts.map((script, idx) => (
                                  <div key={idx} style={{
                                    background: '#1a2332',
                                    borderLeft: '4px solid #d2bc8f',
                                    padding: '1rem',
                                    margin: '0.75rem 0',
                                    borderRadius: '0 8px 8px 0'
                                  }}>
                                    <div style={{color: '#d2bc8f', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                                      {script.situacao}
                                    </div>
                                    <em>"{script.script}"</em>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Timing e Frequência */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleSocialSelling(profileKey, 'timing')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>{suggestion.social_selling.timing_frequencia.titulo}</strong></span>
                            <span>{expandedSocialSelling[`${profileKey}-timing`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedSocialSelling[`${profileKey}-timing`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Descrição:</strong> {suggestion.social_selling.timing_frequencia.descricao}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Diretrizes:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.social_selling.timing_frequencia.diretrizes.map((diretriz, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      {diretriz}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Gatilhos Psicológicos */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleSocialSelling(profileKey, 'gatilhos')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>{suggestion.social_selling.gatilhos_psicologicos.titulo}</strong></span>
                            <span>{expandedSocialSelling[`${profileKey}-gatilhos`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedSocialSelling[`${profileKey}-gatilhos`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Descrição:</strong> {suggestion.social_selling.gatilhos_psicologicos.descricao}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Gatilhos:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.social_selling.gatilhos_psicologicos.gatilhos.map((gatilho, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      <em>{gatilho}</em>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Seção de Scripts (Script de Conexão) */}
                    {viewMode[profileKey] === 'scripts' && (
                      <div>
                        <h3>📋 Script de Conexão e Diagnóstico:</h3>
                        
                        {/* Objetivo do Perfil */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'objetivo')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🎯 OBJETIVO DO PERFIL</strong></span>
                            <span>{expandedScripts[`${profileKey}-objetivo`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-objetivo`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Características:</strong> {suggestion.script.objetivo.caracteristicas}</p>
                              <p><strong>Busca:</strong> {suggestion.script.objetivo.busca}</p>
                              <p><strong>Evita:</strong> {suggestion.script.objetivo.evita}</p>
                              <p><strong>Foco:</strong> {suggestion.script.objetivo.foco}</p>
                            </div>
                          )}
                        </div>

                        {/* Abertura */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'abertura')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🚀 {suggestion.script.abertura.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-abertura`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-abertura`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px', marginBottom: '1rem'}}>
                                <strong>Script:</strong><br />
                                <em>"{suggestion.script.abertura.script}"</em>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.abertura.gatilhos}</p>
                              {suggestion.script.abertura.tecnica && (
                                <p><strong>🧠 Técnica:</strong> {suggestion.script.abertura.tecnica}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* SPIN Sections */}
                        {['situacao', 'problema', 'implicacao', 'necessidade'].map((spinType) => (
                          <div key={spinType} style={{
                            background: '#1a2332',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            padding: '1rem',
                            marginBottom: '1rem'
                          }}>
                            <div 
                              onClick={() => toggleScript(profileKey, spinType)}
                              style={{
                                cursor: 'pointer', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                color: '#d2bc8f',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                              }}
                            >
                              <span><strong>
                                {spinType === 'situacao' && '📊'}
                                {spinType === 'problema' && '❗'}
                                {spinType === 'implicacao' && '⚠️'}
                                {spinType === 'necessidade' && '✅'}
                                 {' ' + suggestion.script.spin[spinType].titulo}
                              </strong></span>
                              <span>{expandedScripts[`${profileKey}-${spinType}`] ? '▼' : '▶'}</span>
                            </div>
                            
                            {expandedScripts[`${profileKey}-${spinType}`] && (
                              <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                                <p><strong>Objetivo:</strong> {suggestion.script.spin[spinType].objetivo}</p>
                                <div style={{marginTop: '1rem'}}>
                                  <strong>Perguntas:</strong>
                                  <ul style={{marginTop: '0.5rem'}}>
                                    {suggestion.script.spin[spinType].perguntas.map((pergunta, idx) => (
                                      <li key={idx} style={{marginBottom: '0.5rem'}}>
                                        <em>"{pergunta}"</em>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p><strong>🎯 Gatilhos:</strong> {suggestion.script.spin[spinType].gatilhos}</p>
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Outras seções do script */}
                        {['apresentacao', 'chamada', 'encaminhamento'].map((section) => (
                          <div key={section} style={{
                            background: '#1a2332',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            padding: '1rem',
                            marginBottom: '1rem'
                          }}>
                            <div 
                              onClick={() => toggleScript(profileKey, section)}
                              style={{
                                cursor: 'pointer', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                color: '#d2bc8f',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                              }}
                            >
                              <span><strong>
                                {section === 'apresentacao' && '💡'}
                                {section === 'chamada' && '🎯'}
                                {section === 'encaminhamento' && '🔄'}
                                {' ' + suggestion.script[section].titulo}
                              </strong></span>
                              <span>{expandedScripts[`${profileKey}-${section}`] ? '▼' : '▶'}</span>
                            </div>
                            
                            {expandedScripts[`${profileKey}-${section}`] && (
                              <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                                <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px', marginBottom: section === 'apresentacao' ? '1rem' : '0'}}>
                                  <strong>Script:</strong><br />
                                  <em>"{suggestion.script[section].script}"</em>
                                </div>
                                {section === 'apresentacao' && (
                                  <p><strong>🎯 Gatilhos:</strong> {suggestion.script[section].gatilhos}</p>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Estado inicial */}
      {sortedProfiles.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#888',
          background: '#1a2332',
          borderRadius: '10px',
          border: '2px dashed #444'
        }}>
          <h2>Análise em Tempo Real</h2>
          <p>Marque os sinais comportamentais observados para receber as estratégias de conversão personalizadas.</p>
        </div>
      )}

      {/* Rodapé */}
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <p style={{color: '#888', fontSize: '0.9rem'}}>
          CXconversão - Sistema de Análise Comportamental para Conversão em Calls
        </p>
      </div>
    </div>
  );
}
