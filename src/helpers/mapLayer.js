// BLANCO Y NEGRO (Grisaseo) + LABELS
export const CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

export const layersTile = [
	{
		url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
	},{
		url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
	},{
		url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
	},{
		url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
	}
]