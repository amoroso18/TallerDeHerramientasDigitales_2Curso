# from bs4 import BeautifulSoup
# import requests

# r = requests.get("https://www.abc.es/play/cine/peliculas/")
# soup = BeautifulSoup(r.content,"lxml")
# link = soup.find('span', class_= "titular xs").href
# print(link)

from bs4 import BeautifulSoup
import requests
# import pandas as pd

url = 'https://www.repelisplus.io/'
page = requests.get(url)
soup = BeautifulSoup(page.content,'html.parser')

#equipos
etiqueta = soup.find_all('div', class_='ksaj')
rutas = list()
for a in etiqueta:
    #rutas.append(a.h4.text)
    rutas.append(a.a['href'])
print(rutas)
