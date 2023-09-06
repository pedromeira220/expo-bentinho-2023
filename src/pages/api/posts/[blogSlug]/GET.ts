import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  let blogSlug = ''

  if (req.query.blogSlug === undefined) {
    return res.status(500).end()
  }

  blogSlug = Array.isArray(req.query.blogSlug)
    ? req.query.blogSlug.join('')
    : req.query.blogSlug

  const postsFound = await prisma.post.findMany({
    where: {
      blog: {
        slug: blogSlug,
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
