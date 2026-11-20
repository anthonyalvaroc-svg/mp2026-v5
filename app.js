// Estructura completa de carpetas
const F17_ITEMS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARRAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES. EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES. TECHOS. SOPORTES" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCIÓN", highRes: true },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO." },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE." },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA." },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS. SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "f17_29", name: "29. Fotos de cambio de bateria", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const FORMATOS_ITEMS = [
  { id: "fmt_01", name: "Formatos MP (Fotos y PDFs)", desc: "SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO", allowPdf: true }
];

const MP_ITEMS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLERO INCLUYE TODAS LAS LLAVES" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR 'mils' EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT,ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO LARGO Y ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "mp_23", name: "23. Vistas de las coordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "mp_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO. REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR." }
];

const SECTIONS = [
  { folder: "1. F17-CARPETA DE FOTOS", items: F17_ITEMS },
  { folder: "2. FORMATOS MP", items: FORMATOS_ITEMS },
  { folder: "3. MANTENIMIENTO PREVENTIVO", items: MP_ITEMS }
];

let db;
let currentProject = null;
let currentTab = 0;
let camStream = null;
let activeCamSubId = null;
let activeCamHighRes = false;
let currentGpsText = "GPS: Obteniendo ubicación...";
let currentPlaceText = "";
let viewerItems = [];
let viewerIndex = 0;
let touchStartX = 0;

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ReportesSiteDB", 2);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains("projects")) {
        d.createObjectStore("projects", { keyPath: "id" });
      }
      if (!d.objectStoreNames.contains("files")) {
        const fs = d.createObjectStore("files", { keyPath: "id" });
        fs.createIndex("projectSub", ["projectId", "subId"], { unique: false });
        fs.createIndex("projectId", "projectId", { unique: false });
      }
    };
    req.onsuccess = (e) => { db = e.target.result; resolve(); };
    req.onerror = (e) => reject(e);
  });
}

function showToast(msg, ms = 3200) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, ms);
}

// CRUD Proyectos
async function loadProjects() {
  const tx = db.transaction("projects", "readonly");
  const store = tx.objectStore("projects");
  const req = store.getAll();
  req.onsuccess = () => {
    const list = document.getElementById("projectList");
    const projects = req.result.sort((a, b) => b.createdAt - a.createdAt);
    if (!projects.length) {
      list.innerHTML = '<div class="card" style="text-align:center; color:#64748b;">No hay carpetas creadas aún.</div>';
      return;
    }
    list.innerHTML = projects.map(p => `
      <div class="card project-item">
        <div style="flex:1; cursor:pointer;" onclick="openProject('${p.id}')">
          <div class="project-title">📁 ${escapeHtml(p.name)}</div>
          <div class="project-meta">${new Date(p.createdAt).toLocaleDateString()}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn-primary btn-sm" onclick="openProject('${p.id}')">Abrir</button>
          <button class="btn-danger btn-sm" onclick="deleteProject('${p.id}', '${escapeHtml(p.name)}')">🗑</button>
        </div>
      </div>
    `).join("");
  };
}

function createProject() {
  const input = document.getElementById("newProjectName");
  const name = input.value.trim();
  if (!name) return showToast("Escribe un nombre para la carpeta");
  const proj = { id: "proj_" + Date.now(), name, createdAt: Date.now() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(proj);
  tx.oncomplete = () => {
    input.value = "";
    openProject(proj.id);
  };
}

function deleteProject(id, name) {
  if (!confirm(`¿Seguro que deseas eliminar toda la carpeta "${name}" y todas sus fotos?`)) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const idx = tx.objectStore("files").index("projectId");
  const req = idx.getAllKeys(id);
  req.onsuccess = () => {
    req.result.forEach(k => tx.objectStore("files").delete(k));
  };
  tx.oncomplete = () => {
    loadProjects();
    showToast("Carpeta eliminada");
  };
}

function openProject(id) {
  const tx = db.transaction("projects", "readonly");
  const req = tx.objectStore("projects").get(id);
  req.onsuccess = () => {
    currentProject = req.result;
    document.getElementById("headerTitle").textContent = currentProject.name;
    document.getElementById("editProjectName").value = currentProject.name;
    document.getElementById("btnBack").style.display = "inline-flex";
    document.getElementById("homeView").style.display = "none";
    document.getElementById("projectView").style.display = "block";
    document.getElementById("shareReadyBox").style.display = "none";
    switchTab(0);
  };
}

function goHome() {
  currentProject = null;
  document.getElementById("headerTitle").textContent = "Reportes Site";
  document.getElementById("btnBack").style.display = "none";
  document.getElementById("projectView").style.display = "none";
  document.getElementById("homeView").style.display = "block";
  loadProjects();
}

function renameProject() {
  const newName = document.getElementById("editProjectName").value.trim();
  if (!newName || !currentProject) return;
  currentProject.name = newName;
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put(currentProject);
  tx.oncomplete = () => {
    document.getElementById("headerTitle").textContent = newName;
    showToast("Nombre actualizado");
  };
}

function switchTab(idx) {
  currentTab = idx;
  [0, 1, 2].forEach(i => {
    document.getElementById("tab" + i).classList.toggle("active", i === idx);
  });
  renderSubfolders();
}

async function getFilesForSub(projectId, subId) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("projectSub");
    const req = idx.getAll([projectId, subId]);
    req.onsuccess = () => resolve(req.result || []);
  });
}

