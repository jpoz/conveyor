(() => {
  // hub/src/main.ts
  var RelativeTimeComponent = class extends HTMLElement {
    connectedCallback() {
      this.parseAndFormatDate();
    }
    parseAndFormatDate() {
      let dateStr = this.innerHTML.trim(), date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        console.error("Invalid date:", dateStr);
        return;
      }
      this.title = date.toLocaleString();
      let relativeTime = this.getRelativeTime(date);
      this.innerHTML = relativeTime;
    }
    getRelativeTime(date) {
      let seconds = Math.round(((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 1e3), minutes = Math.round(seconds / 60), hours = Math.round(minutes / 60), days = Math.round(hours / 24);
      return hours < -24 ? `in ${Math.abs(days)} days` : minutes < -60 ? `in ${Math.abs(hours)} hours` : seconds < -60 ? `in ${Math.abs(minutes)} minutes` : seconds < 0 ? `in ${Math.abs(seconds)} seconds` : seconds < 60 ? "now" : minutes < 60 ? `${minutes} minutes ago` : hours < 24 ? `${hours} hours ago` : days < 7 ? `${days} days ago` : date.toLocaleDateString();
    }
  };
  customElements.define("relative-time", RelativeTimeComponent);
})();
//# sourceMappingURL=main.js.map
