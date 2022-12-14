import React from "react";
import Head from "next/head";
import Layout from "../../Components/LayoutWrapper/Layout";
import InfoDetls from "../../Components/InfoDetails/InfoDetls";

function HowItWorks() {
  return (
    <div>
      <Head>
        <title>Canada Freelancer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <InfoDetls />
      </Layout>
    </div>
  );
}

export default HowItWorks;
