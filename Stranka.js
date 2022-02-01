import { Poslanik } from "./Poslanik.js";

export class Stranka {

    constructor(ime) {
        this.ime = ime
        // this.program = program
        this.maksimalanBrojMesta = 100
        this.poslanici = []
    }

    dodajPoslanika(poslanik) {
        if((this.maksimalanBrojMesta - this.poslanici.length) >= 1) {
            this.poslanici.push(poslanik)
        } else{
            console.log('U paralmentu nema mesta za nove poslanike!')
        }
    }

    infoPoslanici() {
        let string = ''
        for(let n = 0; n < this.poslanici.length; n++) {
            string += `${this.poslanici[n].poslanikInfo()}\n\n`
        }
        return string
    }

    filterPoslanik(redniBroj, brojGodina) {
        if(this.poslanici[redniBroj - 1].godine > brojGodina) {
            return this.poslanici[redniBroj - 1].poslanikInfo()
        } else {
            return 'Ne postoji poslanik koji ispunjava zadate kriterijume!'
        }
    }

    vratiMladjegPoslanika(brojGodina) {
        let array = []
        let i = 0;
        while(i < this.poslanici.length) {
            if(this.poslanici[i].godine < brojGodina) {
                array.push(this.poslanici[i])
            }
            i++
        }
        return array
    }

    dajNizPoslanika() {
        return this.poslanici
    }

    brojPoslanika() {
        return this.poslanici.length
    }

}

const poslanik1 = new Poslanik('Jovan Jovanovic', '1234797291231', '55')
const poslanik2 = new Poslanik('David Davidovic', '2934397698221', '49')
const poslanik3 = new Poslanik('Jovan Jovanovic', '1334797771291', '67')

const stranka = new Stranka('ASD')
stranka.dodajPoslanika(poslanik1)
stranka.dodajPoslanika(poslanik2)
stranka.dodajPoslanika(poslanik3)

// console.log(stranka.infoPoslanici())

// console.log(stranka.filterPoslanik(3, 65))

// console.log(stranka.vratiMladjegPoslanika(55))

