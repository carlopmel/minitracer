// @Req Genera_datos_web
function import_data(datos) {
    st_summary(datos);
    st_detailed_req(datos);
    st_descript_req(datos);
    st_detailed_test(datos);
    st_detailed_files(datos);
    st_detailed_files_csv(datos);
    add_project_name(datos);
    mat_te_re(datos);
    mat_re_pa(datos);
    muestra_summary();

}

function add_project_name(tabla){

    var nueva_fila='<h4 class="project_name_tables">Project Name: '+tabla[0][1]+'</h4>';
    var nueva_fila1 = '<h1 class="page-header celda_centrada">Project Name: '+tabla[0][1]+'</h1>';
    
    var creado = document.getElementById("name_project0");
    creado.innerHTML = nueva_fila1;
    var creado = document.getElementById("name_project1");
    creado.innerHTML = nueva_fila;
    var creado = document.getElementById("name_project2");
    creado.innerHTML = nueva_fila;
    var creado = document.getElementById("name_project3");
    creado.innerHTML = nueva_fila;
    var creado = document.getElementById("name_project4");
    creado.innerHTML = nueva_fila;
    var creado = document.getElementById("name_project5");
    creado.innerHTML = nueva_fila;
}

function st_detailed_req(tabla){
    
    var i;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper";
    var clase2 = "table table-striped table-bordered table-hover";
    var id1 = "dataTables-example00";
    var nueva_fila = '<div class="'+clase1+'">'
	+'<table class="'+clase2+'" id="'+id1+'">'
	+' <thead>'
	+' <tr>'
	+' <th>Requirement ID</th>'
	+' <th>Parameter</th>'
	+'<th>Tests</th>'
	+' <th>Status</th>'
	+' <th>SRC</th>'
	+'<th>CSV</th>'
	+' </tr>'
	+' </thead>'
	+'<tbody>';
    
    for(i=((tabla.length)-1); i>0; i--){
	
	if(tabla[i][0]=="TEST" || flag == 1){
	    flag = 1;
	    if(tabla[i][0]=="TEST")
	    {
		i-=1;
	    }
	    if(tabla[i][0]=="LABEL"){
		flag = 0;
	    }
	    if((i%2==0) && flag==1){
		nueva_fila +=  	'<tr class="'+even+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][2]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][3]+'</td>';
		
		if(tabla[i][8] == "0"){
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][4]+'</td>';
		}
		else if(tabla[i][8] == "1"){
		    nueva_fila += '<td class="center celda_centrada celda_naranja">'+tabla[i][4]+'</td>';
		}
		else if(tabla[i][8] == "2"){
		    nueva_fila += '<td class="center celda_centrada celda_verde">'+tabla[i][4]+'</td>';
		}
		else{
		     nueva_fila += '<td class="center celda_centrada">'+tabla[i][4]+'</td>';
		}

		
		if(tabla[i][5] != "")
		{
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][5]+'</td>';
		}
		else{
		    nueva_fila += '<td class="center celda_centrada">'+tabla[i][5]+'</td>';
		}
		if(tabla[i][6] != ""){
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][6]+'</td>';
		}
		else{
		    nueva_fila += '<td class="center celda_centrada">'+tabla[i][6]+'</td>';
		}
		nueva_fila +='</tr>'; 
	    }
	    else if((i%2!=0) && flag==1){
		nueva_fila +=  	'<tr class="'+odd+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][2]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][3]+'</td>';
		if(tabla[i][8] == "0"){
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][4]+'</td>';
		}
		else if(tabla[i][8] == "1"){
		    nueva_fila += '<td class="center celda_centrada celda_naranja">'+tabla[i][4]+'</td>';
		}
		else if(tabla[i][8] == "2"){
		    nueva_fila += '<td class="center celda_centrada celda_verde">'+tabla[i][4]+'</td>';
		}
		else{
		     nueva_fila += '<td class="center celda_centrada">'+tabla[i][4]+'</td>';
		}
		
		if(tabla[i][5] != "")
		{
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][5]+'</td>';
		}
		else{
		    nueva_fila += '<td class="center celda_centrada">'+tabla[i][5]+'</td>';
		}
		if(tabla[i][6] != ""){
		    nueva_fila += '<td class="center celda_centrada celda_roja">'+tabla[i][6]+'</td>';
		}
		else{
		    nueva_fila += '<td class="center celda_centrada">'+tabla[i][6]+'</td>';
		}
		nueva_fila +='</tr>'; 
	    }
	}
    }

    nueva_fila +=' </tbody>'
	+' </table>'
	+' </div>';
    
    var creado = document.getElementById("tabla_req");
    creado.innerHTML = nueva_fila;

    $('#dataTables-example00').DataTable({
	responsive: true
    });
}

