import {NumberExpression} from './NumberExpression';
import {IdentifierExpression} from './IdentifierExpression';
import {LambdaExpression} from './LambdaExpression';
import {InvocationExpression} from './InvocationExpression';
import {AddExpression} from './AddExpression';
import {MultExpression} from './MultExpression';
import {ConditionalExpression} from './ConditionalExpression';
import {PrintExpression} from './PrintExpression';

export interface ExpressionVisitor<T> {
  visitNumberExpression(expresion: NumberExpression): T;
  visitIdentifierExpression(expresion: IdentifierExpression): T;
  visitLambdaExpression(expresion: LambdaExpression): T;
  visitInvocationExpression(expresion: InvocationExpression): T;
  visitAddExpression(expresion: AddExpression): T;
  visitMultExpression(expresion: MultExpression): T;
  visitConditionalExpression(expresion: ConditionalExpression): T;
  visitPrintExpression(expresion: PrintExpression): T;
}
