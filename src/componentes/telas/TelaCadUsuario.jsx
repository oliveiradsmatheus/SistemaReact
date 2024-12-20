import FormCadUsuario from "./formularios/FormCadUsuario.jsx";
import Pagina from "../layouts/Pagina.jsx";
import TabelaUsuarios from "./tabelas/TabelaUsuarios.jsx";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";

export default function TelaCadUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        login: "",
        senha: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        tipo: 0
    });

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center" variant="light">
                    <h2>
                        Usuários
                    </h2>
                </Alert>
            </Container>
            {
                exibirTabela ?
                    <TabelaUsuarios setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setExibirTabela={setExibirTabela} /> :

                    <FormCadUsuario modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        usuarioSelecionado={usuarioSelecionado}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        setExibirTabela={setExibirTabela} />
            }
        </Pagina>
    );
}