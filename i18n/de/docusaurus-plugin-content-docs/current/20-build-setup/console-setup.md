---
sidebar_position: 20 
title: Console Setup
---

# SpoolEase Console Setup Anleitung

## Übersicht

Nach dem Zusammenbau der SpoolEase-Console müssen Sie sie für Ihren 3D-Drucker einrichten. Folgen Sie diesen einfachen Schritten, um den Vorgang abzuschließen.

### Was Sie benötigen

- **WiFi-Zugangsdaten** (Netzwerkname/SSID und Passwort) für ein Netzwerk, das Zugriff auf den 3D-Drucker hat.
- **Drucker-Seriennummer** ([Finden Sie sie im Bambu Wiki](https://wiki.bambulab.com/en/general/find-sn)).
- **Drucker-Zugangscode** ([Finden Sie ihn im Bambu Wiki](https://wiki.bambulab.com/en/knowledge-sharing/enable-lan-mode)) – kein Wechsel in den LAN-Modus nötig, sehen Sie nur, wo der Zugangscode am Drucker angezeigt wird.

### Einrichtungsschritte

1. **Firmware auf das Gerät flashen**
2. **WiFi-Einstellungen konfigurieren**
3. **Druckerinformationen eingeben**
4. (Optional) **Weitere Einstellungen konfigurieren** (hier derzeit nicht beschrieben)

> **Haftungsausschluss**: Der Einrichtungsprozess wird noch verfeinert, daher können Probleme auftreten. Wenn etwas nicht funktioniert, versuchen Sie es erneut oder erkunden Sie alternative Schritte. Das gehört zum Early-Adopter-Erlebnis! 🙂

---

## Firmware flashen

Der einfachste Weg, die Firmware zu flashen, ist über Chrome oder Edge (andere Browser werden nicht unterstützt).

1. Verbinden Sie das Gerät mit Ihrem Computer über ein USB-C-Kabel.
2. Besuchen Sie [https://www.spoolease.io/console.html#firmware](https://www.spoolease.io/console.html#firmware).
3. Drücken Sie „New Install“ bei der Version, die Sie installieren möchten (empfohlen wird, mit der „Current Version“ zu beginnen).
4. Wählen Sie den richtigen Port aus (kann „JTag“ im Namen enthalten) und klicken Sie auf **Connect**.
5. Ein Dialog mit dem Titel "SpoolEase" sollte erscheinen. Klicken Sie auf **Install SpoolEase** und bestätigen Sie mit **Install**.
6. Das Gerät löscht alte Daten (Anzeige „Erasing“) und installiert dann die neue Firmware (zeigt Fortschritt). Dies kann einige Minuten dauern.
7. Nach Abschluss der Installation startet das Gerät neu. Sie sehen im Browser die Meldung „Installation complete!“ und Anweisungen zur WiFi-Einrichtung auf dem Gerätebildschirm.
8. Es gibt nun zwei Möglichkeiten, WiFi zu konfigurieren. Wenn Ihr Netzwerk dort erreichbar ist, wo Sie die Firmware installiert haben, folgen Sie dem Abschnitt **WiFi-Setup – Einfache Methode**. Andernfalls springen Sie zu **Alternative WiFi-Einrichtung**.

---

## WiFi einrichten – Einfache Methode

> **Wenn Probleme auftreten, versuchen Sie es erneut, indem Sie** [http://www.spoolease.io/console.html#firmware](http://www.spoolease.io/console.html#firmware) **besuchen und erneut „New Install“ klicken.**

1. Drücken Sie **Next** im Dialog „Installation complete!“. Dies öffnet den Bildschirm **Configure WiFi**.
2. Wählen Sie Ihr WiFi-Netzwerk oder geben Sie es manuell ein, dann geben Sie Ihr WiFi-Passwort ein.
3. Drücken Sie **Connect**.
4. Nach erfolgreicher Verbindung wechselt der **Gerätebildschirm** zu einer Terminalansicht. Wenn es aufhört zu scrollen, wird eine IP-Adresse angezeigt (es stoppt, weil Druckerinformationen fehlen).
5. Ein Bestätigungsdialog erscheint im Browser, der angibt, dass das Gerät verbunden ist. Klicken Sie auf **Visit Device**, um die Konfigurationsanwendung zu öffnen.

---

## Druckerinformationen einrichten – Einfache Methode

7. Wischen Sie auf dem Gerät zweimal nach unten, um zum Bildschirm mit den Konfigurationsanweisungen zu gelangen. Sie benötigen nur den auf diesem Bildschirm angezeigten Sicherheitscode.
8. Geben Sie den **Sicherheitscode** vom Gerätebildschirm im Browser ein und klicken Sie auf **Verify Key**. Die Meldung „Security Key Validated“ sollte erscheinen.
9. Im Abschnitt **Printer Settings** geben Sie die **Drucker-Seriennummer** und den **Zugangscode** ein. Optional können Sie die **Drucker-IP-Adresse** eingeben (nur für erweiterte Netzwerkeinstellungen erforderlich).
10. Klicken Sie auf **Apply**. Eine Bestätigung sollte erscheinen, dass die Einstellungen erfolgreich angewendet wurden.
11. Starten Sie das Gerät über den Browser neu, indem Sie **Restart Device** drücken.
12. Nach dem Neustart sollte SpoolEase die Hauptoberfläche anzeigen, wenn der Drucker online ist.

**Glückwunsch! Die Einrichtung ist abgeschlossen.**

---

## Alternative WiFi-Einrichtung

> **Verwenden Sie dies, wenn das einfache WiFi-Setup fehlschlägt.**

1. Starten Sie das Gerät neu, indem Sie die USB-Stromversorgung trennen und wieder anschließen, falls keine Anweisungen erscheinen.
2. Verbinden Sie sich mit dem WiFi-Netzwerk **"SpoolEase"**.
   - Auf mobilen Geräten warten Sie einige Momente; das Gerät kann automatisch eine Setup-Seite wie bei Airport-WiFi öffnen.
   - Falls nicht, rufen Sie die auf dem Gerät angezeigte IP-URL in Ihrem Browser auf (achten Sie darauf, **http**, nicht **https** zu verwenden).
3. Geben Sie den Sicherheitscode vom Gerätebildschirm ein und drücken Sie **Verify Key**.
4. Geben Sie Ihre WiFi-Zugangsdaten ein und drücken Sie **Apply**.
5. Nach Bestätigung starten Sie das Gerät über die **Restart Device**-Schaltfläche neu.

Nach dem Neustart zeigt der Terminalbildschirm eine IP-Adresse an, was auf eine erfolgreiche WiFi-Einrichtung hinweist.

Möglicherweise tritt auch ein Fehler wegen einer fehlenden SD-Karte auf. Eine SD-Karte ist nicht erforderlich; sie wird nur für spezielle alternative Konfigurationsmethoden unterstützt.

---

## Alternative Einrichtung der Druckerinformationen

1. Starten Sie das Gerät nach der WiFi-Einrichtung neu.
2. Wischen Sie zweimal auf dem Terminalbildschirm nach unten, um die Schaltfläche **Enable Web Config** zu erreichen.
3. Klicken Sie auf **Enable Web Config**.
4. Öffnen Sie auf einem Gerät, das mit demselben Netzwerk verbunden ist, einen Browser und geben Sie die IP-URL des Geräts ein (achten Sie auf **http**, nicht **https**).
5. Geben Sie den Sicherheitscode vom Gerätebildschirm ein und drücken Sie **Verify Key**.
6. Geben Sie in **Printer Settings** ein:
   - **Drucker-Seriennummer**
   - **Drucker-Zugangscode**
   - (Optional) **Drucker-IP-Adresse** (nur für komplexe Netzwerke)
7. Klicken Sie auf **Apply**. Eine Erfolgsmeldung sollte erscheinen.
8. Drücken Sie **Disable Web Config**, gefolgt von **Restart Device**.

Nach dem Neustart sollte der AMS-Status Ihres Druckers angezeigt werden.

**Glückwunsch! Sie haben die SpoolEase-Einrichtung abgeschlossen. Ihr Gerät ist jetzt bereit zur Nutzung mit Ihrem 3D-Drucker.**
