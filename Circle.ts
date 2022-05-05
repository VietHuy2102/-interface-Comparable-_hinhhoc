export class Circle{
    protected radius:number;

    constructor(radius:number) {
        this.radius = radius;
    }
    public getRadius():number{
        return this.radius;
    }
    public setRadius(radius : number):void{
        this.radius = radius
    }
    public tostring():string{
        return `A Cicrle with radius =` + this.getRadius()
    }
}
