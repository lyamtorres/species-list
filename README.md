# Test technique front

## Sujet
Créer une liste Material Design Angular contenant le nom et le code FAO des espèces.

## Outil
Visual Studio Code + documentation des listes Material Angular + Webservice des espèces.

## Feuille de route
1.	Créer un composant page « liste-especes ».
2.	Ajouter une route vers la page « liste-especes ».
3.	Créer un service qui fait appel au webservice suivant : https://services-fish-price-dev.sinay.ai/seafoods . Ce dernier renvoie la liste de toutes les espèces marines péchées en France. 
4.	Créer une liste en utilisant le composant de liste de Material Design Angular qui affiche le nom français de l’espèce ainsi que le code FAO.
## Si le temps le permet
5.	Créer un champ de texte qui permet de filtrer la liste selon le nom français de l’espèce.
6.	Créer une route qui prend le code FAO en paramètre. 
7.	Bonus : le champ de texte doit également permettre de filtrer la liste selon le code FAO de l’espèce.
## Notes techniques 
-	Si le temps le permet, les commentaires dans le code sont les bienvenus.
## Données
API List Angular Material : https://material.angular.io/components/list/overview

Exemple de retour du webservice : 
{"errorCode":0,"message":"Success","timestamp":1599465358910,"pageNumber":0,"totalPages":1,"data":[{"faoCode":"GKL","scientificName":"Glycymeris glycymeris","englishName":"Common European bittersweet","frenchName":"Amande commune","spanishName":"Almendra de mar","family":"Glycymerididae","order":"Bivalvia"},{"faoCode":"ANE","scientificName":"Engraulis encrasicolus","englishName":"European anchovy","frenchName":"Anchois","spanishName":"Boquerón","family":"Engraulidae","order":"Clupeiformes"}]}
