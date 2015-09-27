import csv

inFile = open("data/reading.csv")
inReader = csv.reader(inFile)
outFile = open("data/readingCondensed.csv", "w")
outReader = csv.writer(outFile)
for line in inReader:
	outReader.writerow([line[0], line[1], line[2], line[6], line[7],line[10]])
inFile.close()
outFile.close()