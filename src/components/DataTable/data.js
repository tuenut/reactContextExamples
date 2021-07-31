import {random, range} from "../../utils";


const genString =  (length = 16) => 
  range(0, length)
    .map(() => 
      String.fromCharCode(random(122, 97))
    ).join("");

export const data = range(0, 100).map((item, idx) => ({
  id: idx,
  name: genString(random(10, 4)),
  data: random(999999, 100000),
  type: ["dog", "cat", "bat"][random(2)]
}))