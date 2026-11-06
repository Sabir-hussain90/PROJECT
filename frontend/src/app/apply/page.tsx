"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ApplyPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — show success state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Application Submitted 🎉</h1>
          <p style={styles.subtitle}>
            Thanks, {form.firstName}! Your application has been received.
          </p>
          <button style={styles.button} onClick={() => router.push("/register")}>
            Back to Register
          </button>
          <p style={styles.footer}>
            Or go to{" "}
            <Link href="/signin" style={styles.link}>
              Sign In
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.cardWide}>
        <h1 style={styles.title}>Application Form</h1>
        <p style={styles.subtitle}>Tell us about yourself</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>First Name</label>
              <input
                style={styles.input}
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div style={styles.col}>
              <label style={styles.label}>Last Name</label>
              <input
                style={styles.input}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label style={styles.label}>Phone</label>
          <input
            style={styles.input}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 0000000"
            required
          />

          <label style={styles.label}>Position</label>
          <select
            style={styles.input}
            name="position"
            value={form.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="designer">UI/UX Designer</option>
          </select>

          <label style={styles.label}>Years of Experience</label>
          <input
            style={styles.input}
            type="number"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="3"
            min="0"
            required
          />

          <label style={styles.label}>Cover Letter</label>
          <textarea
            style={{ ...styles.input, minHeight: "100px", resize: "vertical" }}
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit..."
          />

          <button type="submit" style={styles.button}>
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    fontFamily: "system-ui, sans-serif",
    padding: "2rem 1rem",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "460px",
    textAlign: "center",
  },
  cardWide: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "560px",
  },
  title: { margin: 0, fontSize: "1.6rem", color: "#111827" },
  subtitle: { margin: "0.25rem 0 1.5rem", color: "#6b7280", fontSize: "0.9rem" },
  form: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  row: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
  col: { flex: "1 1 160px", display: "flex", flexDirection: "column", gap: "0.5rem" },
  label: { fontSize: "0.85rem", color: "#374151", fontWeight: 600 },
  input: {
    padding: "0.65rem 0.75rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
  },
  button: {
    marginTop: "1rem",
    padding: "0.75rem",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
  footer: {
    marginTop: "1.25rem",
    fontSize: "0.85rem",
    color: "#6b7280",
    textAlign: "center",
  },
  link: { color: "#2563eb", textDecoration: "none", fontWeight: 600 },
};