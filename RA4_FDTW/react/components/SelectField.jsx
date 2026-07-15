/**
 * SelectField.jsx
 * Componente reutilizable para un <select>.
 */
function SelectField({ id, label, value, options, onChange, onBlur, error, placeholder = "Selecciona una opción" }) {
    const selectClasses = "form-select" + (error ? " is-invalid" : value ? " is-valid" : "");

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label fw-semibold">
                {label}
            </label>
            <select
                id={id}
                name={id}
                className={selectClasses}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                onBlur={() => onBlur(id)}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            >
                <option value="">{placeholder}</option>
                {options.map((opcion) => (
                    <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                    </option>
                ))}
            </select>
            {error && (
                <div id={`${id}-error`} className="invalid-feedback">
                    {error}
                </div>
            )}
        </div>
    );
}
