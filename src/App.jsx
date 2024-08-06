import "./app.css";
import { useState } from "react";

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
  const [count, setCount] = useState(0);
  var contador = 0;
  var onFunction = false;
  const palavras = [
    "amigo",
    "livro",
    "carro",
    "casa",
    "porta",
    "janela",
    "chave",
    "mesa",
    "luz",
    "copo",
    "prato",
    "garfo",
    "faca",
    "pano",
    "caneta",
    "lapis",
    "papel",
    "quadro",
    "sapato",
    "meias",
    "calca",
    "camisa",
    "blusa",
    "casaco",
    "cinto",
    "cueca",
    "tenis",
    "botas",
    "banco",
    "bolsa",
    "caixa",
    "sacola",
    "carte",
    "radio",
    "video",
    "som",
    "filme",
    "serie",
    "carta",
    "dupla",
    "escola",
    "livro",
    "aluno",
    "prof",
    "treno",
    "lente",
    "quase",
    "salao",
    "turma",
    "campo",
    "piano",
    "melhor",
    "tempo",
    "gosto",
    "velha",
    "nova",
    "leve",
    "visto",
    "jovem",
    "velho",
    "muito",
    "certo",
    "grito",
    "fraco",
    "firme",
    "couro",
    "verde",
    "larva",
    "barco",
    "lente",
    "corpo",
    "letra",
    "nervo",
    "carne",
    "ossos",
    "plano",
    "curto",
    "longo",
    "duplo",
    "pardo",
    "feroz",
    "bravo",
    "trono",
    "treno",
    "frase",
    "etapa",
    "canto",
    "coral",
    "piano",
    "grupo",
    "rosto",
    "barba",
    "nariz",
    "pente",
    "toque",
    "nobre",
  ];

  //sorteio da palavra
  let sorteio = Math.floor(Math.random() * palavras.length); //valor unico ate recarregar
  const palavraSorteada = palavras[sorteio].split("");

  //verificar a letra repetida
  for (let i = 0; i < palavraSorteada.length; i++) {
    var total = palavraSorteada.filter((x) => x === palavraSorteada[i]).length;
    if (total > 1) {
      var letraRepetida = palavraSorteada[i];
      var mensagem = letraRepetida + " repete: " + total;
    }
  }

  verificarLine();
  return (
    <>
      <div className="Container" style={styleBackgroundContainer} id="buttons">
        <h1 className="title" style={styleTitle}>
          TERMO
        </h1>
        <div className="buttons">
          <button onClick={firstLine} style={styleBtn}>
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
            <input type="text" className="input1" id="1" autoFocus></input>
            <input type="text" className="input1" id="2"></input>
            <input type="text" className="input1" id="3"></input>
            <input type="text" className="input1" id="4"></input>
            <input type="text" className="input1" id="5"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input2" id="6"></input>
            <input type="text" className="input2" id="7"></input>
            <input type="text" className="input2" id="8"></input>
            <input type="text" className="input2" id="9"></input>
            <input type="text" className="input2" id="10"></input>
          </div>

          <div className="row-area" style={styleRow}>
            <input type="text" className="input3" id="11"></input>
            <input type="text" className="input3" id="12"></input>
            <input type="text" className="input3" id="13"></input>
            <input type="text" className="input3" id="14"></input>
            <input type="text" className="input3" id="15"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input4" id="16"></input>
            <input type="text" className="input4" id="17"></input>
            <input type="text" className="input4" id="18"></input>
            <input type="text" className="input4" id="19"></input>
            <input type="text" className="input4" id="20"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input5" id="21"></input>
            <input type="text" className="input5" id="22"></input>
            <input type="text" className="input5" id="23"></input>
            <input type="text" className="input5" id="24"></input>
            <input type="text" className="input5" id="25"></input>
          </div>
          <div className="row-area" style={styleRow}>
            <input type="text" className="input6" id="26"></input>
            <input type="text" className="input6" id="27"></input>
            <input type="text" className="input6" id="28"></input>
            <input type="text" className="input6" id="29"></input>
            <input type="text" className="input6" id="30"></input>
          </div>
          <div id="letter-area"></div>
        </div>
      </div>
    </>
  );

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

    document.getElementById("6").focus();
  }

  function secondLine() {
    const s6 = document.getElementById("6");
    const s7 = document.getElementById("7");
    const s8 = document.getElementById("8");
    const s9 = document.getElementById("9");
    const s10 = document.getElementById("10");
    const s11 = document.getElementById("11");

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
      let valuesOne = document.getElementsByClassName("input2").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input2")[i].style.backgroundColor =
          "green";
      }
      function sendMessage() {
        // alert("PARABENS JOGOS FINALIZADOS");
        // window.location.reload(true);
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
      let valuesOne = document.getElementsByClassName("input3").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input3")[i].style.backgroundColor =
          "green";
      }
      function sendMessage() {
        // alert("PARABENS JOGOS FINALIZADOS");
        // window.location.reload(true);
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
      let valuesOne = document.getElementsByClassName("input4").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input4")[i].style.backgroundColor =
          "green";
      }
      function sendMessage() {
        // alert("PARABENS JOGOS FINALIZADOS");
        // window.location.reload(true);
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
      let valuesOne = document.getElementsByClassName("input5").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input5")[i].style.backgroundColor =
          "green";
      }
      function sendMessage() {
        // alert("PARABENS JOGOS FINALIZADOS");
        // window.location.reload(true);
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
      s26.value !== palavraSorteada[0] &&
      s27.value !== palavraSorteada[1] &&
      s28.value !== palavraSorteada[2] &&
      s29.value !== palavraSorteada[3] &&
      s30.value !== palavraSorteada[4]
    ) {
      let valuesOne = document.getElementsByClassName("input6").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input6")[i].style.backgroundColor =
          "red";
      }
      console.log("errou");
      setTimeout(sendMessage, 1000);
    } else {
      let valuesOne = document.getElementsByClassName("input6").length;
      for (let i = 0; i < valuesOne; i++) {
        document.getElementsByClassName("input6")[i].style.backgroundColor =
          "green";
      }
      console.log("acertou");
    }
  }

  function verificarLine() {
    const valuesLine1 = document.getElementsByClassName("input1");
    const valuesLine2 = document.getElementsByClassName("input2");
    const valuesLine3 = document.getElementsByClassName("input3");
    const valuesLine4 = document.getElementsByClassName("input4");
    const valuesLine5 = document.getElementsByClassName("input5");
    const valuesLine6 = document.getElementsByClassName("input6");

    document.addEventListener("keydown", (event) => {
      var letra = event.key;
      if (letra === "Enter") {
        contador = contador + 1;
        switch (contador) {
          case 1:
            for (let i = 0; i < valuesLine1.length; i++) {
              if (valuesLine1[i] !== undefined) {
                if (!onFunction) {
                  firstLine();
                  onFunction = true;
                }
              }
            }

            break;
          case 2:
            for (let i = 0; i < valuesLine2.length; i++) {
              if (valuesLine2[i] !== null || undefined) {
                secondLine();
              }
            }

            break;

          case 3:
            for (let i = 0; i < valuesLine3.length; i++) {
              if (valuesLine3[i] !== null || undefined) {
                terceiraLine();
              }
            }

            break;

          case 4:
            for (let i = 0; i < valuesLine4.length; i++) {
              if (valuesLine4[i] !== null || undefined) {
                quartaLine();
              }
            }

            break;

          case 5:
            for (let i = 0; i < valuesLine5.length; i++) {
              if (valuesLine5[i] !== null || undefined) {
                quintaLine();
              }
            }

            break;

          case 6:
            for (let i = 0; i < valuesLine6.length; i++) {
              if (valuesLine6[i] !== null || undefined) {
                sextaLine();
              }
            }
            break;

          default:
            break;
        }
      }
    });
  }
};

export default App;
