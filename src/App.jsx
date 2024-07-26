import "./app.css";
import { useEffect } from "react";

const styleBackgroundContainer = {
  backgroundColor: "#6E5C62",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
};

const styleTitle = {
  fontFamily: "Mitr",
  color: "white",
  letterSpacing: 5,
  fontWeight: 600,
  fontSize: 45,
  textDecoration: "underline",
};

const styleRow = {
  width: 410,
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
};

const styleBtn = {
  width: 70,
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
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
  const letrasPrimeiraLinha = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
  ];

  const letraSegundaLinha = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"];

  const letrasTerceiraLinha = ["z", "x", "c", "v", "b", "n", "m"];

  let sorteio = Math.floor(Math.random() * palavras.length); //valor unico ate recarregar
  const palavraSorteada = palavras[sorteio].split("");

  for (let i = 0; i < palavraSorteada.length; i++) {
    var total = palavraSorteada.filter((x) => x === palavraSorteada[i]).length;
    if (total >= 0) {
      var letraRepetida = palavraSorteada[i];
      var mensagem = console.log(
        letraRepetida,
        "=== essa letra repete: ",
        total,
        " vezes"
      );
    }
  }

  useEffect(() => {
    var letraLinhas = (linhaPosition, letter) => {
      linhaPosition.forEach((letter) => {
        var btn = document.createElement("button");
        var lettersArea = document.querySelector("#letter-area");
        btn.setAttribute("class", "buttons-letters");
        btn.textContent = letter;
        btn.setAttribute("value", letter);
        lettersArea.append(btn);
      });
    };

    letraLinhas(letrasPrimeiraLinha);
    letraLinhas(letraSegundaLinha);
    letraLinhas(letrasTerceiraLinha);
  });
  function mostrar() {
    console.log(palavraSorteada);
    const elemento = document.createElement("span");
    elemento.textContent = mensagem;
    console.log(letraRepetida, total);
  }

  function firstLine() {
    console.log(letraRepetida);
    // const total = [s1.value, s2.value, s3.value, s4.value, s5.value];

    const s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");

    if (palavraSorteada[0] !== s1.value && palavraSorteada.includes(s1.value)) {
      s1.style.backgroundColor = "yellow";
    } else if (s1.value === palavraSorteada[0]) {
      s1.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s1.value)) {
      s1.style.backgroundColor = "red";
    }

    if (palavraSorteada[1] !== s2.value && palavraSorteada.includes(s2.value)) {
      s2.style.backgroundColor = "yellow";
    } else if (s2.value === palavraSorteada[1]) {
      s2.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s2.value)) {
      s2.style.backgroundColor = "red";
    }
    if (palavraSorteada[2] !== s3.value && palavraSorteada.includes(s3.value)) {
      s3.style.backgroundColor = "yellow";
    } else if (s3.value === palavraSorteada[2]) {
      s3.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s3.value)) {
      s3.style.backgroundColor = "red";
    }
    if (palavraSorteada[3] !== s4.value && palavraSorteada.includes(s4.value)) {
      s4.style.backgroundColor = "yellow";
    } else if (s4.value === palavraSorteada[3]) {
      s4.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s4.value)) {
      s4.style.backgroundColor = "red";
    }
    if (palavraSorteada[4] !== s5.value && palavraSorteada.includes(s5.value)) {
      s5.style.backgroundColor = "yellow";
    } else if (s5.value === palavraSorteada[4]) {
      s5.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s5.value)) {
      s5.style.backgroundColor = "red";
    }
    s1.readOnly = "readOnly";
    s2.readOnly = "readOnly";
    s3.readOnly = "readOnly";
    s4.readOnly = "readOnly";
    s5.readOnly = "readOnly";

    if (
      s1.value === palavraSorteada[0] &&
      s2.value === palavraSorteada[1] &&
      s3.value === palavraSorteada[2] &&
      s4.value === palavraSorteada[3] &&
      s5.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }

  function secondLine() {
    const s6 = document.getElementById("6");
    const s7 = document.getElementById("7");
    const s8 = document.getElementById("8");
    const s9 = document.getElementById("9");
    const s10 = document.getElementById("10");

    if (palavraSorteada[0] !== s6.value && palavraSorteada.includes(s6.value)) {
      s6.style.backgroundColor = "yellow";
    } else if (s6.value === palavraSorteada[0]) {
      s6.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s6.value)) {
      s6.style.backgroundColor = "red";
    }

    if (palavraSorteada[1] !== s7.value && palavraSorteada.includes(s7.value)) {
      s7.style.backgroundColor = "yellow";
    } else if (s7.value === palavraSorteada[1]) {
      s7.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s7.value)) {
      s7.style.backgroundColor = "red";
    }
    if (palavraSorteada[2] !== s8.value && palavraSorteada.includes(s8.value)) {
      s8.style.backgroundColor = "yellow";
    } else if (s8.value === palavraSorteada[2]) {
      s8.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s8.value)) {
      s8.style.backgroundColor = "red";
    }
    if (palavraSorteada[3] !== s9.value && palavraSorteada.includes(s9.value)) {
      s9.style.backgroundColor = "yellow";
    } else if (s9.value === palavraSorteada[3]) {
      s9.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s9.value)) {
      s9.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[4] !== s10.value &&
      palavraSorteada.includes(s10.value)
    ) {
      s10.style.backgroundColor = "yellow";
    } else if (s10.value === palavraSorteada[4]) {
      s10.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s10.value)) {
      s10.style.backgroundColor = "red";
    }
    s6.readOnly = "readOnly";
    s7.readOnly = "readOnly";
    s8.readOnly = "readOnly";
    s9.readOnly = "readOnly";
    s10.readOnly = "readOnly";
    if (
      s6.value === palavraSorteada[0] &&
      s7.value === palavraSorteada[1] &&
      s8.value === palavraSorteada[2] &&
      s9.value === palavraSorteada[3] &&
      s10.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }
  function terceiraLine() {
    const s11 = document.getElementById("11");
    const s12 = document.getElementById("12");
    const s13 = document.getElementById("13");
    const s14 = document.getElementById("14");
    const s15 = document.getElementById("15");
    if (
      palavraSorteada[0] !== s11.value &&
      palavraSorteada.includes(s11.value)
    ) {
      s11.style.backgroundColor = "yellow";
    } else if (s11.value === palavraSorteada[0]) {
      s11.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s11.value)) {
      s11.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[1] !== s12.value &&
      palavraSorteada.includes(s12.value)
    ) {
      s12.style.backgroundColor = "yellow";
    } else if (s12.value === palavraSorteada[1]) {
      s12.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s12.value)) {
      s12.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[2] !== s13.value &&
      palavraSorteada.includes(s13.value)
    ) {
      s13.style.backgroundColor = "yellow";
    } else if (s13.value === palavraSorteada[2]) {
      s13.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s13.value)) {
      s13.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[3] !== s14.value &&
      palavraSorteada.includes(s14.value)
    ) {
      s14.style.backgroundColor = "yellow";
    } else if (s14.value === palavraSorteada[3]) {
      s14.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s14.value)) {
      s14.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[4] !== s15.value &&
      palavraSorteada.includes(s15.value)
    ) {
      s15.style.backgroundColor = "yellow";
    } else if (s15.value === palavraSorteada[4]) {
      s15.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s15.value)) {
      s15.style.backgroundColor = "red";
    }
    s11.readOnly = "readOnly";
    s12.readOnly = "readOnly";
    s13.readOnly = "readOnly";
    s14.readOnly = "readOnly";
    s15.readOnly = "readOnly";
    if (
      s11.value === palavraSorteada[0] &&
      s12.value === palavraSorteada[1] &&
      s13.value === palavraSorteada[2] &&
      s14.value === palavraSorteada[3] &&
      s15.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }
  function quartaLine() {
    const s16 = document.getElementById("16");
    const s17 = document.getElementById("17");
    const s18 = document.getElementById("18");
    const s19 = document.getElementById("19");
    const s20 = document.getElementById("20");
    if (
      palavraSorteada[0] !== s16.value &&
      palavraSorteada.includes(s16.value)
    ) {
      s16.style.backgroundColor = "yellow";
    } else if (s16.value === palavraSorteada[0]) {
      s16.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s16.value)) {
      s16.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[1] !== s17.value &&
      palavraSorteada.includes(s17.value)
    ) {
      s17.style.backgroundColor = "yellow";
    } else if (s17.value === palavraSorteada[1]) {
      s17.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s17.value)) {
      s17.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[2] !== s18.value &&
      palavraSorteada.includes(s18.value)
    ) {
      s18.style.backgroundColor = "yellow";
    } else if (s18.value === palavraSorteada[2]) {
      s18.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s18.value)) {
      s18.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[3] !== s19.value &&
      palavraSorteada.includes(s19.value)
    ) {
      s19.style.backgroundColor = "yellow";
    } else if (s19.value === palavraSorteada[3]) {
      s19.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s19.value)) {
      s19.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[4] !== s20.value &&
      palavraSorteada.includes(s20.value)
    ) {
      s20.style.backgroundColor = "yellow";
    } else if (s20.value === palavraSorteada[4]) {
      s20.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s20.value)) {
      s20.style.backgroundColor = "red";
    }
    s16.readOnly = "readOnly";
    s17.readOnly = "readOnly";
    s18.readOnly = "readOnly";
    s19.readOnly = "readOnly";
    s20.readOnly = "readOnly";
    if (
      s16.value === palavraSorteada[0] &&
      s17.value === palavraSorteada[1] &&
      s18.value === palavraSorteada[2] &&
      s19.value === palavraSorteada[3] &&
      s20.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }
  function quintaLine() {
    const s21 = document.getElementById("21");
    const s22 = document.getElementById("22");
    const s23 = document.getElementById("23");
    const s24 = document.getElementById("24");
    const s25 = document.getElementById("25");
    if (
      palavraSorteada[0] !== s21.value &&
      palavraSorteada.includes(s21.value)
    ) {
      s21.style.backgroundColor = "yellow";
    } else if (s21.value === palavraSorteada[0]) {
      s21.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s21.value)) {
      s21.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[1] !== s22.value &&
      palavraSorteada.includes(s22.value)
    ) {
      s22.style.backgroundColor = "yellow";
    } else if (s22.value === palavraSorteada[1]) {
      s22.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s22.value)) {
      s22.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[2] !== s23.value &&
      palavraSorteada.includes(s23.value)
    ) {
      s23.style.backgroundColor = "yellow";
    } else if (s23.value === palavraSorteada[2]) {
      s23.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s23.value)) {
      s23.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[3] !== s24.value &&
      palavraSorteada.includes(s24.value)
    ) {
      s24.style.backgroundColor = "yellow";
    } else if (s24.value === palavraSorteada[3]) {
      s24.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s24.value)) {
      s24.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[4] !== s25.value &&
      palavraSorteada.includes(s25.value)
    ) {
      s25.style.backgroundColor = "yellow";
    } else if (s25.value === palavraSorteada[4]) {
      s25.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s25.value)) {
      s25.style.backgroundColor = "red";
    }
    s21.readOnly = "readOnly";
    s22.readOnly = "readOnly";
    s23.readOnly = "readOnly";
    s24.readOnly = "readOnly";
    s25.readOnly = "readOnly";
    if (
      s21.value === palavraSorteada[0] &&
      s22.value === palavraSorteada[1] &&
      s23.value === palavraSorteada[2] &&
      s24.value === palavraSorteada[3] &&
      s25.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }
  function sextaLine() {
    const s26 = document.getElementById("26");
    const s27 = document.getElementById("27");
    const s28 = document.getElementById("28");
    const s29 = document.getElementById("29");
    const s30 = document.getElementById("30");
    if (
      palavraSorteada[0] !== s26.value &&
      palavraSorteada.includes(s26.value)
    ) {
      s26.style.backgroundColor = "yellow";
    } else if (s26.value === palavraSorteada[0]) {
      s26.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s26.value)) {
      s26.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[1] !== s27.value &&
      palavraSorteada.includes(s27.value)
    ) {
      s27.style.backgroundColor = "yellow";
    } else if (s27.value === palavraSorteada[1]) {
      s27.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s27.value)) {
      s27.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[2] !== s28.value &&
      palavraSorteada.includes(s28.value)
    ) {
      s28.style.backgroundColor = "yellow";
    } else if (s28.value === palavraSorteada[2]) {
      s28.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s28.value)) {
      s28.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[3] !== s29.value &&
      palavraSorteada.includes(s29.value)
    ) {
      s29.style.backgroundColor = "yellow";
    } else if (s29.value === palavraSorteada[3]) {
      s29.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s29.value)) {
      s29.style.backgroundColor = "red";
    }
    if (
      palavraSorteada[4] !== s30.value &&
      palavraSorteada.includes(s30.value)
    ) {
      s30.style.backgroundColor = "yellow";
    } else if (s30.value === palavraSorteada[4]) {
      s30.style.backgroundColor = "green";
    } else if (!palavraSorteada.includes(s30.value)) {
      s30.style.backgroundColor = "red";
    }
    s26.readOnly = "readOnly";
    s27.readOnly = "readOnly";
    s28.readOnly = "readOnly";
    s29.readOnly = "readOnly";
    s30.readOnly = "readOnly";
    if (
      s26.value === palavraSorteada[0] &&
      s27.value === palavraSorteada[1] &&
      s28.value === palavraSorteada[2] &&
      s29.value === palavraSorteada[3] &&
      s30.value === palavraSorteada[4]
    ) {
      console.log("PARABENS JOGOS FINALIZADOS");
    }
  }

  return (
    <>
      <div className="Container" style={styleBackgroundContainer} id="buttons">
        <h1 className="title" style={styleTitle}>
          TERMO
        </h1>
        <div className="buttons">
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
        </div>

        <div className="container-area-app">
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
          <div id="letter-area"></div>
        </div>
      </div>
    </>
  );
};

export default App;
