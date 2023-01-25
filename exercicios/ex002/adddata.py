from flask import Flask, request
import json

app = Flask(__name__)

@app.route("/submit-form", methods=["POST"])
def submit_form():
    dados = request.get_json()
    # aqui você pode fazer algo com os dados, como armazená-los em um banco de dados ou processá-los
    return "Dados recebidos com sucesso!"

if __name__ == "__main__":
    app.run(debug=True, port=8000)
