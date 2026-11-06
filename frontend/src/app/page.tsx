"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No auth — just navigate to signin
    router.push("/signin");
  };

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Register to get started</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

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

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />

          <label style={styles.label}>Confirm Password</label>
          <input
            style={styles.input}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <Link href="/signin" style={styles.link}>
            Sign In
          </Link>
        </p>
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
    padding: "1rem",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "420px",
  },
  title: { margin: 0, fontSize: "1.6rem", color: "#111827" },
  subtitle: { margin: "0.25rem 0 1.5rem", color: "#6b7280", fontSize: "0.9rem" },
  form: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  label: { fontSize: "0.85rem", color: "#374151", fontWeight: 600 },
  input: {
    padding: "0.65rem 0.75rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    outline: "none",
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
  },
  footer: {
    marginTop: "1.25rem",
    fontSize: "0.85rem",
    color: "#6b7280",
    textAlign: "center",
  },
  link: { color: "#2563eb", textDecoration: "none", fontWeight: 600 },
};