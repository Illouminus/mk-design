/* eslint max-len: 0 */
import { articleDetailsReducer } from './articleDetailsSlice'
import { type Article, type ArticleDetailsSchema } from 'entities/Article'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article'

const data: Article = {
  id: '1',
  title: 'string',
  subtitle: 'string',
  img: 'string',
  views: 123,
  createdAt: 'string',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'admin'
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», , если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    }
  ]
}
describe('Article test', () => {
  test('test article fetchArticleById pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
      data: undefined
    }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  test('test article fetchArticleByIdfulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(data, '', '')
    )).toEqual({
      isLoading: false,
      data
    })
  })
})
