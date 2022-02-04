import { Poslanik } from "./Poslanik.js";
import { Stranka } from "./Stranka.js";

export class Skupstina {

    constructor() {
        this.predsednik = 'Milos Milosevic'
        this.spisakStranki = new Map()
    }

    promeniPredsednika(predsednik) {
        this.predsednik = predsednik
    }

    dodajStranku(nazivStranke, stranka) {
        this.spisakStranki.set(nazivStranke, stranka)
    }

    vratiBrojStranaka() {
        return this.spisakStranki.size
    }

    izbaciStranku(stranka) {
        this.spisakStranki.delete(stranka)
    }

    odstampajSvakiJmbg() {
        let poslaniciPodaci = this.spisakStranki.entries()
        const jmbgs = []
        for(const [key, value] of poslaniciPodaci) {
            for (let poslanik of value.dajNizPoslanika()) {
                if(!this.proveriDaLiVrednostPostojiUNizu(jmbgs, poslanik.jmbg)) {
                    jmbgs.push(poslanik.jmbg)
                }
            }
        }
        const count = jmbgs.length
        let randomArray = []
        for(let i = 0; i < count; i++) {
            const rand = Math.floor( Math.random() * jmbgs.length );
            randomArray.push(jmbgs.splice(rand, 1))
        }
        return randomArray
    }

    proveriDaLiVrednostPostojiUNizu(array, vrednost) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] === vrednost) {
                return true
            }
        }
        return false
    }

    strankaSaNajmanjimBrojemMesta() {
        let strankaPodaci = this.spisakStranki.entries()
        const[[key, value]] = strankaPodaci
        let minimum = value.brojPoslanika()
        let trazeneStranke = []
        for(const [key, value] of this.spisakStranki.entries()) {
            if(value.brojPoslanika() === minimum) {
                trazeneStranke.push(key)
            } else if(value.brojPoslanika() < minimum) {
                minimum = value.brojPoslanika()
                trazeneStranke = []
                trazeneStranke.push(key)
            }
        }
        if(trazeneStranke.length === 1) {
            return `Stranka sa najmanjim brojem mesta je ${trazeneStranke}`
        } else {
            return `Stranke sa najmanjim brojem mesta su:\n${trazeneStranke.join('\n')}`
        }
    }

    pronadjiTrazenuRec(rec) {
        const poslaniciSaSlicnimImenom = []
        for(const [key, value] of this.spisakStranki) {
            for (let poslanik of value.dajNizPoslanika()) {
                if((`${poslanik.preuzmiIme()}`).includes(`${rec}`)) {
                    poslaniciSaSlicnimImenom.push(`${poslanik.preuzmiIme()}`)
                }
            }
        }
        return poslaniciSaSlicnimImenom
    }
}

const skupstina = new Skupstina()

const stranka1 = new Stranka('BCB')
const stranka2 = new Stranka('ZZZ')
const stranka3 = new Stranka('MNM')
const poslanik1 = new Poslanik('Petar Petric', '1234567891231', '51')
const poslanik2 = new Poslanik('Jovan Jovanovic', '1234797291231', '55')
const poslanik3 = new Poslanik('David Davidovic', '2934397698221', '49')
const poslanik4 = new Poslanik('Jovan Jovanovic', '1334797771291', '67')
const poslanik5 = new Poslanik('Zoran Zoranovic', '3023172234156', '39')
const poslanik6 = new Poslanik('Ivana Ivanovic', '1113595620001', '51')
const poslanik7 = new Poslanik('Milos Ivanovic', '1014497456790', '71')
stranka1.dodajPoslanika(poslanik1)
stranka1.dodajPoslanika(poslanik5)
stranka1.dodajPoslanika(poslanik2)
stranka2.dodajPoslanika(poslanik4)
stranka2.dodajPoslanika(poslanik3)
stranka2.dodajPoslanika(poslanik3)
stranka3.dodajPoslanika(poslanik6)
stranka3.dodajPoslanika(poslanik7)
// stranka3.dodajPoslanika(poslanik7)


skupstina.dodajStranku('BCB', stranka1)
skupstina.dodajStranku('ZZZ', stranka2)
skupstina.dodajStranku('MNM', stranka3)

// console.log(skupstina.spisakStranki)
// console.log(skupstina.spisakStranki.entries())

// skupstina.izbaciStranku('BCB')

// console.log(skupstina.odstampajSvakiJmbg())

// console.log(skupstina.strankaSaNajmanjimBrojemMesta())

console.log(skupstina.pronadjiTrazenuRec('Milos'))



