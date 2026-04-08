import { Serie } from './Serie.js';
import { series } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('series-body')!;
let promedioElm: HTMLElement = document.getElementById('promedio')!;

renderSeries(series);
promedioElm.innerHTML = `Seasons average: ${calcularPromedio(series)}`;

function renderSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTbody.appendChild(trElement);
    });
}

function calcularPromedio(series: Serie[]): number {
    let total = 0;
    series.forEach(s => total += s.seasons);
    return total / series.length;
}