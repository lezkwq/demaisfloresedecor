import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import type { ComponentType } from "react";
import { Route } from "@/routes/index";

afterEach(cleanup);

describe("Consulta de decoração pelo WhatsApp", () => {
  it("leva as escolhas e os detalhes para o número real da empresa", () => {
    const Home = Route.options.component as ComponentType;
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "Decoração de Natal", exact: true }));
    fireEvent.click(screen.getByRole("button", { name: "Empresa ou escritório", exact: true }));
    fireEvent.click(screen.getByRole("button", { name: "Quero sugestões", exact: true }));
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Recepção & sala — 2 m\nVerde e dourado" },
    });

    const link = screen.getByRole("link", { name: "Pedir sugestões no WhatsApp", exact: true });
    const url = new URL(link.getAttribute("href")!);
    const message = url.searchParams.get("text");
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/5547991627940");
    expect(message).toContain("Interesse: Decoração de Natal");
    expect(message).toContain("Ambiente: Empresa ou escritório");
    expect(message).toContain("Cores: Quero sugestões");
    expect(message).toContain("Recepção & sala — 2 m\nVerde e dourado");
    expect(screen.getByRole("button", { name: "Arranjo permanente", exact: true })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
