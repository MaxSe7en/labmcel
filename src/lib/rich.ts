/** Turns editor marks into pieces a page can render.
 *  *asterisks* → italic
 *  |           → line break after the piece before it
 */
export type Piece = { text: string; em: boolean; breakAfter: boolean };

export function rich(input: string): Piece[] {
  const out: Piece[] = [];
  const re = /\*([^*]+)\*|\|/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(input))) {
    if (match.index > last) {
      out.push({ text: input.slice(last, match.index), em: false, breakAfter: false });
    }
    if (match[0] === "|") {
      if (out.length === 0) out.push({ text: "", em: false, breakAfter: true });
      else out[out.length - 1].breakAfter = true;
    } else {
      out.push({ text: match[1], em: true, breakAfter: false });
    }
    last = match.index + match[0].length;
  }
  if (last < input.length) out.push({ text: input.slice(last), em: false, breakAfter: false });
  return out;
}
