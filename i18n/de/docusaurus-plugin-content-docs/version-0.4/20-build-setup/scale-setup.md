---
sidebar_position: 30 
title: Scale Setup 
---
# SpooolEase Scale Setup Anleitung

## Überblick

***Wichtig:** 

- SpoolEase Scale erfordert, dass die SpoolEase Console in Version 0.3.0 oder höher installiert ist.
- Die Waage muss über die SpoolEase Console Web-Konfiguration aktiviert werden.
- Stelle SpoolEase Scale und SpoolEase Console nicht zu nah beieinander auf, es wurde beobachtet, dass dies WiFi-Interferenzen verursachen und die Verbindung gelegentlich unterbrechen kann.

Die Einrichtung von SpoolEase Scale sollte mitten im Aufbauprozess beginnen—bevor das Gehäuse geschlossen und die letzten beiden Schrauben installiert werden. Die untenstehenden Anweisungen geben den genauen Punkt an, an dem es am besten ist, den Aufbau zu pausieren und die Einrichtung durchzuführen.

Der Einrichtungsprozess ähnelt dem, den Sie für die SpoolEase Console durchgeführt haben, mit einigen Unterschieden, da SpoolEase Scale kein Display hat.

### Was Sie benötigen

- **WiFi-Zugangsdaten** (Netzwerkname/SSID und Passwort) für ein Netzwerk, das Zugriff auf Ihren 3D-Drucker hat.

### Einrichtungsschritte

1. **Firmware auf das Gerät flashen**
2. **Verbindungseinstellungen konfigurieren**

---

## Firmware flashen

Der einfachste Weg, die Firmware zu flashen, ist über Chrome oder Edge (andere Browser werden nicht unterstützt).

