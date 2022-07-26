export function logarTempoDeExecucao(emSegundos: boolean = false) {
	return function (
		target: any, // Construtor ou prototype da classe
		propetyKey: string,
		descriptor: PropertyDescriptor
	) {
		const meotodoOriginal = descriptor.value; // Guardar metodo original
		descriptor.value = function (...args: any[]) { // Sobrescrever o comportamento
			let divisor = 1;
			let unidade = 'milisegundos';
			if (emSegundos) {
				divisor = 1000;
				unidade = 'segundos';
			}
			
			const t1 = performance.now();
			const retorno = meotodoOriginal.apply(this, args); // Chamar o método original
			const t2 = performance.now();
			console.log(`${propetyKey}, tempo de execução: ${(t2 - t1) /divisor} ${unidade}`); // Retorno em Segundos
			retorno
		};

		return descriptor;
	}
}