async function renderSubfolders() {
  if (!currentProject) return;
  const container = document.getElementById("subfolderList");
  const items = SECTIONS[currentTab].items;
  let html = "";

  for (const item of items) {
    const files = await getFilesForSub(currentProject.id, item.id);
    const badge = files.length
      ? `<span class="badge badge-ok">${files.length} archivo(s)</span>`
      : `<span class="badge badge-empty">Vacía → NO APLICA</span>`;
    const acceptAttr = item.allowPdf ? "image/*,video/*,application/pdf" : "image/*,video/*";

    let thumbsHtml = "";
    if (files.length) {
      thumbsHtml = `<div class="thumb-grid">` + files.map((f, idx) => {
        const url = URL.createObjectURL(f.blob);
        let media = "";
        if (f.type.startsWith("image/")) {
          media = `<img src="${url}" onclick="openViewer('${item.id}', ${idx})" />`;
        } else if (f.type.startsWith("video/")) {
          media = `<video src="${url}" onclick="openViewer('${item.id}', ${idx})"></video>`;
        } else {
          media = `<div class="thumb-pdf" onclick="openViewer('${item.id}', ${idx})">📄 PDF<br>${escapeHtml(f.name.slice(0, 14))}</div>`;
        }
        return `
          <div class="thumb-box">
            ${media}
            <button class="thumb-del" onclick="confirmDeleteFile('${f.id}', '${item.id}', '${escapeHtml(f.name)}')">×</button>
          </div>
        `;
      }).join("") + `</div>`;
    }

    html += `
      <div class="sub-card" id="card_${item.id}">
        <div class="sub-header">
          <div class="sub-title">${escapeHtml(item.name)}</div>
          ${badge}
        </div>
        <div class="sub-desc">${escapeHtml(item.desc)}</div>
        <div class="row">
          <button class="btn-primary btn-sm" style="flex:1;" onclick="openCamera('${item.id}', ${!!item.highRes})">📷 Cámara</button>
          <label class="btn-outline btn-sm" style="flex:1; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:6px; border-radius:8px; font-weight:600; font-size:13px;">
            📁 Subir Galería
            <input type="file" accept="${acceptAttr}" multiple style="display:none;" onchange="handleFileUpload(event, '${item.id}', ${!!item.highRes})" />
          </label>
        </div>
        ${thumbsHtml}
      </div>
    `;
  }
  container.innerHTML = html;
}

