"use server";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

export type ContactField =
  | "nombre"
  | "email"
  | "telefono"
  | "modalidad_interes"
  | "fechas_tentativas"
  | "mensaje";

const MODALIDADES = new Set([
  "caza-mayor",
  "cabra-montes",
  "caza-menor",
  "indeterminada",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const nombre = (formData.get("nombre") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const telefono = (formData.get("telefono") ?? "").toString().trim();
  const modalidad = (formData.get("modalidad_interes") ?? "").toString().trim();
  const fechas = (formData.get("fechas_tentativas") ?? "").toString().trim();
  const mensaje = (formData.get("mensaje") ?? "").toString().trim();

  const honeypot = (formData.get("organizacion") ?? "").toString().trim();
  if (honeypot.length > 0) {
    return { status: "ok" };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (nombre.length < 2) fieldErrors.nombre = "Indique su nombre.";
  if (!EMAIL_RE.test(email))
    fieldErrors.email = "Indique un correo electrónico válido.";
  if (modalidad.length > 0 && !MODALIDADES.has(modalidad))
    fieldErrors.modalidad_interes = "Seleccione una opción válida.";
  if (mensaje.length > 4000)
    fieldErrors.mensaje = "El mensaje es demasiado largo.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revise los campos marcados.",
      fieldErrors,
    };
  }

  await sleep(400);

  if (process.env.NODE_ENV !== "production") {
    console.info("[contacto] new submission", {
      nombre,
      email,
      telefono: telefono || null,
      modalidad: modalidad || null,
      fechas: fechas || null,
      mensaje: mensaje || null,
    });
  }

  // TODO(infra): integrate Resend, Postmark, or the project's transactional
  // mail provider. This action currently logs the payload and returns success;
  // wire `RESEND_API_KEY` (or equivalent) and replace the block below.
  // See migrations/README.md for the env var contract.

  return { status: "ok" };
}
