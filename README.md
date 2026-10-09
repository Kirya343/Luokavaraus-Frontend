# Luokavaraus – Frontend

Luokavaraus on web-sovellus, jonka avulla käyttäjät voivat etsiä ja varata vapaita luokkahuoneita ja oppimistiloja. Sovelluksen frontend on toteutettu Reactilla ja TypeScriptillä.

## Teknologiat

* React 19
* TypeScript
* Vite
* React Router
* Axios
* SCSS
* ESLint

## Vaatimukset

Projektin suorittamiseen tarvitaan:

* Node.js

Tarkista asennetut versiot:

```bash
node --version
```

## Asennus

Kloonaa projekti ja siirry projektikansioon:

```bash
git clone <repository-url>
cd Luokavaraus
```

Asenna riippuvuudet:

```bash
npm install
```

Luo projektin juureen `.env`-tiedosto ja määritä tarvittavat ympäristömuuttujat.

## Kehitysympäristö

Käynnistä Vite-kehityspalvelin:

```bash
npm run dev
```

Sovellus on tämän jälkeen käytettävissä Viten ilmoittamassa osoitteessa.

## Tuotantoversion rakentaminen

Luo tuotantoversio komennolla:

```bash
npm run build
```

Rakennettu sovellus sijoitetaan `dist`-kansioon.

Tuotantoversion voi testata paikallisesti:

```bash
yarn preview
```

## Komennot

| Komento        | Kuvaus                                             |
| -------------- | -------------------------------------------------- |
| `npm run dev`     | Käynnistää kehityspalvelimen                       |
| `npm run build`   | Tarkistaa TypeScriptin ja rakentaa tuotantoversion |
| `npm run lint`    | Suorittaa ESLint-tarkistuksen                      |
| `npm run preview` | Käynnistää tuotantoversion esikatselun             |

## Sivut

Sovelluksessa on tällä hetkellä seuraavat pääsivut:

| Reitti      | Sivu              | Kuvaus                                      |
| ----------- | ----------------- | ------------------------------------------- |
| `/`         | Etusivu           | Sovelluksen etusivu ja luokkien perustiedot |
| `/reserve`  | Varaus            | Vapaiden luokkien etsiminen ja varaaminen   |
| `/login`    | Kirjautuminen     | Käyttäjän kirjautuminen                     |
| `/register` | Rekisteröityminen | Uuden käyttäjätilin luominen                |

## Projektirakenne

Keskeinen lähdekoodin rakenne:

```text
src/
├── components/
│   ├── layout/
│   └── ui/
├── pages/
│   ├── HomePage/
│   ├── ReservationPage/
│   └── auth/
│       ├── LoginPage/
│       └── RegisterPage/
├── AppRouter.tsx
└── ...
```

`pages` sisältää sovelluksen eri sivut ja `components` käyttöliittymän uudelleenkäytettävät komponentit.

## Luokkahuoneiden varaaminen

Varaussivun tarkoituksena on auttaa käyttäjää löytämään sopiva vapaa luokkahuone tai oppimistila.

Luokkahuoneilla voi olla esimerkiksi seuraavia ominaisuuksia:

* tilan enimmäishenkilömäärä
* käytettävissä olevat välineet
* vapaat ajat
* koulu tai oppilaitos

Varusteluun voi kuulua esimerkiksi:

* projektori
* tietokone
* valkotaulu
* äänentoisto

## Arkkitehtuuri

Frontend käyttää REST APIa backend-palvelun kanssa kommunikointiin. HTTP-pyynnöt toteutetaan Axiosilla.

Reititys toteutetaan `react-router-dom`-kirjastolla ja sovelluksen yhteinen ulkoasu määritellään `RootLayout`-komponentissa.

Tyylit toteutetaan SCSS:n avulla, ja komponenttikohtaisia tyylejä voidaan kapseloida SCSS-moduuleihin.

## Kehitys

Projektissa käytetään TypeScriptiä tyypityksen varmistamiseen ja ESLintiä koodin laadun tarkistamiseen.

Ennen muutosten julkaisemista voidaan suorittaa:

```bash
npm run build
```

Näin voidaan varmistaa, että koodi läpäisee lint-tarkistukset ja projekti kääntyy onnistuneesti.

Toimi osoitessa http://185.176.94.192:30010/
