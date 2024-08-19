import ApexCharts from 'apexcharts'
import './relative.ts'
import './charts.ts'

declare global {
	interface Window {
		ApexCharts: typeof ApexCharts;
		Apex: any;
	}
}

window.ApexCharts = ApexCharts

window.Apex = {
	chart: {
		foreColor: '#ccc',
		toolbar: {
			show: false
		},
	},
	stroke: {
		width: 3
	},
	dataLabels: {
		enabled: false
	},
	tooltip: {
		theme: 'dark'
	},
	grid: {
		borderColor: "#535A6C",
		xaxis: {
			lines: {
				show: false
			}
		},
		yaxis: {
			lines: {
				show: false
			}
		}
	}
};
