# PIIQUANTE

Requesting to API/Backend API REST

### Application web dans laquelle les utilisateurs ajoutent leurs sauces préférées et peuvent liker ou disliker les différentes sauces proposées

 &nbsp; 

🛠️ Gérer des événements JavaScript

🛠️ Interagir avec un service web en JavaScript

🛠️ Valider des données issues de sources externes

🛠️ Organisation du backend en MVP (Route-Model-Controller) (API REST)

🛠️ Sécurisation des données (bcrypt/middleware)

🛠️ Création d'un serveur et ancrage à une base de données (Mongodb), avec ajout/modification/suppression de ces données (images,...)

🛠️ Gestion optimale des données pour éviter un stockage trop important dans la base de données


 &nbsp; 

| Langages | Outils | Plugin |
| :---: | :---: | :---: |
| HTML5 | Node.js/NPM (Node Package Manager) | bcrypt/jsonwebtoken |
| CSS3 | Git/GitHub | dotenv/helmet/multer |
| Java-script | Visual Studio Code | express/mongoose |

Design (Frontend) non réalisé par mes soins

 &nbsp; 

## Development server

 &nbsp; 

1. Clonez le repository
2. Ouvrez un terminal de commande
3. Exécutez à partir du dossier frontend npm install 
4. Puis exécutez npm start
5. Dans un autre terminal, exécutez le back-end avec la commande npm install 
6. Puis exécutez nodemon server

Si vous utilisez VSCode, utilisez l'extension LiveShare pour faire fonctionner le
serveur front-end sans avoir recours à npm install.


Il vous faudra créer un dossier 'images' dans le dossier backend qui permettra d'enregistrer l'image d'une sauce.

&nbsp; 

## Connexion à MongoDB

Dans le fichier app.js et la fonction mongoose.connect, l'url de connexion à mongoDB n'est pas directement affiché. Je l'ai rajouté dans une variable d'environnement pour une question de sécurité. L'url se trouve dans le fichier .env.

 &nbsp; 

## Test 
Valeurs des variables d'environnement à rajouter dans un fichier .env à créer dans le backend à l'exemple du fichier .env.exemple

TOKEN = RANDOM_TOKEN_SECRET

MONGO = mongodb+srv://olivierco1:logicbobby@cluster0.5jrov.mongodb.net/Projet6?retryWrites=true&w=majority


 &nbsp; 


__1) Page répertoriant les sauces (Frontend d'une tierce personne) &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp;   2) Page d'info d'une sauce ajoutée par l'utilisateur (Frontend d'une tierce personne)__


<img alt="Page répertoriant les sauces" width=45% src="AllSauces.png"></img> <img alt="Page d'info d'une sauce ajoutée par l'utilisateur" width=45% src="OneSauce.png"></img>
