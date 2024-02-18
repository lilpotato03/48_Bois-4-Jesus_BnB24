from flask import Flask, request, jsonify, render_template
from pdf2image import convert_from_path
from pytesseract import image_to_string
import pytesseract
import re
import os
from langchain.llms import OpenAI
from langchain.llms import OpenAI

app = Flask(__name__)

def convert_pdf_to_img(pdf_file):
    return convert_from_path(pdf_file)


def convert_image_to_text(file):
    text = image_to_string(file)
    return text


def get_text_from_any_pdf(pdf_file):
    images = convert_pdf_to_img(pdf_file)
    final_text = ""
    for pg, img in enumerate(images):
        
        final_text += convert_image_to_text(img)
    
    return final_text

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

os.environ['OPENAI_API_KEY'] = "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"
llm = OpenAI(model_name="gpt-3.5-turbo-1106")

@app.route("/get-json/<filename>")
def getJson(filename):
    path_to_pdf = "./pdfs/"+filename+".pdf"
    text = get_text_from_any_pdf(path_to_pdf)
    input1 = (text+" This is a random collection of strings made by ocr of an resume. Extract the following information and present it in the following order. name,location, mobile no, mail,work exp,skills. The output should in the form of a json object, where name should with the name property, location  should be in the location property, mobile no in mobile no property, mail in mail property. Work experience should be just a single number, of years, or round down if in months, cumulative for all positions, not projects.and skills should directly into the fields, no subsectioning required") 
    output = llm(input1)
    return jsonify(output), 200

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['GET','POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    
    file = request.files['file']
    
    if file.filename == '':
        return 'No selected file'
    
    # Save the file to a desired location
    file.save('./pdfs/'+file.filename)
    
    return 'File uploaded successfully'
 
if __name__ == "__main__":
    app.run(debug=True)
