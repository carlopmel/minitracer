function muestra_inicio(){
  
  var bloque1 = document.getElementById("inicio");
  bloque1.style.display="block";
  
  var bloque2 = document.getElementById("paginas");
  bloque2.style.display="none";
    
}

function muestra_summary(){
    
    var bloque1 = document.getElementById("inicio");
    bloque1.style.display="none";
    
    var bloque2 = document.getElementById("paginas");
    bloque2.style.display="block";  
    
    var summary = document.getElementById("st_summary");
    summary.style.display="block";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";  
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_detail_req(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="block";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";   
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_detail_test(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="block";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";  
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_detail_files(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="block";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";  
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_detail_files_csv(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="block";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}


function muestra_mat_te_re(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="block";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";  
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_mat_re_pa(){
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="block";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";  
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  

    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_add_req(){
    
    var bloque1 = document.getElementById("inicio");
    bloque1.style.display="none";
    
    var bloque2 = document.getElementById("paginas");
    bloque2.style.display="block";
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="block";
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  
  
    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="none";
}

function muestra_descript_req(){
    
    var bloque1 = document.getElementById("inicio");
    bloque1.style.display="none";
    
    var bloque2 = document.getElementById("paginas");
    bloque2.style.display="block";
    
    var summary = document.getElementById("st_summary");
    summary.style.display="none";
    
    var st_req = document.getElementById("st_detailed_req");
    st_req.style.display="none";
    
    var st_test = document.getElementById("st_detailed_test");
    st_test.style.display="none";
    
    var st_files = document.getElementById("st_detailed_files");
    st_files.style.display="none";  
    
    var mat_te_re = document.getElementById("mat_te_re");
    mat_te_re.style.display="none";
    
    var mat_re_pa = document.getElementById("mat_re_pa");
    mat_re_pa.style.display="none";
    
    var add_req = document.getElementById("add_req");
    add_req.style.display="none";
    
    var st_files_csv = document.getElementById("st_detailed_file_csv");
    st_files_csv.style.display="none";  
  
    var st_descript_req = document.getElementById("st_descript_req");
    st_descript_req.style.display="block";
}
