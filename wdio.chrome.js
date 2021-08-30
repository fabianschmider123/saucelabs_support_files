exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    region: 'us',
    specs: [
        './test/**/*.js'
    ],
    maxInstances: 2,
    capabilities: [   
    //Windows 10 - Chrome
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        acceptInsecureCerts: true,
        'sauce:options': {
            //tunnelIdentifier: 'waldkirch',
            //screenResolution: '1920x1080',
        },
        //extendedDebugging: true,
        //capturePerformance: true
      /* specs: [
            './test/PC/*.js'
        ],   */
    }, 

],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    services: [
        ['sauce',/* 
        {
            sauceConnect: true,
            sauceConnectOpts: {}
        }*/
        ],
       // ['docker'],
    ['image-comparison',
        {
            formatImageName: '{tag}-{logName}-{width}x{height}',
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            isHybridApp: true,
            //returnAllCompareData: true,
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                },
                line:{
                    color: '#ff221a',
                    width: 3,
                },
            }
        }]],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 600000000,
        expectationResultHandler: function(passed, assertion) {
        }
    },
}