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

for line in inReader:
	postalCodes.append(line[0])
	latitudes.append(line[1])
	longtitudes.append(line[2])

def getAverageLocation(basePostalCode):
	totalLat = 0
	totalLong = 0
	numberOfCodes  = 1

	for i in range(0, len(postalCodes)):
		if basePostalCode == postalCodes[i][0:3]:
			numberOfCodes += 1
			totalLat += float(latitudes[i])
			totalLong += float(longtitudes[i])
	return totalLat/numberOfCodes, totalLong/numberOfCodes

outFile = open("data/circleMapLocations.csv", 'w')
outWriter = csv.writer(outFile)
for i in range(0, len(basePostalCodes)):
	l1, l2 = getAverageLocation(basePostalCodes[i])
	outWriter.writerow([basePostalCodes[i], l1, l2])

outFile.close()
inFile.close()
