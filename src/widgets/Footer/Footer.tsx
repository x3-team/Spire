import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.footerText}>
        This appchain synchronously reads proof from Celo via Spire’s Pylon
      </span>
    </div>
  )
}