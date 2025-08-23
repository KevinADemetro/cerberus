"use server";

import prisma from "../lib/prisma";
import { User } from "./user.schema";

export async function createGuestUser(guestUser: User) {
  console.log(guestUser);
  const createdUser = await prisma.user.create({
    data: {
      email: guestUser.email,
      phone: guestUser.phone,
      birthDate: new Date(),
      cpf: guestUser.cpf,
    },
  });
  console.log(createdUser.id);
}
