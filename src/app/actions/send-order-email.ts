'use server';

import { Resend } from 'resend';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(values: z.infer<typeof formSchema>) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'cyxanacta@gmail.com',
      subject: 'Нова поръчка на Моята бременност от А до Я',
      html: `
        <h1>Нова поръчка</h1>
        <p><strong>Име:</strong> ${values.name}</p>
        <p><strong>Телефон:</strong> ${values.phone}</p>
        <p><strong>Адрес:</strong> ${values.address}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (exception) {
    console.error(exception);
    return { success: false, error: 'Something went wrong.' };
  }
}
