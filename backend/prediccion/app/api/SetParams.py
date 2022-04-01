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

import json
from json import JSONEncoder
import io
import base64
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

# Import np and pd
import numpy as np
import pandas as pd

set_params = Blueprint('set_params', __name__)

rep_dict = {
    1: "Prediccion.",
}

@set_params.route("/set_params", methods = ["POST", "GET"])
@cross_origin()
def post():
    if request.method == "POST":
        eje_x, eje_y, col, filtro, es_fecha
        reporte_key = request.json['reporte']
        reporte = rep_dict[reporte_key]
        col = request.json['col']
        filtro = request.json['valor']
        eje_x = request.json['x']
        eje_y = request.json['y']
        es_fecha = request.json['isDate']
        # print("\nReporte: " + str(reporte_key) + " - " + reporte + "\nx: " + x + ", y: " + y + ", col: " + col + "\nvalor: " + valor + ", isDate: " + str(is_date) + '\n')
        # ** 1: "Prediccion."
        # print("entro a reportar_1")
        # Lectura del archivo
        df = pd.read_csv('csv_file.csv')
        df = df.fillna(0)

        # Filtrado
        df = df.loc[df[col]==filtro,]
        # Parametrizando fecha
        if es_fecha:
            df[eje_x] = pd.DatetimeIndex(df[eje_x])
        # Parametrizando ejes
        x = np.asarray(df[eje_x]).reshape(-1,1)
        x_data = df[eje_x]
        y = df[eje_y]
        # ||||||||||||||    LINEAL  ||||||||||||||
        regr = linear_model.LinearRegression()
        # Entrenando el modelo lin
        regr.fit(x,y)
        # Realizando predicicion lin
        # prediccion = regr.predict([[pred]]) # Prediccion
        
        # print("x\n")
        # print(type(x))
        # print(x)
        # print("y\n")
        # print(type(y))
        # print(y)    
        
        # ||||||||||||||    POLINOMIAL  ||||||||||||||
        # Indicando el grado de la distribucion polinomial
        pf = PolynomialFeatures(degree = 8)
        x_trans = pf.fit_transform(x)
        # Entrenando el modelo pol
        regr.fit(x_trans,y)
        # Realizando predicicion pol
        y_pred = regr.predict(x_trans)
        # rmse y r2
        rmse = np.sqrt(mean_squared_error(y, y_pred))
        r2 = r2_score(y, y_pred)
        # print("y_pred\n")
        # print(type(y_pred))
        # print(y_pred)
        # ****  GRAFICA  **** 
        plt.scatter(x, y, color='black')
        plt.title("Tendencia de la infección por Covid-19 en " + str(filtro))
        plt.xlabel(eje_x)
        plt.ylabel(eje_y)
        plt.plot(x, y_pred, color='blue', linewidth=3)
        # plt.show()
        
        # Preparando variables a devolver en peticion
        if es_fecha:
            print("FECHA")
            # x_data = df[eje_x].astype(str)
            x_json = json.dumps(x.tolist())
        else:
            x_json = json.dumps(x_data.tolist())
        y_json = json.dumps(y.tolist())
        # pred_json =  json.dumps(prediccion.tolist())
        # print(x_json)
        # print(type(arr_data));
        rmse_json = json.dumps(rmse.tolist())
        coeficiente = regr.coef_
        coef_json = json.dumps(coeficiente.tolist())
        # Generando imagen en B64
        s = io.BytesIO()
        figure = plt.gcf()
        figure.set_size_inches(8, 6)
        plt.savefig(s, format='png', bbox_inches="tight", dpi=100)
        plt.close()
        s = base64.b64encode(s.getvalue()).decode("utf-8").replace("\n", "")
        imgb64 = 'data:image/png;base64,%s' % s
        img64_json = json.dumps(imgb64)
        # print(imgb64)
        
        # resultado = 'La tendencia de infección en ${col} se representa con el módelo polinomial, ademas se muestran los coeficientes.'
        # JSON response
        ret = {
            "eje_x": x_json,
            "eje_y": y_json,
            "img64": img64_json,
            "pred": 0,
            # "resultado": resultado,
            "rmse": rmse_json,
            "r2": r2,
            "coef": coef_json
        }
        # # print(ret)
        # ret_json = json.dumps(ret)
        # print(ret_json)
        # return ret_json
        # return "ret_json"
        # plt.show()
        return{
            'resultStatus': 'SUCCESS',
            'message': "Reporte 1 generado correctamente",
            'data': ret
        }
    else:
        # print(rep_dict)
        # print(type(rep_dict))
        return{
            'resultStatus': 'ERROR',
            'message': "Error"
        }