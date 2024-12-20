import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ContextoUsuario } from '../../App';

export default function Menu(props) {
    const { usuario, setUsuario } = useContext(ContextoUsuario);

    return (
        <Navbar expand="lg" className="bg-body-tertiary mt-02 mb-02">
            <Container>
                <Navbar.Brand href="#" as={Link} to="/SistemaReact">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" as={Link} to="/categorias">
                                <p><img width="20" src="https://img.icons8.com/?size=100&id=FTAIe68KeQFt&format=png&color=000000" /> Categorias</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/clientes">
                                <p><img width="20" src="https://img.icons8.com/?size=100&id=rGhKliUp2Vji&format=png&color=000000" /> Clientes</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/fornecedores">
                                <p><img width="20" src="https://img.icons8.com/?size=100&id=X1gIhPNz9nyZ&format=png&color=000000" /> Fornecedores</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/produtos">
                                <p><img width="20" src="https://img.icons8.com/?size=100&id=pGrIbKGi5lac&format=png&color=000000" /> Produtos</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/usuarios">
                                <p><img width="20" src="https://img.icons8.com/?size=100&id=dnFLrXkYCNiG&format=png&color=000000" /> Usuários</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Venda</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Estoque</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Compras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Sobre</Nav.Link>
                        <Nav.Link onClick={() => {
                            setUsuario({
                                "usuario": "",
                                "logado": false
                            })
                        }}>
                            Sair
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Usuario logado: {usuario.usuario}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}