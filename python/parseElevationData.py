import csv
from collections import namedtuple

Elevation = namedtuple('Elevation', ['x','y','z'])

newDatasetFile = open("data/elevationData.csv", 'w')
fOut = csv.writer(newDatasetFile)

data = []
dataSet = set()
for n in range(1,4):
	filename = open("data/elevationData"+str(n)+".csv")
	f = csv.reader(filename)
	for line in f:
		# data.append(Elevation(line[0], line[1], line[2]))
		dataSet.add(Elevation(line[0], line[1], line[2]))
	filename.close()

for d in dataSet:
	fOut.writerow([d[0], d[1], d[2]])
	
print ("Data array: " ,len(data), "Data set: ", len(dataSet), "Equal size: ", (len(data) == len(dataSet)))

# data.append(Elevation(1,2,3))
# fOut.writerow(data[0])
# fOut.writerow(data[0])

print("All done with the elevation data!")