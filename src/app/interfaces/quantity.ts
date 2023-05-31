import { Size } from "../enums/size.enum";

export type Quantity = {
  [key in Size]: number
}
