import { useState } from 'react';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';

import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const times = props.times;

    const aoSalvar = (evento) => {
        evento.preventDefault();

        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={(elemento) => setNome(elemento)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={(elemento) => setCargo(elemento)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={(elemento) => setImagem(elemento)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    aoAlterado={(element) => setTime(element)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;