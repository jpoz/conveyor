class StackedBarChart extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	async fetchData(url: string) {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	async render() {
		const url = this.getAttribute('data-url');
		if (!url) {
			console.error('Missing data-url attribute');
			return;
		}
		const data = await this.fetchData(url);

		const initialOptions = {
			chart: {
				height: 300,
				type: 'bar',
				stacked: true
			},
			xaxis: {
				type: 'datetime',
			},
		};

		const options = deepMerge(initialOptions, data);

		const chartDiv = document.createElement('div');
		this.appendChild(chartDiv);

		const chart = new ApexCharts(chartDiv, options);
		chart.render();
	}
}

customElements.define('stacked-bar-chart', StackedBarChart);

function deepMerge(target: any, source: any): any {
	for (const key of Object.keys(source)) {
		if (source[key] instanceof Object && key in target) {
			Object.assign(source[key], deepMerge(target[key], source[key]));
		}
	}

	// Combine both objects into the target
	return Object.assign(target || {}, source);
}
