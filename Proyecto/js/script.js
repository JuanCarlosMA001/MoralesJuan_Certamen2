let solicitudes = [];

function registrarSolicitud() {
  let nombre = document.getElementById("nombre").value.trim();

  let correo = document.getElementById("correo").value.trim();

  let telefono = document.getElementById("telefono").value.trim();

  let producto = document.getElementById("producto").value;

  let comentarios = document.getElementById("comentarios").value.trim();

  let mensaje = document.getElementById("mensaje");

  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    producto === "" ||
    comentarios === ""
  ) {
    mensaje.innerHTML = "⚠ Debe completar todos los campos.";

    mensaje.className = "error";

    return;
  }

  if (!correo.includes("@")) {
    mensaje.innerHTML = "Correo electrónico inválido.";

    mensaje.className = "error";

    return;
  }
  let solicitud = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    producto: producto,
    comentarios: comentarios,
  };

  solicitudes.push(solicitud);

  mensaje.innerHTML = "Solicitud registrada correctamente.";

  mensaje.className = "exito";

  mostrarSolicitudes();

  limpiarFormulario();
}

function mostrarSolicitudes() {
  let tabla = document.getElementById("tablaSolicitudes");

  tabla.innerHTML = "";

  solicitudes.forEach((solicitud, indice) => {
    tabla.innerHTML += `
        <tr>
            <td>${indice + 1}</td>
            <td>${solicitud.nombre}</td>
            <td>${solicitud.area}</td>
            <td>${solicitud.tipo}</td>
        </tr>
        `;
  });
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("producto").value = "";
  document.getElementById("comentarios").value = "";
}