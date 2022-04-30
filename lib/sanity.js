import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'xg1o37f1',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skgXOcVb0fAXzhCUQaRUVcQkVaNChGo0cm6xXxGA4nPuUyUL4Mnwlz6u4HHP1jZuCeg35kZsGRPLBs7MAbcJOgVyS56vhWiEUZ20V0OMHhHioFC0MYC72qndwZN45OatuFiSHo8E2hwlJg4IcnhrvVUDBeHonSQOJ6a5WX4Q5cs92pkzJUVt',
    useCdn: false,
}
)