import React from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { FlagsProvider } from 'react-feature-flags';

const client = new AppConfigurationClient(
  'Endpoint=https://reactfeatureflags.azconfig.io;Id=rbPk-lw-s0:0M5+JsBX32eVrLyi4opr;Secret=/SUxxNQpQfWS560BKlTTM3eQErrIA5nHW6B69M+T/yI='
);

async function getSettings() {
  const settings = await client.listConfigurationSettings({labelFilter: "featureFlag"});
  let flags = [];

  for await (const setting of settings) {
    const jsonObj = JSON.parse(setting.value);
    const obj = {name:jsonObj.id, isActive:jsonObj.enabled};
    flags.push(obj);
  }

  return flags;
}

let flags = [];
export default function App() {
  getSettings().then(data => { 
    var length = data.length;
    for (var i = 0; i < length; i++) {
      flags.push(data[i]);
    }
  });

  return (
    <FlagsProvider value={flags}>
      <MainLayout/>
    </FlagsProvider>
  );
}



