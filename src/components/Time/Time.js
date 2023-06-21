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
        <section className='time' style={sectionCss}>
            <h3 style={titleCss}>{props.titulo}</h3>
            <Colaborador />
            <Colaborador />
        </section>
    )
}

export default Time;