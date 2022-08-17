import { createStatementData } from "./createStatementData";
import { renderPlainText } from "./renderPlainText";

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays))
}


