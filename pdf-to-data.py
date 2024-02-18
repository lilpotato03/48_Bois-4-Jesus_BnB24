#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Useful libraries
from pdf2image import convert_from_path
from pytesseract import image_to_string
import pytesseract
import re


# In[2]:


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
        #print("Page n°{}".format(pg))
        #print(convert_image_to_text(img))
    
    return final_text


# In[39]:


path_to_pdf = './furtyboi-resume.pdf'


# In[4]:


pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


# In[40]:


text = get_text_from_any_pdf(path_to_pdf)


# In[41]:


print(text)


# In[22]:


import os
from langchain.agents import create_pandas_dataframe_agent
from langchain.llms import OpenAI
from langchain import PromptTemplate
from langchain.llms import OpenAI


# In[35]:


os.environ['OPENAI_API_KEY'] = "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"


# In[36]:


llm = OpenAI(model_name="gpt-3.5-turbo-1106")


# In[46]:


input1 = (text+" This is a random collection of strings made by ocr of an resume. Extract the following information and present it in the following order. name,location, mobile no, mail,work exp,skills. The output should in the form of a json object, where name should with the name property, location  should be in the location property, and so on") 


# In[47]:


output = llm(input1)


# In[48]:


print(output)


# In[ ]:




