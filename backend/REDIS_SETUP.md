# Redis Setup für Refresh Token Storage

## Übersicht
Diese Implementierung ersetzt die Datenbank-basierte Speicherung von Refresh Tokens durch Redis. Dies bietet bessere Performance und automatische TTL-Verwaltung.

## Änderungen

### 1. Dependencies hinzugefügt
- `redis`: Redis Client für Node.js
- `@types/redis`: TypeScript Types für Redis

### 2. Neue Module erstellt
- `RedisModule`: NestJS Modul für Redis-Integration
- `RedisService`: Service für Redis-Operationen

### 3. AuthService aktualisiert
- Refresh Token werden jetzt in Redis gespeichert
- TTL von 7 Tagen für automatische Ablaufzeit
- Entfernung der Datenbank-basierten `refreshTokenHash` Spalte

### 4. User Entity bereinigt
- `refreshTokenHash` Feld entfernt (nicht mehr benötigt)

### 5. Docker Compose erweitert
- Redis Service hinzugefügt
- Persistente Daten mit Volume

## Installation

### 1. Dependencies installieren
```bash
cd backend
npm install
```

### 2. Umgebungsvariablen setzen
Fügen Sie zu Ihrer `.env` Datei hinzu:
```env
REDIS_URL=redis://localhost:6379
```

### 3. Docker Compose starten
```bash
docker-compose up -d
```

## Vorteile der Redis-Implementierung

1. **Performance**: Redis ist deutlich schneller als Datenbankabfragen
2. **TTL**: Automatische Ablaufzeit ohne manuelle Bereinigung
3. **Skalierbarkeit**: Redis kann horizontal skaliert werden
4. **Speicher**: Weniger Speicherverbrauch als Datenbank-Spalten
5. **Sicherheit**: Tokens werden automatisch nach TTL gelöscht

## Migration von bestehenden Daten

Wenn Sie bereits Refresh Tokens in der Datenbank haben:

1. **Backup erstellen** der bestehenden Daten
2. **Migration ausführen** um `refreshTokenHash` Spalte zu entfernen
3. **Benutzer neu anmelden** lassen (Refresh Tokens werden automatisch in Redis gespeichert)

## Redis-Konfiguration

### Standard-Konfiguration
- **Host**: localhost
- **Port**: 6379
- **TTL**: 7 Tage (604800 Sekunden)

### Produktions-Konfiguration
Für Produktion sollten Sie:
- Redis mit Passwort schützen
- SSL/TLS verwenden
- Redis Cluster für Hochverfügbarkeit

## Überwachung

### Redis CLI
```bash
# Verbindung zu Redis
docker exec -it eventhub_redis redis-cli

# Alle Keys anzeigen
KEYS *

# Refresh Token für User anzeigen
GET refresh_token:USER_ID

# TTL für Key anzeigen
TTL refresh_token:USER_ID
```

### Logs überwachen
```bash
# Redis Logs
docker logs eventhub_redis

# Backend Logs
docker logs eventhub_backend
```

## Fehlerbehebung

### Redis-Verbindung fehlgeschlagen
1. Überprüfen Sie, ob Redis läuft: `docker ps`
2. Überprüfen Sie die REDIS_URL in der .env
3. Überprüfen Sie die Netzwerk-Konfiguration

### Refresh Token nicht gefunden
1. Überprüfen Sie die TTL: `TTL refresh_token:USER_ID`
2. Überprüfen Sie die Redis-Logs
3. Überprüfen Sie die Backend-Logs

## Rollback

Falls ein Rollback erforderlich ist:

1. **Docker Compose stoppen**
2. **Redis Service entfernen** aus docker-compose.yml
3. **User Entity wiederherstellen** mit `refreshTokenHash` Feld
4. **AuthService zurücksetzen** auf Datenbank-basierte Implementierung
5. **Dependencies entfernen** (redis, @types/redis)