// Análisis automático de calidad de imagen (borrosa, oscura o blanqueada)
function analyzeImageQuality(canvas) {
  const size = 160;
  const small = document.createElement("canvas");
  small.width = size;
  small.height = size;
  const ctx = small.getContext("2d");
  ctx.drawImage(canvas, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;

  const gray = new Float32Array(size * size);
  let sumLum = 0;
  let darkPixels = 0;
  let brightPixels = 0;

  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    gray[p] = lum;
    sumLum += lum;
    if (lum < 35) darkPixels++;
    if (lum > 235) brightPixels++;
  }

  const total = size * size;
  const meanLum = sumLum / total;
  const darkRatio = darkPixels / total;
  const brightRatio = brightPixels / total;

  // 1. Detección de foto muy oscura
  if (meanLum < 38 || darkRatio > 0.78) {
    return { ok: false, reason: "Foto eliminada automáticamente: demasiado oscura" };
  }

  // 2. Detección de foto blanqueada / sobreexpuesta
  if (meanLum > 228 || brightRatio > 0.75) {
    return { ok: false, reason: "Foto eliminada automáticamente: blanqueada / sobreexpuesta" };
  }

  // 3. Detección de desenfoque mediante varianza del Laplaciano
  let lapSum = 0;
  let lapSqSum = 0;
  let count = 0;
  for (let y = 1; y < size - 1; y++) {
    for (let x = 1; x < size - 1; x++) {
      const idx = y * size + x;
      const lap = -4 * gray[idx] + gray[idx - 1] + gray[idx + 1] + gray[idx - size] + gray[idx + size];
      lapSum += lap;
      lapSqSum += lap * lap;
      count++;
    }
  }
  const lapMean = lapSum / count;
  const variance = (lapSqSum / count) - (lapMean * lapMean);

  if (variance < 65) {
    return { ok: false, reason: "Foto eliminada automáticamente: imagen borrosa o movida" };
  }

  return { ok: true };
}

// Optimizar imagen a menos de 1 MB (excepto carpeta 30°)
async function processImageBlob(blob, highRes, applyWatermark = false) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = async () => {
      let w = img.width;
      let h = img.height;

      if (!highRes) {
        const maxDim = 1600;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else { w = Math.round(w * maxDim / h); h = maxDim; }
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      // Validar calidad antes de estampar marca de agua
      const check = analyzeImageQuality(canvas);
      if (!check.ok) {
        resolve({ rejected: true, reason: check.reason });
        return;
      }

      if (applyWatermark) {
        drawWatermark(ctx, w, h);
      }

      if (highRes) {
        canvas.toBlob((out) => resolve({ blob: out }), "image/jpeg", 0.95);
        return;
      }

      let quality = 0.86;
      const tryCompress = () => {
        canvas.toBlob((out) => {
          if (out.size <= 980 * 1024 || quality <= 0.45) {
            resolve({ blob: out });
          } else {
            quality -= 0.1;
            tryCompress();
          }
        }, "image/jpeg", quality);
      };
      tryCompress();
    };
    img.src = URL.createObjectURL(blob);
  });
}

function drawWatermark(ctx, w, h) {
  const lines = getWatermarkLines();
  const fontSize = Math.max(16, Math.round(w * 0.021));
  const lineHeight = Math.round(fontSize * 1.32);
  const margin = Math.max(12, Math.round(w * 0.015));

  ctx.save();
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  lines.slice().reverse().forEach((line, idx) => {
    ctx.fillText(line, w - margin, h - margin - (idx * lineHeight));
  });
  ctx.restore();
}

function getWatermarkLines() {
  const now = new Date();
  const fecha = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const lines = [
    currentProject ? currentProject.name : "SITE",
    fecha,
    currentGpsText
  ];
  if (currentPlaceText) lines.push(currentPlaceText);
  return lines;
}

// Subida desde Galería / Archivos
async function handleFileUpload(event, subId, highRes) {
  const fileList = Array.from(event.target.files);
  if (!fileList.length) return;
  showToast("Procesando archivos...");

  let savedCount = 0;
  let rejectedMessages = [];

  for (const file of fileList) {
    let finalBlob = file;
    if (file.type.startsWith("image/")) {
      const res = await processImageBlob(file, highRes, false);
      if (res.rejected) {
        rejectedMessages.push(`${file.name}: ${res.reason}`);
        continue;
      }
      finalBlob = res.blob;
    }

    await saveFileToDB({
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      projectId: currentProject.id,
      subId,
      name: file.name,
      type: finalBlob.type || file.type,
      blob: finalBlob,
      createdAt: Date.now()
    });
    savedCount++;
  }

  event.target.value = "";
  await renderSubfolders();

  if (rejectedMessages.length) {
    showToast(rejectedMessages[0], 4500);
  } else if (savedCount) {
    showToast(`${savedCount} archivo(s) guardado(s)`);
  }
}

function saveFileToDB(record) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").add(record);
    tx.oncomplete = () => resolve();
  });
}

// Confirmación antes de borrar archivo
function confirmDeleteFile(fileId, subId, fileName) {
  if (!confirm(`¿Seguro que deseas eliminar "${fileName}"?`)) return;
  deleteFileById(fileId, subId);
}

