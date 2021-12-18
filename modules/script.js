import { Layer } from './layer.js'

/**
 * 
 * 
 */
class App {
	constructor(container) {
		this.layer = new Layer(container);
	}
}

// Just comment
// ! Better comment
// ? Best comment
/**
 * 
 */
onload = () => {
	new App(document.querySelector('body'));
}
