# ☕ Airbean Admin – Individuell uppgift

I denna **individuella del av examinationen** ska du bygga vidare på Airbean-API:t. Denna gång är det dags att skapa ett **admin-gränssnitt för att hantera kaffemenyn**.

Fokus ligger på backend – **ingen frontend** ska byggas.

---

## 🧩 Uppgiften

Du ska bygga tre skyddade endpoints där en admin kan:

- **Lägga till** en ny produkt i menyn
- **Uppdatera** en befintlig produkt
- **Ta bort** en produkt från menyn

Menyn ska hanteras i en **egen databas** och arbetet ska ske i ett **eget repo**. Du kan använda er befintliga gruppkod som grund, eller välja att börja om med den bifogade startkoden.

---

## 🛠️ Praktiskt

- Skapa ett **eget nytt GitHub-repo** för din individuella kod.
- Kopiera in din tilldelade kod i ditt repo och utgå ifrån den. Vilken mapp i repot du skall kopiera hittar du längre ner.
- Skapa en **egen MongoDB-databas** (du får alltså inte använda gruppens).
- Skapa en **menu/products-collection** och lägg in menyn manuellt via MongoDB Compass.
- Dokumentationen från del 1 har uppdaterats och den [hittar ni här](https://gist.github.com/Santosnr6/82cb658f21006799767cea1f1f90fd53). 3 nya endpoints har lagts till.
- Dokumentationen innehåller dessutom ett antal kompletteringsuppgifter från tidigare år. Dessa är frivilliga att göra om man vill fylla ut veckan med mer arbete.
- Ge **läraren**:
    - Network Access till din databas (IP: `2.248.92.11`)
    - Din **Connection String** både för Compass och Drivers – skriv dem i en **kommentar i din inlämning** (lägg även in kontouppgifterna för den användare ni skapar åt mig). (Se till att fixa deta då jag inte kommer påminna er, missar ni blir det komplettering)
- Använd **MYSECRET** som namn på din hemliga nyckel i `.env` för tokens

## 📥 Tilldelning

- airbean_one
    - Martin, Konrad, Alexander, Sara
- airbean_two
    - Sughra, Leo, Vincent, Per
- airbean_three
    - Boss, Lisa, Feras, Jonathan
- airbean_four
    - Minna, Elias, Oliver

---

## ✅ Krav för Godkänt

- ### ➕ Lägga till ny produkt
    - Endpoint ska acceptera ett objekt i `req.body` med följande egenskaper: `title`, `desc`, `price`.
    - Alla egenskaper måste finnas med
    - Lägg till `prodId` och `createdAt` när en produkt skapas

- ### ✏️ Uppdatera produkt
    - Uppdatera valfri befintlig produkt
    - Lägg automatiskt till ett fält `modifiedAt` med aktuell tid

- ### ❌ Ta bort produkt
    - Produkten ska tas bort om den finns
    - Om produkten inte finns ska ett tydligt felmeddelande returneras

- ### 🔐 Skyddade endpoints
    - Alla tre endpoints ska vara skyddade av en **admin-middleware**
    - Kontrollera att användaren är inloggad och har rollen `"admin"`

- ### ⚠️ Felhantering
    - Fel (t.ex. ogiltiga fält, obehörig användare, icke-existerande produkt) ska returnera **relevanta felmeddelanden**

- ### 📘 Swagger
    - Skapa **Swagger-dokumentation** för dina tre nya endpoints

---

## 🌟 VG-krav

### 🔒 Säkerhet

- Använd **lösenordskryptering** med t.ex. `bcrypt` vid inloggning och registrering
- Använd **auth tokens** (t.ex. JWT) för att verifiera användare och skydda endpoints
- För VG ska du **inte** använda `global.user` och du kommer därför behöva skriva om delar av koden från gruppexaminationen

---

## 📥 Inlämning

Ladda upp din kod i ett **eget repo** och lämna in **länken på Azomo** senast:  
🗓️ **Fredag 12/6 kl 23:59**

Din inlämning ska innehålla:

- Ditt repo
- Connection Strings (för Compass & Drivers) som kommentar till inlämningen

---
