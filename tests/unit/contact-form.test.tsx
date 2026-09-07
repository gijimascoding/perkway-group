import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/ContactForm";

describe("ContactForm", () => {
  it("lists every missing required field in a focusable summary and never posts", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}"));
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));

    const alert = screen.getByRole("alert");
    await waitFor(() => expect(alert).toHaveFocus());
    expect(alert).toHaveTextContent(/6 problems/);
    expect(screen.getAllByText(/Enter your first name/)).toHaveLength(2);
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it("rejects a malformed email with a message in the form name@example.com", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/^Email/), "not-an-email");
    await userEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));
    expect(screen.getAllByText(/name@example\.com/).length).toBeGreaterThan(0);
  });

  it("clears a field's error as soon as the visitor edits it", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));
    const first = screen.getByLabelText(/First name/);
    expect(first).toHaveAttribute("aria-invalid", "true");
    await userEvent.type(first, "N");
    expect(first).not.toHaveAttribute("aria-invalid");
  });
});
