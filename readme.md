# Liste des régions, départements et communes

Base url de l'api : https://geo.api.gouv.fr

## Instructions

### Partie 1

Alimenter toutes les options des select pour les régions, départements et communes, dès le chargement de la page.
Pas de filtre, les select seront indépendants des uns des autres

#### Endpoints

* /regions
* /departements
* /communes

### Partie 2

Alimenter toutes les options du select pour les régions dès le chargement de la page.
Les select des départements et communes sont dépendants de la valeur choisie dans le select des régions.

#### Endpoints

* /regions
* /regions/{code}/departements
* /departements/{code}/communes