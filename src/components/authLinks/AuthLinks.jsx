import React from 'react';
import styles from "./authlinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Giriş</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Çıkış</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;