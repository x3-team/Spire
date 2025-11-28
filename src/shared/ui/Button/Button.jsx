import styles from './Button.module.css';
// import Image from 'next/image';

export default function Button({ connected = false, address = '', onClick, children = null , style = {}}) {
  // Функция для форматирования адреса
  const formatAddress = (addr) => {
    if (!addr) return '';
    return addr.slice(0, 6) + '...' + addr.slice(-4);
  };

  return (
    <button
    //   className={connected ? styles.connected : styles.button}
      className={`${styles.baseStyle} ${connected ? styles.connected : styles.button}`}
      onClick={onClick}
      type="button"
    //   style={connected ? { width: 229, height: 42, gap: 8, padding: 12, borderRadius: 2, background: '#0B1B4708', opacity: 1 } : {}}
      style={{...style}}
    >
      {connected ? (
        <>
          <span className={styles.connectedText}>Connected Wallet</span>
          <span className={styles.address}>{formatAddress(address)}</span>
        </>
      ) : (
        children || 'Connect Wallet'
      )}
    </button>
  );
}
