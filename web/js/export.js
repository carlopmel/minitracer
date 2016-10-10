// @Req Exporta_csv
function export_csv()
{
    //var csvFilePath = "Requirements.csv";
    //Leemos todos los campos del formulario
    
    var name = prompt("Introduce un nombre para el fichero", "");
    var nameComplet = name+".csv";
    var project_name = document.getElementById("nombre_proyecto");
    var campos = document.getElementsByClassName("formulario");
    var csvContent = "data:text/csv;charset=utf-8,";
    
    csvContent += 'PROJECT NAME'+','+project_name.value+','+'\r\n'
    csvContent += 'LABEL'+','+'TYPE'+','+'PARAMETER'+','+'DESCRIPTION'+','+'TEST'+'\r\n'
    for (i=0 ; i < campos.length; i++)
    {
 	csvContent += campos[i].value+ ',' + campos[i+1].value + ',' 
 	    + campos[i+2].value+',' + campos[i+3].value+',' 
 	    + campos[i+4].value + ',' +'\r\n';
	i+=4;
    }
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", nameComplet);
    document.body.appendChild(link); // Required for FF
    
    link.click(); 
    
    
}	

// @Req Añade_filas_req
function add_req()
{
    var nueva_fila = 	  '<td> <input type="text" name="etiqueta" class="formulario"/> </td> '
	+ '<td> <select name="tipo" class="formulario">'
	+		'<option value="select" selected>Select</option>'
	+			  '<option value="Ctest">Ctest</option>'
	+ 	'</select>'
	+ '</td>'
	+' <td> <input type="text" name="parametro" class="formulario"/> </td> '
	+' <td> <input type="text" name="descripcion" size="51" class="formulario"/> </td> '
	+' <td> <input type="text" name="lista_test" class="formulario"/> </td> ';
    
    
    var nueva = document.createElement("tr");
    var creado = document.getElementById("tabla_req_add").appendChild(nueva);
    creado.innerHTML = nueva_fila;
}
