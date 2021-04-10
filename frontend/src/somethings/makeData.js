import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}


export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        companyName: 'The company',
        sector: namor.generate({ words: 1, numbers: 0 }),
        peRatio: Math.floor(Math.random() * 30),
        pbRatio: Math.floor(Math.random() * 100),
        cagr: Math.floor(Math.random() * 100),
        beta: Math.floor(Math.random() * 100),
      }
    })
  }

  return makeDataLevel()
}
