const dataEvento = new Date('jun 22,2024,19:00:00');
const TimeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval( function() {
    const agora = new Date();
    const  timesStampAtual = agora.getTime();
    const distanciaEvento = TimeStampEvento - timesStampAtual;

  const diasEmMS = 1000 * 60 * 60 * 24;
  const horaEmMS = 1000 * 60 * 60;
  const minutoEmMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diasEmMS);
    const horaAteEvento = Math.floor(distanciaEvento % diasEmMS / horaEmMS);
    const minutoAteEvento = Math.floor((distanciaEvento % horaEmMS) / minutoEmMS);
    const segundosAteEvendo = Math.floor((distanciaEvento % minutoEmMS) / 1000); 

  console.log(diasAteEvento)
  console.log(horaAteEvento)
  console.log(minutoAteEvento)
  console.log(segundosAteEvendo)

  document.querySelector('.contador').innerHTML = `${diasAteEvento}d ${horaAteEvento}h ${minutoAteEvento}m ${segundosAteEvendo}s `

},1000)