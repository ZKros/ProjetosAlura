export function inspect(   // Decorator que não recebe parâmetro
	target: any,
	propetyKey: string,
	descriptor: PropertyDescriptor
) {
	const meotodoOriginal = descriptor.value;
	descriptor.value = function (...args: any[]) {
		console.log(`--- Método ${propetyKey}`)
		console.log(`------ Parâmetros: ${JSON.stringify(args)}`)
		const retorno = meotodoOriginal.apply(this, args);
		console.log(`------ retorno: ${JSON.stringify(retorno)}`)
		return retorno;
	}

	return descriptor;
}
