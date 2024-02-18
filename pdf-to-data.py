#!/usr/bin/env python
# coding: utf-8

from pdf2image import convert_from_path
from pytesseract import image_to_string
import pytesseract
import re



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

path_to_pdf = './furtyboi-resume.pdf'

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

text = get_text_from_any_pdf(path_to_pdf)

print(text)

import os
from langchain.llms import OpenAI
from langchain.llms import OpenAI

os.environ['OPENAI_API_KEY'] = "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"

llm = OpenAI(model_name="gpt-3.5-turbo-1106")

input1 = (text+" This is a random collection of strings made by ocr of an resume. Extract the following information and present it in the following order. name,location, mobile no, mail,work exp,skills. The output should in the form of a json object, where name should with the name property, location  should be in the location property, mobile no in mobile no property, mail in mail property. Work experience should subdivided into title, organization and duration properties.and skills should go into skill properties") 

output = llm(input1)    

print(output)