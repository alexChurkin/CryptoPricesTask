import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
} from "chart.js";
import currencyFormatter from '../../helpers/currencyFormatter';

let arr = Array.apply(null, Array(168)).map(function () { return ''; });
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const CoinChart = ({ chartData }) => {

    const formatter = currencyFormatter("usd");

    let data = {
        labels: [...arr],
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#15d163',
                borderColor: '#15d163',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#15d163",
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: chartData
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        return formatter.format(value);
                    }
                }
            }
        }
    }

    return <Line options={options} data={data} />;
}

export default CoinChart;