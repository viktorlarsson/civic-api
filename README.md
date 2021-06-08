# VGR Vaccine Time Slots

Integration with Västra Götalands Vaccine API using Javascript that will work in the browser and node. 

## setCredentials

This is required to run before you to fetch the test centers.

You can find more information on how to obtain your own api key here:

https://vgrblogg.se/utveckling/2021/05/27/hjalp-vgr-testa-vart-api-med-oppna-vaccintider/#egna-nycklar
 
```javascript
setCredentials('your client id', 'your client secret');
```
## getTestCenters

Fetches the test centers which provides Covid 19 vaccinations in Västra Götaland.

```javascript
import { getTestCenters, setCredentials } from 'civic-api';

setCredentials('your client id', 'your client secret');

// Default is 2 weeks
const testCenters = getTestCenters();

// Get 4 weeks from now
const testCenters4weeks = getTestCenters(4);

// Change server environment
const testCenters4weeksFromTest = getTestCenters(4, 'test');

```

```js
  {
    testcenters: [
          {
            title: 'Närhälsan Ågårdsskogen',
            hsaid: 'SE2321000131-E000000000458',
            municipality: '1494',
            urlBooking: 'https://e-tjanster.1177.se/mvk/scheduling/tbMakeValidation.xhtml?hsaid=SE2321000131-E000000000458&dynamicid=bb0225fc-7c37-47c1-8558-ddb991501c2c',
            urlContactCard: 'https://e-tjanster.1177.se/mvk/facilityContactCard.xhtml?hsaId=SE2321000131-E000000000458',
            urlContactCardText: '1',
            testtype: '1',
            timeslots: 0,
            updated: '2021-05-28 11:38:35'
          },
    ],
    numberOfWeeks: 2 
  }
```

## getTestCenterInformation

Fetches more information regarding the specific test centers

```javascript
import { getTestCenterInformation } from 'civic-api';

const testCenters = getTestCenterInformation({ hsaid: 'SE2321000131-E000000007687' });

```

```js
  {
    resultCount: 1,
    offset: 0,
    limit: 100,
    queryTime: 5029997,
    results: [
      {
        postnummer: '54630',
        foretag: 'Närhälsan',
        ykoord: '471781',
        namn: 'Närhälsan Karlsborg vårdcentral',
        id: '103',
        xkoord: '6487874',
        adress: 'Kärleksstigen 4B',
        hsaid: 'SE2321000131-E000000002615',
        postort: 'Karlsborg'
      }
    ]
  }
```