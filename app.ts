import inquirer from 'inquirer'


class Player {
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel =this.fuel -10
        this.fuel=fuel;
    }
}

class Opponent {
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel =this.fuel -10
        this.fuel=fuel;
    }
}

let player = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])

let opponet=await inquirer.prompt ([
    {
        type: 'list',
        name: 'select',
        message: 'Select Your Opponent',
        choices:['King','Paul','Lee']
    }
])

let p1 = new Player(player.name)

let p2 = new Opponent(opponet.select

)

do{
    //King
    if (opponet.select == 'King'){
        let ask = await inquirer.prompt([
            {
                name:'opt',
                type: 'list',
                message: 'What do you want to do?',
                choices:['Attack','Surrender']
            }
        ]);
        if (ask.opt == 'Attack'){
            let num = Math.floor(Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p1.fuel <=0 ){
                    console.log(`${p1.name} has lost`);
                    console.log(`${p2.name} has won`);
                    process.exit()
                }
            }
            if(num<= 0)  {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p2.fuel <=0 ){
                    console.log(`${p2.name} has lost`);
                    console.log(`${p1.name} has won`);
                    process.exit()
                }
            }   
        }
        if (ask.opt == 'Surrender'){
            console.log(`${p1.name} has surrendered`);
            console.log(`${p2.name} has won`);
            process.exit()
        }

    }

    //Paul
    if (opponet.select == 'Paul'){
        let ask = await inquirer.prompt([
            {
                name:'opt',
                type: 'list',
                message: 'What do you want to do?',
                choices:['Attack','Surrender']
            }
        ]);
        if (ask.opt == 'Attack'){
            let num = Math.floor(Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p1.fuel <=0 ){
                    console.log(`${p1.name} has lost`);
                    console.log(`${p2.name} has won`);
                    process.exit()
                }
            }
            if(num<= 0)  {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p2.fuel <=0 ){
                    console.log(`${p2.name} has lost`);
                    console.log(`${p1.name} has won`);
                    process.exit()
                }
            }   
        }
        if (ask.opt == 'Surrender'){
            console.log(`${p1.name} has surrendered`);
            console.log(`${p2.name} has won`);
            process.exit()
        }

    }

    //Lee
    if (opponet.select == 'Lee'){
        let ask = await inquirer.prompt([
            {
                name:'opt',
                type: 'list',
                message: 'What do you want to do?',
                choices:['Attack','Surrender']
            }
        ]);
        if (ask.opt == 'Attack'){
            let num = Math.floor(Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p1.fuel <=0 ){
                    console.log(`${p1.name} has lost`);
                    console.log(`${p2.name} has won`);
                    process.exit()
                }
            }
            if(num<= 0)  {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if (p2.fuel <=0 ){
                    console.log(`${p2.name} has lost`);
                    console.log(`${p1.name} has won`);
                    process.exit()
                }
            }   
        }
        if (ask.opt == 'Surrender'){
            console.log(`${p1.name} has surrendered`);
            console.log(`${p2.name} has won`);
            process.exit()
        }

    }
}
while(true)