import {AstToJavascriptVisitor} from '../../src/ast/AstToJavascriptVisitor';
import {NumberExpression} from '../../src/ast/NumberExpression';
import {IdentifierExpression} from '../../src/ast/IdentifierExpression';
import {LambdaExpression} from '../../src/ast/LambdaExpression';
import {Expression} from '../../src/ast/Expression';
import {InvocationExpression} from '../../src/ast/InvocationExpression';
import {AddExpression} from '../../src/ast/AddExpression';
import {MultExpression} from '../../src/ast/MultExpression';
import {TernaryExpression} from '../../src/ast/TernaryExpression';
import {PrintExpression} from '../../src/ast/PrintExpression';

describe('AstToJavascriptVisitor', () => {
  it('converts number expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const number: NumberExpression = new NumberExpression(42);
    expect(jsConverter.visitNumberExpression(number)).toEqual('42');

    const negative: NumberExpression = new NumberExpression(-1);
    expect(jsConverter.visitNumberExpression(negative)).toEqual('-1');
  });

  it('converts id expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const id: IdentifierExpression = new IdentifierExpression('mySymbol');
    expect(jsConverter.visitIdentifierExpression(id)).toEqual('mySymbol');
  });

  it('converts lambda expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockBody: Expression = {
      accept: jest.fn().mockImplementation(() => '[BODY EXPRESSION]'),
    };

    const lambda: LambdaExpression = new LambdaExpression('param', mockBody);
    expect(jsConverter.visitLambdaExpression(lambda)).toEqual(
      '(param => [BODY EXPRESSION])'
    );
    expect(mockBody.accept).toBeCalledWith(jsConverter);
  });

  it('converts invocation expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockFunction: Expression = {
      accept: jest.fn().mockImplementation(() => '[FUNC EXPRESSION]'),
    };

    const mockArgument: Expression = {
      accept: jest.fn().mockImplementation(() => '[ARG EXPRESSION]'),
    };

    const invocation: InvocationExpression = new InvocationExpression(
      mockFunction,
      mockArgument
    );
    expect(jsConverter.visitInvocationExpression(invocation)).toEqual(
      '([FUNC EXPRESSION]([ARG EXPRESSION]))'
    );
    expect(mockFunction.accept).toBeCalledWith(jsConverter);
    expect(mockArgument.accept).toBeCalledWith(jsConverter);
  });

  it('converts add expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockLeft: Expression = {
      accept: jest.fn().mockImplementation(() => '[LEFT EXPRESSION]'),
    };
    const mockRight: Expression = {
      accept: jest.fn().mockImplementation(() => '[RIGHT EXPRESSION]'),
    };

    const add: AddExpression = new AddExpression(mockLeft, mockRight);
    expect(jsConverter.visitAddExpression(add)).toEqual(
      '([LEFT EXPRESSION] + [RIGHT EXPRESSION])'
    );
    expect(mockLeft.accept).toBeCalledWith(jsConverter);
    expect(mockRight.accept).toBeCalledWith(jsConverter);
  });

  it('converts mult expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockLeft: Expression = {
      accept: jest.fn().mockImplementation(() => '[LEFT EXPRESSION]'),
    };
    const mockRight: Expression = {
      accept: jest.fn().mockImplementation(() => '[RIGHT EXPRESSION]'),
    };

    const add: MultExpression = new MultExpression(mockLeft, mockRight);
    expect(jsConverter.visitMultExpression(add)).toEqual(
      '([LEFT EXPRESSION] * [RIGHT EXPRESSION])'
    );
    expect(mockLeft.accept).toBeCalledWith(jsConverter);
    expect(mockRight.accept).toBeCalledWith(jsConverter);
  });

  it('converts ternary expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockTest: Expression = {
      accept: jest.fn().mockImplementation(() => '[TEST EXPRESSION]'),
    };
    const mockThen: Expression = {
      accept: jest.fn().mockImplementation(() => '[THEN EXPRESSION]'),
    };
    const mockElse: Expression = {
      accept: jest.fn().mockImplementation(() => '[ELSE EXPRESSION]'),
    };

    const conditional: TernaryExpression = new TernaryExpression(
      mockTest,
      mockThen,
      mockElse
    );
    expect(jsConverter.visitTernaryExpression(conditional)).toEqual(
      '([TEST EXPRESSION] <= 0 ? [THEN EXPRESSION] : [ELSE EXPRESSION])'
    );
    expect(mockTest.accept).toBeCalledWith(jsConverter);
    expect(mockThen.accept).toBeCalledWith(jsConverter);
    expect(mockElse.accept).toBeCalledWith(jsConverter);
  });

  it('converts print expressions', () => {
    const jsConverter = new AstToJavascriptVisitor();

    const mockArg: Expression = {
      accept: jest.fn().mockImplementation(() => '[ARG EXPRESSION]'),
    };

    const print: PrintExpression = new PrintExpression(mockArg);
    expect(jsConverter.visitPrintExpression(print)).toEqual(
      'console.log([ARG EXPRESSION])'
    );
    expect(mockArg.accept).toBeCalledWith(jsConverter);
  });
});
