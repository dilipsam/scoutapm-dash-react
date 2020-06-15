import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    height: '240px',
                    sparkline: {
                        enabled: false,
                    },
                    dropShadow: {
                        enabled: false,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.35
                    }
                },
                legend: {
                    fontSize: '24px',
                    showForSingleSeries: true

                },
                stroke: {
                    curve: 'smooth',
                    width: [
                        2, 4, 4
                    ]
                },
                plotOptions: {
                    bar: {
                        columnWidth: '33%'
                    },
                },
                fill: {
                    type: ['gradient', "solid", 'gradient'],
                    gradient: {
                        shade: 'dark',
                        enabled: true,
                        shadeIntensity: 0.7,
                        opacityTo: 0,
                        type: "vertical",
                        stops: [10, 40]
                    }
                },
                xaxis: {
                    type: "datetime",
                },
                yaxis: [
                    {
                        series: 'errors',
                        show: false,
                        forceNiceScale: true
                    },
                    {
                        series: 'throughput',
                        show: false,
                        forceNiceScale: true
                    },
                    {
                        series: 'response_time',
                        show: false,
                        forceNiceScale: true
                    }],
                colors: ["#ff8321", "#d4335d", "#00BAEC"],
                grid: {
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    }
                }
            }


        };
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        this.state.options.title = {
            text: this.props.name,
            floating: true,
            align: 'center',
            offsetY: 120,
            style: {
                fontSize:  '72px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#263238'
            },
        };
        return <ReactApexChart options={this.state.options} series={this.props.metrics} type="line" height={350}/>

    }
}

export default Chart;
