const apiKey = "32a918ccfb931cf74e3466284a79c79e";
const ville = "Valence,fr";

async function getMeteo() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    const meteo = data.weather[0].main.toLowerCase();
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;

    document.getElementById("temperature").textContent = `${temp} °C`;
    document.getElementById("description").textContent = description;

    const img = document.getElementById("meteo-img");
    if (meteo.includes("cloud")) img.src = "images/nuage.gif";
    else if (meteo.includes("rain")) img.src = "images/pluie.gif";
    else if (meteo.includes("snow")) img.src = "images/neige.gif";
    else img.src = "images/soleil.gif";

  } catch (e) {
    document.getElementById("description").textContent = "Erreur";
  }
}

getMeteo();
