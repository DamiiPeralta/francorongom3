// About.jsx
import React from 'react';
import styles from './About.module.css'; // Importa los estilos

const About = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>Clínica Vitalidad</h1>
                <p>En Clínica Vitalidad, nos dedicamos a proporcionar atención médica integral y de calidad para mejorar tu bienestar físico y emocional. Nuestro equipo de profesionales altamente capacitados está comprometido a brindarte el mejor cuidado posible en un ambiente cálido y acogedor.</p>
            </header>

            <section>
                <h2>Servicios</h2>
                <ul>
                    <li>Consultas médicas generales</li>
                    <li>Especialidades médicas</li>
                    <li>Servicios de bienestar</li>
                    <li>Exámenes y pruebas diagnósticas</li>
                </ul>
            </section>

            <section>
                <h2>¿Por qué elegirnos?</h2>
                <p>En Clínica Vitalidad, tu salud y comodidad son nuestra prioridad. Nos esforzamos por ofrecerte un servicio personalizado y accesible que se adapte a tus necesidades individuales. ¡Déjanos ser tu socio en el camino hacia una vida más saludable y feliz!</p>
            </section>

            <section>
                <h2>Contacto</h2>
                <p>¡Contáctanos hoy mismo para programar tu próxima cita!</p>
                <address>
                    Teléfono: 123-456-789<br />
                    Dirección: Calle Principal, Ciudad, País<br />
                    Correo electrónico: info@clinicavitalidad.com
                </address>
            </section>
        </div>
    );
};

export default About;

