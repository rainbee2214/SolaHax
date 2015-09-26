# for n in range(1,4):
# 	filename = open("data/elevationData"+str(n)+".csv")
# 	f = csv.reader(filename)
# 	for line in f:
# 		# data.append(Elevation(line[0], line[1], line[2]))
# 		dataSet.add(Elevation(line[0], line[1], line[2]))
# 	filename.close()

step = 5000
for n in range(1,5):
	newLines = open('data/elevationData'+str(n)+'_New.csv', 'w')
	lines = open( 'data/elevationData'+str(n)+'.csv', "r" ).readlines()[::step]
	i=0
	for l in lines:
		i+=1
		newLines.write(l)
	print("Number of lines / 3= ", i)

