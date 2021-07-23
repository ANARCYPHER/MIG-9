import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
 
export default function layouts({children}) {
    return (
        <div>
            <Head>
             <title>Next Satan Bezos</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                   <Typography>SatanBezos</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved.Sucker
                </Typography>
            </footer>
        </div>
    )
}
