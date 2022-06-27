# PIIQUANTE

Requesting to API/Backend API REST

Création d'une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les différentes sauces proposées.

Gérer des événements JavaScript
Interagir avec un web service avec JavaScript
Valider des données issues de sources externes

MVP

| Langages | Outils | Plugin |
| :---: | :---: | :---: |
| HTML5 | Node.js/NPM (Node Package Manager) | bcrypt/jsonwebtoken |
| CSS3 | Git/GitHub | dotenv/helmet/multer |
| Java-script | Visual Studio Code | express/mongoose |

Design (Frontend) non réalisé par mes soins

## Development server

1. Clonez le repository
2. Ouvrez un terminal de commande
3. Exécutez à partir du dossier frontend npm install 
4. Puis exécutez npm start
5. Dans un autre terminal, exécutez le back-end avec la commande npm install 
6. Puis exécutez nodemon server

Si vous utilisez VSCode, utilisez l'extension LiveShare pour faire fonctionner le
serveur front-end sans avoir recours à npm install.


Il vous faudra créer un dossier 'images' dans le dossier backend qui permettra d'enregistrer l'image d'une sauce.

## Connexion à MongoDB

Dans le fichier app.js et la fonction mongoose.connect, l'url de connexion à mongoDB n'est pas directement affiché. Je l'ai rajouté dans une variable d'environnement pour une question de sécurité. L'url se trouve dans le fichier .env.

## Test 
Valeurs des variables d'environnement à rajouter dans un fichier .env à créer dans le backend à l'exemple du fichier .env.exemple

TOKEN = RANDOM_TOKEN_SECRET

MONGO = mongodb+srv://olivierco1:logicbobby@cluster0.5jrov.mongodb.net/Projet6?retryWrites=true&w=majority