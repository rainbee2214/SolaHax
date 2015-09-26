import csv


def parse_HouseData():
	f = csv.reader(open("data/home.csv"))
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
		ids.append(d[2])
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
	postalCodes = list(postalCodesSet)
	postalCodes.sort()
	del postalCodes[-1]

	with open('data/hrmGeneralPostalCodes.txt', 'w') as f:
		for p in postalCodes:
			print (p)
			f.write(p)
			f.write("\n")
				


def parse_ReadingData():
	f = csv.reader(open("data/reading.csv"))
	data = []

	ids = []
	wels = []
	sampleTimes = []
	auxHeatOns = []
	flowGlys = []
	flowWaters = []
	flowWaters_D = []
	auxHeatDs = []
	pvVolts = []
	pvAmps = []
	solarPowers = []
	tCollectors = []
	tStorages = []
	tHxGly_Ins = []
	tHxGly_Outs = []
	tHxWater_Outs = []
	tWater_Colds = []
	tWater_Solars = []
	tWater_Hots = []
	ledPumpOns =[]
	ledTCollHis = []
	ledTStorageHis = []
	ledDeltaLos = []
	updatedAts = []
	createdAts = []
	dates = []
	times = []

	welIds = set()
	i = 0
	for f1 in f:
		i += 1
		welIds.add(f1[1])
	print ("Number of wels: ", len(welIds))
	print ("Number of records: ", i)
	# for f1 in f:
	# 	data.append(f1)

	# for d in data:

	# 	ids.append(d[0])
	# 	wels.append(d[1])
	# 	sampleTimes.append(d[2])
	# 	auxHeatOns.append(d[3])
	# 	flowGlys.append(d[4])
	# 	flowWaters.append(d[5])
	# 	flowWaters_D.append(d[6])
	# 	auxHeatDs.append(d[7])
	# 	pvVolts.append(d[8])
	# 	pvAmps.append(d[9])
	# 	solarPowers.append(d[10])
	# 	tCollectors.append(d[11])
	# 	tStorages.append(d[12])
	# 	tHxGly_Ins.append(d[13])
	# 	tHxGly_Outs.append(d[14])
	# 	tHxWater_Outs.append(d[15])
	# 	tWater_Colds.append(d[16])
	# 	tWater_Solars.append(d[17])
	# 	tWater_Hots.append(d[18])
	# 	ledPumpOns.append(d[19])
	# 	ledTCollHis.append(d[20])
	# 	ledTStorageHis.append(d[21])
	# 	ledDeltaLos.append(d[22])
	# 	updatedAts.append(d[23])
	# 	createdAts.append(d[24])
	# 	dates.append(d[26])
	# 	times.append(d[27])

parse_HouseData()
# parse_ReadingData()

