import ForecastResponse from '../types/ForecastResponse'

const FORECAST_RESPONSE_MOCK: ForecastResponse = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'dt': 1710612000,
      'main': {
        'temp': 20.29,
        'feels_like': 19.94,
        'temp_min': 17.33,
        'temp_max': 20.29,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 999,
        'humidity': 60,
        'temp_kf': 2.96
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 33
      },
      'wind': {
        'speed': 2.89,
        'deg': 133,
        'gust': 3.38
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-16 18:00:00'
    },
    {
      'dt': 1710622800,
      'main': {
        'temp': 17,
        'feels_like': 16.48,
        'temp_min': 14.61,
        'temp_max': 17,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 66,
        'temp_kf': 2.39
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 66
      },
      'wind': {
        'speed': 2.91,
        'deg': 168,
        'gust': 3.07
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-16 21:00:00'
    },
    {
      'dt': 1710633600,
      'main': {
        'temp': 14.33,
        'feels_like': 13.65,
        'temp_min': 14.33,
        'temp_max': 14.33,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 70,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 3.33,
        'deg': 175,
        'gust': 4.26
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-17 00:00:00'
    },
    {
      'dt': 1710644400,
      'main': {
        'temp': 14.48,
        'feels_like': 13.89,
        'temp_min': 14.48,
        'temp_max': 14.48,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.18,
        'deg': 198,
        'gust': 3.37
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-17 03:00:00'
    },
    {
      'dt': 1710655200,
      'main': {
        'temp': 13.1,
        'feels_like': 12.55,
        'temp_min': 13.1,
        'temp_max': 13.1,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 80,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 99
      },
      'wind': {
        'speed': 1.64,
        'deg': 183,
        'gust': 2.23
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-17 06:00:00'
    },
    {
      'dt': 1710666000,
      'main': {
        'temp': 17.08,
        'feels_like': 16.67,
        'temp_min': 17.08,
        'temp_max': 17.08,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 70,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.07,
        'deg': 262,
        'gust': 0.85
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-17 09:00:00'
    },
    {
      'dt': 1710676800,
      'main': {
        'temp': 20.36,
        'feels_like': 19.99,
        'temp_min': 20.36,
        'temp_max': 20.36,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 59,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.3,
        'deg': 28,
        'gust': 2.42
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-17 12:00:00'
    },
    {
      'dt': 1710687600,
      'main': {
        'temp': 20.44,
        'feels_like': 20.08,
        'temp_min': 20.44,
        'temp_max': 20.44,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 997,
        'humidity': 59,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.97,
        'deg': 29,
        'gust': 2.35
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-17 15:00:00'
    },
    {
      'dt': 1710698400,
      'main': {
        'temp': 17.12,
        'feels_like': 16.9,
        'temp_min': 17.12,
        'temp_max': 17.12,
        'pressure': 1017,
        'sea_level': 1017,
        'grnd_level': 996,
        'humidity': 77,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.69,
        'deg': 140,
        'gust': 2.13
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-17 18:00:00'
    },
    {
      'dt': 1710709200,
      'main': {
        'temp': 15.44,
        'feels_like': 15.1,
        'temp_min': 15.44,
        'temp_max': 15.44,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 998,
        'humidity': 79,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.76,
        'deg': 249,
        'gust': 2.86
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-17 21:00:00'
    },
    {
      'dt': 1710720000,
      'main': {
        'temp': 14.39,
        'feels_like': 14.23,
        'temp_min': 14.39,
        'temp_max': 14.39,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 90,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.9,
        'deg': 193,
        'gust': 1.66
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-18 00:00:00'
    },
    {
      'dt': 1710730800,
      'main': {
        'temp': 14.36,
        'feels_like': 14.1,
        'temp_min': 14.36,
        'temp_max': 14.36,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 86,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.41,
        'deg': 89,
        'gust': 1.17
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-18 03:00:00'
    },
    {
      'dt': 1710741600,
      'main': {
        'temp': 13.25,
        'feels_like': 13.11,
        'temp_min': 13.25,
        'temp_max': 13.25,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.1,
        'deg': 302,
        'gust': 2.09
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-18 06:00:00'
    },
    {
      'dt': 1710752400,
      'main': {
        'temp': 13.9,
        'feels_like': 13.77,
        'temp_min': 13.9,
        'temp_max': 13.9,
        'pressure': 1022,
        'sea_level': 1022,
        'grnd_level': 1001,
        'humidity': 93,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.71,
        'deg': 269,
        'gust': 1
      },
      'visibility': 7409,
      'pop': 0.2,
      'rain': {
        '3h': 0.12
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-18 09:00:00'
    },
    {
      'dt': 1710763200,
      'main': {
        'temp': 16.38,
        'feels_like': 16.11,
        'temp_min': 16.38,
        'temp_max': 16.38,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 78,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.62,
        'deg': 353,
        'gust': 1.1
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-18 12:00:00'
    },
    {
      'dt': 1710774000,
      'main': {
        'temp': 16.13,
        'feels_like': 15.86,
        'temp_min': 16.13,
        'temp_max': 16.13,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 997,
        'humidity': 79,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.15,
        'deg': 12,
        'gust': 2.16
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-18 15:00:00'
    },
    {
      'dt': 1710784800,
      'main': {
        'temp': 13.41,
        'feels_like': 13.18,
        'temp_min': 13.41,
        'temp_max': 13.41,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 998,
        'humidity': 91,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 78
      },
      'wind': {
        'speed': 1.6,
        'deg': 16,
        'gust': 1.76
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-18 18:00:00'
    },
    {
      'dt': 1710795600,
      'main': {
        'temp': 11.95,
        'feels_like': 11.68,
        'temp_min': 11.95,
        'temp_max': 11.95,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 998,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.23,
        'deg': 299,
        'gust': 0.54
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-18 21:00:00'
    },
    {
      'dt': 1710806400,
      'main': {
        'temp': 12.39,
        'feels_like': 12.06,
        'temp_min': 12.39,
        'temp_max': 12.39,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 998,
        'humidity': 91,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.26,
        'deg': 157,
        'gust': 0.4
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-19 00:00:00'
    },
    {
      'dt': 1710817200,
      'main': {
        'temp': 11.37,
        'feels_like': 11.04,
        'temp_min': 11.37,
        'temp_max': 11.37,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 997,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 86
      },
      'wind': {
        'speed': 0.62,
        'deg': 247,
        'gust': 0.89
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-19 03:00:00'
    },
    {
      'dt': 1710828000,
      'main': {
        'temp': 10.68,
        'feels_like': 10.28,
        'temp_min': 10.68,
        'temp_max': 10.68,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 996,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 70
      },
      'wind': {
        'speed': 1.47,
        'deg': 158,
        'gust': 1.22
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-19 06:00:00'
    },
    {
      'dt': 1710838800,
      'main': {
        'temp': 14.9,
        'feels_like': 14.48,
        'temp_min': 14.9,
        'temp_max': 14.9,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 997,
        'humidity': 78,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }
      ],
      'clouds': {
        'all': 22
      },
      'wind': {
        'speed': 1.31,
        'deg': 3,
        'gust': 1.17
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-19 09:00:00'
    },
    {
      'dt': 1710849600,
      'main': {
        'temp': 17.75,
        'feels_like': 17.36,
        'temp_min': 17.75,
        'temp_max': 17.75,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 995,
        'humidity': 68,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 36
      },
      'wind': {
        'speed': 2.1,
        'deg': 21,
        'gust': 2.37
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-19 12:00:00'
    },
    {
      'dt': 1710860400,
      'main': {
        'temp': 18.36,
        'feels_like': 18.03,
        'temp_min': 18.36,
        'temp_max': 18.36,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 993,
        'humidity': 68,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 92
      },
      'wind': {
        'speed': 2.5,
        'deg': 36,
        'gust': 2.65
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-19 15:00:00'
    },
    {
      'dt': 1710871200,
      'main': {
        'temp': 14.89,
        'feels_like': 14.73,
        'temp_min': 14.89,
        'temp_max': 14.89,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 992,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 96
      },
      'wind': {
        'speed': 1.62,
        'deg': 79,
        'gust': 2.05
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-19 18:00:00'
    },
    {
      'dt': 1710882000,
      'main': {
        'temp': 14.19,
        'feels_like': 13.94,
        'temp_min': 14.19,
        'temp_max': 14.19,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 992,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.08,
        'deg': 139,
        'gust': 2.53
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-19 21:00:00'
    },
    {
      'dt': 1710892800,
      'main': {
        'temp': 13.81,
        'feels_like': 13.39,
        'temp_min': 13.81,
        'temp_max': 13.81,
        'pressure': 1011,
        'sea_level': 1011,
        'grnd_level': 990,
        'humidity': 82,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.27,
        'deg': 156,
        'gust': 2.58
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-20 00:00:00'
    },
    {
      'dt': 1710903600,
      'main': {
        'temp': 13.87,
        'feels_like': 13.43,
        'temp_min': 13.87,
        'temp_max': 13.87,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 989,
        'humidity': 81,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.28,
        'deg': 161,
        'gust': 2.54
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-20 03:00:00'
    },
    {
      'dt': 1710914400,
      'main': {
        'temp': 12.97,
        'feels_like': 12.7,
        'temp_min': 12.97,
        'temp_max': 12.97,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 989,
        'humidity': 91,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.42,
        'deg': 186,
        'gust': 2.43
      },
      'visibility': 10000,
      'pop': 0.97,
      'rain': {
        '3h': 1.09
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-20 06:00:00'
    },
    {
      'dt': 1710925200,
      'main': {
        'temp': 16.41,
        'feels_like': 16.25,
        'temp_min': 16.41,
        'temp_max': 16.41,
        'pressure': 1011,
        'sea_level': 1011,
        'grnd_level': 991,
        'humidity': 82,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.84,
        'deg': 271,
        'gust': 2.86
      },
      'visibility': 10000,
      'pop': 0.96,
      'rain': {
        '3h': 0.49
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-20 09:00:00'
    },
    {
      'dt': 1710936000,
      'main': {
        'temp': 14.2,
        'feels_like': 14.08,
        'temp_min': 14.2,
        'temp_max': 14.2,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 993,
        'humidity': 92,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 4.4,
        'deg': 307,
        'gust': 6.99
      },
      'visibility': 1878,
      'pop': 0.91,
      'rain': {
        '3h': 0.28
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-20 12:00:00'
    },
    {
      'dt': 1710946800,
      'main': {
        'temp': 12.87,
        'feels_like': 12.48,
        'temp_min': 12.87,
        'temp_max': 12.87,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 994,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.15,
        'deg': 304,
        'gust': 3.98
      },
      'visibility': 10000,
      'pop': 0.43,
      'rain': {
        '3h': 0.25
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-20 15:00:00'
    },
    {
      'dt': 1710957600,
      'main': {
        'temp': 12.5,
        'feels_like': 12.26,
        'temp_min': 12.5,
        'temp_max': 12.5,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 995,
        'humidity': 94,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.96,
        'deg': 211,
        'gust': 1.44
      },
      'visibility': 10000,
      'pop': 1,
      'rain': {
        '3h': 1.06
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-20 18:00:00'
    },
    {
      'dt': 1710968400,
      'main': {
        'temp': 11.61,
        'feels_like': 11.36,
        'temp_min': 11.61,
        'temp_max': 11.61,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 997,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 2.09,
        'deg': 301,
        'gust': 3.27
      },
      'visibility': 5463,
      'pop': 1,
      'rain': {
        '3h': 2.5
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-20 21:00:00'
    },
    {
      'dt': 1710979200,
      'main': {
        'temp': 11.38,
        'feels_like': 11.13,
        'temp_min': 11.38,
        'temp_max': 11.38,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 999,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 501,
          'main': 'Rain',
          'description': 'moderate rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.68,
        'deg': 243,
        'gust': 1.49
      },
      'visibility': 3513,
      'pop': 1,
      'rain': {
        '3h': 3.99
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-21 00:00:00'
    },
    {
      'dt': 1710990000,
      'main': {
        'temp': 11.17,
        'feels_like': 10.88,
        'temp_min': 11.17,
        'temp_max': 11.17,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.69,
        'deg': 298,
        'gust': 0.86
      },
      'visibility': 10000,
      'pop': 1,
      'rain': {
        '3h': 2.12
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-21 03:00:00'
    },
    {
      'dt': 1711000800,
      'main': {
        'temp': 11.13,
        'feels_like': 10.83,
        'temp_min': 11.13,
        'temp_max': 11.13,
        'pressure': 1023,
        'sea_level': 1023,
        'grnd_level': 1001,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 99
      },
      'wind': {
        'speed': 0.7,
        'deg': 81,
        'gust': 1.36
      },
      'visibility': 10000,
      'pop': 0.8,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-21 06:00:00'
    },
    {
      'dt': 1711011600,
      'main': {
        'temp': 12.22,
        'feels_like': 11.98,
        'temp_min': 12.22,
        'temp_max': 12.22,
        'pressure': 1025,
        'sea_level': 1025,
        'grnd_level': 1004,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.2,
        'deg': 354,
        'gust': 0.36
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-21 09:00:00'
    },
    {
      'dt': 1711022400,
      'main': {
        'temp': 13.13,
        'feels_like': 12.95,
        'temp_min': 13.13,
        'temp_max': 13.13,
        'pressure': 1026,
        'sea_level': 1026,
        'grnd_level': 1005,
        'humidity': 94,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.62,
        'deg': 141,
        'gust': 0.68
      },
      'visibility': 10000,
      'pop': 0.42,
      'rain': {
        '3h': 0.63
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-21 12:00:00'
    },
    {
      'dt': 1711033200,
      'main': {
        'temp': 15.91,
        'feels_like': 15.7,
        'temp_min': 15.91,
        'temp_max': 15.91,
        'pressure': 1026,
        'sea_level': 1026,
        'grnd_level': 1005,
        'humidity': 82,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 53
      },
      'wind': {
        'speed': 1.78,
        'deg': 19,
        'gust': 2.35
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-21 15:00:00'
    }
  ],
  'city': {
    'id': 3110044,
    'name': 'San Sebastian',
    'coord': {
      'lat': 43.3128,
      'lon': -1.975
    },
    'country': 'ES',
    'population': 185357,
    'timezone': 3600,
    'sunrise': 1710569869,
    'sunset': 1710612908
  }
}

export default FORECAST_RESPONSE_MOCK