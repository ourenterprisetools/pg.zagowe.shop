document.addEventListener("DOMContentLoaded", function() {

	const cbQueryString = window.location.search;
	const cbUrlParams = new URLSearchParams(cbQueryString);
	const pageParam = cbUrlParams.get('pg'); // URL parameter
	const customParam = cbUrlParams.get('custom'); // Digistore24 URL parameter
	const afidParam = cbUrlParams.get('afid'); // Cartpanda parameter
	const links = document.querySelectorAll('.buylink'); // Buy Button class (must have on all buy buttons)
	const copyb = document.querySelectorAll("#copyb"); // Copy Black
	const copyw = document.querySelectorAll("#copyw"); // Copy White
	const hiddenContent = document.querySelectorAll(".esconder"); // Hidden Content
	const bodyClassList = document.body.classList;
	
	if (pageParam == 'cyb' || (customParam && customParam.includes('cyb')) || ['vsl', 'dtc', 'ecom', 'home'].includes(document.body.id)) {

		// Toggle visibility of Copies
		if (copyb) {
			copyb.forEach(e => e.style.display = "block");
			copyw.forEach(e => e.style.display = "none");
		}
		
		// Hides content when the Copy Black is shown
		if (hiddenContent) hiddenContent.forEach(e => e.style.display = "none");

		// Replicate pg parameter on all Buy Buttons with .buylink
		links.forEach(link => {
			if (link instanceof HTMLAnchorElement) {
				const url = new URL(link.href);
				url.searchParams.set('pg', 'cyb');
				link.href = url.toString();
			}
		});
	} else {
		copyb.forEach(e => e.remove());
	}

	if (bodyClassList.contains('cartpanda') && afidParam) {

		// Atualiza os links com pg=cyb
		links.forEach(link => {
			if (link instanceof HTMLAnchorElement) {
				const url = new URL(link.href);
				url.searchParams.set('pg', 'cyb');
				link.href = url.toString();
			}
		});

		const url = new URL(window.location.href);
		if (!url.searchParams.has('pg')) {
			url.searchParams.set('pg', 'cyb');
			window.location.replace(url.toString());
		}

		copyb.forEach(e => e.style.display = "block");
		copyw.forEach(e => e.style.display = "none");

		if (hiddenContent) hiddenContent.forEach(e => e.style.display = "none");
	}

});