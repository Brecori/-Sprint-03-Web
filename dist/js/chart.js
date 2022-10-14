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
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13','14','15','16','17','18'],
        datasets: [
            {
                label: 'Vendas totais em função de meses de operações',
                data: [42489, 46457, 50550, 54772, 62090, 69899, 80981, 98673, 122384, 128767, 164243, 172853, 227322, 259568, 295991, 340389, 529855, 768501],

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