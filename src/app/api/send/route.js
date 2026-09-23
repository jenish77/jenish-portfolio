import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');
const formEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const data = await req.json()
  const { email, subject, message } = data;
  try {
    const data = await resend.emails.send({
      from: formEmail, //'John <onboarding@resend.dev>',
      to: email,
      subject: "Hello world",
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
