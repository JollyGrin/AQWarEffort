import React, { Component } from 'react';
import { getData } from '../assets/js/gson';
import Layout from '../components/Layout';
import Table from '../assets/js/TableClass';
import Hero from '../components/Hero';
import Ally from '../components/Ally';
import Horde from '../components/Horde';

export default function Index({ gson, preview }) {
  const table = {
    ally: {
      current: new Table(gson[1]),
      total: new Table(gson[0]),
    },
    horde: {
      current: new Table(gson[3]),
      total: new Table(gson[2]),
    },
  };

  return (
    <Layout>
      <Hero />
      <section id='section-table'>
        <div id='table'>
          <div id='table-ally' className='tab'>
            <Ally table={table.ally} />
          </div>
          <div id='table-horde' className='tab'>
            <Horde table={table.horde} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const gson = await getData(process.env.URL);

  return {
    props: { gson }, // will be passed to the page component as props
  };
}
