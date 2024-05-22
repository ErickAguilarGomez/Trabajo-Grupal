let jugador1 = 50; 
let jugador2 = 75; 
let jugador3 = 65;

if (jugador1 > jugador2 && jugador1 > jugador3) {
    console.log("Jugador 1 tiene la puntuación más alta: " + jugador1);
} else if (jugador2 > jugador1 && jugador2 > jugador3) {
    console.log("Jugador 2 tiene la puntuación más alta: " + jugador2);
} else if (jugador3 > jugador1 && jugador3 > jugador2) {
    console.log("Jugador 3 tiene la puntuación más alta: " + jugador3);
} else {
    console.log("Hay un empate entre los jugadores con la puntuación más alta.");
}