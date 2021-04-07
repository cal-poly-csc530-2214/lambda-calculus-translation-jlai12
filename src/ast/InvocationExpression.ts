import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class InvocationExpression implements Expression {
  func: Expression;
  argument: Expression;

  constructor(func: Expression, argument: Expression) {
    this.func = func;
    this.argument = argument;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitInvocationExpression(this);
  }
}
