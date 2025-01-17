import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Body:', body);
    const { name, company, phone, email, service } = body;

    try {
      await resend.emails.send({
        from: 'Duri <website@duri.com.br>',
        to: ['contato@duri.com.br'],
        subject: 'Novo Contato Recebido!',
        html: `
          <h1>Contato Recebido</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Serviço:</strong> ${service}</p>
        `,
      });
      console.log('E-mail enviado com sucesso!');
      return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Erro ao enviar e-mail.', error);
      }
    }
  } catch (error) {
    console.log('Erro ao enviar e-mail:', error);
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}
