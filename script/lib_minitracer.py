#!/usr/bin/python
# -*- coding: utf-8 -*-

import os, sys, stat, csv, string, re
import numpy as np
from stat import *

class ProjectNameError(Exception):
    
    pass

class TestSrcNameError(Exception):
    
    pass


def open_path_files(input_files):

    try:
        
        #Abrimos los archivos pasados como argumentos de entrada
        #para leer los path de los archivos de proyecto

        paths = []
      
        archivo = open(input_files, 'rb')
        contenido = archivo.readlines()
      
        #Quitamos el \n de final de linea
        for i in contenido:
            paths.append(i.rstrip("\n"))
        
    except:
        raise IndexError('Invalid input arguments')
    
    return paths

def open_csv_files(csv_files):

    try:
        #Definimos variables
        reqcsv = {}
        typecsv = {}
        paramcsv = {}
        testcsv = {}
        pathcsv = {}
        descriptcsv = {}
        project_name = []
        linea = 1

        #Abrimos el archivo csv y separamos su contenido en columnas

        for ruta in csv_files:            
            with open(ruta, 'rb') as csvfile:
                spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
                linea = 1
                for row in spamreader:
                    #Asignamos a los diccionaros clave:valor --> ReqId:ReqId
                                                          ## --> ReqId:Test
                                                          ## --> ReqId:type
                                                          ## --> ReqId:param
                 
                    if linea == 1:
                        project_name.append(row[1])
                    elif linea == 2:
                        None
                    else:
                        pathcsv[row[0]] = ruta
                        reqcsv[row[0]] = row[0]
                        testcsv[row[0]] = row[4]
                        typecsv[row[0]] = row[1]
                        paramcsv[row[0]] = row[2]
                        descriptcsv[row[0]] = row[3]
                    linea += 1
   
        
    except IOError:
        print("Error in open_csv_files: File "+ruta+" not found")
        print("Write complete path")
    except OSError as err:
        print("OS error in open_csv_files: {0}".format(err))
    except ValueError:
        print("Error in open_csv_files: Could not convert data to an integer.")
    except:
        raise

    return reqcsv, typecsv, paramcsv, testcsv, project_name, pathcsv, descriptcsv

def sameProjectName(project_name):

    try:
        same_names = False
        for i in range(len(project_name)):
            if i == 0:
                None
            elif project_name[i] == project_name[i-1]:
                same_names = True
            else:
                raise ProjectNameError ('Los ficheros CSV incluidos tienen diferente nombre de proyecto')
    except ProjectNameError:
        print "Error in \"Project_Name\" field in CSV files"
        
    return same_names

def open_src_files(src_files):

    try:
        aux = {}
        reqsrc = {}
        for ruta in src_files:
            srcfile = open(ruta, 'rb')
            contenido = srcfile.readlines()
            aux = search_req(contenido,ruta)
            for req in aux.keys():
                reqsrc[req] = aux[req]
            srcfile.close()
    except IOError:
        print("Error in open_src_files: File "+ruta+" not found")
        print("Write complete path")        
    except OSError as err:
        print("OS error in open_src_files: {0}".format(err))
    except ValueError:
        print("Error in open_src_files: Could not convert data to an integer.")
    except:
        print("Unexpected error in open_src_files: ", sys.exc_info()[0])
        raise
    
    return reqsrc
    
def search_req(file_content,rutas_archivos):
    
    reqsrc = {}
    aux = []
    
    for line in file_content:
       aux = re.search( r'[@,\\][R,r][E,e][Q,q]\s+([\S, ]+)', line)
       if aux != None:
          reqsrc[aux.group(1)] = rutas_archivos

    return reqsrc 

def compare(reqcsv, reqsrc):

    try:
        final_csv = {}
        final_src = {}
        final_pathInCsv = {}
        final_pathNotInCsv = {}
        cont_porcentaje_req = 0

        for req in reqcsv.keys():
            # @Req Gestion_req
            if req in reqsrc.keys():
                final_csv[req] = None
                final_pathInCsv[req] = reqsrc[req]
                cont_porcentaje_req +=1
            else:
                final_csv[req] = 'Req missing in project'
                final_pathInCsv[req] = 'Req not found in source files'

        for req in reqsrc.keys():
            if req not in reqcsv.keys():
                final_src[req] = 'Req missing in CSV'
                final_pathNotInCsv[req] = reqsrc[req]

    except IndexError:
        print("Index out of range in compare")
    except:
        print("Unexpected error in compare: ", sys.exc_info()[0])
        raise
    
    return final_csv,final_src,final_pathInCsv,final_pathNotInCsv, cont_porcentaje_req

