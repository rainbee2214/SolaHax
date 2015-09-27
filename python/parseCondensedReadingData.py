import csv

inFile = open("data/readingCondensed.csv")
inReader = csv.reader(inFile)

for line in inReader:


inFile.close()

