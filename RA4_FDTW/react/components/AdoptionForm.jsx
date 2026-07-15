/**
 * AdoptionForm.jsx
 * Componente principal del módulo de formularios interactivos.
 * Maneja:
 *  - Estado del formulario (useState)
 *  - Validación por campo (con validators.js) al perder foco y al enviar
 *  - Mensajes de éxito/error mediante <AlertMessage />
 *  - Composición de componentes reutilizables (FormField, SelectField, TextareaField, Button)
 */
const { validarNombre, validarEmail, validarTelefono, validarDireccion, validarSeleccion, validarNumeroMascotas, validarMensaje } =
    window.Validators;

const GATOS_DISPONIBLES = [
    { value: "enrique", label: "Enrique 🐱 (6 meses, juguetón)" },
    { value: "timmy", label: "Timmy 🐱 (6 meses, curioso)" },
    { value: "gengar", label: "Gengar 🐱 (5 meses, tímido)" },
];

const TIPOS_VIVIENDA = [
    { value: "casa", label: "Casa" },
    { value: "departamento", label: "Departamento" },
    { value: "otro", label: "Otro" },
];

const NIVELES_EXPERIENCIA = [
    { value: "ninguna", label: "Ninguna" },
    { value: "poca", label: "Poca" },
    { value: "mucha", label: "Mucha" },
];

const ESTADO_INICIAL = {
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    vivienda: "",
    mascotas: "",
    experiencia: "",
    gato: "",
    mensaje: "",
};

// Cada campo sabe validarse a sí mismo
const VALIDADORES_POR_CAMPO = {
    nombre: validarNombre,
    email: validarEmail,
    telefono: validarTelefono,
    direccion: validarDireccion,
    vivienda: (valor) => validarSeleccion(valor, "el tipo de vivienda"),
    mascotas: validarNumeroMascotas,
    experiencia: (valor) => validarSeleccion(valor, "tu experiencia con mascotas"),
    gato: (valor) => validarSeleccion(valor, "el gato que deseas adoptar"),
    mensaje: validarMensaje,
};

function AdoptionForm() {
    const [datos, setDatos] = React.useState(ESTADO_INICIAL);
    const [errores, setErrores] = React.useState({});
    const [enviando, setEnviando] = React.useState(false);
    const [alerta, setAlerta] = React.useState({ tipo: null, mensaje: "" });

    function validarCampo(campo, valor) {
        const validar = VALIDADORES_POR_CAMPO[campo];
        return validar ? validar(valor) : null;
    }

    function manejarCambio(campo, valor) {
        setDatos((anterior) => ({ ...anterior, [campo]: valor }));
        // Si el campo ya tenía error, se revalida en vivo para feedback inmediato
        if (errores[campo]) {
            setErrores((anterior) => ({ ...anterior, [campo]: validarCampo(campo, valor) }));
        }
    }

    function manejarBlur(campo) {
        setErrores((anterior) => ({ ...anterior, [campo]: validarCampo(campo, datos[campo]) }));
    }

    function validarTodoElFormulario() {
        const nuevosErrores = {};
        Object.keys(datos).forEach((campo) => {
            nuevosErrores[campo] = validarCampo(campo, datos[campo]);
        });
        setErrores(nuevosErrores);
        return Object.values(nuevosErrores).every((error) => error === null);
    }

    function manejarEnvio(evento) {
        evento.preventDefault();
        setAlerta({ tipo: null, mensaje: "" });

        const esValido = validarTodoElFormulario();
        if (!esValido) {
            setAlerta({ tipo: "danger", mensaje: "Corrige los campos marcados en rojo antes de continuar." });
            return;
        }

        setEnviando(true);

        // Simulación de envío (aquí mas adelante integraríamos un fetch a un backend/API real)
        setTimeout(() => {
            console.log("Solicitud de adopción registrada:", { ...datos, fecha: new Date().toLocaleString() });
            const gatoElegido = GATOS_DISPONIBLES.find((g) => g.value === datos.gato);
            setAlerta({
                tipo: "success",
                mensaje: `Gracias ${datos.nombre}, tu solicitud para adoptar a ${gatoElegido.label.split(" ")[0]} fue enviada. Te contactaremos a ${datos.email}.`,
            });
            setDatos(ESTADO_INICIAL);
            setErrores({});
            setEnviando(false);
        }, 800);
    }

    return (
        <form onSubmit={manejarEnvio} noValidate>
            <div className="row">
                <div className="col-md-6">
                    <FormField
                        id="nombre"
                        label="Nombre completo"
                        value={datos.nombre}
                        placeholder="Ej: María Pérez"
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.nombre}
                    />
                </div>
                <div className="col-md-6">
                    <FormField
                        id="email"
                        label="Correo electrónico"
                        type="email"
                        value={datos.email}
                        placeholder="Ej: maria@correo.com"
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.email}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <FormField
                        id="telefono"
                        label="Teléfono / Celular"
                        type="tel"
                        value={datos.telefono}
                        placeholder="Ej: 987654321"
                        maxLength={9}
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.telefono}
                    />
                </div>
                <div className="col-md-6">
                    <FormField
                        id="direccion"
                        label="Dirección"
                        value={datos.direccion}
                        placeholder="Ej: Av. Los Gatos 123, Chiclayo"
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.direccion}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <SelectField
                        id="vivienda"
                        label="Tipo de vivienda"
                        value={datos.vivienda}
                        options={TIPOS_VIVIENDA}
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.vivienda}
                    />
                </div>
                <div className="col-md-4">
                    <FormField
                        id="mascotas"
                        label="N° de mascotas actuales"
                        type="number"
                        value={datos.mascotas}
                        placeholder="0"
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.mascotas}
                    />
                </div>
                <div className="col-md-4">
                    <SelectField
                        id="experiencia"
                        label="Experiencia con mascotas"
                        value={datos.experiencia}
                        options={NIVELES_EXPERIENCIA}
                        onChange={manejarCambio}
                        onBlur={manejarBlur}
                        error={errores.experiencia}
                    />
                </div>
            </div>

            <SelectField
                id="gato"
                label="Gato que deseas adoptar"
                value={datos.gato}
                options={GATOS_DISPONIBLES}
                onChange={manejarCambio}
                onBlur={manejarBlur}
                error={errores.gato}
            />

            <TextareaField
                id="mensaje"
                label="¿Por qué quieres adoptarlo?"
                value={datos.mensaje}
                placeholder="Cuéntanos un poco sobre ti y tu hogar..."
                rows={4}
                maxLength={300}
                onChange={manejarCambio}
                onBlur={manejarBlur}
                error={errores.mensaje}
            />

            <Button type="submit" variant="primary" loading={enviando} className="w-100">
                {enviando ? "Enviando..." : "Enviar Solicitud 🐱"}
            </Button>

            <AlertMessage tipo={alerta.tipo} mensaje={alerta.mensaje} onClose={() => setAlerta({ tipo: null, mensaje: "" })} />
        </form>
    );
}
