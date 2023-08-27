// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'node:crypto'

import posts from '@/data/posts.json'

type ImageCreateManyInput = {
  id?: string
  search_term?: string | null
  src: string
  section_id?: string | null
}

type PostCreateManyInput = {
  id?: string
  title: string
  subtitle: string
  blog_id: string
  thumbnail_id: string
  creation_date: Date | string
}

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

  const blogId = randomUUID()

  const blog = await prisma.blog.create({
    data: {
      id: blogId,
      description,
      name,
      primary_color: primaryColor,
      slug,
      theme,
      creation_date: new Date(),
    },
  })

  const imagesToCreate: (ImageCreateManyInput & { list_id: number })[] =
    posts.map((post) => {
      return {
        id: String(randomUUID()),
        src: 'https://github.com/pedromeira220.png',
        search_term: post.thumbnail_search_term,
        list_id: post.id,
      }
    })

  await prisma.image.createMany({
    data: imagesToCreate.map((image) => {
      return {
        ...image,
        list_id: undefined,
      }
    }),
  })

  const postsToCreate: PostCreateManyInput[] = posts.map((post) => {
    return {
      creation_date: new Date(),
      subtitle: post.subtitle,
      title: post.name,
      // thumbnail_id: String(imagesToCreate[index].id),
      thumbnail_id: String(
        imagesToCreate.find((image) => {
          return image.list_id === post.id
        })?.id,
      ),
      blog_id: blog.id,
    }
  })

  await prisma.post.createMany({
    data: postsToCreate,
  })

  return res.status(201).end()
}
