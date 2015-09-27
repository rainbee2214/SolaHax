import csv
from collections import namedtuple

homes = {}
homesConventionalType = {}

inFile = open("data/home.csv")
inReader = csv.reader(inFile)
homes['WEL'] = '1'
for line in inReader:
	panelArea = 1
	if line[5] == 'SB64':
		panelArea = 6
	elif line[5] == 'SB32':
		panelArea = 3
	homes[line[2]] = panelArea
	if line[4] == 'Oil':
		homesConventionalType[line[2]] = line[4]
	else:
		homesConventionalType[line[2]] = 'Electricity'


inFile.close()

n = 2

inFile = open("data/houses/house"+str(n)+".csv")
inReader = csv.reader(inFile)

# always add to grandTotal
grandTotalPowerGenerated = 0

# only add to totalPowerGenerated if kw > 100 [used for the average]
totalPowerGeneratedPerDay = 0
totalMinutesWithPowerPerDay = 1
welId = ""
conventionalSystem = ""
Date = namedtuple('Date', ['year', 'month', 'day'])
Day = namedtuple('Day', ['averagePowerGenerated', 'totalPowerGenerated', 'date'])
days = []

lastDay = ""
i = 0
for line in inReader:
	welId = line[1]
# append to the total power generated, if kW > 100 add to
	power = float(line[-1])*float(homes[line[1]])
	grandTotalPowerGenerated += power

	if power > 100:
		totalPowerGeneratedPerDay += power
		totalMinutesWithPowerPerDay += 1

	if line[2][:10] != lastDay:
		lastDay = line[2][:10]
		print(line[2][:10])
		days.append(Day(totalPowerGeneratedPerDay/totalMinutesWithPowerPerDay, grandTotalPowerGenerated, Date(line[2][:4], line[2][5:7], line[2][8:10])))
		grandTotalPowerGenerated = 0
		totalPowerGeneratedPerDay = 0
		totalMinutesWithPowerPerDay = 1

	# print("Time:",line[2], "Solar Power:", line[-1], "Solar System:", homes[line[1]], "Power generated:", power)

overallPowerGenerated = 0
overallDayAverages = 0
averagePerDayGenerated = 0
daysGenerated = 0
fuelCostOil = 0.2
fuelCostElectricity = 0.17
conventionalSystem = homesConventionalType[welId]


for day in days:
	daysGenerated += 1
	overallPowerGenerated += day[1]
	overallDayAverages += day[0]
	print("Date", day[2][0], day[2][1], day[2][2],"Average Power:", day[0], "Total Power:", day[1], "Money Saved:", fuelCostOil*day[1])

# Fuel cost (oil) = $0.20 per kWh of oil
# Fuel cost (electricity) = $0.17 per kWh of electricity


moneySavings = 0.0

if conventionalSystem == 'Oil':
	moneySavings = fuelCostOil*overallPowerGenerated
else:
	moneySavings = fuelCostElectricity*overallPowerGenerated
print("Total energy in kWh", overallPowerGenerated, "$", moneySavings)

print("House:", welId, "Days in use:", len(days), "Average power per day generated", overallDayAverages/daysGenerated, 
	"Total power generated over time", overallPowerGenerated, "Conventional System Used:", conventionalSystem, "Money saved overall", moneySavings)
inFile.close()