function st_descript_req(tabla){

        var i;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper";
    var clase2 = "table table-striped table-bordered table-hover";
    var id1 = "dataTables-example7";
    var nueva_fila = '<div class="'+clase1+'">'
	+'<table class="'+clase2+'" id="'+id1+'">'
	+' <thead>'
	+' <tr>'
	+' <th>Requirement ID</th>'
	+' <th>Description</th>'
	+' </tr>'
	+' </thead>'
	+'<tbody>';
    
    for(i=((tabla.length)-1); i>0; i--){
	
	if(tabla[i][0]=="TEST" || flag == 1){
	    flag = 1;
	    if(tabla[i][0]=="TEST")
	    {
		i-=1;
	    }
	    if(tabla[i][0]=="LABEL"){
		flag = 0;
	    }
	    if((i%2==0) && flag==1){
		nueva_fila +=  	'<tr class="'+even+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][9]+'</td>';
		nueva_fila +='</tr>'; 
	    }
	    else if((i%2!=0) && flag==1){
		nueva_fila +=  	'<tr class="'+odd+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][9]+'</td>';
		nueva_fila +='</tr>'; 
	    }
	}
    }

    nueva_fila +=' </tbody>'
	+' </table>'
	+' </div>';
    
    var creado = document.getElementById("tabla_req_description");
    creado.innerHTML = nueva_fila;

    $('#dataTables-example7').DataTable({
	responsive: true
    });
}

function st_detailed_test(tabla){

    var i;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper";
    var clase2 = "table table-striped table-bordered table-hover";
    var id1 = "dataTables-example1";
    
    var nueva_fila = '<div class="'+clase1+'">'
	+ ' <table class="'+clase2+'" id="'+id1+'">'
	+'<thead>'
	+'<tr>'
	+'<th>Test</th>'
	+'<th>Status</th>'
	+'<th>CSV</th>'
	+'<th>SRC</th>'
	+' </tr>'
	+'</thead>'
	+'<tbody id="tbody_deta_test">';
    

    
    for(i=((tabla.length)-1); i>0; i--){
	
	if(tabla[i][0]=="TRACEABILITY_MATRIX" || flag == 1){
	    flag = 1;
	    if(tabla[i][0]=="TRACEABILITY_MATRIX")
	    {
		i -=1;
	    }
	    if(tabla[i][0]=="TEST"){
		flag = 0;
		i = 1;
	    }
	    if((i%2==0) && flag==1){
		nueva_fila +=  	'<tr class="'+even+'">'
		    + '<td>'+tabla[i][0]+'</td>';
		if(tabla[i][3] == "1"){
		    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][3]+'</td>';
		}
		else if(tabla[i][3] == "0"){
		    nueva_fila += '<td class="celda_naranja celda_centrada">'+tabla[i][3]+'</td>';
		}
		else if(tabla[i][3] == "ERROR"){
		    nueva_fila += '<td class="celda_roja celda_centrada">'+tabla[i][3]+'</td>';
		}
		nueva_fila += '<td class="celda_centrada">'+tabla[i][1]+'</td>'
		    + '<td class="center celda_centrada">'+tabla[i][2]+'</td>'
		    +'</tr>';
	    }
	    else if((i%2!=0) && flag==1){
		nueva_fila +=  	'<tr class="'+odd+'">'
		    + '<td>'+tabla[i][0]+'</td>';
		if(tabla[i][3] == "1"){
		    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][3]+'</td>';
		}
		else if(tabla[i][3] == "0"){
		    nueva_fila += '<td class="celda_naranja celda_centrada">'+tabla[i][3]+'</td>';
		}
		else if(tabla[i][3] == "ERROR"){
		    nueva_fila += '<td class="celda_roja celda_centrada">'+tabla[i][3]+'</td>';
		}
		nueva_fila += '<td class="celda_centrada">'+tabla[i][1]+'</td>'
		    + '<td class="center celda_centrada">'+tabla[i][2]+'</td>' 
		    +'</tr>';
	    }
	}
    }
    
    nueva_fila += '</tbody>'
	+' </table>'
	+'</div>';
    
    var creado = document.getElementById("tabla_test");
    creado.innerHTML = nueva_fila;
    $('#dataTables-example1').DataTable({
	responsive: true
    });
}

