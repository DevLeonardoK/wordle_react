import { useEffect } from "react";
import "./app.css";

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
  var contador = 0;
  var onFunction = false;
  const palavras = [
    "amido",
    "animo",
    "atomo",
    "aviao",
    "breve",
    "broto",
    "claro",
    "denso",
    "ervas",
    "extra",
    "feixe",
    "forte",
    "grama",
    "grupo",
    "lapis",
    "leque",
    "livro",
    "mapas",
    "naval",
    "nevoa",
    "ovulo",
    "papel",
    "plano",
    "prato",
    "quero",
    "resto",
    "tempo",
    "vazio",
  ];

  const keyUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const keyLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //sorteio da palavra
  const sorteio = Math.floor(Math.random() * palavras.length); //valor unico ate recarregar
  const palavraSorteada = palavras[sorteio].toUpperCase().split("");
  // const palavraMostrarAlert = palavras[sorteio].toUpperCase();
  // var word = [palavraMostrarAlert];

  //verificar a letra repetida
  for (let i = 0; i < palavraSorteada.length; i++) {
    var total = palavraSorteada.filter((x) => x === palavraSorteada[i]).length;
    if (total > 1) {
      var letraRepetida = palavraSorteada[i];
      var mensagem = letraRepetida + " repete: " + total;
    }
  }

  useEffect(() => {
    ver();
    verificarLine();
    passarInput();
  });

  return (
    <>
      <div className="Container" style={styleBackgroundContainer} id="buttons">
        <h1 className="title" style={styleTitle}>
          TERMO
        </h1>
        <div className="container-area-app">
          <div className="showArea">
            {/*<button onClick={passarInput}>SHOW</button>*/}
          </div>
          <div className="row-area" style={styleRow}>
            <input
              type="text"
              className="input"
              id="1"
              autoFocus
              maxLength={1}
              name="linha1"
            ></input>
            <input
              type="text"
              className="input"
              id="2"
              maxLength={1}
              name="linha1"
            ></input>
            <input
              type="text"
              className="input"
              id="3"
              maxLength={1}
              name="linha1"
            ></input>
            <input
              type="text"
              className="input"
              id="4"
              maxLength={1}
              name="linha1"
            ></input>
            <input
              type="text"
              className="input"
              id="5"
              maxLength={1}
              name="linha1"
            ></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input
              type="text"
              className="input"
              id="6"
              name="linha2"
              maxLength={1}
            ></input>
            <input type="text" className="input" id="7" name="linha2"></input>
            <input type="text" className="input" id="8" name="linha2"></input>
            <input type="text" className="input" id="9" name="linha2"></input>
            <input type="text" className="input" id="10" name="linha2"></input>
          </div>

          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="11" name="linha3"></input>
            <input type="text" className="input" id="12" name="linha3"></input>
            <input type="text" className="input" id="13" name="linha3"></input>
            <input type="text" className="input" id="14" name="linha3"></input>
            <input type="text" className="input" id="15" name="linha3"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="16" name="linha4"></input>
            <input type="text" className="input" id="17" name="linha4"></input>
            <input type="text" className="input" id="18" name="linha4"></input>
            <input type="text" className="input" id="19" name="linha4"></input>
            <input type="text" className="input" id="20" name="linha4"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="21" name="linha5"></input>
            <input type="text" className="input" id="22" name="linha5"></input>
            <input type="text" className="input" id="23" name="linha5"></input>
            <input type="text" className="input" id="24" name="linha5"></input>
            <input type="text" className="input" id="25" name="linha5"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input" id="26" name="linha6"></input>
            <input type="text" className="input" id="27" name="linha6"></input>
            <input type="text" className="input" id="28" name="linha6"></input>
            <input type="text" className="input" id="29" name="linha6"></input>
            <input type="text" className="input" id="30" name="linha6"></input>
          </div>
          <div id="letter-area"></div>
        </div>
      </div>
    </>
  );

  function ver() {
    console.log(palavraSorteada);
  }
  function sendMessage() {
    alert("ganhou");
  }

  function mostrar() {
    const areaLetter = document.getElementById("letter-area");
    console.log(palavraSorteada);
    const elemento = document.createElement("h2");
    elemento.setAttribute("id", "text-letter-repeat");
    elemento.textContent = mensagem;
    areaLetter.appendChild(elemento);
    console.log(contador);
  }

  function firstLine() {
    // const total = [s1.value, s2.value, s3.value, s4.value, s5.value];
    const s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");
    const s6 = document.getElementById("6");
    s1.value = s1.value.toUpperCase();
    s2.value = s2.value.toUpperCase();
    s3.value = s3.value.toUpperCase();
    s4.value = s4.value.toUpperCase();
    s5.value = s5.value.toUpperCase();
    s6.value = s6.value.toUpperCase();

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
      let valuesOne = document.getElementsByClassName("input1").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input1")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 110);
    }
    s6.focus();
  }

  function secondLine() {
    const s6 = document.getElementById("6");
    const s7 = document.getElementById("7");
    const s8 = document.getElementById("8");
    const s9 = document.getElementById("9");
    const s10 = document.getElementById("10");
    const s11 = document.getElementById("11");
    s6.value = s6.value.toUpperCase();
    s7.value = s7.value.toUpperCase();
    s8.value = s8.value.toUpperCase();
    s9.value = s9.value.toUpperCase();
    s10.value = s10.value.toUpperCase();
    s11.value = s11.value.toUpperCase();

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
      s6.value.toUpperCase() === palavraSorteada[0] &&
      s7.value.toUpperCase() === palavraSorteada[1] &&
      s8.value.toUpperCase() === palavraSorteada[2] &&
      s9.value.toUpperCase() === palavraSorteada[3] &&
      s10.value.toUpperCase() === palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input2").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input2")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 1000);
    }
    s11.focus();
  }
  function terceiraLine() {
    const s11 = document.getElementById("11");
    const s12 = document.getElementById("12");
    const s13 = document.getElementById("13");
    const s14 = document.getElementById("14");
    const s15 = document.getElementById("15");
    const s16 = document.getElementById("16");
    s11.value = s11.value.toUpperCase();
    s12.value = s12.value.toUpperCase();
    s13.value = s13.value.toUpperCase();
    s14.value = s14.value.toUpperCase();
    s15.value = s15.value.toUpperCase();
    s16.value = s16.value.toUpperCase();
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
      s11.value.toUpperCase() === palavraSorteada[0] &&
      s12.value.toUpperCase() === palavraSorteada[1] &&
      s13.value.toUpperCase() === palavraSorteada[2] &&
      s14.value.toUpperCase() === palavraSorteada[3] &&
      s15.value.toUpperCase() === palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input3").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input3")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 1000);
    }
    s16.focus();
  }
  function quartaLine() {
    const s16 = document.getElementById("16");
    const s17 = document.getElementById("17");
    const s18 = document.getElementById("18");
    const s19 = document.getElementById("19");
    const s20 = document.getElementById("20");
    const s21 = document.getElementById("21");
    s16.value = s16.value.toUpperCase();
    s17.value = s17.value.toUpperCase();
    s18.value = s18.value.toUpperCase();
    s19.value = s19.value.toUpperCase();
    s20.value = s20.value.toUpperCase();
    s21.value = s21.value.toUpperCase();
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
      s16.value.toUpperCase() === palavraSorteada[0] &&
      s17.value.toUpperCase() === palavraSorteada[1] &&
      s18.value.toUpperCase() === palavraSorteada[2] &&
      s19.value.toUpperCase() === palavraSorteada[3] &&
      s20.value.toUpperCase() === palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input4").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input4")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 1000);
    }
    s21.focus();
  }
  function quintaLine() {
    const s21 = document.getElementById("21");
    const s22 = document.getElementById("22");
    const s23 = document.getElementById("23");
    const s24 = document.getElementById("24");
    const s25 = document.getElementById("25");
    const s26 = document.getElementById("26");
    s21.value = s21.value.toUpperCase();
    s22.value = s22.value.toUpperCase();
    s23.value = s23.value.toUpperCase();
    s24.value = s24.value.toUpperCase();
    s25.value = s25.value.toUpperCase();
    s26.value = s26.value.toUpperCase();
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
      s21.value.toUpperCase() === palavraSorteada[0] &&
      s22.value.toUpperCase() === palavraSorteada[1] &&
      s23.value.toUpperCase() === palavraSorteada[2] &&
      s24.value.toUpperCase() === palavraSorteada[3] &&
      s25.value.toUpperCase() === palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input5").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input5")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 1000);
    }
    s26.focus();
  }
  function sextaLine() {
    const s26 = document.getElementById("26");
    const s27 = document.getElementById("27");
    const s28 = document.getElementById("28");
    const s29 = document.getElementById("29");
    const s30 = document.getElementById("30");
    s26.value = s26.value.toUpperCase();
    s27.value = s27.value.toUpperCase();
    s28.value = s28.value.toUpperCase();
    s29.value = s29.value.toUpperCase();
    s30.value = s30.value.toUpperCase();
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
      s26.value.toUpperCase() !== palavraSorteada[0] &&
      s27.value.toUpperCase() !== palavraSorteada[1] &&
      s28.value.toUpperCase() !== palavraSorteada[2] &&
      s29.value.toUpperCase() !== palavraSorteada[3] &&
      s30.value.toUpperCase() !== palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input6").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input6")[i].style.backgroundColor =
          "red";
      }
      console.log(palavraSorteada, sorteio);
    } else {
      let valuesOne = document.getElementsByClassName("input6").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input6")[i].style.backgroundColor =
          "green";
      }
      setTimeout(sendMessage, 1000);
    }
  }

  function verificarLine() {
    const valuesLine1 = document.getElementsByName("linha1");
    const valuesLine2 = document.getElementsByName("linha2");
    const valuesLine3 = document.getElementsByName("linha3");
    const valuesLine4 = document.getElementsByName("linha4");
    const valuesLine5 = document.getElementsByName("linha5");
    const valuesLine6 = document.getElementsByName("linha6");

    document.addEventListener("keyup", (event) => {
      var letra = event.key;
      if (letra === "Enter") {
        contador++;
        console.log("valor do contador é:", contador);
        switch (contador) {
          case 1:
            for (let i = 0; i < valuesLine1.length; i++) {
              if (valuesLine1[i] !== "") {
                if (!onFunction) {
                  firstLine();
                  onFunction = true;
                }
              }
            }

            break;
          case 3:
            for (let i = 0; i < valuesLine2.length; i++) {
              if (valuesLine2[i] !== null || undefined) {
                if (onFunction) {
                  secondLine();
                  onFunction = false;
                }
              }
            }

            break;

          case 5:
            for (let i = 0; i < valuesLine3.length; i++) {
              if (valuesLine3[i] !== null || undefined) {
                if (!onFunction) {
                  terceiraLine();
                  onFunction = true;
                }
              }
            }

            break;

          case 7:
            for (let i = 0; i < valuesLine4.length; i++) {
              if (valuesLine4[i] !== null || undefined) {
                if (onFunction) {
                  quartaLine();
                  onFunction = false;
                }
              }
            }

            break;

          case 9:
            for (let i = 0; i < valuesLine5.length; i++) {
              if (valuesLine5[i] !== null || undefined) {
                if (!onFunction) {
                  quintaLine();
                  onFunction = true;
                }
              }
            }

            break;

          case 11:
            for (let i = 0; i < valuesLine6.length; i++) {
              if (valuesLine6[i] !== null || undefined) {
                if (onFunction) {
                  sextaLine();
                  onFunction = false;
                }
              }
            }
            break;

          default:
            break;
        }
      }
    });
  }
  function passarInput() {
    const valuesinput = document.getElementsByClassName("input");
    document.addEventListener("keydown", (event) => {
      console.log(valuesinput.length);
      for (let i = 0; i < valuesinput.length - 1; i++) {
        if (valuesinput[i].value !== "") {
          valuesinput[i + 1].focus();
        }
      }
    });
  }
};

export default App;
