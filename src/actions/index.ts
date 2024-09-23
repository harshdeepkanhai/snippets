'use server';

import { db } from "@/db";


export async function editSnippet(id: number, code: string) {
    await db.snippet.update({});
}