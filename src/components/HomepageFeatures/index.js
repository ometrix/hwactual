import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
        message: 'Infraestructura de red',
        description: 'title'}),
    Svg: require('@site/static/img/system-network-svgrepo-com.svg').default,
    description: (
      <>
          <Translate
              id="homepage.red.">
          Te apoyamos con el despliege e implementacion de infraestructuras de red pequeñas o medianas. realizar la planeacion, cotizacion de equipos y configuracion.
          </Translate>
      </>
    ),
  },
  {
    title: translate({
        message: 'Asesoría',
        description: 'title.consultancy'}),
    Svg: require('@site/static/img/imgforum-message-svgrepo-com.svg').default,
    description: (
      <> <Translate
          id="homepage.consulting">
          Brindamos apoyo y asesoria en cuanto a equipo, herramientas de software o redes que desees adquirir para tu casa o negocio.
         </Translate>
      </>
    ),
  },
  {
    title: translate({
        message: 'Soporte técnico',
        description: 'title.support'}),
    Svg: require('@site/static/img/support-svgrepo-com.svg').default,
    description: (
      <> <Translate
          id="homepage.support.">
          Brindamos soporte tecnico para inconvenientes con equipos de Computo(Laptop, Desktop, Ultrabook, MacBook) con respecto a fallas tanto de sistema como de hardware adicionalmente a equipos de redes como routers, repetidores, etc.
         </Translate>
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
