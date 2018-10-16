export class Customer {

    constructor(private id: number) { }

    fooBar(): string {
        const self = this;
        const callback1 = function() {
            return 'Die ID ist ' + self.id;
        }

        const callback2 = () => `!!
Die ID ist ${this.id}!!`;
        
        return callback2();
    }

    myMethod(arg: string | number) {
        if (typeof arg === 'number') {
            return arg.toString();
        }

        return arg;
    }
}