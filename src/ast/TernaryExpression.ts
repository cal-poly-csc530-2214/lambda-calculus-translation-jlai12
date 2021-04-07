import {ExpressionVisitor} from './ExpressionVisitor';
import {Expression} from './Expression';

export class TernaryExpression implements Expression {
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
    return visitor.visitTernaryExpression(this);
  }
}
