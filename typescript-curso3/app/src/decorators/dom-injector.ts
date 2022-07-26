export function domInject(seletor: string) { // Decorator de Propriedade - Pega elementos do DOM 
	return function (target: any, propertyKey: string) {

		let elemento: HTMLElement;
		const getter = function () {
			if (!elemento) {
				elemento = document.querySelector(seletor) as HTMLInputElement;
			}
			return elemento;
		}

		Object.defineProperty(
			target,
			propertyKey,
			{ get: getter }
		);
	}
}