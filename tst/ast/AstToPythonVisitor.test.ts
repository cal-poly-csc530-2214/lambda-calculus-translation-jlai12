import {AstToPythonVisitor} from '../../src/ast/AstToPythonVisitor';
import {NumberExpression} from '../../src/ast/NumberExpression';
import {IdentifierExpression} from '../../src/ast/IdentifierExpression';
import {LambdaExpression} from '../../src/ast/LambdaExpression';
import {Expression} from '../../src/ast/Expression';
import {InvocationExpression} from '../../src/ast/InvocationExpression';
import {AddExpression} from '../../src/ast/AddExpression';
import {MultExpression} from '../../src/ast/MultExpression';
import {TernaryExpression} from '../../src/ast/TernaryExpression';
import {PrintExpression} from '../../src/ast/PrintExpression';

describe('AstToPythonVisitor', () => {
  it('converts number expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const number: NumberExpression = new NumberExpression(42);
    expect(pythonConverter.visitNumberExpression(number)).toEqual('42');

    const negative: NumberExpression = new NumberExpression(-1);
    expect(pythonConverter.visitNumberExpression(negative)).toEqual('-1');
  });

  it('converts id expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const id: IdentifierExpression = new IdentifierExpression('mySymbol');
    expect(pythonConverter.visitIdentifierExpression(id)).toEqual('mySymbol');
  });

  it('converts lambda expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const mockBody: Expression = {
      accept: jest.fn().mockImplementation(() => '[BODY EXPRESSION]'),
    };

    const lambda: LambdaExpression = new LambdaExpression('param', mockBody);
    expect(pythonConverter.visitLambdaExpression(lambda)).toEqual(
      '(lambda param: [BODY EXPRESSION])'
    );
    expect(mockBody.accept).toBeCalledWith(pythonConverter);
  });

  it('converts invocation expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

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
    expect(pythonConverter.visitInvocationExpression(invocation)).toEqual(
      '([FUNC EXPRESSION]([ARG EXPRESSION]))'
    );
    expect(mockFunction.accept).toBeCalledWith(pythonConverter);
    expect(mockArgument.accept).toBeCalledWith(pythonConverter);
  });

  it('converts add expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const mockLeft: Expression = {
      accept: jest.fn().mockImplementation(() => '[LEFT EXPRESSION]'),
    };
    const mockRight: Expression = {
      accept: jest.fn().mockImplementation(() => '[RIGHT EXPRESSION]'),
    };

    const add: AddExpression = new AddExpression(mockLeft, mockRight);
    expect(pythonConverter.visitAddExpression(add)).toEqual(
      '([LEFT EXPRESSION] + [RIGHT EXPRESSION])'
    );
    expect(mockLeft.accept).toBeCalledWith(pythonConverter);
    expect(mockRight.accept).toBeCalledWith(pythonConverter);
  });

  it('converts mult expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const mockLeft: Expression = {
      accept: jest.fn().mockImplementation(() => '[LEFT EXPRESSION]'),
    };
    const mockRight: Expression = {
      accept: jest.fn().mockImplementation(() => '[RIGHT EXPRESSION]'),
    };

    const add: MultExpression = new MultExpression(mockLeft, mockRight);
    expect(pythonConverter.visitMultExpression(add)).toEqual(
      '([LEFT EXPRESSION] * [RIGHT EXPRESSION])'
    );
    expect(mockLeft.accept).toBeCalledWith(pythonConverter);
    expect(mockRight.accept).toBeCalledWith(pythonConverter);
  });

  it('converts ternary expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

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
    expect(pythonConverter.visitTernaryExpression(conditional)).toEqual(
      '([THEN EXPRESSION] if [TEST EXPRESSION] <= 0 else [ELSE EXPRESSION])'
    );
    expect(mockTest.accept).toBeCalledWith(pythonConverter);
    expect(mockThen.accept).toBeCalledWith(pythonConverter);
    expect(mockElse.accept).toBeCalledWith(pythonConverter);
  });

  it('converts print expressions', () => {
    const pythonConverter = new AstToPythonVisitor();

    const mockArg: Expression = {
      accept: jest.fn().mockImplementation(() => '[ARG EXPRESSION]'),
    };

    const print: PrintExpression = new PrintExpression(mockArg);
    expect(pythonConverter.visitPrintExpression(print)).toEqual(
      'print([ARG EXPRESSION])'
    );
    expect(mockArg.accept).toBeCalledWith(pythonConverter);
  });
});
