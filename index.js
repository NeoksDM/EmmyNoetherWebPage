(async () => {
	const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	console.log(data);

})();