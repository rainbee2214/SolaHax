import csv

f = csv.reader(open("data/home.csv"))
data = []

ids = []
postalCodesOriginal = []
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
	ids.append(d[2])
	postalCodesOriginal.append(d[3]) 
	conventionalSystems.append(d[4])
	solarSystems.append(d[5])
	roofPitches.append(d[6])
	azimuths.append(d[7])
	installationTypes.append(d[8])
	ageOfHomes.append(d[9])
	sizeOfHomes.append(d[10])
	waterConsumption.append(d[11])
	electricityConsumption.append(d[12])

def getAvgLat(postalCode):
	# get a list of latitudes
	return 42

def getAvgLong(postalCode):
	return -63
def getAvgElevation(postalCode):
	return 20
def getAvgSavings(postalCode):
	return 100
def getAvgHouseSize (postalCode):
	return 1200
def getAvgAge(postalCode):
	totalAge = 0
	totalHouses = 1
	for i in range (0, len(ageOfHomes)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if (ageOfHomes[i] != 'NULL' and ageOfHomes[i] != 'Age_Of_Home'):
				totalAge += float(ageOfHomes[i])
				totalHouses += 1
		
	return totalAge/totalHouses

def getAvgRoofPitch(postalCode):
	totalPitch = 0
	totalHouses = 1
	for i in range (0, len(roofPitches)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if roofPitches[i] != 'NULL':
				totalPitch += float(roofPitches[i])
				totalHouses += 1
		
	return totalPitch/totalHouses

def getAvgAzimuth(postalCode):
	totalAzimuth = 0
	totalHouses = 1
	for i in range (0, len(azimuths)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if azimuths[i] != 'NULL':
				totalAzimuth += float(azimuths[i])
				totalHouses += 1
		
	return totalAzimuth/totalHouses

def getAvgElectricityConsumption(postalCode):
	return 100
def getAvgWaterConsumption(postalCode):
	return 70
def getMostCommonConventionalSystem(postalCode):
	return "CS System"
def getMostCommonSolarSystem(postalCode):
	return "Solar System"
def getMostCommonInstallationType(postalCode):
	return "IL Type"

postalCodesSet = set(postalCodesOriginal)
postalCodes = list(postalCodesSet)
postalCodes.sort()
del postalCodes[-1]


f1 = open('data/hrmGeneralPostalCodes.txt', 'w')
f = csv.writer(f1)

avgLat = 42
avgLong = -63
avgElevation = 20
avgSavings = 100
avgHouseSize = 1200
avgAge = 12
avgRoofPitch = 0
avgAzimuth = -40
avgElectricityConsumption  = 100
avgWaterConsumption = 70
mostCommonConventionalSystem = "CS System"
mostCommonSolarSystem = "Solar System"
mostCommonInstallationType = "IL Type"

for p in postalCodes:
	avgLat = getAvgLat(p)
	avgLong = getAvgLong(p)
	avgElevation = getAvgElevation(p)
	avgSavings = getAvgSavings(p)
	avgHouseSize = getAvgHouseSize(p)
	avgAge = getAvgAge(p)
	avgRoofPitch = getAvgRoofPitch(p)
	avgAzimuth = getAvgAzimuth(p)
	avgElectricityConsumption  = getAvgElectricityConsumption(p)
	avgWaterConsumption = getAvgWaterConsumption(p)
	mostCommonConventionalSystem = getMostCommonConventionalSystem(p)
	mostCommonSolarSystem = getMostCommonSolarSystem(p)
	mostCommonInstallationType = getMostCommonInstallationType(p)

	f.writerow([p, avgLat, avgLong, avgElevation, avgSavings, avgHouseSize, avgAge, avgRoofPitch, avgAzimuth, avgElectricityConsumption, avgWaterConsumption, mostCommonConventionalSystem, mostCommonSolarSystem, mostCommonInstallationType])


f1.close()

 # code: "B3A",
 #  lng: 0,
 #  lat: 0,

 #  avgElevation: 0,
 #  avgSavings: 0,
 #  avgSolarPower: 0,
 #  avgHouseSize: 0,
 #  avgAge: 0,
 #  avgRoofPitch: 0,
 #  avgAzimuth: 0,
 #  avgElectricityConsumption: 0,
 #  avgWaterConsumption: 0,

 #  mostCommonConventionalSystem: "",
 #  mostCommonSolarSystem: "",
 #  mostCommonInstallationType: "",

 #  houses: [],

 #  elevations: [],