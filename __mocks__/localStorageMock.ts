const localStorageMock: Storage & { length: number; key: (index: number) => string | null } = (() => {
  let store: { [key: string]: string } = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    length: Object.keys(store).length,
    key: (index: number) => {
      const keys = Object.keys(store)
      return keys[index] || null
    }
  }
})()
  
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})