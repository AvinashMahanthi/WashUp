import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import {
  Container,
  FormWrap,
  FormContent,
  FormController,
  FormH1,
  FormLabel,
} from "./addCarServiceStyled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCarService = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        // gender,
        address,
        area,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Saved sucessfully 😋");
          history.push("/signin");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <FormController action="#">
              <div className="container">
                <FormH1>
                  <h3 style={{ fontWeight: "bold" }}>Add Car Service</h3>
                </FormH1>
                <Form onSubmit={handleOnSubmit}>
                  <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Email
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Name
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Phone Number
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  {/* <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Gender
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </Form.Group> */}

                    <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Address
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  {/* <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Area
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Area"
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Services
                      </Form.Label>
                    </FormLabel>
                    <select id="inputState" class="form-select">
                    <option selected>Car Wash</option>
                    <option>Ceramic Coating</option>
                    <option>Interior Wash</option>

                    </select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <FormLabel>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Password
                      </Form.Label>
                    </FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    SignUp
                  </Button>
                </Form>
              </div>
              <ToastContainer
                autoClose={5000}
                position="top-center"
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </FormController>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default AddCarService ;
