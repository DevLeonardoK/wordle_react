import "./app.css";

const styleBackgroundContainer = {
  backgroundColor: "#6E5C62",
  width: "100vw",
  height: "100vh",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "flex-direction": "column",
  "text-align": "center",
};

const styleTitle = {
  "font-family": "Mitr",
  color: "white",
  "letter-spacing": 5,
  "font-weight": "600",
  "font-size": 45,
  "text-decoration": "underline",
};

const styleArea = {
  width: 430,
  height: 650,
  display: "flex",
  "justify-content": "center",
  "flex-direction": "column",
  "align-items": "center",
};

const styleRow = {
  width: 410,
  height: 100,
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  gap: 10,
};

const styleBtn = {
  width: 100,
  height: 100,
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
};

const App = () => {
  function mostrar() {
    console.log(palavraSorteada);
  }

  const palavras = [
    "abano",
    "abreu",
    "abusa",
    "acaso",
    "aceno",
    "achar",
    "acima",
    "acode",
    "acuso",
    "adeus",
    "adiar",
    "adobe",
    "adote",
    "adora",
    "adoro",
    "aduar",
    "aerar",
    "afago",
    "afiar",
    "afins",
    "agora",
    "aguça",
    "agudo",
    "alado",
    "alada",
    "alçar",
    "algas",
    "algum",
    "aliar",
    "almas",
    "aloja",
    "aloje",
    "alojo",
    "altar",
    "alugo",
    "amado",
    "amada",
    "amigo",
    "ampla",
    "amplo",
    "anexo",
    "anima",
    "anota",
    "anote",
    "anual",
    "anula",
    "anulo",
    "anzol",
    "aonde",
    "aorta",
    "apago",
    "apelo",
    "apita",
    "apoio",
    "aprum",
    "arame",
    "arcar",
    "ardem",
    "ardor",
    "areia",
    "areja",
    "arejo",
    "armar",
    "armas",
    "arojo",
    "aroma",
    "arroz",
    "assar",
    "assaz",
    "assim",
    "astro",
    "ataco",
    "atada",
    "atear",
    "ateia",
    "ateio",
    "atira",
    "atole",
    "atrás",
    "atuar",
    "autor",
    "avaro",
    "aveia",
    "aviar",
    "avisa",
    "axial",
    "axiom",
    "azedo",
    "azuis",
    "bacia",
    "bagas",
    "baixo",
    "balao",
    "balão",
    "banal",
    "banha",
    "banho",
    "barão",
    "barco",
    "bares",
    "barra",
    "basta",
    "basta",
    "bater",
    "batom",
    "beber",
    "beira",
    "beijo",
    "belem",
    "benda",
    "berro",
    "bicão",
    "bilis",
    "bioma",
    "birra",
    "blusa",
    "boato",
    "boiar",
    "boite",
    "bolas",
    "bolor",
    "bomba",
    "bonde",
    "borbo",
    "borda",
    "borra",
    "botar",
    "botão",
    "braço",
    "brava",
    "bravo",
    "brisa",
    "bruta",
    "bruto",
    "bubão",
    "bucal",
    "burro",
    "busto",
    "buzio",
    "cabos",
    "cabra",
    "caçar",
    "cadei",
    "cadê",
    "café",
    "cairá",
    "caixa",
    "caldo",
    "calha",
    "calor",
    "cama",
    "cana",
    "canoa",
    "capaz",
    "capim",
    "caras",
    "carne",
    "carro",
    "casar",
    "casas",
    "casco",
    "caspa",
    "casta",
    "casto",
    "catão",
    "cavar",
    "ceder",
    "cedo",
    "cegar",
    "ceifa",
    "celta",
    "censo",
    "cenho",
    "cerca",
    "cerco",
    "cerro",
    "cesta",
    "cetro",
    "chama",
    "chão",
    "chato",
    "cheia",
    "cheio",
    "cheque",
    "chove",
    "chuca",
    "chula",
    "chuva",
    "cicla",
    "ciclo",
    "cifra",
    "cinco",
    "cinto",
    "circo",
    "citar",
    "civel",
    "civil",
    "clama",
    "claro",
    "clone",
    "cobre",
    "cofre",
    "coito",
    "colar",
    "colhe",
    "combo",
    "comer",
    "comes",
    "comum",
    "conta",
    "conto",
    "corpo",
    "coser",
    "costa",
    "couro",
    "couve",
    "crase",
    "cravo",
    "credo",
    "creme",
    "criar",
    "crina",
    "custa",
    "cutis",
    "dados",
    "danar",
    "dança",
    "dardo",
    "daqui",
    "dardo",
    "datar",
    "daçar",
    "debel",
    "deixa",
    "delta",
    "demar",
    "demão",
    "denso",
    "dente",
    "dessa",
    "desse",
    "deste",
    "diabo",
    "dicas",
    "dieta",
    "digam",
    "digno",
    "dizia",
    "dobro",
    "doida",
    "doido",
    "domar",
    "donas",
    "dormi",
    "doses",
    "douto",
    "dólar",
    "drama",
    "duelo",
    "dueto",
    "dúzia",
    "ecoar",
    "edito",
    "educa",
    "efuso",
    "ejeção",
    "elaine",
    "eleva",
    "embas",
    "emero",
    "emite",
    "emula",
    "enfim",
    "enfie",
    "enfio",
    "enjoa",
    "enjoe",
    "entra",
    "entro",
    "epura",
    "ergue",
    "errar",
    "ervas",
    "essas",
    "esses",
    "estão",
    "estar",
    "estes",
    "etapa",
    "ética",
    "ético",
    "etnia",
    "extra",
    "exuam",
    "exuma",
    "façam",
    "fadas",
    "fados",
    "fagul",
    "faina",
    "falar",
    "falha",
    "falhe",
    "falho",
    "falta",
    "falto",
    "farda",
    "fardo",
    "farol",
    "farra",
    "fatal",
    "fator",
    "fauna",
    "fauno",
    "favas",
    "fazei",
    "façam",
    "fecho",
    "feios",
    "fenda",
    "feroz",
    "ferve",
    "fervo",
    "festa",
    "fetar",
    "ficar",
    "fidos",
    "fieis",
    "fiéis",
    "figos",
    "filar",
    "filha",
    "filho",
    "filme",
    "final",
    "finca",
    "finge",
    "fique",
    "fixar",
    "fizera",
    "flora",
    "fluir",
    "fluxo",
    "focal",
    "focar",
    "fofos",
    "fogão",
    "foice",
    "folha",
    "fomos",
    "fonte",
    "foram",
    "forja",
    "forma",
    "forte",
    "força",
    "forço",
    "fosso",
    "fraco",
    "frase",
    "fruta",
    "fruto",
    "fugir",
    "furos",
    "fusco",
    "fuzil",
    "gabar",
    "gatos",
    "genro",
    "gente",
    "geral",
    "gerar",
    "gesso",
    "ginás",
    "girar",
    "globo",
    "goma",
    "gosma",
    "graca",
    "grade",
    "grama",
    "grata",
    "grato",
    "grave",
    "grava",
    "grota",
    "gruda",
    "gueto",
    "guria",
    "hábil",
    "herói",
    "hiena",
    "hinos",
    "homem",
    "honra",
    "horda",
    "horiz",
    "hotel",
    "houve",
    "humor",
    "ideal",
    "ídolo",
    "igual",
    "ilheu",
    "ilude",
    "ímpar",
    "ímpia",
    "ímpio",
    "inato",
    "induz",
    "infla",
    "inova",
    "inver",
    "iráis",
    "irado",
    "irmos",
    "irriga",
    "isola",
    "isque",
    "itens",
    "jacto",
    "janta",
    "jeito",
    "jogar",
    "jorra",
    "joule",
    "juiza",
    "juizo",
    "julho",
    "junto",
    "justa",
    "justo",
    "lábil",
    "lábio",
    "lagoa",
    "lança",
    "lance",
    "lanço",
    "lapso",
    "largu",
    "larva",
    "lavas",
    "lazer",
    "legar",
    "legua",
    "lembr",
    "lenha",
    "lenta",
    "lente",
    "leque",
    "lesar",
    "lesma",
    "letal",
    "levar",
    "licao",
    "líder",
    "lidos",
    "lidos",
    "línea",
    "linha",
    "livre",
    "lixar",
    "locar",
    "louça",
    "lucro",
    "lugar",
    "luzir",
    "luzir",
    "macio",
    "macho",
    "magem",
    "magna",
    "magno",
    "magoa",
    "maior",
    "malha",
    "malte",
    "manhã",
    "manso",
    "mapas",
    "marca",
    "marco",
    "mares",
    "marte",
    "massa",
    "matar",
    "medir",
    "meigo",
    "melar",
    "menor",
    "menos",
    "menta",
    "merda",
    "meses",
    "mesmo",
    "metal",
    "meter",
    "metro",
    "mimar",
    "minha",
    "minho",
    "minta",
    "minto",
    "miolo",
    "mirar",
    "mocho",
    "moda",
    "model",
    "mofar",
    "moita",
    "molas",
    "monja",
    "monte",
    "morar",
    "morte",
    "mover",
    "mudar",
    "muita",
    "muito",
    "multa",
    "mural",
    "mútuo",
    "nabla",
    "nadar",
    "nardo",
    "nariz",
    "nasal",
    "nasce",
    "negam",
    "negar",
    "neles",
    "nessa",
    "nesse",
    "nevar",
    "ninho",
    "nívea",
    "níveo",
    "nobre",
    "noite",
    "nossa",
    "nosso",
    "notar",
    "novas",
    "novos",
    "nozes",
    "nudez",
    "nuvem",
    "obede",
    "obter",
    "obter",
    "óbvio",
    "ocupa",
    "ódios",
    "odiar",
    "ódios",
    "ofício",
    "ópera",
    "opina",
    "óptar",
    "órfão",
    "orgia",
    "ornar",
    "ouros",
    "ousar",
    "outro",
    "ouvir",
    "pacto",
    "pagam",
    "pagar",
    "paiol",
    "pajem",
    "palha",
    "palma",
    "pampa",
    "panos",
    "pardo",
    "parem",
    "parou",
    "parte",
    "passa",
    "pasta",
    "patos",
    "pausa",
    "pecas",
    "pedal",
    "pedem",
    "pedra",
    "pedro",
    "pegou",
    "peito",
    "penal",
    "penas",
    "pente",
    "perca",
    "perda",
    "perde",
    "perdi",
    "perto",
    "pesar",
    "picos",
    "pilar",
    "pinto",
    "pipas",
    "pisar",
    "pizza",
    "placa",
    "plana",
    "plano",
    "pobre",
    "podes",
    "podre",
    "poema",
    "poeta",
    "polir",
    "polos",
    "polvo",
    "porca",
    "porta",
    "potes",
    "poção",
    "poços",
    "poeira",
    "posto",
    "pouca",
    "pouco",
    "prazo",
    "preço",
    "presa",
    "preto",
    "prova",
    "puder",
    "pular",
    "puxar",
    "quais",
    "quant",
    "quase",
    "queda",
    "quero",
    "quero",
    "quina",
    "quint",
    "quitá",
    "rabos",
    "radar",
    "raios",
    "raiva",
    "ramas",
    "rango",
    "raros",
    "rasos",
    "raças",
    "razão",
    "recai",
    "recém",
    "redor",
    "refém",
    "regar",
    "regra",
    "reina",
    "relva",
    "remar",
    "remex",
    "remir",
    "remar",
    "renda",
    "rente",
    "repor",
    "rezar",
    "rifle",
    "rigor",
    "riram",
    "rirem",
    "rirão",
    "rirás",
    "riso",
    "rival",
    "rixar",
    "robô",
    "roçam",
    "roçar",
    "roçar",
    "roças",
    "roçãs",
    "rodas",
    "rodou",
    "rodar",
    "roçar",
    "rodar",
    "rodas",
    "rodas",
    "roçar",
    "rodei",
    "roçar",
    "rogar",
    "rojar",
    "rolar",
    "rompe",
    "rouca",
    "rouco",
    "roupa",
    "roçar",
    "roçar",
    "roçar",
    "rouco",
    "roçar",
    "roçam",
    "roçar",
    "roçam",
    "roçar",
    "ruína",
    "ruiva",
    "ruivo",
    "runas",
    "sabão",
    "saber",
    "sabia",
    "sabra",
    "sabia",
    "sabão",
    "sabão",
    "saber",
    "saber",
    "saber",
    "sabia",
    "sabot",
    "sabor",
    "sabão",
    "sabor",
    "sabor",
    "sabor",
    "saida",
    "saído",
    "salas",
    "salve",
    "samba",
    "sanco",
    "sande",
    "sanha",
    "sapos",
    "sarau",
    "saída",
    "saída",
    "salva",
    "salve",
    "salvo",
    "salvo",
    "salva",
    "samba",
    "sanar",
    "sanco",
    "sanha",
    "sapos",
    "sarau",
    "saído",
    "saído",
    "saída",
  ];
  let sorteio = Math.floor(Math.random() * palavras.length); //valor unico ate recarregar
  const palavraSorteada = palavras[sorteio].split("");

  function firstLine() {
    // const total = [s1.value, s2.value, s3.value, s4.value, s5.value];
    const s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");

    for (let i = 0; i < palavraSorteada.length; i += 1) {
      if (s1.value === palavraSorteada[0]) {
        s1.style.backgroundColor = "green";
      } else if (palavraSorteada[i] === s1.value) {
        s1.style.backgroundColor = "yellow";
      } else {
        s1.style.backgroundColor = "red";
      }
    }

    if (s2.value === palavraSorteada[1]) {
      s2.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s2.value)) {
      s2.style.backgroundColor = "yellow";
    } else {
      s2.style.backgroundColor = "red";
    }
    if (s3.value === palavraSorteada[2]) {
      s3.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s3.value)) {
      s3.style.backgroundColor = "yellow";
    } else {
      s3.style.backgroundColor = "red";
    }
    if (s4.value === palavraSorteada[3]) {
      s4.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s4.value)) {
      s4.style.backgroundColor = "yellow";
    } else {
      s4.style.backgroundColor = "red";
    }
    if (s5.value === palavraSorteada[4]) {
      s5.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s5.value)) {
      s5.style.backgroundColor = "yellow";
    } else {
      s5.style.backgroundColor = "red";
    }
    s1.readOnly = "readOnly";
    s2.readOnly = "readOnly";
    s3.readOnly = "readOnly";
    s4.readOnly = "readOnly";
    s5.readOnly = "readOnly";
  }

  function secondLine() {
    const s6 = document.getElementById("6");
    const s7 = document.getElementById("7");
    const s8 = document.getElementById("8");
    const s9 = document.getElementById("9");
    const s10 = document.getElementById("10");

    if (s6.value === palavraSorteada[0]) {
      s6.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s6.value)) {
      s6.style.backgroundColor = "yellow";
    } else {
      s6.style.backgroundColor = "red";
    }
    if (s7.value === palavraSorteada[1]) {
      s7.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s7.value)) {
      s7.style.backgroundColor = "yellow";
    } else {
      s7.style.backgroundColor = "red";
    }
    if (s8.value === palavraSorteada[2]) {
      s8.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s8.value)) {
      s8.style.backgroundColor = "yellow";
    } else {
      s8.style.backgroundColor = "red";
    }
    if (s9.value === palavraSorteada[3]) {
      s9.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s9.value)) {
      s9.style.backgroundColor = "yellow";
    } else {
      s9.style.backgroundColor = "red";
    }
    if (s10.value === palavraSorteada[4]) {
      s10.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s10.value)) {
      s10.style.backgroundColor = "yellow";
    } else {
      s10.style.backgroundColor = "red";
    }
    s6.readOnly = "readOnly";
    s7.readOnly = "readOnly";
    s8.readOnly = "readOnly";
    s9.readOnly = "readOnly";
    s10.readOnly = "readOnly";
  }
  function terceiraLine() {
    const s11 = document.getElementById("11");
    const s12 = document.getElementById("12");
    const s13 = document.getElementById("13");
    const s14 = document.getElementById("14");
    const s15 = document.getElementById("15");
    if (s11.value === palavraSorteada[0]) {
      s11.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s11.value)) {
      s11.style.backgroundColor = "yellow";
    } else {
      s11.style.backgroundColor = "red";
    }
    if (s12.value === palavraSorteada[1]) {
      s12.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s12.value)) {
      s12.style.backgroundColor = "yellow";
    } else {
      s12.style.backgroundColor = "red";
    }
    if (s13.value === palavraSorteada[2]) {
      s13.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s13.value)) {
      s13.style.backgroundColor = "yellow";
    } else {
      s13.style.backgroundColor = "red";
    }
    if (s14.value === palavraSorteada[3]) {
      s14.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s14.value)) {
      s14.style.backgroundColor = "yellow";
    } else {
      s14.style.backgroundColor = "red";
    }
    if (s15.value === palavraSorteada[4]) {
      s15.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s15.value)) {
      s15.style.backgroundColor = "yellow";
    } else {
      s15.style.backgroundColor = "red";
    }
    s11.readOnly = "readOnly";
    s12.readOnly = "readOnly";
    s13.readOnly = "readOnly";
    s14.readOnly = "readOnly";
    s15.readOnly = "readOnly";
  }
  function quartaLine() {
    const s16 = document.getElementById("16");
    const s17 = document.getElementById("17");
    const s18 = document.getElementById("18");
    const s19 = document.getElementById("19");
    const s20 = document.getElementById("20");
    if (s16.value === palavraSorteada[0]) {
      s16.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s16.value)) {
      s16.style.backgroundColor = "yellow";
    } else {
      s16.style.backgroundColor = "red";
    }
    if (s17.value === palavraSorteada[1]) {
      s17.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s17.value)) {
      s17.style.backgroundColor = "yellow";
    } else {
      s17.style.backgroundColor = "red";
    }
    if (s18.value === palavraSorteada[2]) {
      s18.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s18.value)) {
      s18.style.backgroundColor = "yellow";
    } else {
      s18.style.backgroundColor = "red";
    }
    if (s19.value === palavraSorteada[3]) {
      s19.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s19.value)) {
      s19.style.backgroundColor = "yellow";
    } else {
      s19.style.backgroundColor = "red";
    }
    if (s20.value === palavraSorteada[4]) {
      s20.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s20.value)) {
      s20.style.backgroundColor = "yellow";
    } else {
      s20.style.backgroundColor = "red";
    }
    s16.readOnly = "readOnly";
    s17.readOnly = "readOnly";
    s18.readOnly = "readOnly";
    s19.readOnly = "readOnly";
    s20.readOnly = "readOnly";
  }
  function quintaLine() {
    const s21 = document.getElementById("21");
    const s22 = document.getElementById("22");
    const s23 = document.getElementById("23");
    const s24 = document.getElementById("24");
    const s25 = document.getElementById("25");
    if (s21.value === palavraSorteada[0]) {
      s21.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s21.value)) {
      s21.style.backgroundColor = "yellow";
    } else {
      s21.style.backgroundColor = "red";
    }
    if (s22.value === palavraSorteada[1]) {
      s22.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s22.value)) {
      s22.style.backgroundColor = "yellow";
    } else {
      s22.style.backgroundColor = "red";
    }
    if (s23.value === palavraSorteada[2]) {
      s23.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s23.value)) {
      s23.style.backgroundColor = "yellow";
    } else {
      s23.style.backgroundColor = "red";
    }
    if (s24.value === palavraSorteada[3]) {
      s24.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s24.value)) {
      s24.style.backgroundColor = "yellow";
    } else {
      s24.style.backgroundColor = "red";
    }
    if (s25.value === palavraSorteada[4]) {
      s25.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s25.value)) {
      s25.style.backgroundColor = "yellow";
    } else {
      s25.style.backgroundColor = "red";
    }
    s21.readOnly = "readOnly";
    s22.readOnly = "readOnly";
    s23.readOnly = "readOnly";
    s24.readOnly = "readOnly";
    s25.readOnly = "readOnly";
  }
  function sextaLine() {
    const s26 = document.getElementById("26");
    const s27 = document.getElementById("27");
    const s28 = document.getElementById("28");
    const s29 = document.getElementById("29");
    const s30 = document.getElementById("30");
    if (s26.value === palavraSorteada[0]) {
      s26.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s26.value)) {
      s26.style.backgroundColor = "yellow";
    } else {
      s26.style.backgroundColor = "red";
    }
    if (s27.value === palavraSorteada[1]) {
      s27.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s27.value)) {
      s27.style.backgroundColor = "yellow";
    } else {
      s27.style.backgroundColor = "red";
    }
    if (s28.value === palavraSorteada[2]) {
      s28.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s28.value)) {
      s28.style.backgroundColor = "yellow";
    } else {
      s28.style.backgroundColor = "red";
    }
    if (s29.value === palavraSorteada[3]) {
      s29.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s29.value)) {
      s29.style.backgroundColor = "yellow";
    } else {
      s29.style.backgroundColor = "red";
    }
    if (s30.value === palavraSorteada[4]) {
      s30.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s30.value)) {
      s30.style.backgroundColor = "yellow";
    } else {
      s30.style.backgroundColor = "red";
    }
    s26.readOnly = "readOnly";
    s27.readOnly = "readOnly";
    s28.readOnly = "readOnly";
    s29.readOnly = "readOnly";
    s30.readOnly = "readOnly";
  }

  return (
    <>
      <div className="Container" style={styleBackgroundContainer}>
        <h1 className="title" style={styleTitle}>
          TERMO
        </h1>
        <button onClick={firstLine} style={styleBtn}>
          Primeira Linha
        </button>
        <button onClick={secondLine} style={styleBtn}>
          Segunda Linha
        </button>
        <button onClick={terceiraLine} style={styleBtn}>
          Terceira Linha
        </button>
        <button onClick={quartaLine} style={styleBtn}>
          Quarta Linha
        </button>
        <button onClick={quintaLine} style={styleBtn}>
          Quinta Linha
        </button>
        <button onClick={sextaLine} style={styleBtn}>
          Sexta Linha
        </button>
        <button onClick={mostrar} style={styleBtn}>
          Mostrar
        </button>

        <div className="container-area-app" style={styleArea}>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="1"></input>
            <input type="text" className="input" id="2"></input>
            <input type="text" className="input" id="3"></input>
            <input type="text" className="input" id="4"></input>
            <input type="text" className="input" id="5"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="6"></input>
            <input type="text" className="input" id="7"></input>
            <input type="text" className="input" id="8"></input>
            <input type="text" className="input" id="9"></input>
            <input type="text" className="input" id="10"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="11"></input>
            <input type="text" className="input" id="12"></input>
            <input type="text" className="input" id="13"></input>
            <input type="text" className="input" id="14"></input>
            <input type="text" className="input" id="15"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="16"></input>
            <input type="text" className="input" id="17"></input>
            <input type="text" className="input" id="18"></input>
            <input type="text" className="input" id="19"></input>
            <input type="text" className="input" id="20"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="21"></input>
            <input type="text" className="input" id="22"></input>
            <input type="text" className="input" id="23"></input>
            <input type="text" className="input" id="24"></input>
            <input type="text" className="input" id="25"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="26"></input>
            <input type="text" className="input" id="27"></input>
            <input type="text" className="input" id="28"></input>
            <input type="text" className="input" id="29"></input>
            <input type="text" className="input" id="30"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
