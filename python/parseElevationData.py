import csv
from collections import namedtuple

Elevation = namedtuple('Elevation', ['x','y','z'])

newDatasetFile = open("data/elevationData.csv", 'w')
fOut = csv.writer(newDatasetFile)

data = []
dataSet = set()
for n in range(1,4):
	filename = open("data/elevationData"+str(n)+"_New.csv")
	f = csv.reader(filename)
	for line in f:
		# data.append(Elevation(line[0], line[1], line[2]))
		dataSet.add(Elevation(line[0], line[1], line[2]))
	filename.close()

data = list(dataSet)
sorted(data)
# fOut.writerow([data[0][1], data[0][0], data[0][2]])
for d in data:
	fOut.writerow([d[1], d[0], d[2]])

print ("Data array: " ,len(data), "Data set: ", len(dataSet), "Equal size: ", (len(data) == len(dataSet)))

# data.append(Elevation(1,2,3))
# fOut.writerow(data[0])
# fOut.writerow(data[0])

print("All done with the elevation data!")
newDatasetFile.close()