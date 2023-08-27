import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  let slug = ''

  if (req.query.slug === undefined) {
    return res.status(500).end()
  }

  slug = Array.isArray(req.query.slug)
    ? req.query.slug.join('')
    : req.query.slug

  const postsFound = await prisma.post.findMany({
    where: {
      blog: {
        slug,
      },
    },
    include: {
      thumbnail: true,
    },
  })

  if (postsFound.length === 0) {
    return res.status(404).json({
      msg: 'Posts não encontrados',
    })
  }

  return res.status(200).json({
    posts: postsFound.map((postFound) => {
      return {
        ...postFound,
        content: undefined,
      }
    }),
  })
}
