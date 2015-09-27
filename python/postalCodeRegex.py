# (B2(R|S|T)|B3(A|T|V))
import re
import csv

string = 'B3A'
pattern = '(B0J|B2(R|T|W|X|Y|Z)|B3(A|E|H|K|L|M|N|S|T|V)|B4(A|C|E|G))'
provincePattern = 'NS'
r = re.search(pattern, string)

postalCodeFile = open('data/zipcodeset.txt', 'r')
# newPostalCodeFile = open('data/hrmPostalCodes.txt', 'w')

p = csv.reader(postalCodeFile)
# w = csv.writer(newPostalCodeFile)
postalCodes = []
latitudes = []
longtitudes = []

postalCodeCount = 0
for line in p:
	# print(line[0])
	if ((re.search(pattern, line[0]) and re.search(provincePattern, line[4]))):
		postalCodeCount += 1
		print(line[0])
		postalCodes.append(line[0])
		latitudes.append(line[1])
		longtitudes.append(line[2])
		# w.writerow([line[0], line[1], line[2]])

print(postalCodeCount, 'Postal Codes Found!')
	
postalCodeFile.close()
# newPostalCodeFile.close()

def getRandomLocation(postalCode):
	latitude = 44
	longtitude = -63

	code = postalCode[0:3]
	matchingLat = []
	matchingLong = []

	for x in range(0, len(postalCodes)):
		if code == postalCodes[i][0:3]:
			matchingLat.append(latitudes[i])
			matchingLong.append(longtitudes[i])

	print(random.randInt(0,len(postalCodes)))
	return [latitude, longtitude]