1. Verbinde das SpoolEase Scale-Gerät über ein USB-C-Kabel mit deinem Computer. WICHTIG: Verwende den OBEREN USB-C-Anschluss an SpoolEase Scale. OBERER Anschluss ist, wenn das Board an seinem Platz im 3D-gedruckten Modell positioniert ist, mit den beiden Anschlüssen links und die Pins von dir weg zeigen.
2. Besuche [https://www.spoolease.io/scale.html#firmware](https://www.spoolease.io/scale.html#firmware)
3. Drücke die Schaltfläche „New Install“ für die Version, die du flashen möchtest, unten auf der Seite.
4. Wähle den richtigen Port für das Board aus und klicke auf **Connect**.
5. Ein Dialog mit dem Titel „SpoolEaseScale“ sollte erscheinen. Klicke auf **Install SpoolEaseScale** und bestätige mit **Install**.
6. Das Gerät wird alte Daten löschen (Anzeige „Erasing“) und dann die neue Firmware installieren (zeigt Fortschritt). Dies kann einige Minuten dauern.
7. Nach Abschluss der Installation startet das Gerät neu. Du siehst eine Nachricht „Installation complete!“ im Browser, und die WiFi-Einrichtungsanweisungen folgen.
8. Es gibt nun zwei Möglichkeiten, WiFi zu konfigurieren. Wenn dein Netzwerk dort zugänglich ist, wo du die Firmware installiert hast, folge dem Abschnitt **WiFi Setup - Easy Way**. Andernfalls überspringe zu **Alternative WiFi Setup**.

---

## WiFi einrichten - Der einfache Weg

> **Falls Probleme auftreten, versuche erneut, indem du** [https://www.spoolease.io/scale.html#firmware](https://www.spoolease.io/scale.html#firmware) **besuchst und erneut „New Install“ klickst.**

1. Drücke **Next** im Dialog „Installation complete!“. Dies öffnet den **Configure WiFi** Bildschirm.
2. Wähle dein WiFi-Netzwerk oder gib es manuell ein, dann gib dein WiFi-Passwort ein.
3. Drücke **Connect**.
4. Ein Bestätigungsdialog erscheint im Browser, der besagt, dass das Gerät verbunden ist. Klicke auf **Visit Device**, um die Konfigurationsanwendung zu öffnen.

---

## Zusätzliche Konfiguration einrichten - Der einfache Weg

1. Gib „Change-Me!“ als Sicherheitsschlüssel ein und klicke auf **Verify Key**. Eine Nachricht „Security Key Validated“ sollte erscheinen.
2. Es wird empfohlen, den Sicherheitsschlüssel zu ändern, indem du das Feld „Set a Fixed Key“ ausfüllst und auf „Apply“ klickst.
3. Es wird empfohlen, dem Gerät einen Namen zu geben, damit es im Netzwerk als "_device-name_.local" identifiziert werden kann (dies funktioniert abhängig vom verwendeten Client), anstatt seine IP-Adresse zu verwenden, die schwieriger zu finden wäre.
4. Aktiviere oder deaktiviere die NFC-Modul-Option (die in SpoolEase Scale), je nachdem, ob du es installiert hast (standardmäßig ist es aktiviert).
5. Starte das Gerät über den Browser neu, indem du **Restart Device** drückst.
6. Aktiviere in der SpoolEase Console Web-Konfiguration (nicht zu verwechseln mit der Scale Web-Konfiguration) SpoolEase Scale.
7. Nach dem Neustart blinkt die vordere RGB-LED rot, bis das Gerät eine Verbindung zum Netzwerk herstellt, danach bleibt sie dauerhaft rot, bis die SpoolEase Console eine Verbindung herstellt.

**Glückwunsch! Die Einrichtung ist abgeschlossen.** Bitte überprüfe weiterhin, dass alles ordnungsgemäß funktioniert.

---

## Alternative Einrichtung

> **Verwende dies, falls die einfache WiFi-Einrichtung fehlschlägt.**

1. Starte das Gerät neu, indem du die USB-Stromversorgung trennst und wieder verbindest oder die Reset-Taste am Board drückst.
2. Verbinde dich mit dem WiFi-Netzwerk **„SpoolEaseScale“**.
   - Auf mobilen Geräten, warte einen Moment; das Gerät öffnet möglicherweise automatisch eine Setup-Seite ähnlich wie bei Airport WiFi.
   - Wenn nicht, gehe zu http://192.168.2.1/config.html (Hinweis: http, NICHT https, du musst http eingeben).
3. Gib „Change-Me!“ als Sicherheitsschlüssel ein und klicke auf **Verify Key**. Eine Nachricht „Security Key Validated“ sollte erscheinen.
4. Es wird empfohlen, den Sicherheitsschlüssel zu ändern, indem du das Feld „Set a Fixed Key“ ausfüllst und auf „Apply“ klickst, bevor du die WiFi-Informationen konfigurierst.
5. Fülle die WiFi-Informationen (SSID und Passwort) aus und drücke Apply.
6. Es wird empfohlen, dem Gerät einen Namen zu geben, damit es im Netzwerk als "_device-name_.local" identifiziert werden kann (dies funktioniert abhängig vom verwendeten Client), anstatt seine IP-Adresse zu verwenden, die schwieriger zu finden wäre.
7. Starte das Gerät über den Browser neu, indem du **Restart Device** drückst.
8. Nach dem Neustart blinkt die vordere RGB-LED rot, bis das Gerät eine Verbindung zum Netzwerk herstellt, danach bleibt sie dauerhaft rot, bis die SpoolEase Console eine Verbindung herstellt.

**Glückwunsch! Die Einrichtung ist abgeschlossen.** Bitte überprüfe weiterhin, dass alles ordnungsgemäß funktioniert.

---

## Überprüfung, ob die Wägezelle ordnungsgemäß funktioniert

1. Gehe in der SpoolEase Console auf den Einstellungsbildschirm, indem du vom unteren Bildschirmrand nach oben wischst.
2. Auf Seite 2 drücke „Calibrate Scale“.
3. Auf dem Titel solltest du eine Zahl sehen (negativ oder positiv, egal) – drücke auf die Wägezelle und überprüfe, dass sich diese Zahl ändert.
4. In diesem Stadium drücke nichts anderes auf diesem Bildschirm!

## Überprüfung, ob der NFC-Leser ordnungsgemäß funktioniert

Wenn du das NFC-Modul installiert hast, scanne einen Tag mit SpoolEase Scale, und er sollte in der SpoolEase Console erscheinen, als hättest du ihn dort gescannt.

---

**Glückwunsch! Du hast die SpoolEase-Konnektivität eingerichtet.** 

Aber du bist noch nicht fertig!
Nach Abschluss der Gehäusemontage ist es wichtig, die Waage für genaue Messungen zu kalibrieren.

## Kalibrieren der Waage
Um genaue Gewichtsmessungen zu gewährleisten, muss das System auf deine spezifische Wägezelle kalibriert werden. Diese Kalibrierung muss nur einmal nach Abschluss der Gehäusemontage durchgeführt werden oder wann immer du vermutest, dass die Genauigkeit abgewichen ist.
Befolge diese Schritte zur Kalibrierung:

1. Finde ein Objekt mit einem Gewicht von etwa 750g - 1kg und messe sein genaues Gewicht auf einer vertrauenswürdigen Waage.
2. Gehe in der SpoolEase Console auf den Einstellungsbildschirm, indem du vom unteren Bildschirmrand nach oben wischst.
3. Auf Seite 2 drücke „Calibrate Scale“.
4. Stelle SpoolEase Scale auf eine stabile Fläche ohne Gegenstände, um den Nullpunkt zu bestimmen.
5. Drücke die „Tare“-Taste.
6. Platziere das Kalibrierungsobjekt auf der Waage und warte einige Sekunden, bis die Gewichtsmessung stabil ist.
7. Gib das genaue Gewicht des Objekts in Gramm über das Tastenfeld der SpoolEase Console ein und drücke „Ok“. Der Dialog wird geschlossen.
8. Kehre zum Hauptbildschirm zurück und überprüfe, dass das Gewicht des Objekts genau angezeigt wird (Toleranz ±1g).

## Fehlerbehebung

Falls du einen Fehler beim Eingeben der WiFi-Informationen gemacht hast oder den verwendeten Sicherheitsschlüssel nicht mehr weißt, kannst du die WiFi-Zugangsdaten und den Sicherheitsschlüssel zurücksetzen, indem du die Reset-Taste 5-mal drückst, mit weniger als 5 Sekunden zwischen den Drücken (aber nicht zu schnell).

SpoolEase Scale erkennt diese Sequenz und löscht sowohl die WiFi-Zugangsdaten als auch den Sicherheitsschlüssel.

Du kannst die Informationen dann wie im Abschnitt „Alternative Setup“ beschrieben erneut eingeben.
