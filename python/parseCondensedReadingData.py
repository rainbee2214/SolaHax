import csv

inFile = open("data/readingCondensed.csv")
inReader = csv.reader(inFile)

lastId = 0
houseCount = 0
outFile = open("data/houses/house"+str(houseCount)+".csv", 'w')
outWriter = csv.writer(outFile)
for line in inReader:
	if (line[1] != lastId):
		outFile.close()
		houseCount += 1
		outFile = open("data/houses/house"+str(houseCount)+".csv", 'w')
		outWriter = csv.writer(outFile)
		lastId = line[1]
	outWriter.writerow(line)

inFile.close()

