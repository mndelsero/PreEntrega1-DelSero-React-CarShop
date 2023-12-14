export function toCap(texto) {
    // Verificar si el texto proporcionado es válido
    if (typeof texto !== 'string' || texto.length === 0) {
        return texto;
    }

    // Capitalizar la primera letra y concatenar el resto del texto
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}