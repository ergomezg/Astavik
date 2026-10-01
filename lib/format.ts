/**
 * Formateador de moneda canónico según PRD y reglas.md:
 * Notación oficial: $18.500.000 COP
 */
export function formatCOP(amount: number): string {
  const formatted = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  }).format(amount);
  return `$${formatted} COP`;
}
