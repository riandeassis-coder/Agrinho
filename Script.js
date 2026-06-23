function calcularEconomia() {
    const cultura = document.getElementById('cultura').value;
    const area = parseFloat(document.getElementById('area').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(area) || area <= 0) {
        alert("Por favor, insira uma área válida.");
        return;
    }

    // Simulando um cálculo de economia baseado em técnicas sustentáveis (ex: gotejamento)
    let litrosEconomizadosPorHectare = 0;

    if (cultura === 'milho') litrosEconomizadosPorHectare = 1500;
    if (cultura === 'tomate') litrosEconomizadosPorHectare = 2500;
    if (cultura === 'folhosas') litrosEconomizadosPorHectare = 1800;

    let totalEconomizado = litrosEconomizadosPorHectare * area;

    // Exibindo o resultado na tela
    resultadoDiv.className = "sucesso";
    resultadoDiv.innerHTML = `
        <h3>Resultado da Simulação:</h3>
        <p>Adotando técnicas de irrigação localizada na sua plantação de <strong>${cultura}</strong>, você pode economizar cerca de <strong>${totalEconomizado} litros</strong> de água por ciclo completo!</p>
    `;
}