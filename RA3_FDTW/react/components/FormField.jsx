/**
 * FormField.jsx
 * Componente reutilizable para un campo tipo <input>.
 */
function FormField({ id, label, type = "text", value, placeholder, maxLength, onChange, onBlur, error }) {
    const inputClasses = "form-control" + (error ? " is-invalid" : value ? " is-valid" : "");

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label fw-semibold">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                className={inputClasses}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                onBlur={() => onBlur(id)}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <div id={`${id}-error`} className="invalid-feedback">
                    {error}
                </div>
            )}
        </div>
    );
}
