"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Pedidos() {
  return (
    <>
      <h1>Página de listagem de pedidos</h1>
      <Button variant="contained">
        <Link href="/">Voltar</Link>
      </Button>
    </>
  );
}
