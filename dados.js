/* ============================================================
   DADOS DO CASAMENTO  --  e so isso aqui que muda por cliente.
   Nao precisa mexer no index.html pra trocar de casal.
   ============================================================ */

window.CASAMENTO = {

  /* ---------- 1. OS NOIVOS ---------- */
  noivos: "Ana & Rafael",
  data: "14 de março de 2027",
  local: "Cartório Central e Igreja São Benedito · Cotia, SP",

  /* ---------- 2. FOTO DO TOPO ---------- */
  /* Dois cortes da mesma foto: um largo pro computador, um alto pro celular.
     Trocar pela foto do casal e mandar os dois arquivos. */
  hero: {
    largo: "hero-largo.jpg",
    alto: "hero-alto.jpg"
  },

  /* ---------- 3. A MENSAGEM DE ABERTURA ---------- */
  tituloCarta: "Um pedacinho de carinho para nossa nova história",
  recado: "Estamos prestes a viver um dos momentos mais especiais das nossas vidas: " +
          "o início de uma nova jornada juntos. Criamos esta lista de presentes com " +
          "muito carinho para que você possa fazer parte dessa etapa tão importante. " +
          "Cada presente representa um gesto de afeto e uma forma de contribuir para " +
          "a construção do nosso novo lar e das memórias que ainda vamos criar. " +
          "Escolha o presente que desejar e participe desse capítulo tão especial da " +
          "nossa história!",
  assinatura: "Com carinho, os noivos",

  /* Linha curta que explica o mecanismo sem falar da vida de ninguem.
     Deixe "" pra nao mostrar. */
  aviso: "Os presentes desta lista são simbólicos: você escolhe o presente e " +
         "contribui com o valor, direto para os noivos.",

  /* ---------- 4. PARA ONDE VAI O DINHEIRO ---------- */
  /* ATENCAO: chave Pix de quem RECEBE (o noivo ou a noiva).
     A chave abaixo e de DEMONSTRACAO e nao recebe nada. */
  pix: {
    chave: "noivos@exemplo.com.br",
    nome: "Rafael Oliveira",   // nome do titular, max 25 caracteres
    cidade: "Cotia"            // cidade do titular, max 15 caracteres
  },

  /* ---------- 5. CARTAO DE CREDITO ---------- */
  /* Cada presente caro tem o SEU PROPRIO link de pagamento, com o valor exato.
     O casal gera esses links uma vez, no banco dele (Nubank, PagBank, Mercado
     Pago, Asaas, InfinitePay -- qualquer um serve, porque o valor e fixo) e
     cola no campo "link" de cada presente la embaixo.

     So aparece a aba Cartao nos presentes com valor igual ou acima de
     "valorMinimo". Ninguem parcela um livro de R$ 90, e isso derruba o
     numero de links que o casal precisa criar.

     Presente sem link preenchido mostra a simulacao de parcelas e avisa
     que o cartao ainda nao foi ligado.                                     */
  cartao: {
    ativo: true,
    valorMinimo: 500,  // abaixo disso, so Pix
    parcelas: 12,      // ate quantas vezes
    taxa: 4.0          // % que a operadora desconta do casal
  },

  /* Deixe true enquanto for demonstracao. Em producao, false. */
  demonstracao: true,

  /* ---------- 6. A LISTA ---------- */
  /* Em ordem de preco, do mais barato pro mais caro.
     Item barato faz quem esta apertado participar sem vergonha;
     item caro deixa quem pode gastar a vontade.

     icone: livro, cinema, vinho, planta, tacas, toalhas, ferro, abajur,
            liquidificador, jantar, cafeteira, ventilador, faqueiro, spa,
            cama, airfryer, tapete, microondas, churrasqueira, panelas,
            aspirador, fogao, tv, lavadora, geladeira, sofa, viagem
     valor: em reais
     cota:  true  -> o convidado escolhe quantas cotas quer
     deram: quantas pessoas ja contribuiram (numeros da demonstracao)  */
  presentes: [
    { nome: "Um livro pra estante", icone: "livro", valor: 90, deram: 7,
      texto: "Pra encher a estante da casa nova." },

    { nome: "Uma sessão de cinema", icone: "cinema", valor: 100, deram: 5,
      texto: "Pipoca grande, no meio da semana, sem motivo nenhum." },

    { nome: "O vinho do primeiro brinde", icone: "vinho", valor: 120, deram: 11,
      texto: "Pra abrir quando a casa esvaziar depois da festa." },

    { nome: "Plantas pra varanda", icone: "planta", valor: 140, deram: 3,
      texto: "Verde novo pra um começo novo." },

    { nome: "Jogo de taças", icone: "tacas", valor: 150, deram: 2,
      texto: "Pros brindes que ainda vêm por aí." },

    { nome: "Jogo de toalhas", icone: "toalhas", valor: 180, deram: 4,
      texto: "Daquelas grossas, de hotel bom." },

    { nome: "Ferro de passar", icone: "ferro", valor: 220, deram: 1,
      texto: "Das coisas que ninguém lembra de pedir." },

    { nome: "Abajur de cabeceira", icone: "abajur", valor: 260, deram: 2,
      texto: "Luz quentinha pro lado da cama." },

    { nome: "Liquidificador", icone: "liquidificador", valor: 280, deram: 3,
      texto: "Vitamina de manhã, caipirinha no sábado." },

    { nome: "Um jantar pra nós dois", icone: "jantar", valor: 300, deram: 6,
      texto: "Mesa pra dois, sem pressa, no primeiro mês de casados." },

    { nome: "Cafeteira", icone: "cafeteira", valor: 320, deram: 4,
      texto: "Porque a manhã começa com café." },

    { nome: "Ventilador de torre", icone: "ventilador", valor: 350, deram: 1,
      texto: "Pros verões que vêm pela frente." },

    { nome: "O faqueiro", icone: "faqueiro", valor: 380, deram: 3,
      texto: "Pra quando a família toda couber na mesa." },

    { nome: "Um dia de spa pro casal", icone: "spa", valor: 400, deram: 2,
      texto: "Depois de organizar um casamento, é merecido." },

    { nome: "Jogo de cama", icone: "cama", valor: 450, deram: 4,
      texto: "Daqueles de algodão bom, que a gente nunca compra pra si." },

    { nome: "Air fryer", icone: "airfryer", valor: 500, deram: 5, link: "",
      texto: "O eletrodoméstico que todo mundo acaba amando." },

    { nome: "Tapete da sala", icone: "tapete", valor: 600, deram: 0, link: "",
      texto: "Pra sala ficar com cara de casa." },

    { nome: "Micro-ondas", icone: "microondas", valor: 700, deram: 1, link: "",
      texto: "O salva-jantar de todo dia." },

    { nome: "Churrasqueira", icone: "churrasqueira", valor: 850, deram: 2, link: "",
      texto: "Pros almoços de domingo com a família toda." },

    { nome: "Jogo de panelas", icone: "panelas", valor: 900, deram: 2, link: "",
      texto: "O coração da cozinha." },

    { nome: "Aspirador", icone: "aspirador", valor: 1200, deram: 1, link: "",
      texto: "Daqueles que fazem diferença de verdade." },

    { nome: "O fogão", icone: "fogao", valor: 1600, deram: 1, link: "",
      texto: "Cinco bocas, pra caber tudo de uma vez." },

    { nome: "A televisão da sala", icone: "tv", valor: 2600, deram: 0, link: "",
      texto: "Pras séries, os jogos e os domingos preguiçosos." },

    { nome: "Máquina de lavar", icone: "lavadora", valor: 2900, deram: 1, link: "",
      texto: "Das que a gente só dá valor quando falta." },

    { nome: "A geladeira", icone: "geladeira", valor: 3200, deram: 2, link: "",
      texto: "O presente clássico, e com razão." },

    { nome: "Sofá novo", icone: "sofa", valor: 3800, deram: 1, link: "",
      texto: "O lugar onde a casa toda vai se juntar." },

    { nome: "Cota da lua de mel", icone: "viagem", valor: 200, deram: 9, cota: true,
      texto: "Cada cota é um pedacinho da viagem." }
  ],

  /* ---------- 7. MURAL DE RECADOS ---------- */
  /* Numa versao com banco de dados, isso enche sozinho. */
  recados: [
    { de: "Tia Lurdes",       presente: "A geladeira",        texto: "Que a casa de vocês seja sempre cheia. De comida e de gente." },
    { de: "Marcos e Beatriz", presente: "Cota da lua de mel", texto: "Manda foto do mar pra gente morrer de inveja." },
    { de: "Seu Antônio",      presente: "O faqueiro",         texto: "Guardem bem, que faqueiro bom dura três gerações." },
    { de: "Camila",           presente: "Air fryer",          texto: "Felicidades aos dois! Que venham muitos anos." }
  ]
};
