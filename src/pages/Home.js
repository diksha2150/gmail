import React from "react";
import Layout from "../component/Layout/Layout";
import Reply from "./Reply";
import Chat from "./Chat";
import Detail from "./Detail";

const Home = () => {
  return (
    <Layout>
      <div className="flex ">
        <Reply />
        <Chat />
        <Detail />
      </div>
    </Layout>
  );
};

export default Home;
