// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'node:crypto'

import posts from '@/data/posts.json'
import { searchPhoto } from '@/lib/unsplash'

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
  content: string
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
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

  let imagesToCreate: (ImageCreateManyInput & { list_id: number })[] = []

  try {
    imagesToCreate = await Promise.all(
      posts.map(async (post) => {
        let src = ''

        try {
          const unsplashResponse = await searchPhoto({
            params: {
              query: {
                searchTerm: post.thumbnail_search_term,
              },
            },
          })

          src = unsplashResponse.data.results[0].urls.regular
        } catch (error) {
          throw new Error('Error')
        }

        return {
          id: String(randomUUID()),
          src,
          search_term: post.thumbnail_search_term,
          list_id: post.id,
        }
      }),
    )
  } catch (error) {
    return res.status(500).json({
      msg: 'Ouve um erro durante a criação do blog',
    })
  }

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
      thumbnail_id: String(
        imagesToCreate.find((image) => {
          return image.list_id === post.id
        })?.id,
      ),
      blog_id: blog.id,
      content: 'Conteúdo teste',
    }
  })

  await prisma.post.createMany({
    data: postsToCreate,
  })

  return res.status(201).end()
}
