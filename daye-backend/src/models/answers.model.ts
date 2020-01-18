import {Entity, model, property} from '@loopback/repository';

@model()
export class Answers extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  questionId: number;

  @property({
    type: 'string',
    required: true,
  })
  questionTitle: string;

  @property({
    type: 'string',
    required: true,
  })
  answer: string;

  @property({
    type: 'number',
  })
  weight?: number;

  @property({
    type: 'number',
  })
  nextQId?: number;

  constructor(data?: Partial<Answers>) {
    super(data);
  }
}

export interface AnswersRelations {
  // describe navigational properties here
}

export type AnswersWithRelations = Answers & AnswersRelations;
