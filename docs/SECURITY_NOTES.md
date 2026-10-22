# Security notes (GameServer Pro 1.0.2)

Static analysis only. No runtime exploit guidance.

## Critical: embedded Firebase service-account material

| Item | Detail |
|------|--------|
| Location | `app.asar` → `electron/license.jsc` |
| Evidence | Strings include `FIREBASE_CONFIG`, `project_id`, `client_email`, `private_key`, and PEM markers (`BEGIN PRIVATE KEY`) |
| Project id (observed) | `gameserver-171a8` |
| Client email (observed) | `firebase-adminsdk-fbsvc@gameserver-171a8.iam.gserviceaccount.com` |

**Impact:** Anyone who unpacks the asar can recover admin-style credentials for that Firebase project until the key is revoked/rotated.

**This repository does not include the private key or a usable service-account JSON.**

The author confirmed the key material exists inside the shipped bytecode and chose **not** to redistribute it here.

**Vendor recommendation:** Revoke the exposed key in Google Cloud, issue a new key that is **never** shipped inside the desktop client, and move license validation to a backend that holds secrets server-side.

## Other client-side controls (observed by name)

- HWID binding (`hwid.jsc`, strings such as `hwid_mismatch`, `FALLBACK_HWID`)
- License lifecycle (`activateLicense`, `validateLicense`, `deactivateLicense`, `license_deleted_from_cloud`)
- Anti-tamper / security scan IPC (`antiTamper.jsc`, `security:scan`, `security:fix`)
- Local HTTP API token check strings (`authToken`, `Unauthorized: Invalid Token`)

Presence of these strings does not prove every path is enforced at runtime.
