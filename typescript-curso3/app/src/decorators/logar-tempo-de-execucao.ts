export function logarTempoDeExecucao() {
	return function (
		target: any, // Construtor ou prototype da classe
		propetyKey: string,
		descriptor: PropertyDescriptor
	) {
		const meotodoOriginal = descriptor.value; // Guardar metodo original
		descriptor.value = function (...args: any[]) { // Sobrescrever o comportamento
			const t1 = performance.now();
			const retorno = meotodoOriginal.apply(this, args); // Chamar o método original
			const t2 = performance.now();
			console.log(`${propetyKey}, tempo de execução: ${(t2 - t1) / 1000}`); // Retorno em Segundos
			retorno
		};

		return descriptor;
	}
}