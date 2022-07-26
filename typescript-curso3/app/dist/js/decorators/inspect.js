export function inspect(target, propetyKey, descriptor) {
    const meotodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propetyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno = meotodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
