import type { NextPage } from 'next'
import '../node_modules/antd/dist/antd.css';
import React, { useState } from 'react';
import HomeForm from './HomeForm';

const Home: NextPage = () => {
// const [state, setState] = useState({collapsed: false})
    return <HomeForm/>;
}

export default Home
