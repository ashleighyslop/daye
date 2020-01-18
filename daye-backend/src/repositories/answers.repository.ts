import {DefaultCrudRepository} from '@loopback/repository';
import {Answers, AnswersRelations} from '../models';
import {AnswersDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnswersRepository extends DefaultCrudRepository<
  Answers,
  typeof Answers.prototype.id,
  AnswersRelations
> {
  constructor(
    @inject('datasources.answers') dataSource: AnswersDataSource,
  ) {
    super(Answers, dataSource);
  }
}
