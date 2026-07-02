/**
 * AlertMessage.jsx
 * Alerta reutilizable de éxito/error, con cierre manual y autocierre.
 
 */
function AlertMessage({ tipo, mensaje, onClose }) {
    React.useEffect(() => {
        const temporizador = setTimeout(onClose, 6000);
        return () => clearTimeout(temporizador);
    }, [mensaje, onClose]);

    if (!mensaje) return null;

    const icono = tipo === "success" ? "🐾 ¡Excelente!" : "⚠️ Revisa el formulario:";

    return (
        <div className={`alert alert-${tipo} alert-dismissible fade show mt-3 shadow-sm`} role="alert">
            <strong>{icono}</strong> {mensaje}
            <button type="button" className="btn-close" aria-label="Cerrar" onClick={onClose}></button>
        </div>
    );
}