function st_detailed_files(tabla){
    
    var i=0;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper";
    var clase2 = "table table-striped table-bordered table-hover";
    var id1 = "dataTables-example2";
    
    var nueva_fila = '<div class="'+clase1+'">'
	+' <table class="'+clase2+'" id="'+id1+'">'
	+'<thead>'
	+' <tr>'
	+'<th>Requirement ID</th>'
	+'<th>File Path</th>'
	+' </tr>'
	+'</thead>'
	+'<tbody>';
    

    
    for(i=((tabla.length)-1); i>0; i--){
	
	if(tabla[i][0]=="TEST" || flag == 1)
	{
	    flag = 1;
	    if(tabla[i][0]=="TEST")
	    {
		i-=1;
	    }
	    if(tabla[i][0]=="LABEL")
	    {
		flag = 0;
		i = 1;
	    }
	    if((i%2==0) && flag==1)
	    {
		nueva_fila +=  	'<tr '+'class="'+even+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][7]+'</td>'
		    +'</tr>';
		
	    }
	    else if((i%2!=0) && flag==1)
	    {
		nueva_fila +=  	'<tr '+'class="'+odd+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][7]+'</td>'
		    +'</tr>';
		
	    }
	}
    }

    nueva_fila += '</tbody>'
	+'</table>'
	+'</div>';

    var creado = document.getElementById("tabla_files");
    creado.innerHTML = nueva_fila;
    $('#dataTables-example2').DataTable({
	responsive: true
    });
}  

function st_detailed_files_csv(tabla){
    
    var i=0;
    var flag = 1;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper";
    var clase2 = "table table-striped table-bordered table-hover";
    var id1 = "dataTables-example3";
    
    var nueva_fila = '<div class="'+clase1+'">'
	+' <table class="'+clase2+'" id="'+id1+'">'
	+'<thead>'
	+' <tr>'
	+'<th>Requirement ID</th>'
	+'<th>CSV File Path</th>'
	+' </tr>'
	+'</thead>'
	+'<tbody>';
        
    for(i=((tabla.length)-1); i>0; i--){
	
	if(flag == 1)
	{
	    if(tabla[i][0]=="")
	    {
		i-=1;
	    }
	    if(tabla[i][0]=="FILES_CSV_REQ")
	    {
		flag = 0;
		i = 1;
	    }
	    if((i%2==0) && flag==1)
	    {
		nueva_fila +=  	'<tr '+'class="'+even+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][1]+'</td>'
		    +'</tr>';
		
	    }
	    else if((i%2!=0) && flag==1)
	    {
		nueva_fila +=  	'<tr '+'class="'+odd+'">'
		    + '<td>'+tabla[i][0]+'</td>'
		    + '<td class="celda_centrada">'+tabla[i][1]+'</td>'
		    +'</tr>';
		
	    }
	}
    }

    nueva_fila += '</tbody>'
	+'</table>'
	+'</div>';

    var creado = document.getElementById("tabla_files_csv");
    creado.innerHTML = nueva_fila;
    $('#dataTables-example3').DataTable({
	responsive: true
    });
}  


