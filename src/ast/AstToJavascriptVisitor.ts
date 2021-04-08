import {NumberExpression} from './NumberExpression';
import {IdentifierExpression} from './IdentifierExpression';
import {LambdaExpression} from './LambdaExpression';
import {InvocationExpression} from './InvocationExpression';
import {AddExpression} from './AddExpression';
import {MultExpression} from './MultExpression';
import {TernaryExpression} from './TernaryExpression';
import {PrintExpression} from './PrintExpression';
import {ExpressionVisitor} from './ExpressionVisitor';

export class AstToJavascriptVisitor implements ExpressionVisitor<string> {
  visitNumberExpression({n}: NumberExpression): string {
    return n.toString(10);
  }

  visitIdentifierExpression({id}: IdentifierExpression): string {
    return id;
  }

  visitLambdaExpression({param, body}: LambdaExpression): string {
    return `(${param} => ${body.accept(this)})`;
  }

  visitInvocationExpression({func, argument}: InvocationExpression): string {
    return `(${func.accept(this)}(${argument.accept(this)}))`;
  }

  visitAddExpression({left, right}: AddExpression): string {
    return `(${left.accept(this)} + ${right.accept(this)})`;
  }

  visitMultExpression({left, right}: MultExpression): string {
    return `(${left.accept(this)} * ${right.accept(this)})`;
  }

  visitTernaryExpression({
    condition,
    consequent,
    alternative,
  }: TernaryExpression): string {
    return `(${condition.accept(this)} <= 0 ? ${consequent.accept(
      this
    )} : ${alternative.accept(this)})`;
  }

  visitPrintExpression({argument}: PrintExpression): string {
    return `console.log(${argument.accept(this)})`;
  }
}
