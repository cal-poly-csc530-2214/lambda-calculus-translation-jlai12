import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class IdentifierExpression implements Expression {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitIdentifierExpression(this);
  }
}
