import path from 'path'
import { fileURLToPath } from 'url'

// Retorna o caminho completo do arquivo que está sendo pedido

function dirName() {
  const __filename = fileURLToPath(import.meta.url)
  return path.dirname(__filename)
}

export default dirName