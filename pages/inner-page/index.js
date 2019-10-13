import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Anchor from "../../components/Anchor";

const InnerPage = () => {
  return (
    <Fragment>
      <Head>
        <title>This is Page 2 of the demo app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The page 2 of the demo app is very different from the page 1 of the app"
        />
      </Head>

      <Link href="/">
        <a>Page 1</a>
      </Link>

      <Heading>This is Page 2</Heading>

      <Text>
        This is page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2
      </Text>

      <Anchor url="https://facebook.com"> Facebook </Anchor>
      <Anchor url="https://instagram.com"> Instagram </Anchor>
      <Anchor url="https://twitter.com"> Twitter </Anchor>
    </Fragment>
  );
};

export default InnerPage;
