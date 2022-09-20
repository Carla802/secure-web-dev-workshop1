// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 1 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
//console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 2 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	const sorted = filmingLocations.sort((a, b) => new Date(b.fields.date_debut) - new Date(a.fields.date_debut))
	return sorted
}
//console.log(sortFilmingLocationsByStartDate()[0])

// 3 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	const result = filmingLocations.filter(location => new Date(location.fields.date_debut).getFullYear() == 2020);
	return result
}
//console.log(getFilmingLocationsNumber2020())

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	var res = {}
	for(let element in filmingLocations){
		let year = new Date(filmingLocations[element].fields.date_debut).getFullYear()
		res[year] = (res[year]+1) || 1 ;
	}
	return {res}
}
//console.log(getFilmingLocationsNumberPerYear())

// 4 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	var res = {}
	for(let element in filmingLocations){
		let district = filmingLocations[element].fields.ardt_lieu
		res[district] = (res[district]+1) || 1 ;
	}
	return {res}
}
//console.log(getFilmingLocationsNumberPerDistrict())

// 5 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	var res = []
	var tournage= {}
	for(let element in filmingLocations){
		let film = filmingLocations[element].fields.nom_tournage
		let temp = res.find(el => el.film == film)
		if(temp){
			temp.locations = temp.locations + 1
		}
		else{
			tournage.film = film
			tournage.locations = 1
			res.push({...tournage})
		}
	}
	res = res.sort((a, b) => b.locations - a.locations)
	return res
}
//console.log(getFilmLocationsByFilm()[0])
//console.log(getFilmLocationsByFilm()[getFilmLocationsByFilm().length-1])

// 6 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	var compt=[]
	var res=0
	for(let i=0; i<filmingLocations.length; i++){
		var temp = filmingLocations[i].fields.nom_tournage
		if(!(compt.includes(temp))){
			res+=1
			compt.push(temp)
		}
	}
	return res
}
// console.log(getNumberOfFilms())

// 7 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	var res = []
	for (let i=0; i < filmingLocations.length; i++){
		if(filmingLocations[i].fields.nom_tournage == 'LRDM - Patriot season 2'){
			res.push(filmingLocations[i].fields.adresse_lieu)
		}
	}
	return res
}
console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
