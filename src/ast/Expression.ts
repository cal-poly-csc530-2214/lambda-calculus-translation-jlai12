import {ExpressionVisitor} from './ExpressionVisitor';

export interface Expression {
  accept<T>(visitor: ExpressionVisitor<T>): T;
}
