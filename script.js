const input = document.querySelector('#fruit');

const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function search(){

	let results = []; let inputVal = input.value; if (inputVal.length) { results = fruit.filter((item) => { return item.toLowerCase().includes(inputVal.toLowerCase()); }); console.log(results); } return results;
	}
	
function searchHandler(e){

	let inputVal = e.target.value;

 if (inputVal = ""){clearSuggestions();}

 else { 
 
 	let results = search();

	showSuggestions(results, inputVal);

	}}
	
function showSuggestions(results, inputVal) {

	suggestions.innerHTML = "";
	
	results.forEach(result => {
		
		let li = document.createElement("li");
		li.textContent = result;
		suggestions.appendChild(li);
		});

}

function useSuggestion(e) {
	
	let li = e.target;

if(li.click){
	
	input.value = li.innerHTML;
	
	clearSuggestions();

	console.log("clicked");

}
	

	// TODO populate the search bar with the suggestion. already added to event listener below

	

}

function clearSuggestions(){

	suggestions.innerHTML = "";

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);