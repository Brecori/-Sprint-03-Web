let firstChart = document.getElementById('chartCrescimentoRobotica').getContext('2d')
let secondChart = document.getElementById('chartPocas').getContext('2d')
let fontSize

function screenDetection() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        fontSize = 8
    } else {
        fontSize = 18
    }
}


let chartCrescRob = new Chart(firstChart, {
    type: 'line',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'MTI',
                data: [111, 114, 113, 60, 121, 166, 159, 178, 221, 254, 294, 381],
                backgroundColor: ['rgba(138, 252, 85)'],
                borderColor: ['rgba(138, 252, 85)'],
                borderWidth: 1
            },
            {
                label: 'Investing Brasil',
                data: [104, 116, 150, 173, 208, 186, 293, 284, 314, 354, 408, 430],
                backgroundColor: ['rgba(67, 165, 67)'],
                borderColor: ['rgba(67, 165, 67)'],
                borderWidth: 1
            },
            {
                label: 'Frontliner',
                data: [97, 124, 176, 154, 196, 214, 258, 287, 390, 420, 498, 553],
                backgroundColor: ['rgba(41, 90, 56)'],
                borderColor: ['rgba(41, 90, 56)'],
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: fontSize
                    }
                }
            }
        }
    }
});

let chartCrescPocas = new Chart(secondChart, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'Vendas Totais',
                data: [420, 428, 437, 446, 468, 491, 516, 542, 585, 632, 682, 737, 811, 892, 981, 1128, 1297, 1492],
                backgroundColor: ['rgba(138, 252, 85)'],
                borderColor: ['rgba(138, 252, 85)'],
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: fontSize
                    }
                }
            }
        }
    }
});