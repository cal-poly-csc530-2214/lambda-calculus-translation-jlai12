import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class PrintExpression implements Expression {
  argument: Expression;

  constructor(argument: Expression) {
    this.argument = argument;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitPrintExpression(this);
  }
}
