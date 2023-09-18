import { Client } from '@prismicio/client'
 
// Esta função retorna uma instância do cliente Prismic para o exemplo "site-exemple"
export function getPrismicClient() {
  return new Client('https://cmscurso.cdn.prismic.io/api/v2')
}