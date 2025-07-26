document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reserva-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = form.querySelector('input[type=\"text\"]').value;
  const telefono = form.querySelector('input[type=\"tel\"]').value;
  const ubicacion = form.querySelector('input[placeholder*=\"Ubicación\"]').value;
  const servicio = form.querySelector('select').value;
  const fecha = form.querySelector('input[type=\"date\"]').value;
  const comentario = form.querySelector('textarea').value;

  const mensaje = encodeURIComponent(
    `¡Hola! Quiero reservar un servicio:\n\n👤 Nombre: ${nombre}\n📞 Teléfono: ${telefono}\n📍 Ubicación: ${ubicacion}\n🛠️ Servicio: ${servicio}\n📅 Fecha: ${fecha}\n💬 Comentario: ${comentario}`
  );

  window.open(`https://wa.me/59897431589?text=${mensaje}`, '_blank');
});

      alert("Gracias por tu reserva. Nos contactaremos a la brevedad.");
      form.reset();
    });
  }
});
