"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Estoque() {
  return (
    <>
      <h1>Página de listagem de estoque</h1>
      <Button variant="contained">
        <Link href="/">Voltar</Link>
      </Button>
    </>
  );
}
