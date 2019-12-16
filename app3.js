console.log('inicio del programa');

setTimeout(
    function() {
        console.log('Primer Post Timeout');
    }, 3000
);
setTimeout(
    function() {
        console.log('Segundo Post Timeout');
    }, 0
);
setTimeout(
    function() {
        console.log('Tercer  Timeout');
    }, 0
);
console.log('Fin de el Programa');