import React from 'react';
import './Home.css';
import {Button} from "antd"


function Home() {
    return (
        <div>
            <Button className="danger-btn" ><a href="./Login">Danger</a></Button>

        </div>
    )
}

export default Home;