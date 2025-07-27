document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reserva-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { nombre, telefono, ubicacion, servicio, fecha, comentario } = form;
    console.log({
      nombre: nombre.value,
      telefono: telefono.value,
      ubicacion: ubicacion.value,
      servicio: servicio.value,
      fecha: fecha.value,
      comentario: comentario.value
    });

    const mensaje = encodeURIComponent(
      `¡Hola! Quiero reservar un servicio:\n\n` +
      `👤 Nombre: ${nombre.value}\n📞 Teléfono: ${telefono.value}\n📍 Ubicación: ${ubicacion.value}\n` +
      `🛠️ Servicio: ${servicio.value}\n📅 Fecha: ${fecha.value}\n💬 Comentario: ${comentario.value}`
    );
    const numeroWhatsApp = "59897431589";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
    form.reset();
  });
});

