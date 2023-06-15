import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import CampoTexto from './../CampoTexto/CampoTexto';
import './Formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Inovação e Gestão',
        'Mobile',
        'Front-End',
        'Back-End',
        'UX & UI'
    ];

    return (
        <section className='formulario'>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
                <ListaSuspensa itens={times} />
            </form>
        </section>
    );
}

export default Formulario;