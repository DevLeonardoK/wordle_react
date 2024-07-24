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

const App = () => {
  const palavras = ["arroz", "carro", "farol"];
  let sorteio = Math.floor(Math.random() * palavras.length); //valor unico ate recarregar
  const palavraSorteada = palavras[sorteio].split("");

  function firstLine() {
    var s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");
    // const total = [s1.value, s2.value, s3.value, s4.value, s5.value];

    if (s1.value === palavraSorteada[0]) {
      s1.style.backgroundColor = "green";
    } else if (palavraSorteada.includes(s1.value)) {
      s1.style.backgroundColor = "yellow";
    } else {
      s1.style.backgroundColor = "red";
    }
    console.log(palavraSorteada);
  }

  return (
    <>
      <div className="Container" style={styleBackgroundContainer}>
        <h1 className="title" style={styleTitle}>
          TERMO
        </h1>
        <button onClick={firstLine} style={styleRow}>
          apertar
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
