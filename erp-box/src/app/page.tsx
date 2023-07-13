"use client";

import { Button } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.titulo}>
          <h2>Cigano Hortifrúti 🌿</h2>
          <h2>+</h2>
          <h2> Cheiro de Pimenta 🌶️</h2>
        </div>
        <Button fullWidth variant="contained">
          <Link href="/produtos">Produtos</Link>
        </Button>
        <Button fullWidth variant="contained">
          <Link href="/estoque">Estoque</Link>
        </Button>
        <Button fullWidth variant="contained">
          <Link href="/pedidos">Pedidos</Link>
        </Button>
      </div>
    </main>
  );
}
