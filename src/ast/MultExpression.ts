import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class MultExpression implements Expression {
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitMultExpression(this);
  }
}
