import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const firstName = "Alpha19"; // change or leave empty ""

function App() {
  return (
    <>
      <Container className="mt-5">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Body>
            <Image />
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
              <Price />
            </Card.Text>
          </Card.Body>
        </Card>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {firstName ? (
            <>
              <h3>Hello, {firstName}!</h3>
              <img
                src="https://via.placeholder.com/150"
                alt="user"
                style={{ marginTop: "10px" }}
              />
            </>
          ) : (
            <h3>Hello, there!</h3>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
