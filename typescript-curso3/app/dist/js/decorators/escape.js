export function espape(target, propertyKey, descriptor) {
    const meotodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = meotodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
