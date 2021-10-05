import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value); // evento.target.value es el valor del input
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value); // evento.target.value es el valor del input 2
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value); // evento.target.value es el valor del select
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      {/*  Select picker de memes  */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smartguy">Smart Guy</option>
      </select>
      <br />
      {/* // Input text - Primer linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      {/* // Input text - Segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      {/* // Boton exportar */}
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="Imagen no cargada" />
      </div>
    </div>
  );
}

export default App;
