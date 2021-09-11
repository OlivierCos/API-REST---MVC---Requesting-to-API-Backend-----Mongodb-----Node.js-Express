# PIIQUANTE

Projet réalisé dans le cadre du projet 6 de la formation d'OpenClass Rooms.

Contexte : 
L'entreprise souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les différentes sauces proposées.


## Development server

1. Clonez le repository
2. Ouvrez un terminal de commande
3. Exécutez à partir du dossier frontend npm install 
4. Puis exécutez npm start
5. Dans un autre terminal, exécutez le back-end avec la commande npm install 
6. Puis exécutez nodemon server

Si vous utilisez VSCode, utilisez l'extension LiveShare pour faire fonctionner le
serveur front-end sans avoir recours à npm install.


Il vous faudra rajouter un dossier 'images' dans le dossier backend qui permettra d'enregistrer l'image d'une sauce.

## Connexion à MongoDB

Dans le fichier app.js et la fonction mongoose.connect, l'url de connexion à mongoDB n'est pas directement affiché. Je l'ai rajouté dans une variable d'environnement pour une question de sécurité. L'url se trouve dans le fichier .env.