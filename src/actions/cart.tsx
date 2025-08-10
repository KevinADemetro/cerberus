"use server";

export async function handleAction(e: FormData) {
  console.log(e.get("size"));
}
