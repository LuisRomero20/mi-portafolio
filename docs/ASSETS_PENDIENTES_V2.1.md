# Assets pendientes V2.1

Los elementos listados como pendientes no se sustituyeron por interfaces ficticias. En el sitio aparecen como placeholders conceptuales cuando corresponde.

| Proyecto | Imagen requerida | Dimensión recomendada | Formato | Ruta de destino | Descripción y criterio de privacidad | Estado |
|---|---|---:|---|---|---|---|
| Sales Intelligence | Ninguna obligatoria | — | — | — | La galería ya cuenta con Overview, Quality, Forecast y Architecture. | Completo |
| CaleraReport | Maestro A–W aprobado | 1600 × 900 | WebP o PNG | `src/assets/images/evidence/calera-report/master-a-w-approved.webp` | Usar solo fixtures sintéticos; revisar nombres, RUC, montos, rutas y metadatos. | Pendiente |
| CaleraReport | Dossier 360 sintético | 1600 × 900 | WebP o PNG | `src/assets/images/evidence/calera-report/dossier-360-synthetic.webp` | Mostrar SOLPED → OC → HES → comprobante → MIRO con datos ficticios. | Opcional |
| Viernes AI OS | Home real validado | 1440 × 900 | WebP o PNG | `src/assets/images/evidence/viernes/home-validated.webp` | Solo cuando exista una interfaz reproducible; ocultar agenda, correos y datos personales. | Pendiente |
| Viernes AI OS | Vista móvil real | 390 × 844 | WebP o PNG | `src/assets/images/evidence/viernes/mobile-validated.webp` | No fabricar mockups que parezcan producción. | Pendiente |
| LINKEO | Perfil SaaS end-to-end | 1440 × 900 | WebP o PNG | `src/assets/images/evidence/linkeo/profile-e2e-verified.webp` | Incorporar únicamente cuando backend, autenticación y perfil público funcionen juntos. | Bloqueado por producto |
| Skynet Quant | Capturas HD actuales | 1600 × 900 | WebP | `src/assets/images/evidence/skynet/` | Evitar datos de apuestas o cuentas reales; mantener contexto del experimento. | Recomendado |
| Finanzas Personales | Vista móvil actual | 390 × 844 | WebP | `src/assets/images/evidence/finanzas/mobile-current.webp` | Usar exclusivamente datos ficticios; sin saldos, cuentas, tarjetas ni nombres reales. | Recomendado |

Antes de añadir cualquier asset:

1. abrirlo en una sesión limpia;
2. revisar texto visible y metadatos;
3. confirmar que no contiene sesión, cookie, token ni dato personal;
4. comprimirlo sin deformar la interfaz;
5. añadir `alt`, título y caption en `src/data/projects.js`.
