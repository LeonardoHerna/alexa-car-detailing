document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reserva-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const ubicacion = form.querySelector('input[placeholder*="Ubicación"]').value;
    const servicio = form.querySelector('select').value;
    const fecha = form.querySelector('input[type="date"]').value;
    const comentario = form.querySelector('textarea').value;

    console.log({ nombre, telefono, ubicacion, servicio, fecha, comentario });

    const mensaje = encodeURIComponent(
      `¡Hola! Quiero reservar un servicio:\n\n👤 Nombre: ${nombre}\n📞 Teléfono: ${telefono}\n📍 Ubicación: ${ubicacion}\n🛠️ Servicio: ${servicio}\n📅 Fecha: ${fecha}\n💬 Comentario: ${comentario}`
    );

    const numeroWhatsApp = "59897431589";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');

    form.reset();
  });
});
