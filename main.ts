import { Serie } from './Serie.js';
import { series } from './dataSerie.js';

let seriesTbody = document.getElementById('series-body')!;
let promedioElm = document.getElementById('promedio')!;
let detailDiv = document.getElementById('series-detail')!;

renderSeries(series);
promedioElm.innerHTML = `${calcularPromedio(series)}`;

function renderSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${serie.id}</td>
            <td class="series-link">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tr.onclick = () => showDetail(serie);

        seriesTbody.appendChild(tr);
    });
}

function showDetail(serie: Serie): void {
    detailDiv.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank">${serie.link}</a>
            </div>
        </div>
    `;
    console.log("IMAGEN",serie.image);
}

function calcularPromedio(series: Serie[]): number {
    let total = 0;
    series.forEach(s => total += s.seasons);
    return total / series.length;
}