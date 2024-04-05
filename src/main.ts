// Generos //
const Pop_Rock = "🎵 Pop Rock";
const Rock = "🎸 Rock";
const Hard_Rock = "🤘 Hard Rock";
const Clasica = "🎼 Clásica";

// Interfaces //
interface Grupos {
  Nombre: string;
  Fundacion: number;
  Activo: boolean;
  Genero: string;
}

// Estilos //
const EstiloNombre =
  "background-color:green; font-size:32px; font-style: blond; font-weight: 700; padding: 1rem";

// Grupos //
const Thebeatles: Grupos = {
  Nombre: "The Beatles",
  Fundacion: 1960,
  Activo: true,
  Genero: Pop_Rock,
};

const Queen: Grupos = {
  Nombre: "Queen",
  Fundacion: 1970,
  Activo: false,
  Genero: Rock,
};

const ACDC: Grupos = {
  Nombre: "AC DC",
  Fundacion: 1973,
  Activo: true,
  Genero: Hard_Rock,
};

const Beethoven: Grupos = {
  Nombre: "Ludwig van Beethoven",
  Fundacion: 1770,
  Activo: false,
  Genero: Clasica,
};

const Rolling_Stones: Grupos = {
  Nombre: "The Rolling Stones",
  Fundacion: 1962,
  Activo: true,
  Genero: Rock,
};

// Funciones //
function Grupos_Musicales(
  idNombre: string,
  idAño: number,
  idActividad: boolean,
  idGenero: string
) {
  console.log("%c" + idNombre, EstiloNombre);
  console.log(`Año de fundación: ${idAño}`);
  console.log(`Activo: ${idActividad}`);
  console.log(`Genero musical: ${idGenero}`);
}
// Consola //
Grupos_Musicales("The Beatles", 1960, true, Pop_Rock);
console.log(Thebeatles);
Grupos_Musicales("Queen", 1970, false, Rock);
console.log(Queen);
Grupos_Musicales("AC DC", 1973, true, Hard_Rock);
console.log(ACDC);
Grupos_Musicales("Ludwig van Beethoven", 1770, false, Clasica);
console.log(Beethoven);
Grupos_Musicales("The Rolling Stones", 1962, true, Rock);
console.log(Rolling_Stones);