def search_test(test_file_path,testcsv, test_reservados):

   try:
       resultado = {}
       resultado_missing = {}
       resultado_missing_project = {}
       flag_status_test = {}
       number_test = 0
       cont_porcentaje_test = 0
       
       testfile = open(test_file_path, 'rb')
       contenido = testfile.readlines()
       resultado, resultado_missing, resultado_missing_project,number_test,cont_porcentaje_test, status_tests, flag_status_test = check_test(contenido,testcsv, test_reservados)
       testfile.close()
   except IOError:
       print("Error in search_test: File "+test_file_path+" not found")
   except OSError as err:
       print("OS error in search_test:: {0}".format(err))
   except ValueError:
       print("Error in search_test: Could not convert data to an integer.")
   except:
       print("Unexpected error in search_test: ", sys.exc_info()[0])
       raise
  
   return resultado, resultado_missing, resultado_missing_project, number_test, cont_porcentaje_test, status_tests, flag_status_test

def check_test(content, testcsv, test_reservados):
   
    try:    
        result_test_aux = {}
        result_test = {}
        result_test_missing = {}
        result_test_missing_project = {}
        status_tests = {}
        flag_status_test = {}
        name_test=[]
        status_test=[]
        testcsv_separados = []
        test_parte1 = []
        test_parte2 = []
        number_test = 0
        porcentaje_test = 0
        i = 0
      
        for line in content:
            aux = re.search( r'(\S+)\s([0,1])\s', line)
            if aux != None:
                name_test.append(aux.group(1))
                status_test.append(aux.group(2))

        for i in range(len(name_test)):
            result_test_aux[name_test[i]] = status_test[i]
            
        for i in testcsv:
            aux = testcsv[i].split(" ")
            testcsv_separados+=aux
       
        number_test = len(testcsv_separados)
   
        for i in testcsv_separados:
            # @Req Gestion_test
            if (i in result_test_aux) and (i not in test_reservados):
                result_test[i] = result_test_aux[i]
                result_test_missing_project[i] = 'Test in project'
                result_test_missing[i] = 'Test in CSV'
            elif i in test_reservados.keys():
                result_test[i] = test_reservados[i]
                result_test_missing_project[i] = 'Reserved Test'
                result_test_missing[i] = 'Test in CSV'
            else:
                result_test[i] = 'ERROR'
                result_test_missing_project[i] = 'Test missing in project'
                result_test_missing[i] = 'Test in CSV'
        
        for i in result_test_aux:
            if i not in testcsv_separados:
                number_test += 1
                result_test_missing[i] = 'Test missing in CSV'
                result_test[i] = result_test_aux[i]
                result_test_missing_project[i]= 'Test in project'
        

        status_tests, porcentaje_test, flag_status_test = estado_tests_csv(testcsv,result_test,number_test)
       
        for i in test_reservados:
            if i in result_test_aux:
                # @Req Error_test_reservado
                raise TestSrcNameError('Test reservados dentro de archivos de proyecto')

    except TestSrcNameError:
        print "Error on \"Test_Name\" in your project. If your have tests with any of the next reserved names, please change them  \n\t MINITRACER_PASS \n\t MINITRACER_FAIL \n\t"
            
    return result_test, result_test_missing, result_test_missing_project, number_test, porcentaje_test, status_tests, flag_status_test

def estado_tests_csv(testcsv, result_test, number_test):

    contador_pass = 0
    contador_pass_global = 0
    status_test = {}
    flag_status_test = {}
    porcentaje_test = 0
    
    for i in testcsv:
        aux = testcsv[i].split(" ")
        for j in aux:
            if j in result_test:
                if result_test[j] == '1':
                    contador_pass += 1
                    contador_pass_global += 1
                elif j == 'MINITRACER_PASS':
                    contador_pass +=1
                    contador_pass_global +=1
                    
        status_test[i]=str(contador_pass)+' de '+str(len(aux))
        if(contador_pass == '0'):
            flag_status_test[i] = '0'
        elif((contador_pass != '0') and (contador_pass < len(aux))):
            flag_status_test[i] = '1'
        elif(contador_pass == len(aux)):
            flag_status_test[i] = '2'
        
        contador_pass = 0

    porcentaje_test = (contador_pass_global*100)/number_test
    
    return status_test, porcentaje_test, flag_status_test