function st_summary(tabla){
    
    //Las siguientes lineas para las cajas resumen
    req = '<div class="huge">'+tabla[1][1]+'</div>'+'<div>Requirements</div>';
    var nueva = document.createElement("div");
    var creado = document.getElementById("number_req").appendChild(nueva);
    creado.innerHTML = req;
    
    test = '<div class="huge">'+tabla[1][2]+'</div>'+'<div>Tests</div>';
    nueva = document.createElement("div");
    creado = document.getElementById("number_test").appendChild(nueva);
    creado.innerHTML = test;
    
    src = '<div class="huge">'+tabla[1][3]+'</div>'+'<div>Source Files</div>';
    nueva = document.createElement("div");
    creado = document.getElementById("number_src").appendChild(nueva);
    creado.innerHTML = src;
    
    csv = '<div class="huge">'+tabla[1][4]+'</div>'+'<div>Requirements Files</div>';
    nueva = document.createElement("div");
    creado = document.getElementById("number_csv").appendChild(nueva);
    creado.innerHTML = csv;
    
    //Las siguientes lineas para las barras de estado
    var status_test = tabla[2][2];
    var status_req = tabla[2][1];
    var status_global = tabla[2][0]
    
    var p_global = '<p>'
	+    '<strong>Global State of the Project</strong>'
	+    '<span class="pull-right text-muted">'+status_global+'% Complete</span>'
	+  '</p>';
    nueva = document.createElement("p");
    creado = document.getElementById("global_state").appendChild(nueva);
    creado.innerHTML = p_global;
    
    var p_req = '<p>'
	+    '<strong>Implementation State</strong>'
	+    '<span class="pull-right text-muted">'+status_req+'% Complete</span>'
	+  '</p>';
    nueva = document.createElement("p");
    creado = document.getElementById("implementation_state").appendChild(nueva);
    creado.innerHTML = p_req;  
    
    var p_test = '<p>'
	+    '<strong>Test State</strong>'
	+    '<span class="pull-right text-muted">'+status_test+'% Complete</span>'
	+  '</p>';  
    nueva = document.createElement("p");
    creado = document.getElementById("test_state").appendChild(nueva);
    creado.innerHTML = p_test;
    
    //Barra estado global
    if(status_global<=20){
	var barra_global =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja" role="progressbar" aria-valuenow="'+status_global+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_global+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'
    }
    else if((status_global>20)&&(status_global<=40)){
	var barra_global =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja_naran" role="progressbar" aria-valuenow="'+status_global+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_global+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'    
    }
    else if((status_global>40)&&(status_global<=60)){
	var barra_global =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naranja" role="progressbar" aria-valuenow="'+status_global+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_global+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'    
    }
    else if((status_global>60)&&(status_global<=80)){
	var barra_global =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naran_verde" role="progressbar" aria-valuenow="'+status_global+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_global+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'    
    }
    else if(status_global>80){
	var barra_global =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+status_global+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_global+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'    
    }
    
    nueva = document.createElement("div");
    creado = document.getElementById("global_state").appendChild(nueva);
    creado.innerHTML = barra_global;
    
    //Barra estado req
    if(status_req<=20){
	var barra_req =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja" role="progressbar" aria-valuenow="'+status_req+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_req+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'
    }
    else if((status_req>20)&&(status_req<=40)){
	var barra_req =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja_naran" role="progressbar" aria-valuenow="'+status_req+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_req+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'
    }
    else if((status_req>40)&&(status_req<=60)){
	var barra_req =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naranja" role="progressbar" aria-valuenow="'+status_req+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_req+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'  
	
    }
    else if((status_req>60)&&(status_req<=80)){
	var barra_req =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naran_verde" role="progressbar" aria-valuenow="'+status_req+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_req+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'    
    }
    else if(status_req>80){
	var barra_req =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+status_req+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_req+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'
    }
    
    nueva = document.createElement("div");
    creado = document.getElementById("implementation_state").appendChild(nueva);
    creado.innerHTML = barra_req;
    
    //Barra estado test
    if(status_test<=20){
	var barra_test =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja" role="progressbar" aria-valuenow="'+status_test+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_test+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'  
    }
    else if((status_test>20)&&(status_test<=40)){
	var barra_test =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_roja_naran" role="progressbar" aria-valuenow="'+status_test+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_test+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'  
    }
    else if((status_test>40)&&(status_test<=60)){
	var barra_test =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naranja" role="progressbar" aria-valuenow="'+status_test+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_test+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'  
	
    }
    else if((status_test>60)&&(status_test<=80)){
	var barra_test =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar barra_naran_verde" role="progressbar" aria-valuenow="'+status_test+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_test+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'     
    }
    else if(status_test>80){
	var barra_test =   '<div class="progress progress-striped active">'
	    +   '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+status_test+'" aria-valuemin="0" aria-valuemax="100" style="width: '+status_test+'%">'
	    +	  '<span class="sr-only">40% Complete (success)</span>'
	    +   '</div>'
	    +'</div>'  
    }
    
    nueva = document.createElement("div");
    creado = document.getElementById("test_state").appendChild(nueva);
    creado.innerHTML = barra_test;
    
} 

