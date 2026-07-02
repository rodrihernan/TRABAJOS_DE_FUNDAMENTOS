/**
 * App.jsx
 * Punto de entrada de la mini-app React.
 * Monta <AdoptionForm /> dentro del contenedor #react-form-root definido en index.html.
 */
const contenedor = document.getElementById("react-form-root");

if (contenedor) {
    const raiz = ReactDOM.createRoot(contenedor);
    raiz.render(<AdoptionForm />);
} else {
    console.error('No se encontró el contenedor "#react-form-root" en el HTML.');
}
