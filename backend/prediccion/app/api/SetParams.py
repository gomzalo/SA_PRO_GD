from flask import Blueprint, redirect, url_for, request, jsonify, Flask
from flask.json import jsonify
from flask_cors import CORS, cross_origin
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn import base, linear_model
import base64
import json
from ast import literal_eval
import csv
# Import reportes
from api.Reportes.Reporte1 import reportar_1
from api.Reportes.Reporte2 import reportar_2
from api.Reportes.Reporte3 import reportar_3
from api.Reportes.Reporte4 import reportar_4
from api.Reportes.Reporte5 import reportar_5
from api.Reportes.Reporte6 import reportar_6
from api.Reportes.Reporte7 import reportar_7
from api.Reportes.Reporte8 import reportar_8
from api.Reportes.Reporte9 import reportar_9
from api.Reportes.Reporte10 import reportar_10
from api.Reportes.Reporte11 import reportar_11
from api.Reportes.Reporte12 import reportar_12
from api.Reportes.Reporte13 import reportar_13
from api.Reportes.Reporte14 import reportar_14
from api.Reportes.Reporte15 import reportar_15
from api.Reportes.Reporte16 import reportar_16
from api.Reportes.Reporte17 import reportar_17
from api.Reportes.Reporte18 import reportar_18
from api.Reportes.Reporte19 import reportar_19
from api.Reportes.Reporte20 import reportar_20
from api.Reportes.Reporte21 import reportar_21
from api.Reportes.Reporte22 import reportar_22
from api.Reportes.Reporte23 import reportar_23
from api.Reportes.Reporte24 import reportar_24
from api.Reportes.Reporte25 import reportar_25

# Import np and pd
import numpy as np
import pandas as pd

set_params = Blueprint('set_params', __name__)

rep_dict = {
    1: "Tendencia de la infección por Covid-19 en un País.",
    2: "Predicción de Infectados en un País.",
    3: "Indice de Progresión de la pandemia.",
    4: "Predicción de mortalidad por COVID en un Departamento.",
    5: "Predicción de mortalidad por COVID en un País.",
    6: "Análisis del número de muertes por coronavirus en un País.",
    7: "Tendencia del número de infectados por día de un País.",
    8: "Predicción de casos de un país para un año.",
    9: "Tendencia de la vacunación de en un País.",
    10: "Ánalisis Comparativo de Vacunaciópn entre 2 paises.",
    11: "Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo.",
    12: "Ánalisis Comparativo entres 2 o más paises o continentes.",
    13: "Muertes promedio por casos confirmados y edad de covid 19 en un País.",
    14: "Muertes según regiones de un país - Covid 19.",
    15: "Tendencia de casos confirmados de Coronavirus en un departamento de un País.",
    16: "Porcentaje de muertes frente al total de casos en un país, región o continente.",
    17: "Tasa de comportamiento de casos activos en relación al número de muertes en un continente.",
    18: "Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País.",
    19: "Predicción de muertes en el último día del primer año de infecciones en un país.",
    20: "Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19.",
    21: "Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor.",
    22: "Tasa de mortalidad por coronavirus (COVID-19) en un país.",
    23: "Factores de muerte por COVID-19 en un país.",
    24: "Comparación entre el número de casos detectados y el número de pruebas de un país.",
    25: "Predicción de casos confirmados por día."
}

