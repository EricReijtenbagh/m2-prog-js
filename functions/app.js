class App {
    runApplication() {
        this.mario();

    }

    mario() {
        let mario = "MARIO!!";
        console.log(mario);
    }
}


class App2 {
    runApplication(){
        this.bwahaha();
    }

    bwahaha() {
        let bwahaha = "BWAHAHAHA!!!";
        return console.log(bwahaha);
    }
}

class rekenen {
    runApplication(){
        this.getallen();
    }

        getallen(){
            let getal1 = 6;
            let getal2 = 100;
            var rekenen=getal1-getal2;
            console.log(rekenen);
        }
}



let app = new App();
app.runApplication();
let app2 = new App2();
app2.runApplication();
let Rekenen = new rekenen();
Rekenen.runApplication();