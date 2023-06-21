import './Colaborador.css';

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='imagem-colaborador-container'>
                <img className='imagem-colaborador' src='https://github.com/Alexandremma.png' alt='Alexandre M Maciel' />
            </div>
            <div className='info-colaborador-container'>
                <h4 className='nome-colaborador'>Alexandre M Maciel</h4>
                <h5 className='cargo-colaborador'>Desenvolvedor Front End</h5>
            </div>
        </div>
    )
}

export default Colaborador;