function deleteFileById(fileId, subId) {
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = async () => {
    await renderSubfolders();
    updateCamPreview(subId);
    showToast("Archivo eliminado");
  };
}

// Cámara Nativa con GPS y Sello
async function openCamera(subId, highRes) {
  activeCamSubId = subId;
  activeCamHighRes = highRes;

  const item = SECTIONS[currentTab].items.find(i => i.id === subId);
  document.getElementById("camSubTitle").textContent = item ? item.name : "Cámara";
  document.getElementById("cameraModal").classList.add("open");

  updateGps();
  updateCamWatermarkOverlay();
  clearInterval(window._wmTimer);
  window._wmTimer = setInterval(updateCamWatermarkOverlay, 1000);
  await updateCamPreview(subId);

  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    document.getElementById("camVideo").srcObject = camStream;
  } catch (err) {
    showToast("No se pudo acceder a la cámara. Revisa los permisos.");
    closeCamera();
  }
}

function closeCamera() {
  clearInterval(window._wmTimer);
  if (camStream) {
    camStream.getTracks().forEach(t => t.stop());
    camStream = null;
  }
  document.getElementById("cameraModal").classList.remove("open");
  renderSubfolders();
}

function updateCamWatermarkOverlay() {
  document.getElementById("camWatermarkPreview").innerHTML = getWatermarkLines().map(escapeHtml).join("<br>");
}

function updateGps() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude.toFixed(6);
    const lon = pos.coords.longitude.toFixed(6);
    currentGpsText = `GPS: ${lat}, ${lon}`;
    updateCamWatermarkOverlay();
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
      const data = await res.json();
      if (data && data.address) {
        const a = data.address;
        const district = a.suburb || a.city_district || a.town || a.city || "";
        const region = a.state || a.region || "";
        currentPlaceText = [district, region].filter(Boolean).join(", ");
        updateCamWatermarkOverlay();
      }
    } catch (_) {}
  }, () => {
    currentGpsText = "GPS: Sin señal";
  }, { enableHighAccuracy: true, timeout: 8000 });
}

async function capturePhoto() {
  const video = document.getElementById("camVideo");
  if (!video.videoWidth) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Validar calidad (borrosa, oscura o blanqueada) antes de guardar
  const check = analyzeImageQuality(canvas);
  if (!check.ok) {
    showToast("⚠️ " + check.reason, 3500);
    return;
  }

  drawWatermark(ctx, canvas.width, canvas.height);

  const rawBlob = await new Promise(r => canvas.toBlob(r, "image/jpeg", 0.95));
  let finalBlob = rawBlob;

  if (!activeCamHighRes && rawBlob.size > 980 * 1024) {
    let q = 0.85;
    while (q >= 0.45) {
      const test = await new Promise(r => canvas.toBlob(r, "image/jpeg", q));
      finalBlob = test;
      if (test.size <= 980 * 1024) break;
      q -= 0.1;
    }
  }

  const now = new Date();
  const stamp = now.toISOString().replace(/[-:T]/g, "").slice(0, 14);
  const fileName = `IMG_${stamp}.jpg`;

  await saveFileToDB({
    id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    projectId: currentProject.id,
    subId: activeCamSubId,
    name: fileName,
    type: "image/jpeg",
    blob: finalBlob,
    createdAt: Date.now()
  });

  await updateCamPreview(activeCamSubId);
  showToast("Foto guardada");
}

async function updateCamPreview(subId) {
  if (!currentProject || !subId) return;
  const files = await getFilesForSub(currentProject.id, subId);
  const countEl = document.getElementById("camPhotoCount");
  const imgEl = document.getElementById("camLastThumb");
  if (!countEl || !imgEl) return;
  countEl.textContent = files.length;
  const images = files.filter(f => f.type.startsWith("image/"));
  if (images.length) {
    imgEl.src = URL.createObjectURL(images[images.length - 1].blob);
    imgEl.style.display = "block";
  } else {
    imgEl.style.display = "none";
  }
}

// Visor Carrusel con deslizamiento y confirmación al borrar
async function openViewer(subId, index) {
  viewerItems = await getFilesForSub(currentProject.id, subId);
  if (!viewerItems.length) return;
  viewerIndex = Math.max(0, Math.min(index, viewerItems.length - 1));
  document.getElementById("viewerModal").classList.add("open");
  renderViewerSlide();
}

