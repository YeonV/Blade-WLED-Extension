let defaultEffects = {
  sunrise: {
    name: 'sunrise',
    fx: 0,
    fp: 0,
    ix: 128,
    fxSpeed: 128,
    nf: 2,
    extra: '',
    colorOne: 'FF0000',
    colorTwo: 'FFB14A',
    colorThree: '000000',
    timeInMin: 10,
    brightnessStart: 5,
    brightnessEnd: 255,
    urlString:
      'http://192.168.1.186/win&FX=0&CL=h00FF0000&C2=h00FFB14A&A=5&NL=10&NT=255&NF=2',
    useFX: true,
    useSX: false,
    useCL: true,
    useC2: true,
    useA: true,
    useNL: true,
    useNT: true,
    useFP: false,
    useIX: false,
    useNF: true,
    useC3: false,
    useEXTRA: true
  }
};
let defaultGlobals = {
  ip: '192.168.1.186',
  wledPalettes: [
    'Default',
    'Random Cycle',
    'Primary Color',
    'Based on Primary',
    'Set Colors',
    'Based on Set',
    'Party',
    'Cloud',
    'Lava',
    'Ocean',
    'Forest',
    'Rainbow',
    'Rainbow Bands',
    'Sunset',
    'Rivendell',
    'Breeze',
    'Red & Blue',
    'Yellowout',
    'Analogous',
    'Splash',
    'Pastel',
    'Sunset 2',
    'Beech',
    'Vintage',
    'Departure',
    'Landscape',
    'Beach',
    'Sherbet',
    'Hult',
    'Hult 64',
    'Drywet',
    'Jul',
    'Grintage',
    'Rewhi',
    'Tertiary',
    'Fire',
    'Icefire',
    'Cyane',
    'Light Pink',
    'Autumn',
    'Magenta',
    'Magred',
    'Yelmag',
    'Yelblu',
    'Orange & Teal',
    'Tiamat',
    'April Night',
    'Orangery',
    'C9',
    'Sakura',
    'Aurora'
  ],
  wledEffects: [
    'Solid',
    'Blink',
    'Breathe',
    'Wipe',
    'Wipe Random',
    'Random Colors',
    'Sweep',
    'Dynamic',
    'Colorloop',
    'Rainbow',
    'Scan',
    'Scan Dual',
    'Fade',
    'Theater',
    'Theater Rainbow',
    'Running',
    'Saw',
    'Twinkle',
    'Dissolve',
    'Dissolve Rnd',
    'Sparkle',
    'Sparkle Dark',
    'Sparkle+',
    'Strobe',
    'Strobe Rainbow',
    'Strobe Mega',
    'Blink Rainbow',
    'Android',
    'Chase',
    'Chase Random',
    'Chase Rainbow',
    'Chase Flash',
    'Chase Flash Rnd',
    'Rainbow Runner',
    'Colorful',
    'Traffic Light',
    'Sweep Random',
    'Running 2',
    'Red & Blue',
    'Stream',
    'Scanner',
    'Lighthouse',
    'Fireworks',
    'Rain',
    'Merry Christmas',
    'Fire Flicker',
    'Gradient',
    'Loading',
    'Police',
    'Police All',
    'Two Dots',
    'Two Areas',
    'Circus',
    'Halloween',
    'Tri Chase',
    'Tri Wipe',
    'Tri Fade',
    'Lightning',
    'ICU',
    'Multi Comet',
    'Scanner Dual',
    'Stream 2',
    'Oscillate',
    'Pride 2015',
    'Juggle',
    'Palette',
    'Fire 2012',
    'Colorwaves',
    'Bpm',
    'Fill Noise',
    'Noise 1',
    'Noise 2',
    'Noise 3',
    'Noise 4',
    'Colortwinkles',
    'Lake',
    'Meteor',
    'Meteor Smooth',
    'Railway',
    'Ripple',
    'Twinklefox',
    'Twinklecat',
    'Halloween Eyes',
    'Solid Pattern',
    'Solid Pattern Tri',
    'Spots',
    'Spots Fade',
    'Glitter',
    'Candle',
    'Fireworks Starburst',
    'Fireworks 1D',
    'Bouncing Balls',
    'Sinelon',
    'Sinelon Dual',
    'Sinelon Rainbow',
    'Popcorn',
    'Drip',
    'Plasma',
    'Percent',
    'Ripple Rainbow',
    'Heartbeat'
  ]
};

// const getState = async () => {
//   return {effects, globals}
// }



let effects, globals;
const getState = async () => {
  return new Promise((resolve, reject) => {
    if (effects && globals) {
      resolve({ effects, globals });
    }
    chrome.storage.local.get(["effects", "globals"], function (result) {
      if (result.effects.length > 0 && result.globals) {
        effects = result.effects;
        globals = result.globals;
        resolve({ effects, globals });
      console.log("DEV03 ", typeof effects, typeof globals);
      } else {
        chrome.storage.local.set(
          {
            effects: defaultEffects,
            globals: defaultGlobals,
          },
          function () {
            effects = defaultEffects;
            globals = defaultGlobals;
            console.log("YZ_03", {
              effects: defaultEffects,
              globals: defaultGlobals,
            });
            resolve({ effects: defaultEffects, globals: defaultGlobals });
          }
        );
      }

    });    
  })
}
