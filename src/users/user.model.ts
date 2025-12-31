import { Column, DataType, Model, Table } from 'sequelize-typescript';

type UserAttributes = {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserCreationAttributes = Omit<
  UserAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;
}
