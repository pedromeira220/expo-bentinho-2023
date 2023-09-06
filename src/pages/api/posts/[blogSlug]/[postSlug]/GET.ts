import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  let postSlug = ''

  if (req.query.postSlug === undefined) {
    return res.status(500).end()
  }

  postSlug = Array.isArray(req.query.postSlug)
    ? req.query.postSlug.join('')
    : req.query.postSlug

  const postFound = await prisma.post.findFirst({
    where: {
      slug: postSlug,
    },
    include: {
      thumbnail: true,
    },
  })

  if (!postFound) {
    return res.status(404).json({
      msg: 'Post não encontrado',
    })
  }

  return res.status(200).json({
    post: postFound,
  })
}
