import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class ConditionalExpression implements Expression {
  condition: Expression;
  consequent: Expression;
  alternative: Expression;

  constructor(
    condition: Expression,
    consequent: Expression,
    alternative: Expression
  ) {
    this.condition = condition;
    this.consequent = consequent;
    this.alternative = alternative;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitConditionalExpression(this);
  }
}