async function openViewerFromCamera() {
  if (!activeCamSubId) return;
  const files = await getFilesForSub(currentProject.id, activeCamSubId);
  if (!files.length) return showToast("Aún no hay fotos en esta carpeta");
  openViewer(activeCamSubId, files.length - 1);
}

function closeViewer() {
  document.getElementById("viewerModal").classList.remove("open");
  renderSubfolders();
  if (activeCamSubId) updateCamPreview(activeCamSubId);
}

function navigateViewer(dir) {
  if (!viewerItems.length) return;
  viewerIndex = (viewerIndex + dir + viewerItems.length) % viewerItems.length;
  renderViewerSlide();
}

function renderViewerSlide() {
  const item = viewerItems[viewerIndex];
  document.getElementById("viewerCounter").textContent = `${viewerIndex + 1} / ${viewerItems.length}`;
  document.getElementById("viewerName").textContent = item.name;
  const box = document.getElementById("viewerContent");
  const url = URL.createObjectURL(item.blob);

  if (item.type.startsWith("image/")) {
    box.innerHTML = `<img src="${url}" />`;
  } else if (item.type.startsWith("video/")) {
    box.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    box.innerHTML = `<div style="color:#fff; text-align:center; padding:20px;">
      <p style="margin-bottom:12px;">📄 ${escapeHtml(item.name)}</p>
      <a href="${url}" target="_blank" style="background:#2563eb; color:#fff; padding:10px 16px; border-radius:8px; text-decoration:none; font-weight:600;">Abrir PDF</a>
    </div>`;
  }
}

function deleteCurrentViewerItem() {
  if (!viewerItems.length) return;
  const item = viewerItems[viewerIndex];
  if (!confirm(`¿Seguro que deseas eliminar "${item.name}"?`)) return;

  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(item.id);
  tx.oncomplete = () => {
    viewerItems.splice(viewerIndex, 1);
    showToast("Foto eliminada");
    if (!viewerItems.length) {
      closeViewer();
    } else {
      if (viewerIndex >= viewerItems.length) viewerIndex = viewerItems.length - 1;
      renderViewerSlide();
    }
  };
}

// Gestos táctiles izquierda / derecha en visor
const viewerBody = document.getElementById("viewerBody");
viewerBody.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
viewerBody.addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) {
    navigateViewer(diff < 0 ? 1 : -1);
  }
}, { passive: true });

// Generación de ZIP con relleno automático de NO_APLICA.png
async function prepareZip(mode) {
  if (!currentProject) return;
  showToast("Generando ZIP completo...", 6000);

  let noAplicaBlob = null;
  try {
    const resp = await fetch("./no_aplica.png");
    noAplicaBlob = await resp.blob();
  } catch (_) {}

  const zip = new JSZip();
  const rootFolder = zip.folder(sanitizeFileName(currentProject.name));

  for (const section of SECTIONS) {
    const secFolder = rootFolder.folder(section.folder);
    for (const item of section.items) {
      const subFolder = section.items.length > 1 ? secFolder.folder(sanitizeFileName(item.name)) : secFolder;
      const files = await getFilesForSub(currentProject.id, item.id);
      if (files.length > 0) {
        for (const f of files) {
          subFolder.file(f.name, f.blob);
        }
      } else if (noAplicaBlob) {
        subFolder.file("NO_APLICA.png", noAplicaBlob);
      }
    }
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const zipName = `${sanitizeFileName(currentProject.name)}.zip`;

  if (mode === "download") {
    triggerDownload(zipBlob, zipName);
    showToast("ZIP descargado");
  } else {
    const shareBox = document.getElementById("shareReadyBox");
    const btnExec = document.getElementById("btnExecuteShare");
    shareBox.style.display = "block";
    showToast("ZIP listo. Toca el botón verde para enviar.");

    btnExec.onclick = async () => {
      const fileObj = new File([zipBlob], zipName, { type: "application/zip" });
      if (navigator.canShare && navigator.canShare({ files: [fileObj] })) {
        try {
          await navigator.share({ files: [fileObj], title: zipName });
          shareBox.style.display = "none";
          return;
        } catch (err) {
          if (err.name === "AbortError") return;
        }
      }
      triggerDownload(zipBlob, zipName);
      showToast("Tu navegador no soporta envío directo; se guardó en Descargas.");
    };
  }
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function sanitizeFileName(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_").trim() || "Carpeta";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

initDB().then(loadProjects);
