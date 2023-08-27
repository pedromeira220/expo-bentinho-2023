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

  const blogFound = await prisma.blog.findUnique({
    where: {
      slug,
    },
  })

  if (!blogFound) {
    return res.status(404).json({
      msg: 'Blog não encontrado',
    })
  }

  return res.status(200).json({
    blog: blogFound,
  })
}
