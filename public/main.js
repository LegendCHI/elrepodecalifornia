// BOTÓN DISCORD
document.getElementById("discord-login").addEventListener("click", () => {
  window.location.href = "/auth/discord";
});

// SIMULACIÓN LOGIN OK (cuando vuelvas del backend)
if (window.location.search.includes("logged=true")) {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/session", { credentials: "include" })
    .then(res => res.json())
    .then(data => {
      const splash = document.getElementById("splash");
      if (data.logged) {
        splash.style.display = "none";
      } else {
        splash.style.display = "flex";
      }
    })
    .catch(() => {
      document.getElementById("splash").style.display = "flex";
    });
});
// NAVEGACIÓN
document.querySelectorAll(".sidebar nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;

    document.querySelectorAll(".section").forEach(s =>
      s.classList.remove("active")
    );

    document.getElementById(section).classList.add("active");
  });
});
