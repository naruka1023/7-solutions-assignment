import { dummyData, toDoItem } from "./model";

const data = [
    {
      type: 'Fruit',
      name: 'Apple',
    },
    {
      type: 'Vegetable',
      name: 'Broccoli',
    },
    {
      type: 'Vegetable',
      name: 'Mushroom',
    },
    {
      type: 'Fruit',
      name: 'Banana',
    },
    {
      type: 'Vegetable',
      name: 'Tomato',
    },
    {
      type: 'Fruit',
      name: 'Orange',
    },
    {
      type: 'Fruit',
      name: 'Mango',
    },
    {
      type: 'Fruit',
      name: 'Pineapple',
    },
    {
      type: 'Vegetable',
      name: 'Cucumber',
    },
    {
      type: 'Fruit',
      name: 'Watermelon',
    },
    {
      type: 'Vegetable',
      name: 'Carrot',
    },
  ];
  export const mockResult = {
    Marketing: {
      male: 2,
      female: 0,
      ageRange: '38-50',
      hair: { Black: 1, Blond: 1, Chestnut: 0, Brown: 0 },
      addressUser: { TerryMedhurst: '20020', TerrillHills: '95945' }
    },
    Services: {
      male: 1,
      female: 0,
      ageRange: '28',
      hair: { Black: 0, Blond: 1, Chestnut: 0, Brown: 0 },
      addressUser: { SheldonQuigley: '40219' }
    },
    'Business Development': {
      male: 1,
      female: 0,
      ageRange: '49',
      hair: { Black: 0, Blond: 1, Chestnut: 0, Brown: 0 },
      addressUser: { MilesCummerata: '06040' }
    },
    Support: {
      male: 1,
      female: 0,
      ageRange: '38',
      hair: { Black: 0, Blond: 0, Chestnut: 0, Brown: 1 },
      addressUser: { MavisSchultz: '40206' }
    }
  }

  export const mockData: dummyData[] = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: '2000-12-25',
      image: 'https://robohash.org/Terry.png?set=set4',
      bloodGroup: 'A-',
      height: 189,
      weight: 75.4,
      eyeColor: 'Green',
      hair: { color: 'Black', type: 'Strands' },
      domain: 'slashdot.org',
      ip: '117.29.86.254',
      address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
        postalCode: '20020',
        state: 'DC',
        coordinates: {
          lat: 0,
          lng: 0
        }
      },
      macAddress: '13:69:BA:56:A3:74',
      university: 'Capitol University',
      bank: {
        cardExpire: '06/22',
        cardNumber: '50380955204220685',
        cardType: 'maestro',
        currency: 'Peso',
        iban: 'NO17 0695 2754 967'
      },
      company: {
        department: 'Marketing',
        name: "Blanda-O'Keefe",
        title: 'Help Desk Operator',
        address: {
          address: "",
          city: "",
          coordinates: [],
          postalCode: "",
          state: ""
        }
      },
      ein: '20-9487066',
      ssn: '661-64-2976',
      userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
        network: 'Ethereum (ERC20)'
      }
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      maidenName: 'Cole',
      age: 28,
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      phone: '+7 813 117 7139',
      username: 'hbingley1',
      password: 'CQutx25i8r',
      birthDate: '2003-08-02',
      image: 'https://robohash.org/Sheldon.png?set=set4',
      bloodGroup: 'O+',
      height: 187,
      weight: 74,
      eyeColor: 'Brown',
      hair: { color: 'Blond', type: 'Curly' },
      domain: '51.la',
      ip: '253.240.20.181',
      address: {
        address: '6007 Applegate Lane',
        city: 'Louisville',
        postalCode: '40219',
        state: 'KY',
        coordinates: {
          lat: 0,
          lng: 0
        }
      },
      macAddress: '13:F1:00:DA:A4:12',
      university: 'Stavropol State Technical University',
      bank: {
        cardExpire: '10/23',
        cardNumber: '5355920631952404',
        cardType: 'mastercard',
        currency: 'Ruble',
        iban: 'MD63 L6YC 8YH4 QVQB XHIK MTML'
      },
      company: {
        department: 'Services',
        name: 'Aufderhar-Cronin',
        title: 'Senior Cost Accountant',
        address: {
          address: "",
          city: "",
          coordinates: [],
          postalCode: "",
          state: ""
        }
      },
      ein: '52-5262907',
      ssn: '447-08-9217',
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
        network: 'Ethereum (ERC20)'
      }
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      maidenName: 'Hoeger',
      age: 38,
      gender: 'male',
      email: 'rshawe2@51.la',
      phone: '+63 739 292 7942',
      username: 'rshawe2',
      password: 'OWsTbMUgFc',
      birthDate: '1992-12-30',
      image: 'https://robohash.org/Terrill.png?set=set4',
      bloodGroup: 'A-',
      height: 200,
      weight: 105.3,
      eyeColor: 'Gray',
      hair: { color: 'Blond', type: 'Very curly' },
      domain: 'earthlink.net',
      ip: '205.226.160.3',
      address: {
        address: '560 Penstock Drive',
        city: 'Grass Valley',
        coordinates: [Object],
        postalCode: '95945',
        state: 'CA'
      },
      macAddress: 'F2:88:58:64:F7:76',
      university: 'University of Cagayan Valley',
      bank: {
        cardExpire: '10/23',
        cardNumber: '3586082982526703',
        cardType: 'jcb',
        currency: 'Peso',
        iban: 'AT24 1095 9625 1434 9703'
      },
      company: {
        department: 'Marketing',
        name: 'Lindgren LLC',
        title: 'Mechanical Systems Engineer',
        address: {
          address: "",
          city: "",
          coordinates: [],
          postalCode: "",
          state: ""
        }
      },
      ein: '48-3951994',
      ssn: '633-89-1926',
      userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
        network: 'Ethereum (ERC20)'
      }
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      maidenName: 'Maggio',
      age: 49,
      gender: 'male',
      email: 'yraigatt3@nature.com',
      phone: '+86 461 145 4186',
      username: 'yraigatt3',
      password: 'sRQxjPfdS',
      birthDate: '1969-01-16',
      image: 'https://robohash.org/Miles.png?set=set4',
      bloodGroup: 'B+',
      height: 157,
      weight: 95.9,
      eyeColor: 'Gray',
      hair: { color: 'Blond', type: 'Very curly' },
      domain: 'homestead.com',
      ip: '243.20.78.113',
      address: {
        address: '150 Carter Street',
        city: 'Manchester',
        coordinates: [Object],
        postalCode: '06040',
        state: 'CT'
      },
      macAddress: '03:45:58:59:5A:7B',
      university: 'Shenyang Pharmaceutical University',
      bank: {
        cardExpire: '07/24',
        cardNumber: '3580047879369323',
        cardType: 'jcb',
        currency: 'Yuan Renminbi',
        iban: 'KZ43 658B M6VS TZOU OXSO'
      },
      company: {
        department: 'Business Development',
        name: 'Wolff and Sons',
        title: 'Paralegal',
        address: {
          address: "",
          city: "",
          coordinates: [],
          postalCode: "",
          state: ""
        }
      },
      ein: '71-3644334',
      ssn: '487-28-6642',
      userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.17 Safari/537.11',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7',
        network: 'Ethereum (ERC20)'
      }
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      maidenName: 'Yundt',
      age: 38,
      gender: 'male',
      email: 'kmeus4@upenn.edu',
      phone: '+372 285 771 1911',
      username: 'kmeus4',
      password: 'aUTdmmmbH',
      birthDate: '1968-11-03',
      image: 'https://robohash.org/Mavis.png?set=set4',
      bloodGroup: 'O+',
      height: 188,
      weight: 106.3,
      eyeColor: 'Brown',
      hair: { color: 'Brown', type: 'Curly' },
      domain: 'columbia.edu',
      ip: '103.72.86.183',
      address: {
        address: '2721 Lindsay Avenue',
        city: 'Louisville',
        coordinates: [Object],
        postalCode: '40206',
        state: 'KY'
      },
      macAddress: 'F8:04:9E:ED:C0:68',
      university: 'Estonian University of Life Sciences',
      bank: {
        cardExpire: '01/24',
        cardNumber: '4917245076693618',
        cardType: 'visa-electron',
        currency: 'Euro',
        iban: 'IT41 T114 5127 716J RGYB ZRUX DSJ'
      },
      company: {
        department: 'Support',
        name: 'Adams Inc',
        title: 'Web Developer I',
        address: {
          address: "",
          city: "",
          coordinates: [],
          postalCode: "",
          state: ""
        }
      },
      ein: '18-7178563',
      ssn: '667-98-5357',
      userAgent: 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.1 Safari/535.1',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
        network: 'Ethereum (ERC20)'
      }
    }
  ]



  export default data;
  