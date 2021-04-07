import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class NumberExpression implements Expression {
  n: number;

  constructor(n: number) {
    this.n = n;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitNumberExpression(this);
  }
}
