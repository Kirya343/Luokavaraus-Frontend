export const Equipment = {
    PROJECTOR: "Projektori",
    COMPUTER: "Tietokoneet",
    WHITEBOARD: "Valkotaulu",
    AUDIO: "Äänentoisto",
    DOCUMENT_CAMERA: "Dokumenttikamera",
    LAB_EQUIPMENT: "Laboratoriovälineet",
    SINK: "Pesuallas",
    FUME_HOOD: "Vetokaappi",
    DARKENING: "Pimennysverhot",
    ELECTRICAL_OUTLETS: "Lisäpistorasiat",
    MOVABLE_TABLES: "Siirrettävät pöydät",
    FLEXIBLE_SEATING: "Muunneltava istumajärjestys"
} as const;

export type Equipment = typeof Equipment[keyof typeof Equipment];