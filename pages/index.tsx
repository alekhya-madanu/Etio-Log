import type { NextPage } from 'next'
import '../node_modules/antd/dist/antd.css';
import React, { useState } from 'react';
import Layout from "../components/Layout";

const Home: NextPage = () => {
// const [state, setState] = useState({collapsed: false})

    return (
      <div>
        <Layout/>
      </div>
    );
}

export default Home
