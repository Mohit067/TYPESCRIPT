class Get {
    private _radius: number;

    constructor(radius: number){
        this._radius = radius;
    }

    get radius(): number{ 
        return this._radius; 
    }
    
    set radius(value: number) {
        if(value <= 0){
            throw new Error("Radius must be greater than zero.");
        } else {
            this._radius = value;
        }
    }
}

const gett = new Get(3);
console.log(gett.radius);
gett.radius = 4;//take radius like a property
console.log(gett.radius);