import csv
import random

basePostalCodes = []
numberOfHouses = []
inFile = open("data/hrmGeneralPostalCodes.csv")
inReader = csv.reader(inFile)

for line in inReader:
	basePostalCodes.append(line[0])
	numberOfHouses.append(line[1])
inFile.close()


inFile = open("data/hrmPostalCodes.csv")
inReader = csv.reader(inFile)

postalCodes = []
latitudes = []
longtitudes = []

houseCodes = []
houseLats = []
houseLongs = []

for line in inReader:
	postalCodes.append(line[0])
	latitudes.append(line[1])
	longtitudes.append(line[2])

def getRandomLocation(basePostalCode):
	latitude = 44
	longtitude = -63

	matchingCodes = []
	matchingLat = []
	matchingLong = []

	for i in range(0, len(postalCodes)):
		if basePostalCode == postalCodes[i][0:3]:
			matchingCodes.append(postalCodes[i])
			matchingLat.append(latitudes[i])
			matchingLong.append(longtitudes[i])

	index = random.randint(0,len(matchingLat))	
	# print(index)
	# print(latitudes[index], longtitudes[index])
	return latitudes[index], longtitudes[index]


# Create extra house values for the map
for i in range(0, len(basePostalCodes)):
	if numberOfHouses[i] != 1:
		for x in range(0,int(numberOfHouses[i])):
			l1, l2 = getRandomLocation(basePostalCodes[i])
			houseCodes.append(basePostalCodes[i])
			houseLats.append(l1)
			houseLongs.append(l2)
	else:
		l1, l2 = getRandomLocation(basePostalCodes[i])
		houseCodes.append(basePostalCodes[i])
		houseLats.append(l1)
		houseLongs.append(l2)

print("House total: -------------------", len(houseLongs))


outFile = open("data/houseMapLocations.csv", 'w')
outWriter = csv.writer(outFile)
print(basePostalCodes)
for i in range(0, len(houseLongs)):
	outWriter.writerow([houseCodes[i][0:3], houseLats[i], houseLongs[i]])

outFile.close()
inFile.close()
