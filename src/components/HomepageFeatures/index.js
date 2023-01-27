import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Infraestructura de red',
    Svg: require('@site/static/img/system-network-svgrepo-com.svg').default,
    description: (
      <>
          Te apoyamos con el despliege e implementacion de infraestructuras de red pequeñas o medianas. realizar la planeacion, cotizacion de equipos y configuracion.
      </>
    ),
  },
  {
    title: 'Asesoria',
    Svg: require('@site/static/img/imgforum-message-svgrepo-com.svg').default,
    description: (
      <>
          Brindamos apoyo y asesoria en cuanto a equipo, herramientas de software o redes que desees adquirir para tu casa o negocio.
      </>
    ),
  },
  {
    title: 'Soporte Tecnico',
    Svg: require('@site/static/img/support-svgrepo-com.svg').default,
    description: (
      <>
          Brindamos soporte tecnico para inconvenientes con equipos de Computo(Laptop, Desktop, Ultrabook, MacBook) con respecto a fallas tanto de sistema como de hardware adicionalmente a equipos de redes como routers, repetidores, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
