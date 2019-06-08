
$(document).ready(function() {


$('#buscar').click(function(){

debugger
var buscar=$('#inputBusqueda').val();
  

		$.ajax({
			url: 'https://api.deezer.com/search?q='+buscar,
			type: 'GET',
			dataType: 'jsonp',
			crossDomain: true,
    async: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
		
		})
		.done(function(response) {
			debugger
			console.log("success");
		})
		.fail(function(response) {
			debugger
			console.log("error");
		})




})

	
});




	// $.get(`https://api.deezer.com/search?q=${buscar}`,function(resultado){
	// 	debugger
	// 	// datos=resultado; // descomentar si no funciona
	// 	var  datos=JSON.parse(resultado); // si no sirve comenta esta linea y descomenta la de arriva
	// 	console.log(datos);  // esto muestra mensajes en la consola del navegador

	// 	$('#table_mostrar').html(""); // limpiamos el body de la tabla
	// 	$.each(datos.data,function(i, musica){ // recorremos el resultado de la api

	// 		// construimos la fila de la tabla con codigo html y llenamos los datos con los de la api
	// 		// cada una de las musicas se almacenan en la variable musica del bucle
	// 		mostrar=`
	// 			<tr>
	// 		  		<td>${musica.artist.name}</td>
	// 		  		<td>${musica.title}</td>
	// 		  		<td><img src="${musica.artist.picture_small}" width="40"></td>
	// 		  		<td>
	// 		  			<audio controls>
	// 		  				<source src="${musica.preview}" type="audio/mp3">
	// 		  			</audio>
	// 		  		</td>
	// 		  	</tr>
	// 		`;

	// 		// una vez llenemos la fila con los dato de la musica la agregamos a la tabla
	// 		$('#table_mostrar').append(mostrar); // agregamos la fila al final de la tabla
	// 	});
	// });

	
