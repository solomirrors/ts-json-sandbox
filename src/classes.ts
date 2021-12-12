class Vehicle {
    constructor(public color: string) {}


    public drive() : void {
        console.log(`I'm driving`);
    }
    public stop() : void{
        console.log(`I've stopped!`)
    }

    protected beep() : void {
        console.log('Beeep!')
    }
}

class Car extends Vehicle{
    constructor(public wheels: number, color: string) {
        super(color)
    }
    public drive() : void{
        console.log(`I'm a car I'm drive`)
    }
    startDrivingProcess() : void {
        this.drive();
    }
}

export {Vehicle, Car};