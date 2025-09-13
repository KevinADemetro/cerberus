"use server";

import { cookies } from "next/headers";
import prisma from "@/src/lib/prisma";
import { type Address as ZodAddress } from "@/src/features/address/address.schema";
import type { Address as PrismaAddress } from "@/generated/prisma";

export async function createAddress(address: ZodAddress) {
  const cookieStore = await cookies();
  const userUuid = cookieStore.get("userUuid");

  if (!userUuid) {
    throw new Error("Usuário não encontrado no cookie");
  }

  try {
    const created = await prisma.address.create({
      data: {
        userId: userUuid.value,
        cep: address.cep,
        receiverName: address.receiverName,
        street: address.street,
        number: address.number,
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
      },
    });

    return created.id;
  } catch (err: any) {
    if (err.code === "P2002") {
      const target = err.meta?.target?.[0];
      throw new Error(`Endereço duplicado: ${target ?? "campo desconhecido"}`);
    }
    throw new Error("Erro inesperado ao criar endereço");
  }
}

export async function updateGuestAddress(address: ZodAddress) {
  const cookieStore = await cookies();
  const userUuid = cookieStore.get("userUuid");

  if (!userUuid) {
    throw new Error("Usuário não encontrado no cookie");
  }

  try {
    const updated = await prisma.address.updateMany({
      where: { userId: userUuid.value },
      data: {
        cep: address.cep,
        receiverName: address.receiverName,
        street: address.street,
        number: address.number,
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        updatedAt: new Date(),
      },
    });

    if (updated.count === 0) {
      throw new Error("Endereço não encontrado para atualização");
    }

    const addressRecord = await prisma.address.findFirst({
      where: { userId: userUuid.value },
    });

    if (!addressRecord) {
      throw new Error("Endereço atualizado não encontrado");
    }

    return addressRecord.id;
  } catch (err: any) {
    if (err.code === "P2002") {
      const target = err.meta?.target?.[0];
      throw new Error(`Endereço duplicado: ${target ?? "campo desconhecido"}`);
    }
    throw new Error("Erro inesperado ao atualizar endereço");
  }
}

export async function getAddress() {
  const cookieStore = await cookies();
  const userUuid = cookieStore.get("userUuid");

  if (!userUuid) return null;

  const address = await prisma.address.findFirst({
    where: { userId: userUuid.value },
  });

  if (!address) return null;

  return mapPrismaAddressToZod(address);
}

export async function mapPrismaAddressToZod(address: PrismaAddress): Promise<ZodAddress> {
  return {
    cep: address.cep,
    receiverName: address.receiverName,
    street: address.street,
    number: address.number,
    complement: address.complement ?? undefined,
    neighborhood: address.neighborhood,
    city: address.city,
    state: address.state,
  };
}
