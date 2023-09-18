import Prismic from '@prismicio/client'
// Esta função retorna uma instância do cliente Prismic para o exemplo "site-exemple"
export function getPrismicClient(req? : unknown) {
  const prismic = Prismic.client('https://cmscurso.cdn.prismic.io/api/v2', {
    req,
  })
  return prismic;
}