# Verkaufsseite – Preiskalkulator für Fotograf:innen in Österreich 2026

Statische Seite (reines HTML/CSS, keine Build-Tools, kein JavaScript, keine Cookies, Schrift lokal eingebunden).

## Dateien
- `index.html` – Verkaufsseite (inkl. Abschnitt „Widerrufsrecht & Rückgabe“, Anker `#widerruf`)
- `impressum.html` – Impressum nach § 5 ECG / Offenlegung § 25 MedienG
- `datenschutz.html` – Datenschutzerklärung (GitHub Pages, Digistore24, E-Mail)
- `assets/` – CSS, Bilder, Schrift (Inter, SIL OFL 1.1, siehe `assets/fonts/OFL.txt`)
- `screenshots/` – Kontroll-Screenshots (beim Deploy nicht nötig, kann gelöscht werden)

## Vor dem Veröffentlichen
1. In `impressum.html` die Platzhalter `[TELEFON]` und `[GEWERBE/BEHÖRDE – falls zutreffend]` ersetzen
   (oder den Gewerbe-Block entfernen, falls nicht zutreffend).
2. Den Kauf-Link prüfen: alle Kaufbuttons zeigen auf `https://www.checkout-ds24.com/product/748971`.

## Deploy auf GitHub Pages
1. Auf github.com einloggen → **New repository**, z. B. `preiskalkulator`, Sichtbarkeit **Public**
   (GitHub Pages ist im Gratis-Plan nur für öffentliche Repos verfügbar).
2. Den **Inhalt** dieses Ordners hochladen (nicht den Ordner selbst), sodass `index.html` im Hauptverzeichnis liegt:
   - im Browser: „Add file → Upload files“, alle Dateien/Ordner hineinziehen, „Commit changes“, oder
   - per Git:
     ```bash
     cd verkaufsseite
     git init && git add . && git commit -m "Verkaufsseite"
     git branch -M main
     git remote add origin https://github.com/<BENUTZERNAME>/preiskalkulator.git
     git push -u origin main
     ```
3. Im Repo: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**,
   Branch `main`, Ordner `/ (root)` → **Save**.
4. Nach 1–2 Minuten ist die Seite erreichbar unter `https://<BENUTZERNAME>.github.io/preiskalkulator/`.
5. „Enforce HTTPS“ in Settings → Pages aktiviert lassen.
6. Diese URL bei Digistore24 im Produkt als **Verkaufsseite (Sales Page URL)** eintragen.

## Optional: eigene Domain (z. B. www.picwish-fotodesign.at)
1. Settings → Pages → **Custom domain**: `www.picwish-fotodesign.at` eintragen und speichern (legt eine `CNAME`-Datei an).
2. Bei easyname im DNS einen **CNAME**-Eintrag `www` → `<BENUTZERNAME>.github.io` anlegen.
   Für die Hauptdomain ohne `www` zusätzlich A-Records auf
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Nach der DNS-Verbreitung „Enforce HTTPS“ aktivieren.
   Achtung: Die bestehenden MX-Einträge für das E-Mail-Postfach dürfen dabei nicht verändert werden.
