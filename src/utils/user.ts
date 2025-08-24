"use server";

import { cookies } from "next/headers";
import prisma from "../lib/prisma";
import { type User as ZodUser } from "../utils/user.schema";
import type { User as PrismaUser } from "../../generated/prisma";

export async function createGuestUser(guestUser: ZodUser) {
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

export async function getUser() {
  const cookieStore = await cookies();
  const userUuid = await cookieStore.get("userUuid");
  if (userUuid) {
    const user = await prisma.user.findUniqueOrThrow({ where: { id: userUuid.value } });
    return mapPrismaUserToZod(user);
  }
}

export async function mapPrismaUserToZod(user: PrismaUser) {
  return {
    cpf: user.cpf,
    email: user.email,
    phone: user.phone ?? undefined,
    birthDate: user.birthDate
      ? `${user.birthDate.getDate().toString().padStart(2, "0")}/${(
          user.birthDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${user.birthDate.getFullYear()}`
      : "",
  };
}
