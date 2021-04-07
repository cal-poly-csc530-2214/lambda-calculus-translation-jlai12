import {LambdaCalculusVisitor} from './LambdaCalculusVisitor';
import {
  AddExprContext,
  IdentifierExprContext,
  InvocationExprContext,
  LambdaExprContext,
  MultExprContext,
  NumberExprContext,
  PrintExprContext, TernaryExprContext,
} from './LambdaCalculusParser';
import {ErrorNode, ParseTree, RuleNode, TerminalNode} from 'antlr4ts/tree';
import {Expression} from '../ast/Expression';
import {NumberExpression} from '../ast/NumberExpression';
import {IdentifierExpression} from '../ast/IdentifierExpression';
import {LambdaExpression} from '../ast/LambdaExpression';
import {InvocationExpression} from '../ast/InvocationExpression';
import {AddExpression} from '../ast/AddExpression';
import {MultExpression} from '../ast/MultExpression';
import {TernaryExpression} from '../ast/TernaryExpression';
import {PrintExpression} from '../ast/PrintExpression';

export class LambdaToAstVisitor implements LambdaCalculusVisitor<Expression> {
  visitNumberExpr({text}: NumberExprContext): Expression {
    return new NumberExpression(Number(text));
  }

  visitIdentifierExpr({text}: IdentifierExprContext): Expression {
    return new IdentifierExpression(text);
  }

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

  visitTernaryExpr({
    _test,
    _then,
    _else,
  }: TernaryExprContext): Expression {
    return new TernaryExpression(
      _test.accept(this),
      _then.accept(this),
      _else.accept(this)
    );
  }

  // TODO - Not really an expression ... but it will work for now
  visitPrintExpr({_arg}: PrintExprContext): Expression {
    return new PrintExpression(_arg.accept(this));
  }

  // TODO - These are most definitely (probably?) wrong - Need to figure out what exactly they're for
  visit = (tree: ParseTree): Expression => tree.accept(this);
  visitChildren = (node: RuleNode): Expression => node.getChild(0).accept(this);
  visitTerminal = (node: TerminalNode): Expression => node.accept(this);
  visitErrorNode = (node: ErrorNode): Expression => node.accept(this);
}
