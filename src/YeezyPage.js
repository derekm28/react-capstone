import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function YeezyPage() {
  const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=yeezy&brand=adidas";

  const [sneakers, setSneakers] = useState(null);

  // useEffect(() => {
  //   async function getSneakers() {
  //     axios.get(url).then(res => {
  //       setSneakers(res.data.results);
  //     });
  //   }
  //   getSneakers();
  // }, [url])

  const yeezys = {
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
    params: { limit: '100', brand: "adidas", name: "yeezy" },
    headers: {
      'x-rapidapi-key': 'd35e6f2cf6msh582d393a4408760p1fd4ddjsna38953b14404',
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
    }
  };
  useEffect(() => {
    async function getSneakers() {
      axios.request(yeezys).then(res => {
        setSneakers(res.data.results)
        // .catch(function (error) {
        //     console.error(error);
        // });
      });
    }
    getSneakers();
  })

  function SneakerDisplay() {
    return (
      <div className="row justify-content-center ">
        {sneakers
          ? sneakers.map((s, idx) => (
            <Card
              key={s.id}
              className="mr-2"
              title={s.title}
              brand={s.brand}
              colorway={s.colorway}
              style={{ width: "18rem" }}
              shoe={s.shoe}
              name={s.name}>
              <Card.Body>
                <Card.Img variant="top" src={s.media.smallImageUrl} />
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>
                  <div>{s.colorway}</div>
                  <div>Release Date: {s.releaseDate}</div>
                  <div>Retail Price: ${s.retailPrice}</div>
                </Card.Text>
                <Button variant="primary">Save</Button>
              </Card.Body>
            </Card>
          ))
          : null}
      </div>
    );
  }

  return (
    <div className='FrontPage'>
      <Jumbotron fluid>
        <Container>
          <Row>
            {/* <h1>Yeezy</h1> */}
            <Col xs={6} md={4}>

            </Col>
            <Col xs={6} md={4}>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAADc3NwTExPIyMjm5uaAgIC4uLjQ0NAICAj6+vpJSUnFxcWUlJR1dXVYWFhTU1Pt7e3z8/MuLi5jY2OFhYVAQEDq6uqkpKSzs7PW1tYfHx8WFhbg4OCWlpYkJCRFRUVtbW2MjIyfn583NzcsLCyVlZWZwPUIAAAC/0lEQVR4nO3Za1fiMBCA4bQFykWxlIsisCrq/v+fuJ1J0zSlurB7wEN5ny+m0xLMnGQSwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACg7leUJFHsrqbFVZIbs5O/XjSQm6tREHwZF7H+NojJa002Skbz6g3moyRaXHxY53EXFdxg+nLxWjR6USiTu41YNCtiw0asX8QG0liXXT7Jxf7iwzqTlYzm0ban0k7NfyZLU/5Sdp/Uur9+axmNLjOTS/NDVlczWRO5fUyyNC1v0rrTLlNpTn9mZGeQf8p4pNaYvbSepKXJWiwHji4qTaWPLSU2qy4X1Qw0z76p8zZue9/r9C7jeS8a+ahobDRtmqxe48HvJ4lOp6FtZ9J+NuXE60p5FzMpK7K11Wpxzy8k79tkxfW06K7xVjQe2pJ+1ZYyorUZv/hafHqyJsF609W3s+txcp7/+ofo7rWylb5MxsnJ6oU3ta+lXZrpWf7pH2N3r/rcODlZr3Kz7683srS1Ys2/eMW10nojw4seysipBT61M8nTXWNe7a5dkrljUrmb2WStH/sl3SE1WW8zF3PTSANao4a1mTWuTl7ji47kAtzR8sMFNFkjpyhoIgqDdsWOkyJkX72N7n2X+7LLe9M5n3ZkVS1unOA/NRjG9BxVnvqd2kJ08fyyA7mE1E6N6rqRLFukT0qW/ZzZoU86NXrGWleXjWRtNPj3ZA1qPe400jcddC8j87VYk7VPHbsvSiyrYmn5dJrqp8JBEVkHqZGi360DqfO7JVlHHh3GUt+3h5uenNseDh/vgLaZdeSh1H9XESJZh8nSojVvOU2RrMNkTcOtwSNZB8nSTW/V1uVtJeuoAr9oS6u6rWS9Pw8dPRNIbOFjes6yXyzcVXa+y9tKVk3rDxbySWbRiGW+y5tN1pc/hWVtD1oki2SZf1+Gk6+TtQovuySO4/rvxrs4oF+0zMKYFv08bnnQysNLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAzvsDgAsdNraXMGkAAAAASUVORK5CYII=" roundedCircle thumbnail />
            </Col>
            {/* <Col xs={6} md={4}>
                            <Image src="https://i1.wp.com/sportsfinding.com/wp-content/uploads/2020/02/nike-swoosh-wikipedia.jpg?fit=580%2C350&ssl=1" thumbnail />
                        </Col> */}
          </Row>
        </Container>
      </Jumbotron>
      <div>
        <SneakerDisplay />
      </div>
    </div>
  );
}

export default YeezyPage;
