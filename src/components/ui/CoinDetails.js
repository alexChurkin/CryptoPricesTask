import { Line } from 'react-chartjs-2';
import styles from './CoinDetails.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

let arr = Array.apply(null, Array(168)).map(function () { return ''; });

const CoinDetails = ({ coin, currency }) => {

    console.log("Coin: ");
    console.log(coin);

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
                data: coin?.market_data?.sparkline_7d?.price
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return `${value} $`;
                    }
                }
            }
        }
    }

    return (
        <>
            <div className={`d-flex flex-row align-items-center ${styles.h50px}`}>
                <div className={`me-3`}>
                    <span className={`display-6 ${styles.textCenterVertical}`}>{coin?.name}</span>
                </div>
                <img className={`my-auto`} src={coin?.image?.small} alt={coin?.name} />
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center mt-3">

                <div className={styles.chart}>
                    <span>Динамика за 7 дней:</span>
                    <Line
                        options={options}
                        data={data} />
                </div >
            </div>
        </>
    );
}

export default CoinDetails;