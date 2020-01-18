import {Entity, model, property} from '@loopback/repository';

@model()
export class Questions extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  idName?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  subtitle?: string;

  @property({
    type: 'string',
  })
  placeholder?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  minYears?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  dependancies?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  answerOptions?: object[];

  constructor(data?: Partial<Questions>) {
    super(data);
  }
}

export interface QuestionsRelations {
  // describe navigational properties here
}

export type QuestionsWithRelations = Questions & QuestionsRelations;
