export interface playType {
  name: string,
  type: string
}
export interface performancesType {
  play: playType,
  amount: number,
  volumeCredits: number,
  playID: string,
  audience: number
}
export interface statementType {
  customer?: string
  performances?: Array<performancesType>,
  totalAmount?: number,
  totalVolumeCredits?: number
}