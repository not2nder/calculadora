function calcular() {
    const notas = Array.from(document.querySelectorAll('#nota')).map(nota => parseInt(nota.value));
    const materia = document.getElementById('materia').value;
    const alert = document.getElementById('alert');

    const media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    const menor = Math.min(...notas);
    const maior = Math.max(...notas);
    const situacao = media >= 70 ? 'Aprovado' : media >= 40 ? 'Recuperação' : 'Reprovado';

    alert.innerText = `Nota: ${media}: ${situacao}`;

    if (!isNaN(media)) {
        localStorage.setItem(materia, JSON.stringify({ maiorNota: maior, menorNota: menor, media, situacao }));
        alert.classList.remove('d-none');
    } else {
        alert.classList.add('d-none');
    }
}
