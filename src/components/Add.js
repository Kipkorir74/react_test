import {React, useState, useEffect, Fragment} from "react";
import {Button, Table, Form} from "react-bootstrap";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from "react-router-dom";

function Add() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [names, setNames] = useState([]);
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let data = {
      name: name,
      age: age,
      id: uniqueId
    }

    setNames([...names, data])
  }

  const deleteStuff = (x) => {
    console.log(x)
    let y = names.filter((item) => item.id !== x)
    setNames(y)
    console.log("UPDATED", y)
  }

  const updateStuff = (x) => {
    names[x] = {
      name:name,
      age:age,
    }
    let item = {name,age}
    console.log("item",item);
    // let y = names.find((item) => item.id === x)
    // setNames(y)
    // console.log("UPDATED", y)
  }

  useEffect(() => {
    console.log(names)
  }, [names])

  return (
    <div>
      <h1>{names?.length}</h1>
      <Form className='d-grid gap-2' style={{margin: "10rem"}}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>

          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>

          </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
      </Form>

      <div>
        <Fragment>
          <div style={{margin: "10rem"}}>
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>
                  ID
                </th>
                <th>
                  Name
                </th>
                <th>
                  Age
                </th>
                <th>
                  Actions
                </th>
              </tr>
              </thead>
              <tbody>
              {
                names?.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.age}
                      </td>
                      <td>
                        <Button onClick={(e) => deleteStuff(item.id)}>DELETE </Button>
                        &nbsp;
                        <Button onClick={(e) => updateStuff(item.id)}>UPDATE</Button>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </Table>
            <br>
            </br>

          </div>
        </Fragment>
      </div>

    </div>
  )
}
export default Add;