import csv

inFile = open("data/readingCondensed.csv")
inReader = csv.reader(inFile)

lastId = "0"

for line in inReader:
	if (lastId == line[1]):
		lastId = line[1]
		print(lastId)

inFile.close()

