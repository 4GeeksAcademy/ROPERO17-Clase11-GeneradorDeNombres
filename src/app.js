/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombres = ["the", "our", "my", "her"];
  let adjetivos = ["great", "big", "cute", "quiet"];
  let sustantivos = ["jogger", "racoon", "cat", "dog"];

  let oraciones = [];

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        let oracion = `${pronombre}${adjetivo}${sustantivo}.com`;
        oraciones.push(oracion);
      }
    }
  }
  oraciones.forEach(oracion => console.log(oracion));
};
