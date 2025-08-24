"use server";

import { cookies } from "next/headers";
import prisma from "../lib/prisma";
import { User } from "./user.schema";

export async function createGuestUser(guestUser: User) {
  const cookieStore = await cookies();
  const userUuid = await cookieStore.get("userUuid");
  try {
    if (!userUuid) {
      const createdUser = await prisma.user.create({
        data: {
          email: guestUser.email,
          phone: guestUser.phone,
          birthDate: new Date(),
          cpf: guestUser.cpf,
        },
      });
      cookieStore.set("userUuid", createdUser.id);
    }
  } catch (err: any) {
    if (err.code === "P2002") {
      const target = err.meta?.target?.[0];
      if (target === "email") {
        return { field: "email", message: "Este e-mail já está cadastrado" };
      }
      if (target === "cpf") {
        return { field: "cpf", message: "Este CPF já está cadastrado" };
      }
    }
    return { field: "general", message: "Erro inesperado" };
  }
}
