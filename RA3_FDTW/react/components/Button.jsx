/**
 * Button.jsx
 * Botón reutilizable con estado de carga opcional.
 */
function Button({ type = "button", variant = "primary", loading = false, children, onClick, className = "" }) {
    return (
        <button
            type={type}
            className={`btn btn-${variant} fw-bold ${className}`}
            onClick={onClick}
            disabled={loading}
        >
            {loading && (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            )}
            {children}
        </button>
    );
}
