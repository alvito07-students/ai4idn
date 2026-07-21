export type RiskLevel = "normal" | "attention" | "medium" | "high";

const HIGH_RISK_PATTERNS = [
  "bunuh diri",
  "aku mau bunuh diri",
  "ingin bunuh diri",
  "mau mengakhiri hidup",
  "ingin mengakhiri hidup",
  "aku ingin mati",
  "lebih baik aku mati",
  "mau menyakiti diri",
  "ingin menyakiti diri",
  "aku sudah siap mati",
  "aku sudah punya rencana",
];

const MEDIUM_RISK_PATTERNS = [
  "ingin menghilang",
  "lebih baik aku tidak ada",
  "hidup tidak ada artinya",
  "tidak ada alasan untuk hidup",
  "semua lebih baik tanpa aku",
  "aku tidak kuat lagi",
  "capek hidup",
];

const ATTENTION_PATTERNS = [
  "aku sendirian",
  "tidak ada yang peduli",
  "aku putus asa",
  "aku kehilangan harapan",
  "aku sangat tertekan",
];

function containsPattern(message: string, patterns: string[]) {
  return patterns.some((pattern) => message.includes(pattern));
}

export function detectRiskLevel(rawMessage: string): RiskLevel {
  const message = rawMessage
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (containsPattern(message, HIGH_RISK_PATTERNS)) {
    return "high";
  }

  if (containsPattern(message, MEDIUM_RISK_PATTERNS)) {
    return "medium";
  }

  if (containsPattern(message, ATTENTION_PATTERNS)) {
    return "attention";
  }

  return "normal";
}