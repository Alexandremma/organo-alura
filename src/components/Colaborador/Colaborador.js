import './Colaborador.css';

const Colaborador = ({ nome, cargo, imagem, corPrimaria }) => {

    const cabecalhoCss = {
        backgroundColor: corPrimaria,
    }

    const nomeCss = {
        color: corPrimaria,
    }

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={cabecalhoCss}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={nomeCss}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;