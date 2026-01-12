AOS.init();
const DataDoEvento = new Date("Feb 17, 2026 19:00:00");
const timeStampDoEvento = DataDoEvento.getTime();
const contaTime = setInterval(function() {
    const momentoAtual = new Date();
    const timeStampDoMomento = momentoAtual.getTime();
    const distanciaAteEvento = timeStampDoEvento - timeStampDoMomento;
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaAteEvento % diasEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteEvento % minutosEmMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m e ${segundosAteOEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contaTime);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);

//# sourceMappingURL=turne_event.f75de5e1.js.map
