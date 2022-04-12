import { Session } from '@supabase/supabase-js';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/initSupabase';
import Login from "../Login"

export default function Header() {
    const [session, setSession] = useState < Session | null > (null)
    useEffect(() => {
      setSession(supabase.auth.session())

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    const onLogout = () => setSession(null)
    return <Layout.Header className="header">
    <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link href="/HomeForm">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href="/ViewData">
                    Data
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link href="/HomeForm">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Login login={session!=null} onLogout={onLogout} />
            </Menu.Item>
        </Menu>
    </Layout.Header>
}