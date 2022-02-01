export class Poslanik {

    constructor(imePrezime, jmbg, godine) {
        this.imePrezime = imePrezime
        this.jmbg = jmbg
        this.godine = godine
    }

    poslanikInfo() {
        let info = `Poslanik: ${this.imePrezime}\nMaticni broj: ${this.jmbg}\nStarost: ${this.godine}`
        return info
    }

    preuzmiIme() {
        return this.imePrezime
    }
}

const poslanik = new Poslanik('Petar Petric', '1234567891231', '51')
// console.log(poslanik.poslanikInfo())