@set_params.route("/set_params", methods = ["POST", "GET"])
@cross_origin()
def post():
    if request.method == "POST":
        reporte_key = request.json['reporte']
        reporte = rep_dict[reporte_key]
        col = request.json['col']
        valor = request.json['valor']
        x = request.json['x']
        y = request.json['y']
        is_date = request.json['isDate']
        # print("\nReporte: " + str(reporte_key) + " - " + reporte + "\nx: " + x + ", y: " + y + ", col: " + col + "\nvalor: " + valor + ", isDate: " + str(is_date) + '\n')
        # ** 1: "Tendencia de la infección por Covid-19 en un País."
        # :::::::::::::::::::  PARAMS REP 1    :::::::::::::::::::
        if reporte_key == 1:
            res_r1 = reportar_1(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 1 generado correctamente",
                'data': res_r1
            }
        # ** 2: "Predicción de Infectados en un País."
        # :::::::::::::::::::  PARAMS REP 2    :::::::::::::::::::
        elif reporte_key == 2:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r2 = reportar_2(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 2 generado correctamente",
                'data': res_r2
            }
        # ** 3: "Indice de Progresión de la pandemia."
        # :::::::::::::::::::  PARAMS REP 3    :::::::::::::::::::
        elif reporte_key == 3:
            # pred = request.json['pred']
            # print("pred: " + str(pred))
            res_r3 = reportar_3(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 3 generado correctamente",
                'data': res_r3
            }
        # ** 4: "Predicción de mortalidad por COVID en un Departamento."
        # :::::::::::::::::::  PARAMS REP 4    :::::::::::::::::::
        elif reporte_key == 4:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r4 = reportar_4(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 4 generado correctamente",
                'data': res_r4
            }
        # ** 5: "Predicción de mortalidad por COVID en un País."
        # :::::::::::::::::::  PARAMS REP 5    :::::::::::::::::::
        elif reporte_key == 5:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r5 = reportar_5(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 5 generado correctamente",
                'data': res_r5
            }
        # ** 6: "Análisis del número de muertes por coronavirus en un País."
        # :::::::::::::::::::  PARAMS REP 6    :::::::::::::::::::
        elif reporte_key == 6:
            # pred = request.json['pred']
            # print("pred: " + str(pred))
            res_r6 = reportar_6(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 6 generado correctamente",
                'data': res_r6
            }
        # ** 7: "Tendencia del número de infectados por día de un País."
        # :::::::::::::::::::  PARAMS REP 7    :::::::::::::::::::
        elif reporte_key == 7:
            res_r7 = reportar_7(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 7 generado correctamente",
                'data': res_r7
            }
        # ** 8: "Predicción de casos de un país para un año."
        # :::::::::::::::::::  PARAMS REP 8    :::::::::::::::::::
        elif reporte_key == 8:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r8 = reportar_8(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 8 generado correctamente",
                'data': res_r8
            }
        # ** 9: "Tendencia de la vacunación de en un País."
        # :::::::::::::::::::  PARAMS REP 9    :::::::::::::::::::
        elif reporte_key == 9:
            res_r9 = reportar_9(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 9 generado correctamente",
                'data': res_r9
            }
        # ** 10: "Ánalisis Comparativo de Vacunaciópn entre 2 paises."
        # :::::::::::::::::::  PARAMS REP 10    :::::::::::::::::::
        elif reporte_key == 10:
            valor2 = request.json['valor2']
            print("valor2: " + str(valor2))
            res_r10 = reportar_10(x, y, col, valor, valor2, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 10 generado correctamente",
                'data': res_r10
            }
        # ** 11: "Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo."
        # :::::::::::::::::::  PARAMS REP 11    :::::::::::::::::::
        if reporte_key == 11:
            # genero = request.json['genero']
            # print("genero: " + str(genero))
            colGen = request.json['colGen']
            print("colGen: " + str(colGen))
            res_r11 = reportar_11(x, y, col, valor, colGen, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 11 generado correctamente",
                'data': res_r11
            }
        # ** 12: "Ánalisis Comparativo entres 2 o más paises o continentes."
        # :::::::::::::::::::  PARAMS REP 12    :::::::::::::::::::
        elif reporte_key == 12:
            valor2 = request.json['valor2']
            print("valor2: " + str(valor2))
            valor3 = request.json['valor3']
            print("valor3: " + str(valor3))
            res_r12 = reportar_12(x, y, col, valor, valor2, valor3, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 12 generado correctamente",
                'data': res_r12
            }
        # ** 13: "Muertes promedio por casos confirmados y edad de covid 19 en un País."
        # :::::::::::::::::::  PARAMS REP 13    :::::::::::::::::::
        elif reporte_key == 13:
            # pred = request.json['pred']
            # print("pred: " + str(pred))
            res_r13 = reportar_13(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 13 generado correctamente",
                'data': res_r13
            }
        # ** 14: "Muertes según regiones de un país - Covid 19."
        # :::::::::::::::::::  PARAMS REP 14    :::::::::::::::::::
        elif reporte_key == 14:
            # pred = request.json['pred']
            # print("pred: " + str(pred))
            res_r14 = reportar_14(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 14 generado correctamente",
                'data': res_r14
            }
        # ** 15: "Tendencia de casos confirmados de Coronavirus en un departamento de un País."
        # :::::::::::::::::::  PARAMS REP 15    :::::::::::::::::::
        elif reporte_key == 15:
            # pred = request.json['pred']
            # print("pred: " + str(pred))
            res_r15 = reportar_15(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 15 generado correctamente",
                'data': res_r15
            }
        # ** 16: "Porcentaje de muertes frente al total de casos en un país, región o continente."
        # :::::::::::::::::::  PARAMS REP 16    :::::::::::::::::::
        elif reporte_key == 16:
            muertes = request.json['muertes']
            print("muertes: " + str(muertes))
            res_r16 = reportar_16(x, y, col, valor, muertes, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 16 generado correctamente",
                'data': res_r16
            }
        # ** 17: "Tasa de comportamiento de casos activos en relación al número de muertes en un continente."
        # :::::::::::::::::::  PARAMS REP 17    :::::::::::::::::::
        elif reporte_key == 17:
            res_r17 = reportar_17(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 17 generado correctamente",
                'data': res_r17
            }
        # ** 18: "Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País."
        # :::::::::::::::::::  PARAMS REP 18    :::::::::::::::::::
        elif reporte_key == 18:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r18 = reportar_18(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 2 generado correctamente",
                'data': res_r18
            }
        # ** 19: "Predicción de muertes en el último día del primer año de infecciones en un país."
        # :::::::::::::::::::  PARAMS REP 19    :::::::::::::::::::
        elif reporte_key == 19:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r19 = reportar_19(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 19 generado correctamente",
                'data': res_r19
            }
        # ** 20: "Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19."
        # :::::::::::::::::::  PARAMS REP 20    :::::::::::::::::::
        elif reporte_key == 20:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r20 = reportar_20(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 2 generado correctamente",
                'data': res_r20
            }
        # ** 21: "Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor."
        # :::::::::::::::::::  PARAMS REP 21    :::::::::::::::::::
        if reporte_key == 21:
            res_r21 = reportar_21(x, y, col, valor, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 1 generado correctamente",
                'data': res_r21
            }
        # ** 22: "Tasa de mortalidad por coronavirus (COVID-19) en un país."
        # :::::::::::::::::::  PARAMS REP 22    :::::::::::::::::::
        elif reporte_key == 22:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r22 = reportar_22(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 22 generado correctamente",
                'data': res_r22
            }
        # ** 23: "Factores de muerte por COVID-19 en un país."
        # :::::::::::::::::::  PARAMS REP 23    :::::::::::::::::::
        elif reporte_key == 23:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r23 = reportar_23(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 23 generado correctamente",
                'data': res_r23
            }
        # ** 24: "Comparación entre el número de casos detectados y el número de pruebas de un país."
        # :::::::::::::::::::  PARAMS REP 24    :::::::::::::::::::
        elif reporte_key == 24:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r24 = reportar_24(x, y, col, valor, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 24 generado correctamente",
                'data': res_r24
            }
        # ** 25: "Predicción de casos confirmados por día."
        # :::::::::::::::::::  PARAMS REP 25    :::::::::::::::::::
        elif reporte_key == 25:
            pred = request.json['pred']
            print("pred: " + str(pred))
            res_r25 = reportar_25(x, y, pred, is_date)
            return{
                'resultStatus': 'SUCCESS',
                'message': "Reporte 25 generado correctamente",
                'data': res_r25
            }
        # print(rep_dict)
        # print(type(rep_dict))
        return{
            'resultStatus': 'ERROR',
            'message': "Error"
        }