import process from "process";

let hello = process.argv[2];
const options = [hello];
function saludar(options: Array<string>) {
  if (options[0] === undefined) {
    console.log("ingresa la opcion requerida");
  }
  if (options[0] === "--greet") {
    console.log("Hola Mundo");
  }
}

saludar(options);
