 type CitizenshipData = {
  name?: string | undefined;
  gender?: string | undefined;
  birthPlace?: string | undefined;
  permanentAddress?: string | undefined;
  birthDate?: string | undefined;
  fatherName?: string | undefined;
  address?: string | undefined;
  citizenshipType?: string | undefined;
};

export default function citizenshipMapper(input: unknown): CitizenshipData {
 
  const text = String(input ?? "")
    .replace(/```/g, "")
    .replace(/[“”"]/g, "")
    .replace(/\s+/g, " ")
    .trim();

 
  const extract = (regex: RegExp): string | undefined => {
    const match = text.match(regex);
    if (!match || !match[1]) return undefined;
    return match[1].trim();
  };


  return {
    name: extract(/नाम\s*थर\s*[:：]?\s*([^ल]+)/),

    gender: extract(/लिङ्ग\s*[:：]?\s*(पुरुष|महिला)/),

    birthPlace: extract(/जन्म\s*स्थान\s*[:：]?\s*([^स]+)/),

    permanentAddress: extract(/स्थायी\s*बासस्थान\s*[:：]?\s*([^ज]+)/),

    birthDate: extract(/जन्म\s*मिति\s*[:：]?\s*([\d\-०-९]+)/),

    fatherName: extract(/बाबुको\s*नाम\s*थर\s*[:：]?\s*([^ठ]+)/),

    address: extract(/ठेगाना\s*[:：]?\s*([^न]+)/),

    citizenshipType: extract(/नागरिकता\s*प्रकार\s*[:：]?\s*(वंशज|अंगीकृत)/),
  };
}
