import requests
from bs4 import BeautifulSoup

def main():
    print('hello world')
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
    soup = BeautifulSoup(response.content, 'html.parser')
    for link in soup.find_all('a'):
        print(link.get('href'))

if __name__ == "__main__":
    main()