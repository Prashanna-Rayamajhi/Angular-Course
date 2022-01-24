export class Recipe{
    public name: string;
    public decription: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.decription = desc;
        this.imagePath = imagePath;
    }
}