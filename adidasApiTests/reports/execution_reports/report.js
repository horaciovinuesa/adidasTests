$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getWeatherByCityId.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by city id",
  "description": "I want to be able to get the current weather for a given city using the city id",
  "id": "get-weather-by-city-id",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Get current weather data by city ID",
  "description": "",
  "id": "get-weather-by-city-id;get-current-weather-data-by-city-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city \u003cCityID\u003e by city id",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;",
  "rows": [
    {
      "cells": [
        "CityID"
      ],
      "line": 10,
      "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;1"
    },
    {
      "cells": [
        "3686513"
      ],
      "line": 11,
      "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;2"
    },
    {
      "cells": [
        "2643743"
      ],
      "line": 12,
      "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;3"
    },
    {
      "cells": [
        "3104324"
      ],
      "line": 13,
      "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get current weather data by city ID",
  "description": "",
  "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city 3686513 by city id",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3686513",
      "offset": 32
    },
    {
      "val": "id",
      "offset": 48
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 920975963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 3070030,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get current weather data by city ID",
  "description": "",
  "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city 2643743 by city id",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2643743",
      "offset": 32
    },
    {
      "val": "id",
      "offset": 48
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 353037771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 182465,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get current weather data by city ID",
  "description": "",
  "id": "get-weather-by-city-id;get-current-weather-data-by-city-id;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city 3104324 by city id",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3104324",
      "offset": 32
    },
    {
      "val": "id",
      "offset": 48
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 316395795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 390607,
  "status": "passed"
});
formatter.uri("getWeatherByCityName.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by city name",
  "description": "I want to be able to get the current weather for a given city using the city name",
  "id": "get-weather-by-city-name",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Get current weather data by city name",
  "description": "",
  "id": "get-weather-by-city-name;get-current-weather-data-by-city-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city \u003cCityName\u003e by city name",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;",
  "rows": [
    {
      "cells": [
        "CityName"
      ],
      "line": 10,
      "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;1"
    },
    {
      "cells": [
        "Cordoba,AR"
      ],
      "line": 11,
      "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;2"
    },
    {
      "cells": [
        "London,UK"
      ],
      "line": 12,
      "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;3"
    },
    {
      "cells": [
        "Zaragoza,ES"
      ],
      "line": 13,
      "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get current weather data by city name",
  "description": "",
  "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city Cordoba,AR by city name",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cordoba,AR",
      "offset": 32
    },
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 449430046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 332425,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get current weather data by city name",
  "description": "",
  "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city London,UK by city name",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London,UK",
      "offset": 32
    },
    {
      "val": "name",
      "offset": 50
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 274629627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 318059,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get current weather data by city name",
  "description": "",
  "id": "get-weather-by-city-name;get-current-weather-data-by-city-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city Zaragoza,ES by city name",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Zaragoza,ES",
      "offset": 32
    },
    {
      "val": "name",
      "offset": 52
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 310311684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 326638,
  "status": "passed"
});
formatter.uri("getWeatherByGeoCoord.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by geographic coordinates",
  "description": "I want to be able to get the current weather for a given city using the city geographic coordinates",
  "id": "get-weather-by-geographic-coordinates",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Get current weather data by geographic coordinates",
  "description": "",
  "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets data for the city lat \u003clat\u003e and lon \u003clon\u003e by city geolocation",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;",
  "rows": [
    {
      "cells": [
        "lat",
        "lon"
      ],
      "line": 10,
      "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;1"
    },
    {
      "cells": [
        "-27.78",
        "-67.24"
      ],
      "line": 11,
      "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;2"
    },
    {
      "cells": [
        "41.65",
        "-0.88"
      ],
      "line": 12,
      "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;3"
    },
    {
      "cells": [
        "51,51",
        "-0.13"
      ],
      "line": 13,
      "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get current weather data by geographic coordinates",
  "description": "",
  "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets data for the city lat -27.78 and lon -67.24 by city geolocation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "-27.78",
      "offset": 32
    },
    {
      "val": "-67.24",
      "offset": 47
    },
    {
      "val": "geolocation",
      "offset": 62
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city_by_geoloc(String,String,String)"
});
formatter.result({
  "duration": 340116180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 272125,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get current weather data by geographic coordinates",
  "description": "",
  "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets data for the city lat 41.65 and lon -0.88 by city geolocation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "41.65",
      "offset": 32
    },
    {
      "val": "-0.88",
      "offset": 46
    },
    {
      "val": "geolocation",
      "offset": 60
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city_by_geoloc(String,String,String)"
});
formatter.result({
  "duration": 352838506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 215066,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get current weather data by geographic coordinates",
  "description": "",
  "id": "get-weather-by-geographic-coordinates;get-current-weather-data-by-geographic-coordinates;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets data for the city lat 51,51 and lon -0.13 by city geolocation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "51,51",
      "offset": 32
    },
    {
      "val": "-0.13",
      "offset": 46
    },
    {
      "val": "geolocation",
      "offset": 60
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city_by_geoloc(String,String,String)"
});
formatter.result({
  "duration": 263969749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 213278,
  "status": "passed"
});
formatter.uri("getWeatherByZipCode.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by zip code",
  "description": "I want to be able to get the current weather for a given city using the city zip code",
  "id": "get-weather-by-zip-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Get current weather data by zip code",
  "description": "",
  "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city \u003cCityZipCode\u003e by city zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;",
  "rows": [
    {
      "cells": [
        "CityZipCode"
      ],
      "line": 10,
      "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;1"
    },
    {
      "cells": [
        "5000,AR"
      ],
      "line": 11,
      "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;2"
    },
    {
      "cells": [
        "50001,ES"
      ],
      "line": 12,
      "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;3"
    },
    {
      "cells": [
        "EC3,GB"
      ],
      "line": 13,
      "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get current weather data by zip code",
  "description": "",
  "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city 5000,AR by city zipcode",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5000,AR",
      "offset": 32
    },
    {
      "val": "zipcode",
      "offset": 48
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 300059085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 336479,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get current weather data by zip code",
  "description": "",
  "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city 50001,ES by city zipcode",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50001,ES",
      "offset": 32
    },
    {
      "val": "zipcode",
      "offset": 49
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 595751612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 190083,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get current weather data by zip code",
  "description": "",
  "id": "get-weather-by-zip-code;get-current-weather-data-by-zip-code;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the data for the city EC3,GB by city zipcode",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The data is complete and contains the sections weather main wind clouds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "EC3,GB",
      "offset": 32
    },
    {
      "val": "zipcode",
      "offset": 47
    }
  ],
  "location": "ApiSteps.user_gets_data_for_city(String,String)"
});
formatter.result({
  "duration": 501853864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather",
      "offset": 47
    },
    {
      "val": "main",
      "offset": 55
    },
    {
      "val": "wind",
      "offset": 60
    },
    {
      "val": "clouds",
      "offset": 65
    }
  ],
  "location": "ApiSteps.data_is_complete_and_sections_are_complete(String,String,String,String)"
});
formatter.result({
  "duration": 162358,
  "status": "passed"
});
formatter.uri("healthCheck.feature");
formatter.feature({
  "line": 1,
  "name": "Health check",
  "description": "I want to be able to get the current weather for the default city and check that the service is up and running",
  "id": "health-check",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Get status of the service by quering the default city",
  "description": "",
  "id": "health-check;get-status-of-the-service-by-quering-the-default-city",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@apiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User gets the status of the openweathermap service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The service is up and running",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.user_gets_the_service_status()"
});
formatter.result({
  "duration": 6796506931,
  "status": "passed"
});
formatter.match({
  "location": "ApiSteps.user_checks_the_service_status()"
});
formatter.result({
  "duration": 144770,
  "status": "passed"
});
formatter.uri("wiktionarySearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search on Wiktionary page",
  "description": "I want to be able to search for any given word on the wikstionary page",
  "id": "search-on-wiktionary-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for specific string on wikitionary page",
  "description": "",
  "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@uiTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on wiktionary homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the word \u003clookup\u003e on the search field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on look up button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The results contain the value \u003cexpectedDefinition\u003e on the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;",
  "rows": [
    {
      "cells": [
        "lookup",
        "expectedDefinition"
      ],
      "line": 12,
      "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;;1"
    },
    {
      "cells": [
        "apple",
        "A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates."
      ],
      "line": 13,
      "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;;2"
    },
    {
      "cells": [
        "pear",
        "An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem."
      ],
      "line": 14,
      "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search for specific string on wikitionary page",
  "description": "",
  "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@uiTest"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on wiktionary homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the word apple on the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on look up button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The results contain the value A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates. on the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WiktionarySteps.user_gets_the_service_status()"
});
formatter.result({
  "duration": 4173283270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 21
    }
  ],
  "location": "WiktionarySteps.user_enters_the_word_on_search_field(String)"
});
formatter.result({
  "duration": 546611225,
  "status": "passed"
});
formatter.match({
  "location": "WiktionarySteps.user_clicks_on_lookup_button()"
});
formatter.result({
  "duration": 1489132108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.",
      "offset": 30
    }
  ],
  "location": "WiktionarySteps.user_clicks_on_lookup_button(String)"
});
formatter.result({
  "duration": 1487004284,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for specific string on wikitionary page",
  "description": "",
  "id": "search-on-wiktionary-page;search-for-specific-string-on-wikitionary-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@uiTest"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on wiktionary homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the word pear on the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on look up button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The results contain the value An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem. on the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WiktionarySteps.user_gets_the_service_status()"
});
formatter.result({
  "duration": 4900814517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pear",
      "offset": 21
    }
  ],
  "location": "WiktionarySteps.user_enters_the_word_on_search_field(String)"
});
formatter.result({
  "duration": 460816091,
  "status": "passed"
});
formatter.match({
  "location": "WiktionarySteps.user_clicks_on_lookup_button()"
});
formatter.result({
  "duration": 1238665902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.",
      "offset": 30
    }
  ],
  "location": "WiktionarySteps.user_clicks_on_lookup_button(String)"
});
formatter.result({
  "duration": 1278140167,
  "status": "passed"
});
});