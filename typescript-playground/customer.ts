export class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    fooBar(): string {
        const self = this;
        const callback1 = function() {
            return 'Die ID ist ' + self.id;
        }

        const callback2 = () => `!!
Die ID ist ${this.id}!!`;
        
        return callback2();
    }
}