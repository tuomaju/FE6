# WebPer6

## Aloitus
1. Lataa tämä repo zippinä https://github.com/ilkkamtk/WebPer6 ja pura se

### Tehtävä: kuvan zoomaus canvas elementillä
* Sovelluksen ominaisuudet
  1. Käyttäjän valitsema kuva näytetään canvas elementissä
  2. Käyttäjä voi zoomata ja liikutella kuvaa slidereiden avulla
    * ks. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
    * Canvasin sisältöä muuttaessa se tulee ensin 'resetoida' [clearRect-metodilla](https://www.w3schools.com/tags/canvas_clearrect.asp)
    * Muutos voidaan tehdä canvas.scale() -metodilla, mutta aluksi on helpompi lähteä liikkeelle canvas.drawImage() -metodilla
    * Pisteytys:
      * 2p: kuvaa voi zoomata ja liikuttaa 
      * 3p: edellinen + kuvan mittasuhteet ovat oikeat
      * 4p: edellinen + kuva zoomautuu kuvan keskipisteen suhteen vasemman yläreunan sijaan
      * 6p: edellinen + kuvan liikuttelu tehdään tarttumalla hiirellä, ja zoomaus tapahtuu hiiren rullalla# FE6
