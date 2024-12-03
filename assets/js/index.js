// index.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js";

// Array para almacenar animales registrados
const animalesRegistrados = [];

// Función para cargar el JSON
const cargarAnimales = async () => {
  try {
    const response = await fetch("./animales.json");
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log("Archivo JSON cargado correctamente:", response);
    return await response.json();
  } catch (error) {
    console.error("Hubo un problema al cargar el archivo JSON:", error);
  }
};

// Función para manejar el registro de animales
const registrarAnimal = async () => {
  const animalSelect = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  if (!animalSelect || !edad || !comentarios) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const { animales } = await cargarAnimales();
  const animalData = animales.find((a) => a.name === animalSelect);

  let animal;
  switch (animalSelect) {
    case "Leon":
      animal = new Leon(
        animalSelect,
        edad,
        comentarios,
        animalData.imagen,
        animalData.sonido
      );
      break;
    case "Lobo":
      animal = new Lobo(
        animalSelect,
        edad,
        comentarios,
        animalData.imagen,
        animalData.sonido
      );
      break;
    case "Oso":
      animal = new Oso(
        animalSelect,
        edad,
        comentarios,
        animalData.imagen,
        animalData.sonido
      );
      break;
    case "Serpiente":
      animal = new Serpiente(
        animalSelect,
        edad,
        comentarios,
        animalData.imagen,
        animalData.sonido
      );
      break;
    case "Aguila":
      animal = new Aguila(
        animalSelect,
        edad,
        comentarios,
        animalData.imagen,
        animalData.sonido
      );
      break;
  }

  animalesRegistrados.push(animal);
  actualizarTabla();
  limpiarFormulario();
};

// Función para actualizar la tabla
const actualizarTabla = () => {
  const contenedor = document.getElementById("Animales");
  contenedor.innerHTML = ""; // Limpiar contenido

  animalesRegistrados.forEach((animal, index) => {
    const card = document.createElement("div");
    card.className = "card m-2";
    card.style.width = "10rem";
    card.innerHTML = `
      <img src="assets/images/${animal.imagen}" class="card-img-top" alt="${animal.nombre}" data-index="${index}">
      <div class="card-body">
        <h5 class="card-title">${animal.nombre}</h5>
        <button class="btn btn-primary btn-audio" data-index="${index}">Sonido</button>
      </div>
    `;
    contenedor.appendChild(card);
  });

  agregarEventos();
};

// Agregar eventos a botones de sonido y modal
const agregarEventos = () => {
  document.querySelectorAll(".btn-audio").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      animalesRegistrados[index].reproducirSonido();
    });
  });

  document.querySelectorAll(".card-img-top").forEach((img) => {
    img.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      mostrarModal(animalesRegistrados[index]);
    });
  });
};

// Mostrar modal con detalles del animal
const mostrarModal = (animal) => {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `
    <h3>${animal.nombre}</h3>
    <p>Edad: ${animal.edad}</p>
    <p>Comentarios: ${animal.comentarios}</p>
    <img src="assets/images/${animal.imagen}" alt="${animal.nombre}" class="img-fluid">
  `;
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
};

// Limpiar formulario
const limpiarFormulario = () => {
  document.getElementById("animal").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("comentarios").value = "";
};

// Evento al registrar animal
document
  .getElementById("btnRegistrar")
  .addEventListener("click", registrarAnimal);
