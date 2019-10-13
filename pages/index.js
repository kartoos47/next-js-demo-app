import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

import Heading from "../components/Heading";
import Text from "../components/Text";
import Anchor from "../components/Anchor";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>This is Page 1 of the demo app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The page 1 of the demo app is very different from the page 2 of the app"
        />
      </Head>

      <Link href="/inner-page">
        <a>Page 2</a>
      </Link>

      <Heading>This is Page 1</Heading>

      <Text>
        Amid AOC pressure, Pelosi suggests impeachment back on the table to
        address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
        suggests impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'
      </Text>

      <Anchor url="https://google.com"> Google </Anchor>
      <Anchor url="https://yahoo.com"> Yahoo </Anchor>
      <Anchor url="https://amazon.com"> Amazon </Anchor>
    </Fragment>
  );
};

export default HomePage;
