import fetch from 'axios';
import mock from './mock.json';

export async function getData(sheetsURL) {
  // const gson = `https://gson.now.sh?url=${sheetsURL}`;

  // const grab = await fetch(gson);

  // console.log('grab', grab);

  // return grab.data;
  return mock;
}

// const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;
