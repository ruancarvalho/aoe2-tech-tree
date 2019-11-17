import React from 'react';

export const civilizations = {
  britons: 10271,
  franks: 10272,
  goths: 10273,
  teutons: 10274,
  japanese: 10275,
  chinese: 10276,
  byzantines: 10277,
  persians: 10278,
  saracens: 10279,
  turks: 10280,
  vikings: 10281,
  mongols: 10282,
  celts: 10283,
  spanish: 10284,
  aztecs: 10285,
  mayans: 10286,
  huns: 10287,
  koreans: 10288,
  italians: 10289,
  indians: 10290,
  incas: 10291,
  magyars: 10292,
  slavs: 10293,
  portuguese: 10294,
  ethiopians: 10295,
  malians: 10296,
  berbers: 10297,
  khmer: 10298,
  malay: 10299,
  burmese: 10300,
  vietnamese: 10301,
};

export const CivilizationContext = React.createContext(
  civilizations.britons // default value
);