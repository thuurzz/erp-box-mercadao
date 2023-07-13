import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const foods = await prisma.food.findMany();
  return NextResponse.json(foods);
}
