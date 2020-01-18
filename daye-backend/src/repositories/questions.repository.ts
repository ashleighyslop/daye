import {DefaultCrudRepository} from '@loopback/repository';
import {Questions, QuestionsRelations} from '../models';
import {QuestionsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuestionsRepository extends DefaultCrudRepository<
  Questions,
  typeof Questions.prototype.id,
  QuestionsRelations
> {
  constructor(
    @inject('datasources.questions') dataSource: QuestionsDataSource,
  ) {
    super(Questions, dataSource);
  }
}
