import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newCompany = () => {
  const statusChance = Math.random()
  return {
    companyName: namor.generate({ words: 1, numbers: 0 }),
    sector: namor.generate({ words: 1, numbers: 0 }),
    peRatio: Math.floor(Math.random() * 30),
    pbRatio: Math.floor(Math.random() * 100),
    cagr: Math.floor(Math.random() * 100),
    beta: Math.floor(Math.random() * 100),
    revenue: Math.floor(Math.random() * 100) - 10,
    incorporation: 'Public Limited',
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newCompany(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
