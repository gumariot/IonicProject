# IonicProject
RandoVergne

# Présentation
Projet Ionic a partir du template tutorial créer par Florent DAMIENS Et Guillaume MARIOT

#Installation

* Cloner le repo git
* Installer les dépendances : npm install
* Lancer le serveur : ionic serve

## Lancer sur un téléphone :

* branher le téléphone
* ionic cordova run android

# Travail effectué

Liste de fonctionnalitées présentent :

* Une application qui fonctionne sous android et navigateur
* Listing des randonnées
* Récupération des randonnées via une requête HTTP
* Détail pour chaque randonnées consultable
* Affichage de toutes les étapes pour les randonnées
* Possibilité de lancer une randonnées
* Lancement du timer lors du dépard
* La randonnées est correctement affiché sur la carte
* Possibilité de stoper et finir la randonnées
* Option dans le menu pour consulté la randonnées en cour
* Un sercice géolocalisation qui fonctionne

# Ce qui reste à faire

* Test unitaire et fonctionnel
* Gestion des collisions avec les checkpoints des randonnées
* Implémentation du lazy loading

  Dans notre projet les test ont étaient compliqué à mettre en place a cause de la configuration de Axium et Protractor, a multiple reprise nous avons eu des problème avec les quotas de nos sessions et du proxy de L'IUT. Et plus tard nous avons eu de nombreux problèmes causé par les chromeDrivers de nos Ordinateurs. Enfin les webViews ont aussi était un élément problématique lors de la configuration d'Axium et protractor. Au final après 3 scéances dédié a la configuration des test unitaires et fonctionnels il n'était toujours pas possible de les lancer nous avont donc arreter.
  
  Beaucoup de temps fut perdu dans la configuration des tests, c'est pourquoi malgrés une géolocalisation fonctionnel nous n'avons pas non plus mis en place la collision avec les checkpoints

# Bonus

* Design en accord avec la maquette et responsive
* Liste des randonnées favorites

