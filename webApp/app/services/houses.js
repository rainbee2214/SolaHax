import Ember from 'ember';
import House from '../objects/house'

export default Ember.Service.extend({
  houses: Ember.A(),

  init: function(){
    this.mockHouses();
  },

  mockHouses: function(){
    var houses = this.get('houses');

    // var hData = [
    //  {
    //    "PostalCode": "B0J",
    //    "Lat": 44.744868,
    //    "Lng": -63.281808
    //  },
    //  {
    //    "PostalCode": "B2R",
    //    "Lat": 44.749027,
    //    "Lng": -63.562965
    //  },
    //  {
    //    "PostalCode": "B2S",
    //    "Lat": 44.989130,
    //    "Lng": -63.486534
    //  },
    //  {
    //    "PostalCode": "B2S",
    //    "Lat": 44.964236,
    //    "Lng": -63.519493
    //  },
    //  {
    //    "PostalCode": "B2T",
    //    "Lat": 44.809172,
    //    "Lng": -63.621302
    //  },
    //  {
    //    "PostalCode": "B2T",
    //    "Lat": 44.860299,
    //    "Lng": -63.594523
    //  },
    //  {
    //    "PostalCode": "B2W",
    //    "Lat": 44.674854,
    //    "Lng": -63.529986
    //  },
    //  {
    //    "PostalCode": "B2W",
    //    "Lat": 44.700972,
    //    "Lng": -63.485698
    //  },
    //  {
    //    "PostalCode": "B2W",
    //    "Lat": 44.710732,
    //    "Lng": -63.508014
    //  },
    //  {
    //    "PostalCode": "B2X",
    //    "Lat": 44.702546,
    //    "Lng": -63.545175
    //  },
    //  {
    //    "PostalCode": "B2Y",
    //    "Lat": 44.655652,
    //    "Lng": -63.544625
    //  },
    //  {
    //    "PostalCode": "B2Y",
    //    "Lat": 44.658583,
    //    "Lng": -63.549947
    //  },
    //  {
    //    "PostalCode": "B2Y",
    //    "Lat": 44.664077,
    //    "Lng": -63.550976
    //  },
    //  {
    //    "PostalCode": "B2Z",
    //    "Lat": 44.693737,
    //    "Lng": -63.379160
    //  },
    //  {
    //    "PostalCode": "B2Z",
    //    "Lat": 44.728140,
    //    "Lng": -63.437525
    //  },
    //  {
    //    "PostalCode": "B2Z",
    //    "Lat": 44.742285,
    //    "Lng": -63.463274
    //  },
    //  {
    //    "PostalCode": "B3A",
    //    "Lat": 44.670828,
    //    "Lng": -63.582189
    //  },
    //  {
    //    "PostalCode": "B3A",
    //    "Lat": 44.680105,
    //    "Lng": -63.565023
    //  },
    //  {
    //    "PostalCode": "B3A",
    //    "Lat": 44.685719,
    //    "Lng": -63.584592
    //  },
    //  {
    //    "PostalCode": "B3A",
    //    "Lat": 44.666799,
    //    "Lng": -63.577039
    //  },
    //  {
    //    "PostalCode": "B3E",
    //    "Lat": 44.751404,
    //    "Lng": -63.289218
    //  },
    //  {
    //    "PostalCode": "B3H",
    //    "Lat": 44.629192,
    //    "Lng": -63.573757
    //  },
    //  {
    //    "PostalCode": "B3H",
    //    "Lat": 44.633956,
    //    "Lng": -63.588348
    //  },
    //  {
    //    "PostalCode": "B3H",
    //    "Lat": 44.637743,
    //    "Lng": -63.570495
    //  },
    //  {
    //    "PostalCode": "B3H",
    //    "Lat": 44.639453,
    //    "Lng": -63.592811
    //  },
    //  {
    //    "PostalCode": "B3K",
    //    "Lat": 44.664595,
    //    "Lng": -63.606526
    //  },
    //  {
    //    "PostalCode": "B3K",
    //    "Lat": 44.667159,
    //    "Lng": -63.614251
    //  },
    //  {
    //    "PostalCode": "B3K",
    //    "Lat": 44.652873,
    //    "Lng": -63.582150
    //  },
    //  {
    //    "PostalCode": "B3K",
    //    "Lat": 44.654217,
    //    "Lng": -63.596227
    //  },
    //  {
    //    "PostalCode": "B3L",
    //    "Lat": 44.647852,
    //    "Lng": -63.597626
    //  },
    //  {
    //    "PostalCode": "B3L",
    //    "Lat": 44.647608,
    //    "Lng": -63.614534
    //  },
    //  {
    //    "PostalCode": "B3M",
    //    "Lat": 44.659140,
    //    "Lng": -63.645269
    //  },
    //  {
    //    "PostalCode": "B3M",
    //    "Lat": 44.670616,
    //    "Lng": -63.654024
    //  },
    //  {
    //    "PostalCode": "B3N",
    //    "Lat": 44.640149,
    //    "Lng": -63.632945
    //  },
    //  {
    //    "PostalCode": "B3N",
    //    "Lat": 44.633186,
    //    "Lng": -63.628740
    //  },
    //  {
    //    "PostalCode": "B3N",
    //    "Lat": 44.633200,
    //    "Lng": -63.627352
    //  },
    //  {
    //    "PostalCode": "B3S",
    //    "Lat": 44.653783,
    //    "Lng": -63.662196
    //  },
    //  {
    //    "PostalCode": "B3T",
    //    "Lat": 44.599114,
    //    "Lng": -63.745265
    //  },
    //  {
    //    "PostalCode": "B3V",
    //    "Lat": 44.487432,
    //    "Lng": -63.622688
    //  },
    //  {
    //    "PostalCode": "B4A",
    //    "Lat": 44.669240,
    //    "Lng": -63.574293
    //  },
    //  {
    //    "PostalCode": "B4A",
    //    "Lat": 44.685963,
    //    "Lng": -63.563821
    //  },
    //  {
    //    "PostalCode": "B4B",
    //    "Lat": 44.707045,
    //    "Lng": -63.562634
    //  },
    //  {
    //    "PostalCode": "B4B",
    //    "Lat": 44.699480,
    //    "Lng": -63.599370
    //  },
    //  {
    //    "PostalCode": "B4B",
    //    "Lat": 44.710827,
    //    "Lng": -63.611729
    //  },
    //  {
    //    "PostalCode": "B4B",
    //    "Lat": 44.715584,
    //    "Lng": -63.583062
    //  },
    //  {
    //    "PostalCode": "B4C",
    //    "Lat": 44.768263,
    //    "Lng": -63.664807
    //  },
    //  {
    //    "PostalCode": "B4E",
    //    "Lat": 44.795579,
    //    "Lng": -63.737882
    //  },
    //  {
    //    "PostalCode": "B4G",
    //    "Lat": 44.832185,
    //    "Lng": -63.685375
    //  }
    // ];

    var hData = [
      {
        "id": "WEL0754",
        "PostalCode": "B3E",
        "daysinuse": 366,
        "avgpowerperday": 551264.3330327878,
        "avgpowerperminute": 879.534408480023,
        "totalpowersincestart": 201762745.8900003,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.751404,
           "Lng": -63.289218
      },
      {
        "id": "WEL0755",
        "PostalCode": "B3M",
        "daysinuse": 396,
        "avgpowerperday": 460902.13151515153,
        "avgpowerperminute": 766.0220640970475,
        "totalpowersincestart": 182517244.08,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.659140,
           "Lng": -63.645269
      },
      {
        "id": "WEL0756",
        "PostalCode": "B3T",
        "daysinuse": 505,
        "avgpowerperday": 862270.0087128713,
        "avgpowerperminute": 1294.8939710902118,
        "totalpowersincestart": 435446354.40000004,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.599114,
           "Lng": -63.745265
      },
      {
        "id": "WEL0769",
        "PostalCode": "B2W",
        "daysinuse": 280,
        "avgpowerperday": 969509.6436428572,
        "avgpowerperminute": 1486.9250429059323,
        "totalpowersincestart": 271462700.22,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.710732,
           "Lng": -63.508014
      },
      {
        "id": "WEL0770",
        "PostalCode": "B3K",
        "daysinuse": 496,
        "avgpowerperday": 1322571.0221370978,
        "avgpowerperminute": 1954.164223334686,
        "totalpowersincestart": 655995226.9800005,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.664595,
           "Lng": -63.606526,

      },
      {
        "id": "WEL0771",
        "PostalCode": "B2T",
        "daysinuse": 540,
        "avgpowerperday": 538152.8025555557,
        "avgpowerperminute": 867.3200577316497,
        "totalpowersincestart": 290602513.3800001,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.860299,
           "Lng": -63.594523
      },
      {
        "id": "WEL0773",
        "PostalCode": "B4E",
        "daysinuse": 510,
        "avgpowerperday": 490982.1772352953,
        "avgpowerperminute": 793.1367411438996,
        "totalpowersincestart": 250400910.3900006,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.795579,
           "Lng": -63.737882
      },
      {
        "id": "WEL0774",
        "PostalCode": "B3K",
        "daysinuse": 554,
        "avgpowerperday": 502752.39395306923,
        "avgpowerperminute": 799.1380127859962,
        "totalpowersincestart": 278524826.25000036,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.667159,
           "Lng": -63.614251
      },
      {
        "id": "WEL0775",
        "PostalCode": "B3M",
        "daysinuse": 534,
        "avgpowerperday": 353886.379662922,
        "avgpowerperminute": 574.2023071663423,
        "totalpowersincestart": 188975326.74000034,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.670616,
           "Lng": -63.654024
      },
      {
        "id": "WEL0776",
        "PostalCode": "B3S",
        "daysinuse": 492,
        "avgpowerperday": 793844.4314634141,
        "avgpowerperminute": 1346.5017484958864,
        "totalpowersincestart": 390571460.27999973,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.653783,
           "Lng": -63.662196
      },
      {
        "id": "WEL0777",
        "PostalCode": "B2S",
        "daysinuse": 508,
        "avgpowerperday": 306775.12748031504,
        "avgpowerperminute": 575.5826920874899,
        "totalpowersincestart": 155841764.76000005,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.964236,
        "Lng": -63.519493
      },
      {
        "id": "WEL0791",
        "PostalCode": "B2X",
        "daysinuse": 525,
        "avgpowerperday": 853353.8265142876,
        "avgpowerperminute": 1267.3691178460201,
        "totalpowersincestart": 448010758.92000103,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.702546,
           "Lng": -63.545175
      },
      {
        "id": "WEL0792",
        "PostalCode": "B3A",
        "daysinuse": 418,
        "avgpowerperday": 369419.2715311003,
        "avgpowerperminute": 691.6409448891267,
        "totalpowersincestart": 154417255.49999994,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.680105,
           "Lng": -63.565023
      },
      {
        "id": "WEL0793",
        "PostalCode": "B2W",
        "daysinuse": 520,
        "avgpowerperday": 322658.9522307703,
        "avgpowerperminute": 2520.83540696592,
        "totalpowersincestart": 167782655.16000056,
        "conventional": "Electricity",
        "installation": "Tilted up",
        "Lat": 44.674854,
           "Lng": -63.529986
      },
      {
        "id": "WEL0794",
        "PostalCode": "B3L",
        "daysinuse": 505,
        "avgpowerperday": 1116344.515366337,
        "avgpowerperminute": 1711.5504975707854,
        "totalpowersincestart": 563753980.2600002,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.647852,
           "Lng": -63.597626
      },
      {
        "id": "WEL0795",
        "PostalCode": "B2Y",
        "daysinuse": 526,
        "avgpowerperday": 363647.54560836527,
        "avgpowerperminute": 992.4422190384342,
        "totalpowersincestart": 191278608.99000013,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.655652,
           "Lng": -63.544625
      },
      {
        "id": "WEL0798",
        "PostalCode": "B4B",
        "daysinuse": 503,
        "avgpowerperday": 784186.7810337918,
        "avgpowerperminute": 2038.8270633170637,
        "totalpowersincestart": 394445950.8599973,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.707045,
           "Lng": -63.562634
      },
      {
        "id": "WEL0799",
        "PostalCode": "B3N",
        "daysinuse": 513,
        "avgpowerperday": 906125.9608187136,
        "avgpowerperminute": 1419.1370239031257,
        "totalpowersincestart": 464842617.9000001,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.640149,
           "Lng": -63.632945
      },
      {
        "id": "WEL0800",
        "PostalCode": "B4G",
        "daysinuse": 514,
        "avgpowerperday": 450778.8517704282,
        "avgpowerperminute": 700.0490230008115,
        "totalpowersincestart": 231700329.8100001,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.832185,
           "Lng": -63.685375
      },
      {
        "id": "WEL0801",
        "PostalCode": "B2T",
        "daysinuse": 511,
        "avgpowerperday": 1191983.9812133086,
        "avgpowerperminute": 1747.2033897677115,
        "totalpowersincestart": 609103814.4000007,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.809172,
           "Lng": -63.621302
      },
      {
        "id": "WEL0802",
        "PostalCode": "B0J",
        "daysinuse": 502,
        "avgpowerperday": 597202.5489442233,
        "avgpowerperminute": 951.7296723801717,
        "totalpowersincestart": 299795679.5700001,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.744868,
        "Lng": -63.281808
      },
      {
        "id": "WEL0803",
        "PostalCode": "B4A",
        "daysinuse": 158,
        "avgpowerperday": 848908.9959493678,
        "avgpowerperminute": 1408.669107619412,
        "totalpowersincestart": 134127621.3600001,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.669240,
           "Lng": -63.574293
      },
      {
        "id": "WEL0804",
        "PostalCode": "B3H",
        "daysinuse": 488,
        "avgpowerperday": 1233128.3072950838,
        "avgpowerperminute": 1833.9116062676262,
        "totalpowersincestart": 601766613.9600009,
        "conventional": "Electricity",
        "installation": "Tilted up",
        "Lat": 44.629192,
           "Lng": -63.573757
      },
      {
        "id": "WEL0805",
        "PostalCode": "B4B",
        "daysinuse": 432,
        "avgpowerperday": 799568.4145833312,
        "avgpowerperminute": 1858.9296725938602,
        "totalpowersincestart": 345413555.09999907,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.699480,
           "Lng": -63.599370
      },
      {
        "id": "WEL0806",
        "PostalCode": "B2Z",
        "daysinuse": 118,
        "avgpowerperday": 515343.64322033833,
        "avgpowerperminute": 2125.8035716848167,
        "totalpowersincestart": 60810549.899999924,
        "conventional": "Electricity",
        "installation": "Flat roof",
        "Lat": 44.693737,
           "Lng": -63.379160
      },
      {
        "id": "WEL0807",
        "PostalCode": "B3H",
        "daysinuse": 502,
        "avgpowerperday": 1205740.802151394,
        "avgpowerperminute": 1858.6040272522014,
        "totalpowersincestart": 605281882.6799998,
        "conventional": "Oil",
        "installation": "Tilted up",
        "Lat": 44.633956,
           "Lng": -63.588348
      },
      {
        "id": "WEL0808",
        "PostalCode": "B4B",
        "daysinuse": 499,
        "avgpowerperday": 1317362.7921042081,
        "avgpowerperminute": 1954.3978855153373,
        "totalpowersincestart": 657364033.2599999,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.710827,
           "Lng": -63.611729
      },
      {
        "id": "WEL0809",
        "PostalCode": "B4B",
        "daysinuse": 250,
        "avgpowerperday": 713764.0752000001,
        "avgpowerperminute": 1308.4384679474188,
        "totalpowersincestart": 178441018.8,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.715584,
           "Lng": -63.583062
      },
      {
        "id": "WEL0810",
        "PostalCode": "B4C",
        "daysinuse": 495,
        "avgpowerperday": 739329.6407272719,
        "avgpowerperminute": 2070.901067746028,
        "totalpowersincestart": 365968172.1599996,
        "conventional": "Oil",
        "installation": "Tilted up",
        "Lat": 44.768263,
           "Lng": -63.664807
      },
      {
        "id": "WEL0812",
        "PostalCode": "B4A",
        "daysinuse": 441,
        "avgpowerperday": 1172765.431972789,
        "avgpowerperminute": 1720.5171695168447,
        "totalpowersincestart": 517189555.5,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.685963,
           "Lng": -63.563821
      },
      {
        "id": "WEL0813",
        "PostalCode": "B3A",
        "daysinuse": 441,
        "avgpowerperday": 1000269.8514285722,
        "avgpowerperminute": 1406.5710402226841,
        "totalpowersincestart": 441119004.4800003,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.680105,
           "Lng": -63.565023
      },
      {
        "id": "WEL0814",
        "PostalCode": "B3L",
        "daysinuse": 439,
        "avgpowerperday": 537540.0230979504,
        "avgpowerperminute": 884.4960240115363,
        "totalpowersincestart": 235980070.1400002,
        "conventional": "Electricity",
        "installation": "Tilted up",
        "Lat": 44.647608,
           "Lng": -63.614534
      },
      {
        "id": "WEL0815",
        "PostalCode": "B2Z",
        "daysinuse": 402,
        "avgpowerperday": 1292625.5014925369,
        "avgpowerperminute": 1982.3708181956233,
        "totalpowersincestart": 519635451.59999985,
        "conventional": "Electricity",
        "installation": "NULL",
        "Lat": 44.728140,
           "Lng": -63.437525
      },
      {
        "id": "WEL0821",
        "PostalCode": "B2R",
        "daysinuse": 369,
        "avgpowerperday": 1137613.8603252026,
        "avgpowerperminute": 1751.7124060128901,
        "totalpowersincestart": 419779514.45999974,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.749027,
        "Lng": -63.562965
      },
      {
        "id": "WEL0822",
        "PostalCode": "B3K",
        "daysinuse": 370,
        "avgpowerperday": 940162.5791351324,
        "avgpowerperminute": 2245.2808315213006,
        "totalpowersincestart": 347860154.27999896,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.652873,
           "Lng": -63.582150
      },
      {
        "id": "WEL0823",
        "PostalCode": "B3A",
        "daysinuse": 116,
        "avgpowerperday": 1549045.5765517245,
        "avgpowerperminute": 2101.6815847272524,
        "totalpowersincestart": 179689286.88000003,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.685719,
           "Lng": -63.584592
      },
      {
        "id": "WEL0824",
        "PostalCode": "B2W",
        "daysinuse": 269,
        "avgpowerperday": 574523.6413382901,
        "avgpowerperminute": 979.8660114866298,
        "totalpowersincestart": 154546859.52000004,
        "conventional": "Oil",
        "installation": "Tilted up",
        "Lat": 44.700972,
           "Lng": -63.485698
      },
      {
        "id": "WEL0825",
        "PostalCode": "B2Z",
        "daysinuse": 364,
        "avgpowerperday": 1171952.6302747244,
        "avgpowerperminute": 1832.9080637342863,
        "totalpowersincestart": 426590757.41999966,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.742285,
           "Lng": -63.463274
      },
      {
        "id": "WEL0846",
        "PostalCode": "B2Y",
        "daysinuse": 356,
        "avgpowerperday": 693318.0748314597,
        "avgpowerperminute": 1977.0400392317717,
        "totalpowersincestart": 246821234.63999963,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.658583,
           "Lng": -63.549947
      },
      {
        "id": "WEL0847",
        "PostalCode": "B3A",
        "daysinuse": 356,
        "avgpowerperday": 1349457.8073033718,
        "avgpowerperminute": 1910.7742896199038,
        "totalpowersincestart": 480406979.4000004,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.670828,
           "Lng": -63.582189
      },
      {
        "id": "WEL0848",
        "PostalCode": "B3N",
        "daysinuse": 337,
        "avgpowerperday": 1340670.8460534129,
        "avgpowerperminute": 1944.5428508629543,
        "totalpowersincestart": 451806075.1200001,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.633186,
           "Lng": -63.628740
      },
      {
        "id": "WEL0850",
        "PostalCode": "B3K",
        "daysinuse": 252,
        "avgpowerperday": 1317816.4092857144,
        "avgpowerperminute": 1828.8996323995857,
        "totalpowersincestart": 332089735.14000005,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.654217,
           "Lng": -63.596227
      },
      {
        "id": "WEL0851",
        "PostalCode": "B3H",
        "daysinuse": 271,
        "avgpowerperday": 880847.4832472327,
        "avgpowerperminute": 1384.6230383767058,
        "totalpowersincestart": 238709667.96000007,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.637743,
           "Lng": -63.570495
      },
      {
        "id": "WEL0852",
        "PostalCode": "B3H",
        "daysinuse": 334,
        "avgpowerperday": 378977.1816467071,
        "avgpowerperminute": 758.0646659071795,
        "totalpowersincestart": 126578378.67000018,
        "conventional": "Electricity",
        "installation": "Tilted up",
        "Lat": 44.639453,
           "Lng": -63.592811
      },
      {
        "id": "WEL0853",
        "PostalCode": "B2S",
        "daysinuse": 330,
        "avgpowerperday": 1105951.0163636366,
        "avgpowerperminute": 1549.2170364353683,
        "totalpowersincestart": 364963835.4000001,
        "conventional": "Oil",
        "installation": "Flush mount",
        "Lat": 44.989130,
        "Lng": -63.486534
      },
      {
        "id": "WEL0854",
        "PostalCode": "B2Y",
        "daysinuse": 98,
        "avgpowerperday": 674068.7666326535,
        "avgpowerperminute": 957.1271966263383,
        "totalpowersincestart": 66058739.13000005,
        "conventional": "Electricity",
        "installation": "Flush mount",
        "Lat": 44.664077,
           "Lng": -63.550976
      }
    ];

    // this.set('id', id);
    // this.set('lat', lat);
    // this.set('lng', lng);
    // this.set('elevation', elevation);
    // this.set('postalCode', postalCode);
    // this.set('size', size);
    // this.set('age', age);
    // this.set('azimuth', azimuth);
    // this.set('roofPitch', roofPitch);
    // this.set('savings', savings);
    // this.set('powerGeneratedOverTime', powerGeneratedOverTime);
    // this.set('conventionalSystem', conventionalSystem);
    // this.set('systemType', systemType);
    // this.set('installationType', installationType);
    // this.set('averageSolarPower', averageSolarPower);
    // this.set('waterConsumption', waterConsumption);
    // this.set('electricityConsumption', electricityConsumption);

    // "id": "WEL0813",
    // "postalcode": "B3A",
    // "daysinuse": 441,
    // "avgpowerperday": 1000269.8514285722,
    // "avgpowerperminute": 1406.5710402226841,
    // "totalpowersincestart": 441119004.4800003,
    // "conventional": "Oil",
    // "installation": "Flush mount"
    hData.forEach(function(h){
      var house = new House(
        h.id,
        h.Lat,
        h.Lng,
        Math.floor(Math.random() * 200),
        h.PostalCode,
        Math.floor(Math.random() * 3000),
        Math.floor(Math.random() * 80),
        Math.floor(Math.random() * 90),
        Math.floor(Math.random() * 25),
        Math.floor(Math.random() * 10000),
        Math.floor(Math.random() * 25000),
        h.conventional,
        "SB32",
        h.installation,
        Math.floor(Math.random() * 5000),
        Math.floor(Math.random() * 25000),
        Math.floor(Math.random() * 25000)
      );
      houses.pushObject(house);
    });
  },

});
