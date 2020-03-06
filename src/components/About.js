import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';


const About = () => (
    <div className="cards">
        <Card className="one">
            <CardHeader>Brian Hague</CardHeader>
            <CardBody><img src="https://avatars0.githubusercontent.com/u/2449547?s=460&v=4" alt="" /></CardBody>
            <CardFooter>Web4, Node Back End<br></br>github.com/alphaseinor</CardFooter>
        </Card>
        <Card className="two">
            <CardHeader>Tyler Thompson</CardHeader>
            <CardBody><img src="https://ca.slack-edge.com/T4JUEB3ME-UPK2XPJTS-dd1519c5ab76-72" alt="" /></CardBody>
            <CardFooter>Web26, React<br></br>github.com/adastraz</CardFooter>
        </Card>
            <Card className="three">
            <CardHeader>Batuhan Balta</CardHeader>
            <CardBody><img src="https://avatars3.githubusercontent.com/u/54727727?s=460&v=4" alt="" /></CardBody>
            <CardFooter>Web11, React<br></br>github.com/baltabatuhan</CardFooter>
        </Card>
        <Card className="four">
            <CardHeader>Dessa Goodlett</CardHeader>
            <CardBody><img src="https://avatars0.githubusercontent.com/u/53787065?s=460&v=4" alt="" /></CardBody>
            <CardFooter>Web13, React<br></br>github.com/dmhabh1992</CardFooter>
        </Card>
    </div>
)



export default About