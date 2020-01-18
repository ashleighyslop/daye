import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Answers} from '../models';
import {AnswersRepository} from '../repositories';

export class AnswersController {
  constructor(
    @repository(AnswersRepository)
    public answersRepository : AnswersRepository,
  ) {}

  @post('/answers', {
    responses: {
      '200': {
        description: 'Answers model instance',
        content: {'application/json': {schema: getModelSchemaRef(Answers)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Answers, {
            title: 'NewAnswers',
            exclude: ['id'],
          }),
        },
      },
    })
    answers: Omit<Answers, 'id'>,
  ): Promise<Answers> {
    return this.answersRepository.create(answers);
  }

  @get('/answers/count', {
    responses: {
      '200': {
        description: 'Answers model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Answers)) where?: Where<Answers>,
  ): Promise<Count> {
    return this.answersRepository.count(where);
  }

  @get('/answers', {
    responses: {
      '200': {
        description: 'Array of Answers model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Answers, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Answers)) filter?: Filter<Answers>,
  ): Promise<Answers[]> {
    return this.answersRepository.find(filter);
  }

  @patch('/answers', {
    responses: {
      '200': {
        description: 'Answers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Answers, {partial: true}),
        },
      },
    })
    answers: Answers,
    @param.query.object('where', getWhereSchemaFor(Answers)) where?: Where<Answers>,
  ): Promise<Count> {
    return this.answersRepository.updateAll(answers, where);
  }

  @get('/answers/{id}', {
    responses: {
      '200': {
        description: 'Answers model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Answers, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Answers)) filter?: Filter<Answers>
  ): Promise<Answers> {
    return this.answersRepository.findById(id, filter);
  }

  @patch('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answers PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Answers, {partial: true}),
        },
      },
    })
    answers: Answers,
  ): Promise<void> {
    await this.answersRepository.updateById(id, answers);
  }

  @put('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answers PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() answers: Answers,
  ): Promise<void> {
    await this.answersRepository.replaceById(id, answers);
  }

  @del('/answers/{id}', {
    responses: {
      '204': {
        description: 'Answers DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.answersRepository.deleteById(id);
  }
}
