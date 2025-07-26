document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reserva-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por tu reserva. Nos contactaremos a la brevedad.");
      form.reset();
    });
  }
});
