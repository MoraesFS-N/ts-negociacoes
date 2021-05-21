// app/ts/helpers/decorators/throttle.ts

export function throttle(milissegundos = 1000) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        
        let timer = 0;
        
        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault() 
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }
        
        return descriptor;
    }
}