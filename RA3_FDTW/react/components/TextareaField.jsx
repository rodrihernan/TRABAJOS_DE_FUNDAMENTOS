/**
 * TextareaField.jsx
 * Componente reutilizable para un <textarea>, con contador de caracteres.
 */
function TextareaField({ id, label, value, placeholder, rows = 4, maxLength, onChange, onBlur, error }) {
    const textareaClasses = "form-control" + (error ? " is-invalid" : value ? " is-valid" : "");

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label fw-semibold">
                {label}
            </label>
            <textarea
                id={id}
                name={id}
                className={textareaClasses}
                placeholder={placeholder}
                rows={rows}
                maxLength={maxLength}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                onBlur={() => onBlur(id)}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            <div className="d-flex justify-content-between">
                {error ? (
                    <div id={`${id}-error`} className="invalid-feedback d-block">
                        {error}
                    </div>
                ) : (
                    <span></span>
                )}
                {maxLength && (
                    <small className="text-muted">
                        {value.length}/{maxLength}
                    </small>
                )}
            </div>
        </div>
    );
}