def gen_matrix(dictionary,rutas):

    try:
        path = []
        path_aux = []
        newrow = []
        columnas_path = []
        columnas_path_aux = []
        columnas_path_aux1 = []
        matriz = []
        posicion = 0
        longitud = 0
        primeraVez = 1
    
        columnas_path = rutas
        longitud = len(columnas_path)
       
        for req in dictionary.keys():
            path_aux = dictionary[req]
            path = path_aux.split(None)
            primeraVez = 1
            for j in path:
                posicion = 0
                if primeraVez == 1:
                    while posicion < longitud:
                        primeraVez = 0
                        if j == columnas_path[posicion]:
                            newrow.insert(posicion,"X")
                        else:
                            newrow.insert(posicion, "-")
                        posicion += 1
                else:
                    while posicion < longitud:
                        if j == columnas_path[posicion]:
                            newrow.pop(posicion)
                            newrow.insert(posicion,"X")
                        else:
                            newrow.pop(posicion)
                            newrow.insert(posicion, "-")
                        posicion += 1
            newrow.insert(0, req)
            matriz.append(newrow)
            newrow = []
            
        columnas_path.insert(0, "###")
        matriz.insert(0,columnas_path)

    except:
        print("Unexpected error in gen_matrix: ", sys.exc_info()[0])
        raise
    
    return matriz

def write_file(path_resultados, project_namecsv, reqcsv, typecsv, paramcsv, testcsv, pathcsv, compared_csv, compared_src, compared_pathInCsv, compared_pathNotInCsv, result_test, result_test_missing, result_test_missing_project, traceability_matrix, test_matrix,number_test,number_req,number_global,porcentaje_global, porcentaje_req,porcentaje_test, status_tests, num_paths_csv, num_paths_src, flag_status_test, descriptcsv):

    try:
        project_name = {}
        with open(path_resultados, 'w') as csvfile:

            fieldnames0 = ['TITULO','PROJECT_NAME']
            project_name['TITULO'] = 'PROJECT_NAME'
            project_name['PROJECT_NAME'] = project_namecsv[0]
            writer = csv.DictWriter(csvfile,fieldnames=fieldnames0)
            # @Req Escribe_nombre_proyecto
            writer.writerow({'TITULO': project_name['TITULO'],'PROJECT_NAME': project_name['PROJECT_NAME']}) 

            aux = [number_global,number_req,number_test,num_paths_src,num_paths_csv]
            writer = csv.writer(csvfile)
            writer.writerow(aux)
            aux1 = [porcentaje_global,porcentaje_req,porcentaje_test]
            writer = csv.writer(csvfile)
            writer.writerow(aux1)
            
            fieldnames1 = ['LABEL', 'TYPE', 'PARAMETER', 'TEST','TEST_PASSED', 'REQ_PROJECT', 'REQ_CSV', 'PATH', 'FLAG_STATUS_TEST', 'DESCRIPCION']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames1)

            # @Req Escribe_resultado_req
            writer.writeheader()
            for i in reqcsv.keys():
                writer.writerow({'LABEL': reqcsv[i], 'TYPE': typecsv[i],'PARAMETER': paramcsv[i], 'TEST': testcsv[i],'TEST_PASSED': status_tests[i], 'REQ_PROJECT': compared_csv[i],'REQ_CSV': None, 'PATH':compared_pathInCsv[i], 'FLAG_STATUS_TEST' : flag_status_test[i], 'DESCRIPCION': descriptcsv[i]})
                
            for i in compared_src.keys():
                writer.writerow({'LABEL': i, 'TYPE': None,'PARAMETER': None, 'TEST': None,'TEST_PASSED': None, 'REQ_PROJECT': None,'REQ_CSV': compared_src[i], 'PATH': compared_pathNotInCsv[i], 'FLAG_STATUS_TEST' : None, 'DESCRIPCION': None})
                    
                    
            fieldnames2 = ['TEST','TEST_CSV','TEST_PROJECT','TEST_RESULT']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames2)
            writer.writeheader()

            # @Req Escribe_resultado_test
            for i in result_test.keys():
                writer.writerow({'TEST': i, 'TEST_CSV':result_test_missing[i],'TEST_PROJECT': result_test_missing_project[i], 'TEST_RESULT': result_test[i]})

            # @Req Escribe_matrices
            fieldnames3= ['TRACEABILITY_MATRIX']
            writer = csv.writer(csvfile)
            writer.writerow(fieldnames3)
            
            for row in traceability_matrix:
                writer.writerow(row)

            fieldnames4= ['TEST_MATRIX']
            writer = csv.writer(csvfile)
            writer.writerow(fieldnames4)
            
            for row in test_matrix:
                writer.writerow(row)

            fieldnames5= ['FILES_CSV_REQ','FILES_CSV']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames5)
            writer.writeheader()
            
            for i in pathcsv.keys():
                writer.writerow({'FILES_CSV_REQ': i, 'FILES_CSV': pathcsv[i]})
            
    except:
        print("Unexpected error in write_file: ", sys.exc_info()[0])
        raise


    
