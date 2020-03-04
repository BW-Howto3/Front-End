import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';


const About = () => (
    <div>
        <Card className="one">
            <CardHeader>Brian Hague</CardHeader>
            <CardBody>Web4, Node Back End</CardBody>
            <CardFooter>github.com/alphaseinor</CardFooter>
        </Card>
        <Card className="two">
            <CardHeader>Tyler Thompson</CardHeader>
            <CardBody>Web26, React</CardBody>
            <CardFooter>github.com/adastraz</CardFooter>
        </Card>
            <Card className="three">
            <CardHeader>Batuhan Balta</CardHeader>
            <CardBody>Web11, React</CardBody>
            <CardFooter>github.com/baltabatuhan</CardFooter>
        </Card>
        <Card className="four">
            <CardHeader>Dessa Goodlett</CardHeader>
            <CardBody>Web13, React</CardBody>
            <CardFooter>github.com/dmhabh1992</CardFooter>
        </Card>
    </div>
)



export default About