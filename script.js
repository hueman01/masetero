document.getElementById('actionBtn').addEventListener('click', function () {
    const userChoice = confirm("¿Deseas descargar la carta en PDF o verla en otra página?\n\nAceptar: Descargar PDF\nCancelar: Ver en otra página");

    if (userChoice) {
        // Descargar PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const textoRomantico = `
            Querida [Nombre],

            En este día especial, quiero expresarte lo mucho que significas para mí. Eres la luz que ilumina mis días y la razón por la que mi corazón late con tanta fuerza. Cada momento a tu lado es un regalo que atesoro profundamente.

            Espero que aceptes ser mi San Valentín y que juntos podamos crear muchos más recuerdos inolvidables. Te quiero más de lo que las palabras pueden expresar.

            Con todo mi amor,
            [Tu nombre]
        `;

        const lines = textoRomantico.split('\n');

        doc.setFontSize(12);
        lines.forEach((line, index) => {
            doc.text(line, 10, 10 + (index * 10));
        });

        doc.save('carta_san_valentin.pdf');
    } else {
        // Ver en otra página
        window.location.href = 'carta.html';
    }
});