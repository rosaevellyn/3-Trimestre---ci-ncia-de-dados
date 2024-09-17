import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede () {
    const url = 'https://raw.githubusercontent.com/evellynyasmin/api/main/numero-usuario'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bgcolor'),
        title: {
            text: 'Redes sociais com mais uuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: 'Nome das redes',
            font: {
                color: getCSS('--secondary-colo')
            }
        }

