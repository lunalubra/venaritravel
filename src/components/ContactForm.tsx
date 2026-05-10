"use client";

import { type FC, useActionState, useId, useRef, useEffect } from "react";

import {
  submitContactForm,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

type ContactFormProps = {
  submitLabel: string;
  successNode: React.ReactNode;
};

export const ContactForm: FC<ContactFormProps> = ({
  submitLabel,
  successNode,
}) => {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContactForm,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "ok") {
      formRef.current?.reset();
    }
    if (liveRegionRef.current) {
      if (state.status === "ok") {
        liveRegionRef.current.textContent = "Solicitud enviada correctamente.";
      } else if (state.status === "error" && state.message) {
        liveRegionRef.current.textContent = state.message;
      } else {
        liveRegionRef.current.textContent = "";
      }
    }
  }, [state]);

  if (state.status === "ok") {
    return <div className="font-serif text-hueso">{successNode}</div>;
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-10"
      noValidate
    >
      <Field
        name="nombre"
        label="Nombre"
        required
        autoComplete="name"
        type="text"
        placeholder="Nombre y apellidos"
        error={state.fieldErrors?.nombre}
      />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <Field
          name="email"
          label="Correo electrónico"
          required
          autoComplete="email"
          type="email"
          inputMode="email"
          placeholder="nombre@correo.com"
          error={state.fieldErrors?.email}
        />
        <Field
          name="telefono"
          label="Teléfono"
          autoComplete="tel"
          type="tel"
          inputMode="tel"
          optional
          placeholder="+34 600 000 000"
          error={state.fieldErrors?.telefono}
        />
      </div>

      <SelectField
        name="modalidad_interes"
        label="Modalidad de interés"
        optional
        error={state.fieldErrors?.modalidad_interes}
      >
        <option value="">Seleccionar</option>
        <option value="caza-mayor">Caza mayor</option>
        <option value="cabra-montes">Cabra montés</option>
        <option value="caza-menor">Caza menor</option>
        <option value="indeterminada">Aún no lo sé</option>
      </SelectField>

      <Field
        name="fechas_tentativas"
        label="Fechas tentativas"
        optional
        type="text"
        placeholder="Por ejemplo, octubre o segunda semana de noviembre"
        error={state.fieldErrors?.fechas_tentativas}
      />

      <TextareaField
        name="mensaje"
        label="Mensaje"
        optional
        rows={4}
        placeholder="Número de invitados, expectativas, cualquier cosa útil antes de la llamada."
        error={state.fieldErrors?.mensaje}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9999px] left-0 h-0 w-0 overflow-hidden"
      >
        <label>
          Organización
          <input
            tabIndex={-1}
            autoComplete="off"
            type="text"
            name="organizacion"
            defaultValue=""
          />
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p className="font-sans text-[0.875rem] text-pajizo">
          {state.message}
        </p>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-4 bg-hueso px-10 py-4 font-sans text-[0.9375rem] text-loden transition-colors duration-200 hover:bg-cordoban hover:text-hueso focus-visible:bg-cordoban focus-visible:text-hueso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pajizo disabled:opacity-60 disabled:cursor-progress"
        >
          <span>{pending ? "Enviando…" : submitLabel}</span>
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M0 4.5H17" stroke="currentColor" strokeWidth="1" />
            <path
              d="M13 1L17 4.5L13 8"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </button>
      </div>

      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        className="sr-only"
      />
    </form>
  );
};

type FieldBaseProps = {
  name: string;
  label: string;
  optional?: boolean;
  required?: boolean;
  error?: string;
};

type FieldProps = FieldBaseProps & {
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url";
  placeholder?: string;
};

const fieldShellClass = "group relative flex flex-col gap-1.5";

const labelClass =
  "flex items-baseline justify-between font-sans text-[0.6875rem] uppercase tracking-[0.07em] text-hueso/65";

const optionalClass = "text-hueso/45";

const inputBaseClass =
  "w-full bg-transparent border-0 border-b border-hueso/30 pb-3 pt-1 font-sans text-[1.0625rem] leading-[1.5] text-hueso placeholder:text-hueso/40 placeholder:text-[0.95rem] focus:outline-none focus:border-pajizo focus:border-b-[1.5px] transition-[border-color,border-width] duration-200 caret-pajizo";

const errorClass = "font-sans text-[0.8125rem] text-pajizo mt-1";

const Field: FC<FieldProps> = ({
  name,
  label,
  optional,
  required,
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
  error,
}) => {
  const id = useId();
  return (
    <div className={fieldShellClass}>
      <label htmlFor={id} className={labelClass}>
        <span>{label}</span>
        {optional ? <span className={optionalClass}>Opcional</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputBaseClass}
      />
      {error ? (
        <p id={`${id}-error`} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

const SelectField: FC<
  FieldBaseProps & {
    children: React.ReactNode;
  }
> = ({ name, label, optional, required, error, children }) => {
  const id = useId();
  return (
    <div className={fieldShellClass}>
      <label htmlFor={id} className={labelClass}>
        <span>{label}</span>
        {optional ? <span className={optionalClass}>Opcional</span> : null}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputBaseClass} appearance-none pr-8 [&>option]:bg-loden [&>option]:text-hueso`}
          defaultValue=""
        >
          {children}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-hueso/55"
        >
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
            <path
              d="M1 1L6 5L11 1"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </span>
      </div>
      {error ? (
        <p id={`${id}-error`} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

const TextareaField: FC<
  FieldBaseProps & { rows?: number; placeholder?: string }
> = ({ name, label, optional, required, error, rows = 4, placeholder }) => {
  const id = useId();
  return (
    <div className={fieldShellClass}>
      <label htmlFor={id} className={labelClass}>
        <span>{label}</span>
        {optional ? <span className={optionalClass}>Opcional</span> : null}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBaseClass} resize-y`}
      />
      {error ? (
        <p id={`${id}-error`} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
};
