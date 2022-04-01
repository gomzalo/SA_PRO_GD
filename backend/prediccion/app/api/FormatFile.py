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

get_file = Blueprint('get_file', __name__)
    
@get_file.route("/get_file", methods = ["POST", "GET"])
@cross_origin()
def post():
    if request.method == "POST":
        # txt = request.files['data']
        # txt = request.json
        txt = request.form
        # txt_json = request.args.get("data")
        # print("\ntxt_json:\n");
        # print(txt_json);
        # print("\ntxt:\n");
        # print(txt);
        dict_txt = txt.to_dict(flat=False)
        key_views = dict_txt.keys()
        key_iter = iter(key_views)
        first_val = next(key_iter)
        content = json.dumps(first_val);
        jason = json.loads(content)
        arr = literal_eval(jason)
        for item in arr:
            # print(item)
            if item == [''] or item == [""]:
                print("item vacio alv")
                print(item)
                arr.remove(item)
        # arr2 = arr[:]
        headers_arr =  arr[0]
        arr_col = len(arr)
        arr_fil = len(headers_arr)
        # print("headers_arr\n")
        # print(headers_arr)
        # print("\narr:\n")
        # print(type(arr))
        # print(len(arr))
        # print(arr)
        # arr = jason.split("]")
        # a = 0
        # for item in arr:
        #     print(str(a) + "\n")
        #     a += 1
        #     print(item)
        
        # print(arr)
        # print(type(arr))
        # print(len(arr))
        
        # print(dict_txt);
        # print(first_val);
        # txt_decoded = base64.b64decode(first_val)
        # print(txt_decoded);
        # convert_list = [str(element) for element in arr]
        # print(type(convert_list))
        # # Testingsssss
        # print(arr_col, arr_fil)
        # arr = list(filter(None, arr))
        with open('csv_file.csv', 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerows(arr)
        # df_temp = np.asarray(arr)
        # df_temp.tofile('csv_file.csv', sep = ',')
        # df_temp = np.delete(df_temp, (0), axis=0)
        # df_temp.drop(df_temp.head(0).index, inplace=True) # removiendo primera fila
        # csv_file = pd.DataFrame(arr).to_csv('csv_file.csv')
        
        # csv_file = df_temp.to_csv("csv_file.csv")
        # print(arr)
        
        return {
            'resultStatus': 'SUCCESS',
            'message': 'xd'
        }
    if request.method == "GET":
        return {
            'resultStatus': 'SUCCESS',
            'message': 'xdnt'
        }
    # return {
    #     'resultStatus': 'ERROR',
    #     'message': 'f'
    # }