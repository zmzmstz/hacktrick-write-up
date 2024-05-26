from bs4 import BeautifulSoup


def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))


with open('flag.html') as f:
    content = f.read()

soup = BeautifulSoup(content, 'html.parser')

a = len('background-color: #')
fin = []
asd = []
for span in soup.find_all('span'):
    asd.append(chr(hex_to_rgb(span['style'][a::])[1]))
    fin.append(hex_to_rgb(span['style'][a::]))

print("".join(asd))
