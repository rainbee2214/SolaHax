import csv

f = csv.reader(open("home.csv"))
data = []

ids = []
postalCodes = []
conventionalSystems = []
solarSystems = []
roofPitches = []
azimuths = []
installationTypes = []
ageOfHomes = []
sizeOfHomes = []
waterConsumption = []
electricityConsumption = []

for f1 in f:
	data.append(f1)

for d in data:
	ids.append(d[0])
	postalCodes.append(d[3]) 
	conventionalSystems.append(d[4])
	solarSystems.append(d[5])
	roofPitches.append(d[6])
	azimuths.append(d[7])
	installationTypes.append(d[8])
	ageOfHomes.append(d[9])
	sizeOfHomes.append(d[10])
	waterConsumption.append(d[11])
	electricityConsumption.append(d[12])

postalCodesSet = set(postalCodes)
for p in postalCodesSet:
	print (p)
print (len(postalCodesSet))

