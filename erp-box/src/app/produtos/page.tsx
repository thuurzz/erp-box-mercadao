"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Produtos() {
  return (
    <>
      <h1>Página de listagem de produtos</h1>
      <Button variant="contained">
        <Link href="/">Voltar</Link>
      </Button>
    </>
  );
}
