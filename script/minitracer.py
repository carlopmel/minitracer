#!/usr/bin/python
# -*- coding: utf-8 -*-

import os, sys, stat, csv, string, re
import numpy as np
import lib_minitracer as mini
from stat import *

if __name__ == '__main__':

    try:
        #Declaracion de variables (listas)
        paths_csv = []
        paths_src = []
        traceability_matrix = []
        project_namecsv = []
        #Declaracion de variables (diccionario)
        reqcsv = {}
        typecsv = {}
        paramcsv = {}
        testcsv = {}
        pathcsv = {}
        descriptcsv = {}
        reqsrc = {}
        compared_csv = {}
        compared_src = {}
        compared_pathInCsv = {}
        compared_pathNotInCsv = {}
        result_test = {} #Almacena el resultados de todos los tests o error
        result_test_missing = {} #Almacena los test que no estan definidos en CSV
        result_test_missing_project = {} # Almacena test que faltan en project
        status_tests = {} #Almacena el numero de test pasados de cada requisito
        flag_status_test = {} #Bandera para codigo de colores en pagina web
        #Declaracion variables enteras
        number_test = 0
        number_req = 0
        number_global = 0
        cont_porcentaje_req = 0
        porcentaje_req = 0
        porcentaje_test = 0
        porcentaje_global = 0
        num_paths_csv = 0
        num_paths_src = 0

        #Lista que contiene las palabras reservadas para los test
        # @Req Test_reservados
        test_reservados = {'MINITRACER_MANUAL' : 0 , 'MINITRACER_PASS' : 1 ,'MINITRACER_FAIL' : 0}

        #Leemos argumentos de entrada
        # @Req Arg_linea_comand
        archivos_csv = sys.argv[1]
        archivos_src = sys.argv[2]
        project_path = sys.argv[3]

        if archivos_csv == archivos_src:
            raise IndexError ('Invalid input')

        #Generamos el path del archivo de resultados
        
        archivo_resultados = project_path+'re_minitracer.csv'

        #Generamos el path del archivo con los resultados de los tests
        
        test_file_path = project_path+"Testing/Temporary/CTestCostData.txt"

        #Leemos los archivos de entrada y guardamos los paths
        #en listas
        # @Req Fichero_path_csv
        paths_csv = mini.open_path_files(archivos_csv)
        # @Req Fichero_path_src
        paths_src = mini.open_path_files(archivos_src)
        
        num_paths_csv = len(paths_csv)
        num_paths_src = len(paths_src)
        #Abrimos los archivso csv y guardamos campos en diccionarios
        # @Req Busca_req_csv
        reqcsv, typecsv, paramcsv, testcsv, project_namecsv, pathcsv, descriptcsv = mini.open_csv_files(paths_csv)
        
        #Funcion que comprueba que todos los project_namecsv son el mismo
        #para prevenir introducir requisitos de distintos proyectos

        # @Req Mismo_project
        sameProjectName =  mini.sameProjectName(project_namecsv)

        #Abrimos los archivos src, buscamos los requisitos y los 
        #guardamos en diccionarios junto con el archivo donde se
        #encuentran
        # @Req Busca_req_src
        reqsrc = mini.open_src_files(paths_src)

        #Comparamos reqcsv con reqsrc para veer que requisitos estan y no
        #en el proyecto o en el csv. Ademas decimos en que archivo se
        #encuentran los req encontrados en el proyecto

        # @Req Compara_resultados
        compared_csv,compared_src,compared_pathInCsv,compared_pathNotInCsv,cont_porcentaje_req = mini.compare(reqcsv, reqsrc)

        #Buscamos el resultado de los tests que se han pasado al proyecto

        # @Req Consulta_test
        result_test, result_test_missing, result_test_missing_project, number_test, porcentaje_test, status_tests, flag_status_test = mini.search_test(test_file_path,testcsv,test_reservados)

        #Calculamos el numero de requisitos totales y el global de test+req

        # @Req Calculo_estado_proyecto
        number_req = len(reqcsv)+len(compared_src)
        number_global = number_req + number_test
        porcentaje_req = (cont_porcentaje_req*100)/number_req
        porcentaje_global = ((cont_porcentaje_req+((porcentaje_test*number_test)/100))*100)/number_global        
        
        #Generamos matriz de trazabilidad

        # @Req Matriz_req_path
        traceability_matrix = mini.gen_matrix(reqsrc, paths_src)

        #Generamos matriz de test

        # @Req Matriz_req_test
        test_matrix = mini.gen_matrix(testcsv, result_test.keys())

        #Escribimos el fichero CSV de salida

        # @Req Genera_csv_out
        mini.write_file(archivo_resultados, project_namecsv, reqcsv, typecsv, paramcsv, testcsv,pathcsv,compared_csv, compared_src, compared_pathInCsv, compared_pathNotInCsv, result_test, result_test_missing, result_test_missing_project, traceability_matrix, test_matrix, number_test,number_req,number_global, porcentaje_global, porcentaje_req,porcentaje_test, status_tests, num_paths_csv, num_paths_src, flag_status_test, descriptcsv)

        # @Req Gestion_error_input
    except IndexError:
        print("Unexpected error: ", sys.exc_info()[0])
        print "\nError on input arguments"
        print "Input example: \n\t ./<PROGRAM_NAME> <FILE_WITH_REQ_PATHS> <FILE_WITH_SRC_PATHS> <PROJECT_PATH>\n"
    except:
        print("Unexpected error: ", sys.exc_info()[0])
        raise




