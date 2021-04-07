import {LambdaCalculusVisitor} from './LambdaCalculusVisitor';
import {
  AddExprContext,
  ConditionalExprContext,
  IdentifierExprContext,
  InvocationExprContext,
  LambdaExprContext,
  MultExprContext,
  NumberExprContext,
  PrintExprContext,
} from './LambdaCalculusParser';
import {ErrorNode, ParseTree, RuleNode, TerminalNode} from 'antlr4ts/tree';
import {Expression} from '../ast/Expression';
import {NumberExpression} from '../ast/NumberExpression';
import {IdentifierExpression} from '../ast/IdentifierExpression';
import {LambdaExpression} from '../ast/LambdaExpression';
import {InvocationExpression} from '../ast/InvocationExpression';
import {AddExpression} from '../ast/AddExpression';
import {MultExpression} from '../ast/MultExpression';
import {ConditionalExpression} from '../ast/ConditionalExpression';
import {PrintExpression} from '../ast/PrintExpression';

export class LambdaToAstVisitor implements LambdaCalculusVisitor<Expression> {
  visitLambdaExpr({_param, _body}: LambdaExprContext): Expression {
    return new LambdaExpression(_param.text || '', _body.accept(this));
  }

  visitInvocationExpr({_func, _arg}: InvocationExprContext): Expression {
    return new InvocationExpression(_func.accept(this), _arg.accept(this));
  }

  visitAddExpr({_left, _right}: AddExprContext): Expression {
    return new AddExpression(_left.accept(this), _right.accept(this));
  }

  visitMultExpr({_left, _right}: MultExprContext): Expression {
    return new MultExpression(_left.accept(this), _right.accept(this));
  }

  visitConditionalExpr({
    _test,
    _then,
    _else,
  }: ConditionalExprContext): Expression {
    return new ConditionalExpression(
      _test.accept(this),
      _then.accept(this),
      _else.accept(this)
    );
  }

  visitPrintExpr({_arg}: PrintExprContext): Expression {
    return new PrintExpression(_arg.accept(this));
  }

  visitNumberExpr({text}: NumberExprContext): Expression {
    return new NumberExpression(Number(text));
  }

  visitIdentifierExpr({text}: IdentifierExprContext): Expression {
    return new IdentifierExpression(text);
  }

  // TODO - These are most definitely (probably?) wrong - Need to figure out what exactly they're fpr
  visit = (tree: ParseTree): Expression => tree.accept(this);
  visitChildren = (node: RuleNode): Expression => node.getChild(0).accept(this);
  visitTerminal = (node: TerminalNode): Expression => node.accept(this);
  visitErrorNode = (node: ErrorNode): Expression => node.accept(this);
}
