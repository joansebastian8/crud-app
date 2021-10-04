import React from 'react';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


//const BASE_URL = process.env.REACT_APP_API_URL;
const BASE_URL = 'http://localhost:3000/';
const PATH_CUSTOMERS = 'customers';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      modalActualizar: false,
      modalInsertar: false,
      form: {
        email: "",
        phoneNumber: "",
        address: "",
        firstName: "",
        lastName: ""
      }
    };
  }

  componentDidMount() {
    this.cargarCustomers();
  }

  mostrarModalActualizar = (dato) => {

    this.setState({ modalActualizar: true, form: dato });

  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    let contador = 0;
    let arregloUsuarios = this.state.data;
    arregloUsuarios.map((registro) => {
      if (dato._id === registro._id) {
        arregloUsuarios[contador].firstName = dato.firstName;
        arregloUsuarios[contador].lastName = dato.lastName;
        arregloUsuarios[contador].email = dato.email;
        arregloUsuarios[contador].phoneNumber = dato.phoneNumber;
        arregloUsuarios[contador].address = dato.address;
      }
      contador++;
    });

    this.setState({ data: arregloUsuarios, modalActualizar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.firstName + "?");
    if (opcion) {
      let contador = 0;
      let arregloUsuarios = this.state.data;
      arregloUsuarios.map((registro) => {
        if (dato._id === registro._id) {
          arregloUsuarios.splice(contador, 1);
        }
        contador++;
      });

      this.setState({ data: arregloUsuarios });
    }

  };

  insertar = () => {
    let usuarioACrear = { ...this.state.form };

    this.crearCustomer(usuarioACrear);
    this.setState({modalInsertar: false });

  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Telefóno</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato._id}>
                  <td>{dato.email}</td>
                  <td>{dato.firstName}</td>
                  <td>{dato.lastName}</td>
                  <td>{dato.address}</td>
                  <td>{dato.phoneNumber}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Actualizar Usuario {this.state.form._id}</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form._id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.firstName}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.lastName}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.address}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.phoneNumber}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <label>
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }


  cargarCustomers() {
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`)
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({ data: result });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
        }
      )
  }


  crearCustomer(customer) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarCustomers();
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
export default User;
