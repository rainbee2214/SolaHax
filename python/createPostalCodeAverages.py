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
	totalSize = 0
	totalHouses = 1
	for i in range (0, len(sizeOfHomes)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if sizeOfHomes[i] != 'NULL':
				totalSize += float(sizeOfHomes[i])
				totalHouses += 1
		
	return totalSize/totalHouses

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
	totalElectricityConsumption = 0
	totalHouses = 1
	for i in range (0, len(electricityConsumption)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if electricityConsumption[i] != 'NULL':
				totalElectricityConsumption += float(electricityConsumption[i])
				totalHouses += 1
		
	return totalElectricityConsumption/totalHouses

def getAvgWaterConsumption(postalCode):
	totalWaterConsumption = 0
	totalHouses = 1
	for i in range (0, len(waterConsumption)):
		# if the house belongs to the postal code
		if postalCodesOriginal[i] == postalCode:
			if waterConsumption[i] != 'NULL':
				totalWaterConsumption += float(waterConsumption[i])
				totalHouses += 1
		
	return totalWaterConsumption/totalHouses

def getMostCommonConventionalSystem(postalCode):
	type1 = "Oil"
	type2 = "Electricity, 40 IG tank, 3000 W"
	type3 = "Electricity, 60 IG tank, 4500 W"
	type1Count, type2Count, type3Count = 0,0,0

	for i in range (0, len(conventionalSystems)):
		if postalCodesOriginal[i] == postalCode:
			if conventionalSystems[i] == type1:
				type1Count += 1
			elif conventionalSystems[i] == type2:
				type2Count += 1
			elif conventionalSystems[i] == type3:
				type3Count += 1

	if (type1Count > type2Count and type1Count > type3Count):
		return type1
	elif (type2Count > type1Count and type2Count > type3Count):
		return type2
	else:
		return type3

def getMostCommonSolarSystem(postalCode):
	type1 = "SB32"
	type2 = "SB64"
	type1Count, type2Count = 0,0

	for i in range (0, len(solarSystems)):
		if postalCodesOriginal[i] == postalCode:
			if solarSystems[i] == type1:
				type1Count += 1
			elif solarSystems[i] == type2:
				type2Count += 1

	if type1Count > type2Count:
		return type1
	else:
		return type2

def getMostCommonInstallationType(postalCode):
	type1 = "Flush mount"
	type2 = "Tilted up"
	type3 = "Flat roof"
	type4 = "Wall mount"
	type1Count, type2Count, type3Count, type4Count = 0,0,0,0

	for i in range (0, len(installationTypes)):
		if postalCodesOriginal[i] == postalCode:
			if installationTypes[i] == type1:
				type1Count += 1
			elif installationTypes[i] == type2:
				type2Count += 1
			elif installationTypes[i] == type3:
				type3Count += 1
			elif installationTypes[i] == type4:
				type4Count += 1

	if (type1Count > type2Count and type1Count > type3Count and type1Count > type4Count):
		return type1
	elif (type2Count > type1Count and type2Count > type3Count and type2Count > type4Count):
		return type2
	elif (type3Count > type1Count and type3Count > type2Count and type3Count > type4Count):
		return type3
	else:
		return type4

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