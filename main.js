const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '271a080954msh359673936190795p1f451ajsn916ebb342230',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));