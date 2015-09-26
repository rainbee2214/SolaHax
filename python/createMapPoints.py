# [
#           {location: new google.maps.LatLng(44.7050000,-63.6814583), weight: 1},
#           {location: new google.maps.LatLng(44.7050000,-63.6808333), weight: 35.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6802083), weight: 84.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6795833), weight: 54.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6789583), weight: 22.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6783333), weight: 138.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6777083), weight: 79.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6770833), weight: 57.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6764583), weight: 17.00},
#           {location: new google.maps.LatLng(44.7050000,-63.6758333), weight: 7.00},
#         ];

import csv

pointData = open('data/elevationData.csv', 'r')
newPointData = open('data/mapPointData.txt', 'w')
reader = csv.reader(pointData)

i=0
newPointData.write("[")
for line in reader:
     s = "{location:new google.maps.LatLng("+line[0]+","+line[1]+"),weight:"+line[2]+"},\n"
     # print(s)
     newPointData.write(s)
newPointData.write("];")
print(i)