// The static site has no server, so the contact and newsletter forms are
// delivered by Web3Forms (https://web3forms.com), which emails each submission
// to the address the access key was created for. The key is public by design.
//
// Without a key (e.g. local development), the forms fall back to opening a
// pre-filled email in the visitor's mail app.

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@skysociety.org.sg';

export const isFormServiceConfigured = Boolean(ACCESS_KEY);

export async function submitForm(
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
    });
    const data = await res.json().catch(() => null);
    return res.ok && data?.success === true;
  } catch {
    return false;
  }
}

export function openEmailDraft(subject: string, body: string) {
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
