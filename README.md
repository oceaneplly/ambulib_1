# Application Ionic Ambulib

Prérequis :
* Node.js (version14 ou supérieure)
* NPM (version 6 supérieure)
* Ionic CLI (version ou supérieure)

Vous pouvez télécharger et installer Node.js et NPM à partir du lien suivant : https://nodejs.org/en/download/

Une fois Node.js et NPM installés, vous pouvez installer Ionic CLI en exécutant la commande suivante :

Copier le code suivant : 
```npm install -g @ionic/cli```

Pour configurer l'application Ionic, suivez les étapes ci-dessous :
1. Clonez le dépôt : ```git clone <URL du dépôt>``` 
2. Accédez au répertoire du projet :
```cd <nom du projet>```
3. Installez les dépendances :
```npm install```
4. Démarrez l'application :
```ionic serve```

Cela démarrera l'application dans le navigateur. Vous pouvez également utiliser la commande suivante pour exécuter l'application sur un appareil ou un émulateur :
```ionic cordova run <plateforme>```

Remplacez ```<plateforme>``` par la plateforme sur laquelle vous souhaitez exécuter l'application (par exemple ios, android).

La structure du répertoire de l'application Ionic est la suivante :
* ```node_modules/``` : Contient les dépendances npm.
* ```src/``` : Contient le code source de l'application.
* ```assets/``` : Contient les actifs statiques (par exemple, images, polices).
* ```environments/``` : Contient les configurations d'environnement.
* ```theme/``` : Contient les fichiers SASS pour le style de l'application.
* ```app/``` : Contient le code principal de l'application.
* ```app.component.ts``` : Le composant principal de l'application.
app.module.ts : Le module principal de l'application.
* ```app-routing.module.ts``` : Le module de routage de l'application.
* ```pages/``` : Contient les différentes pages de l'application.
* ```home/``` : Contient le code de la page d'accueil.
* ```about/``` : Contient le code de la page à propos.
* ```services/``` : Contient les différents services utilisés dans l'application.
* ```package.json``` : Contient les métadonnées et les dépendances de l'application.
* ```tsconfig.json``` : Contient les configurations TypeScript.
* ```ionic.config.json``` : Contient les configurations Ionic.

Si vous souhaitez contribuer à l'application Ionic, veuillez suivre les étapes ci-dessous :
- Forker le dépôt.
- Créez une nouvelle branche pour vos modifications.
- Apportez les modifications et les commit.
- Poussez les modifications vers votre dépôt forké.
- Créez une demande de tirage.



