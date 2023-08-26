// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  console.log(req.body)

  const { theme, description, name, slug, primaryColor } = req.body

  if (!theme) {
    return res.status(422).json({
      msg: 'Theme é obrigatório',
    })
  }

  if (!description) {
    return res.status(422).json({
      msg: 'description é obrigatório',
    })
  }

  if (!name) {
    return res.status(422).json({
      msg: 'name é obrigatório',
    })
  }

  if (!slug) {
    return res.status(422).json({
      msg: 'slug é obrigatório',
    })
  }

  if (!primaryColor) {
    return res.status(422).json({
      msg: 'primaryColor é obrigatório',
    })
  }

  const user = await prisma.blog.create({
    data: {
      description,
      name,
      primary_color: primaryColor,
      slug,
      theme,
      creation_date: new Date(),
    },
  })

  return res.status(201).end()
}
