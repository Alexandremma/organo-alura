import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const sectionCss = {
        backgroundColor: props.corSecundaria,
    }

    const titleCss = {
        borderBottom: `3px solid ${props.corPrimaria}`,
    }

    return (
        (props.colaboradores.length > 0) &&
        <section className='time' style={sectionCss}>
            <h3 style={titleCss}>{props.titulo}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return (
                        <Colaborador
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corPrimaria={props.corPrimaria}
                            corSecundaria={props.corSecundaria}
                            key={colaborador.nome}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time;