function mat_te_re(tabla){

    var i=0;
    var j=0;
    var cabecera = 1;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper inner";
    var clase2 = "table table-striped table-bordered table-hover";
    var clase3 = "panel-body outer";
    
    var nueva_fila ='<div class="'+clase3+'">'
	+'<div class="'+clase1+'">'
	+'<table class="'+clase2+'">';
    
    for(i=0;i<tabla.length; i++)
    {	
	if(tabla[i][0]== "TEST_MATRIX" || flag == 1)
	{
	    if(tabla[i][0]=="TEST_MATRIX")
	    {
		i+=1;
		flag=1;
	    }
	    if(tabla[i][0] == "FILES_CSV_REQ"){
		flag = 0;
		i = tabla.length-1;
	    }
	    if((i%2==0) && (flag==1) && (cabecera==0))
	    {
		nueva_fila +=  	'<tr '+'class="'+even+'">';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			if(tabla[i][j] == "X"){
			    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][j]+'</td>';
			}
			else if(tabla[i][j] == "-"){
			    nueva_fila += '<td class="celda_centrada">'+tabla[i][j]+'</td>';
			}
			else{
			    nueva_fila += '<td>'+tabla[i][j]+'</td>';
			}
		    }
		}
		nueva_fila +='</tr>';
	    }
	    else if((i%2!=0) && (flag==1) && (cabecera==0))
	    {
		nueva_fila +=  	'<tr '+'class="'+odd+'">';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			if(tabla[i][j] == "X"){
			    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][j]+'</td>';
			}
			else if(tabla[i][j] == "-"){
			    nueva_fila += '<td class="celda_centrada">'+tabla[i][j]+'</td>';
			}
			else{
			    nueva_fila += '<td>'+tabla[i][j]+'</td>';
			}
		    }
		}
		nueva_fila +='</tr>';		
	    }
	    if((flag==1) && (cabecera==1))
	    {
		nueva_fila += '<thead>'
		    + '<tr>';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			nueva_fila += '<th>'+tabla[i][j]+'</th>';
		    }
		}
		nueva_fila +='</tr>'
		    +'</thead>'
		    +'<tbody>';
		cabecera = 0;
	    }
	}
    }

    nueva_fila += '</tbody>'
	+'</table>'
    	+'</div>'
	+'</div>';
    
    var creado = document.getElementById("rete");
    creado.innerHTML = nueva_fila;
}


function mat_re_pa(tabla){
    
    var i=0;
    var j=0;
    var cabecera = 1;
    var flag = 0;
    var even = "even gradeA";
    var odd = "odd gradeA";
    var clase1 ="dataTable_wrapper inner";
    var clase2 = "table table-striped table-bordered table-hover";
    var clase3 = "panel-body outer";
    
    var nueva_fila ='<div class="'+clase3+'">'
	+'<div class="'+clase1+'">'
	+'<table class="'+clase2+'">';
    
    for(i=0;i<tabla.length; i++)
    {	
	if(tabla[i][0]== "TRACEABILITY_MATRIX" || flag == 1)
	{
	    if(tabla[i][0]=="TRACEABILITY_MATRIX")
	    {
		i+=1;
		flag=1;
	    }
	    if(tabla[i][0]=="TEST_MATRIX")
	    {
		flag = 0;
		i = tabla.length-1;
	    }
	    if((i%2==0) && (flag==1) && (cabecera==0))
	    {
		nueva_fila +=  	'<tr '+'class="'+even+'">';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			if(tabla[i][j] == "X"){
			    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][j]+'</td>';
			}
			else if(tabla[i][j] == "-"){
			    nueva_fila += '<td class="celda_centrada">'+tabla[i][j]+'</td>';
			}
			else{
			    nueva_fila += '<td>'+tabla[i][j]+'</td>';
			}
		    }
		}
		nueva_fila +='</tr>';
	    }
	    else if((i%2!=0) && (flag==1) && (cabecera==0))
	    {
		nueva_fila +=  	'<tr '+'class="'+odd+'">';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			if(tabla[i][j] == "X"){
			    nueva_fila += '<td class="celda_verde celda_centrada">'+tabla[i][j]+'</td>';
			}
			else if(tabla[i][j] == "-"){
			    nueva_fila += '<td class="celda_centrada">'+tabla[i][j]+'</td>';
			}
			else{
			    nueva_fila += '<td>'+tabla[i][j]+'</td>';
			}
		    }
		}
		nueva_fila +='</tr>';		
	    }
	    if((flag==1) && (cabecera==1))
	    {
		nueva_fila += '<thead>'
		    + '<tr>';
		for(j=0;j<tabla[i].length;j++)
		{
		    if(tabla[i][j]!=""){
			nueva_fila += '<th>'+tabla[i][j]+'</th>';
		    }
		}
		nueva_fila +='</tr>'
		    +'</thead>'
		    +'<tbody>';
		cabecera = 0;
	    }
	}
    }

    nueva_fila += '</tbody>'
	+'</table>'
    	+'</div>'
	+'</div>';
    
    var creado = document.getElementById("repa");
    creado.innerHTML = nueva_fila;
}
  
  
  
  
  
  
  
  
  
  
  

  
