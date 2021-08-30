# from bs4 import BeautifulSoup
# import requests

# r = requests.get("https://www.abc.es/play/cine/peliculas/")
# soup = BeautifulSoup(r.content,"lxml")
# link = soup.find('span', class_= "titular xs").href
# print(link)

from bs4 import BeautifulSoup
import requests
import pandas as pd

url = 'https://resultados.as.com/resultados/futbol/primera/clasificacion/'
page = requests.get(url)
soup = BeautifulSoup(page.content,'html.parser')

#equipos
eq = soup.find_all('span', class_='nombre-equipo')
equipos = list()

for i in eq:
    equipos.append(i.text)
    
print(equipos)
