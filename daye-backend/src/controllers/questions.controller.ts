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
import {Questions} from '../models';
import {QuestionsRepository} from '../repositories';

export class QuestionsController {
  constructor(
    @repository(QuestionsRepository)
    public questionsRepository : QuestionsRepository,
  ) {}

  @post('/questions', {
    responses: {
      '200': {
        description: 'Questions model instance',
        content: {'application/json': {schema: getModelSchemaRef(Questions)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questions, {
            title: 'NewQuestions',
            exclude: ['id'],
          }),
        },
      },
    })
    questions: Omit<Questions, 'id'>,
  ): Promise<Questions> {
    return this.questionsRepository.create(questions);
  }

  @get('/questions/count', {
    responses: {
      '200': {
        description: 'Questions model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Questions)) where?: Where<Questions>,
  ): Promise<Count> {
    return this.questionsRepository.count(where);
  }

  @get('/questions', {
    responses: {
      '200': {
        description: 'Array of Questions model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Questions, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Questions)) filter?: Filter<Questions>,
  ): Promise<Questions[]> {
    return this.questionsRepository.find(filter);
  }

  @patch('/questions', {
    responses: {
      '200': {
        description: 'Questions PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questions, {partial: true}),
        },
      },
    })
    questions: Questions,
    @param.query.object('where', getWhereSchemaFor(Questions)) where?: Where<Questions>,
  ): Promise<Count> {
    return this.questionsRepository.updateAll(questions, where);
  }

  @get('/questions/{id}', {
    responses: {
      '200': {
        description: 'Questions model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Questions, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Questions)) filter?: Filter<Questions>
  ): Promise<Questions> {
    return this.questionsRepository.findById(id, filter);
  }

  @patch('/questions/{id}', {
    responses: {
      '204': {
        description: 'Questions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questions, {partial: true}),
        },
      },
    })
    questions: Questions,
  ): Promise<void> {
    await this.questionsRepository.updateById(id, questions);
  }

  @put('/questions/{id}', {
    responses: {
      '204': {
        description: 'Questions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() questions: Questions,
  ): Promise<void> {
    await this.questionsRepository.replaceById(id, questions);
  }

  @del('/questions/{id}', {
    responses: {
      '204': {
        description: 'Questions DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.questionsRepository.deleteById(id);
  }
}
