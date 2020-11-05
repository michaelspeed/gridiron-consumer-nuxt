export interface IRaxor {
  razorpay_payment_id: string
}


export enum  OrderStageType {
  CREATED = "CREATED",
  PACKAGED = "PACKAGED",
  PROCESSED = "PROCESSED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  RETURNINITIATED = "RETURNINITIATED",
  RETURNED = "RETURNED",
  RETURNEDREFUNDED = "RETURNEDREFUNDED"
}