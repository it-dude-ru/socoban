export class Layer {
	constructor(container) {
		// Создаём новый элемент Canvas
		this.canvas = document.createElement('canvas');
		// Доступ к инструментам 2д графики
		this.context = this.canvas.getContext('2d');
		// Размещаем элемент на странице
		container.appendChild(this.canvas);
		
		this.fitToContainer(this.canvas);
		addEventListener('resize', () => this.fitToContainer(this.canvas));
	}
	// Подгоняет размер Canvas к размеру контейнера
	fitToContainer(cnv) {
		cnv.width = cnv.offsetWidth;
		cnv.height = cnv.offsetHeight;
	}
}