class Clothes {
  id: number;
  codProd: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoIvaEsclusa: number;
  prezzoIvaInclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codProd: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoIvaEsclusa: number,
    _prezzoIvaInclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codProd = _codProd;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
    this.prezzoIvaInclusa = _prezzoIvaInclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }

  getSaldoCapo(): number {
    return this.prezzoIvaInclusa * (this.saldo / 100);
  }

  getAcquistoCapo(): number {
    return this.prezzoIvaInclusa - this.getSaldoCapo();
  }
}

const apiUrl = "https://mocki.io/v1/513abb31-db68-4b50-93d3-865ea73f06aa";

const getClothesData: any = async function () {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);

    let counter = 1;
    data.forEach((element: any) => {
      const clothes = new Clothes(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );

      console.log(`
      Capo ${counter++}: ${
        clothes.capo.charAt(0).toUpperCase() + clothes.capo.substring(1)
      }
      Prezzo pieno:  ${clothes.prezzoIvaInclusa.toFixed(2)}
      Prezzo scontato:  ${clothes.getAcquistoCapo().toFixed(2)}
      Sconto: ${clothes.saldo}%
      `);
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

getClothesData();
