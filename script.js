// Data do casamento
const casamento = new Date("September 20, 2026 16:00:00").getTime();

setInterval(() => {

    const agora = new Date().getTime();

    const distancia = casamento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

},1000);
