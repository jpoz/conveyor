class RelativeTimeComponent extends HTMLElement {
	connectedCallback(): void {
		this.parseAndFormatDate();
	}

	parseAndFormatDate(): void {
		const dateStr: string = this.innerHTML.trim();
		const date: Date = new Date(dateStr);
		if (isNaN(date.getTime())) {
			console.error('Invalid date:', dateStr);
			return;
		}

		// Set the full date as the title attribute for the tooltip
		this.title = date.toLocaleString();

		const relativeTime: string = this.getRelativeTime(date);
		this.innerHTML = relativeTime;
	}

	getRelativeTime(date: Date): string {
		const now: Date = new Date();
		const seconds: number = Math.round((now.getTime() - date.getTime()) / 1000);
		const minutes: number = Math.round(seconds / 60);
		const hours: number = Math.round(minutes / 60);
		const days: number = Math.round(hours / 24);

		if (hours < -24) {
			return `in ${Math.abs(days)} days`;
		} else if (minutes < -60) {
			return `in ${Math.abs(hours)} hours`;
		} else if (seconds < -60) {
			return `in ${Math.abs(minutes)} minutes`;
		} else if (seconds < 0) {
			return `in ${Math.abs(seconds)} seconds`;
		} else if (seconds < 60) {
			return 'now';
		} else if (minutes < 60) {
			return `${minutes} minutes ago`;
		} else if (hours < 24) {
			return `${hours} hours ago`;
		} else if (days < 7) {
			return `${days} days ago`;
		} else {
			return date.toLocaleDateString();
		}
	}
}

customElements.define('relative-time', RelativeTimeComponent);
