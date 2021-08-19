import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";

const MainLayout: React.FC = ({children}) => {
    return (
        <div>
            <Navbar />
            <Container style={{marginTop: 90}}>
                {children}
            </Container>
        </div>
    );
};

export default MainLayout;