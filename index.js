// Importation du module http
const http = require('http');

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  // Spécification du code de réponse HTTP (200 pour "OK")
  res.statusCode = 200;
  // Spécification de l'en-tête de contenu (texte/plain pour du texte brut)
  res.setHeader('Content-Type', 'text/plain');
  // Envoi de la réponse "Hello World"
  res.end('Hello World\n');
});

// Définition du port sur lequel le serveur écoutera les requêtes
const port = 3000;

// Lancement du serveur et écoute sur le port spécifié
server.listen(port, () => {
  // Affichage d'un message lorsque le serveur est démarré
  console.log(`Server running at http://localhost:${port}/`);
});
