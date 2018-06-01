import React from 'react'
import styles from './hero.module.css'
import Overlay from './overlay';
export default class Hero extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <div className={styles.hero}>
    <img
      className={styles.heroImage}
      src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}
      alt=""
    />
    <div className={styles.heroDetails}>
      <Overlay id={'person'} />
      <h3 className={styles.heroHeadline}>{person.node.name}</h3>
      <p className={styles.heroTitle}>{person.node.title}</p>
      <p>{person.node.shortBio.shortBio}</p>
    </div>
  </div>
    );
  }
}
