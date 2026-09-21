import { useMemo, useState } from "react";
import { SITE, LOTS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type InquiryFormProps = {
  defaultLot?: number;
};

export function InquiryForm({ defaultLot }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lot, setLot] = useState(defaultLot ? String(defaultLot) : "");
  const [role, setRole] = useState("buyer");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const lotLabel = lot ? `Lot ${lot}` : "the offering";
    const subject = `Parkview at Hostmark — ${lotLabel}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${lotLabel}`,
      `I am a: ${role}`,
      "",
      message || "(no additional note)",
    ].join("\n");
    return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, phone, lot, role, message]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-paper-2 px-6 py-10">
        <p className="font-display text-2xl text-forest">Your note is ready.</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Your mail app should open addressed to {SITE.contact.name}. If it
          doesn’t, write directly or call.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm">
          <a className="text-sage underline-offset-4 hover:underline" href={SITE.contact.mailHref}>
            {SITE.contact.email}
          </a>
          <a className="text-sage underline-offset-4 hover:underline" href={SITE.contact.phoneHref}>
            {SITE.contact.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Email">
          <Input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone">
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </Field>
        <Field label="Lot">
          <select
            value={lot}
            onChange={(e) => setLot(e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30"
          >
            <option value="">Any / the offering</option>
            {LOTS.map((item) => (
              <option key={item.id} value={item.id}>
                Lot {item.id} · {item.areaSqFt.toLocaleString()} SF lot
              </option>
            ))}
          </select>
        </Field>
      </div>
      <fieldset className="grid gap-2">
        <Label>I am a</Label>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "buyer", label: "Lot buyer" },
            { id: "builder", label: "Custom builder" },
            { id: "architect", label: "Architect" },
            { id: "other", label: "Other" },
          ].map((opt) => (
            <label
              key={opt.id}
              className="inline-flex h-11 cursor-pointer items-center rounded-full border border-line px-4 text-sm has-[:checked]:border-forest has-[:checked]:bg-forest has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="role"
                value={opt.id}
                checked={role === opt.id}
                onChange={() => setRole(opt.id)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Note">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Lots of interest, timing, or a request for the due-diligence packet."
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Email {SITE.contact.name}
        </Button>
        <p className="text-xs text-muted">
          Opens your mail app. Pricing on request.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <Label>{label}</Label>
      {children}
    </label>
  );
}
