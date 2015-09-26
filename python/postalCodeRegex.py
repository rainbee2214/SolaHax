# (B2(R|S|T)|B3(A|T|V))
import re
import csv

string = 'B3A'
pattern = '(B0J|B2(R|T|W|X|Y|Z)|B3(A|E|H|K|L|M|N|S|T|V)|B4(A|C|E|G))'
provincePattern = 'NS'
r = re.search(pattern, string)

postalCodeFile = open('data/zipcodeset.txt', 'r')
newPostalCodeFile = open('data/hrmPostalCodes.txt', 'w')

p = csv.reader(postalCodeFile)
w = csv.writer(newPostalCodeFile)

postalCodeCount = 0
for line in p:
	# print(line[0])
	if ((re.search(pattern, line[0]) and re.search(provincePattern, line[4]))):
		print(line)
		postalCodeCount += 1
		print(postalCodeCount)
		w.writerow(line)

print(postalCodeCount, 'Postal Codes Found!')
	

