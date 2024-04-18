import React from "react";
import styles from "./About.module.css";

const About = () => {
    const bankName = "Horizon Bank";
    const location = "la Ciudad Autónoma de Buenos Aires - (CABA)";
    const foundingDate = "1 de abril de 1946";
    const reputation = "uno de los mejores bancos de la ciudad";
    const branches = 50; 
    const totalAssets = "Us$5 mil millones"; 
    const employees = "10.000"; 
    const activeCustomers = "más de 500,000"; 
    return (
        <div className={styles.Conteiner}>
            <div className={styles.Tarjeta}> {/* Agregamos la clase Card aquí */}
                <div className={styles.Parrafos}>
                    <p>
                        Bienvenido a {bankName}, un banco líder en innovación y confiabilidad.
                        Fundado el {foundingDate} en {location}, nos hemos ganado una reputación como {reputation}.
                        Nos esforzamos por brindar soluciones financieras de vanguardia y un servicio al cliente excepcional.
                    </p>
                    <p>
                        Con una red de {branches} sucursales en todo el país, nos enorgullece ofrecer cobertura nacional y un sólido respaldo financiero a nuestros clientes.
                        Nuestra sede central se encuentra en {location}, desde donde coordinamos nuestras operaciones para brindar un servicio eficiente y confiable.
                    </p>
                    <p>
                        En {bankName}, contamos con un equipo de más de {employees} empleados dedicados a satisfacer las necesidades financieras de nuestros {activeCustomers} clientes activos.
                        Nuestros activos totales ascienden a {totalAssets}, lo que demuestra nuestra solidez financiera y compromiso con el éxito a largo plazo.
                    </p>
                    <p>
                        Únase a nosotros en {bankName} y descubra por qué somos reconocidos como uno de los mejores bancos de {location} y más allá.
                        Nos enorgullece servir a nuestros clientes y esperamos poder ser parte de su viaje financiero.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;