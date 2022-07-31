import os
import re
import sys

f = open(sys.argv[1])
data = f.read()
f.close()

print(data)

for match in reversed(list(re.finditer("#[0-9a-f]{6,}", data))):
    startpoint = match.start(0)
    endpoint = match.end(0)
    redHex = data[startpoint+1:startpoint+3]
    greenHex = data[startpoint+3:startpoint+5]
    blueHex = data[startpoint+5:startpoint+7]

    print(startpoint)
    print(endpoint)

    print(redHex)
    print(greenHex)
    print(blueHex)

    red = int(redHex, base=16)
    green = int(greenHex, base=16)
    blue = int(blueHex, base=16)

    data = data[:startpoint] + str(red) + ", " + str(green) + ", " + str(blue) + data[endpoint:]


newF = open(sys.argv[2], "x")

newF.write(data)
newF.close()

