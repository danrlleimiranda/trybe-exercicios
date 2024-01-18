class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo: string | undefined;

    constructor (brand: string,
        size: number,
        resolution: string,
        connections: string[],) {

            this.brand = brand
            this.size = size
            this.resolution = resolution
            this.connections = connections
    }

    turnOn () {
        console.log(this.brand, this.size, this.resolution, this.connections)
    }
}


const newTv = new Tv('Semp Toshiba', 42, 'Full HD', ['HDMI', 'Internet']);

newTv.turnOn();