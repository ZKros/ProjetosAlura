export function logarTempoDeExecucao() {
    return function (target, propetyKey, descriptor) {
        const meotodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = meotodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propetyKey}, tempo de execução: ${(t2 - t1) / 1000}`);
            retorno;
        };
        return descriptor;
    };
}
