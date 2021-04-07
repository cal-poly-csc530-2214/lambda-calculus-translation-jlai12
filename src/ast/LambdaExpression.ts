import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class LambdaExpression implements Expression {
  param: string;
  body: Expression;

  constructor(param: string, body: Expression) {
    this.param = param;
    this.body = body;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitLambdaExpression(this);
  }
}
