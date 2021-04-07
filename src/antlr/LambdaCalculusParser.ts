// Generated from src/antlr/LambdaCalculus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LambdaCalculusListener } from "./LambdaCalculusListener";
import { LambdaCalculusVisitor } from "./LambdaCalculusVisitor";


export class LambdaCalculusParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly NUMBER = 9;
	public static readonly ID = 10;
	public static readonly WS = 11;
	public static readonly RULE_expression = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'(/'", "'=>'", "')'", "'('", "'(+'", "'(*'", "'(ifleq0'", 
		"'(println'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "NUMBER", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LambdaCalculusParser._LITERAL_NAMES, LambdaCalculusParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LambdaCalculusParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LambdaCalculus.g4"; }

	// @Override
	public get ruleNames(): string[] { return LambdaCalculusParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LambdaCalculusParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LambdaCalculusParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LambdaCalculusParser.RULE_expression);
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LambdaCalculusParser.NUMBER:
				_localctx = new NumberExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2;
				this.match(LambdaCalculusParser.NUMBER);
				}
				break;
			case LambdaCalculusParser.ID:
				_localctx = new IdentifierExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3;
				this.match(LambdaCalculusParser.ID);
				}
				break;
			case LambdaCalculusParser.T__0:
				_localctx = new LambdaExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 4;
				this.match(LambdaCalculusParser.T__0);
				this.state = 5;
				(_localctx as LambdaExprContext)._param = this.match(LambdaCalculusParser.ID);
				this.state = 6;
				this.match(LambdaCalculusParser.T__1);
				this.state = 7;
				(_localctx as LambdaExprContext)._body = this.expression();
				this.state = 8;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			case LambdaCalculusParser.T__3:
				_localctx = new InvocationExprContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 10;
				this.match(LambdaCalculusParser.T__3);
				this.state = 11;
				(_localctx as InvocationExprContext)._func = this.expression();
				this.state = 12;
				(_localctx as InvocationExprContext)._arg = this.expression();
				this.state = 13;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			case LambdaCalculusParser.T__4:
				_localctx = new AddExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 15;
				this.match(LambdaCalculusParser.T__4);
				this.state = 16;
				(_localctx as AddExprContext)._left = this.expression();
				this.state = 17;
				(_localctx as AddExprContext)._right = this.expression();
				this.state = 18;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			case LambdaCalculusParser.T__5:
				_localctx = new MultExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 20;
				this.match(LambdaCalculusParser.T__5);
				this.state = 21;
				(_localctx as MultExprContext)._left = this.expression();
				this.state = 22;
				(_localctx as MultExprContext)._right = this.expression();
				this.state = 23;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			case LambdaCalculusParser.T__6:
				_localctx = new TernaryExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 25;
				this.match(LambdaCalculusParser.T__6);
				this.state = 26;
				(_localctx as TernaryExprContext)._test = this.expression();
				this.state = 27;
				(_localctx as TernaryExprContext)._then = this.expression();
				this.state = 28;
				(_localctx as TernaryExprContext)._else = this.expression();
				this.state = 29;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			case LambdaCalculusParser.T__7:
				_localctx = new PrintExprContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 31;
				this.match(LambdaCalculusParser.T__7);
				this.state = 32;
				(_localctx as PrintExprContext)._arg = this.expression();
				this.state = 33;
				this.match(LambdaCalculusParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r(\x04\x02\t" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02&\n\x02\x03" +
		"\x02\x02\x02\x02\x03\x02\x02\x02\x02\x02-\x02%\x03\x02\x02\x02\x04&\x07" +
		"\v\x02\x02\x05&\x07\f\x02\x02\x06\x07\x07\x03\x02\x02\x07\b\x07\f\x02" +
		"\x02\b\t\x07\x04\x02\x02\t\n\x05\x02\x02\x02\n\v\x07\x05\x02\x02\v&\x03" +
		"\x02\x02\x02\f\r\x07\x06\x02\x02\r\x0E\x05\x02\x02\x02\x0E\x0F\x05\x02" +
		"\x02\x02\x0F\x10\x07\x05\x02\x02\x10&\x03\x02\x02\x02\x11\x12\x07\x07" +
		"\x02\x02\x12\x13\x05\x02\x02\x02\x13\x14\x05\x02\x02\x02\x14\x15\x07\x05" +
		"\x02\x02\x15&\x03\x02\x02\x02\x16\x17\x07\b\x02\x02\x17\x18\x05\x02\x02" +
		"\x02\x18\x19\x05\x02\x02\x02\x19\x1A\x07\x05\x02\x02\x1A&\x03\x02\x02" +
		"\x02\x1B\x1C\x07\t\x02\x02\x1C\x1D\x05\x02\x02\x02\x1D\x1E\x05\x02\x02" +
		"\x02\x1E\x1F\x05\x02\x02\x02\x1F \x07\x05\x02\x02 &\x03\x02\x02\x02!\"" +
		"\x07\n\x02\x02\"#\x05\x02\x02\x02#$\x07\x05\x02\x02$&\x03\x02\x02\x02" +
		"%\x04\x03\x02\x02\x02%\x05\x03\x02\x02\x02%\x06\x03\x02\x02\x02%\f\x03" +
		"\x02\x02\x02%\x11\x03\x02\x02\x02%\x16\x03\x02\x02\x02%\x1B\x03\x02\x02" +
		"\x02%!\x03\x02\x02\x02&\x03\x03\x02\x02\x02\x03%";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LambdaCalculusParser.__ATN) {
			LambdaCalculusParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LambdaCalculusParser._serializedATN));
		}

		return LambdaCalculusParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LambdaCalculusParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberExprContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(LambdaCalculusParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterNumberExpr) {
			listener.enterNumberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitNumberExpr) {
			listener.exitNumberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitNumberExpr) {
			return visitor.visitNumberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(LambdaCalculusParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterIdentifierExpr) {
			listener.enterIdentifierExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitIdentifierExpr) {
			listener.exitIdentifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExprContext extends ExpressionContext {
	public _param!: Token;
	public _body!: ExpressionContext;
	public ID(): TerminalNode { return this.getToken(LambdaCalculusParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterLambdaExpr) {
			listener.enterLambdaExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitLambdaExpr) {
			listener.exitLambdaExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitLambdaExpr) {
			return visitor.visitLambdaExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvocationExprContext extends ExpressionContext {
	public _func!: ExpressionContext;
	public _arg!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterInvocationExpr) {
			listener.enterInvocationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitInvocationExpr) {
			listener.exitInvocationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitInvocationExpr) {
			return visitor.visitInvocationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultExprContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterMultExpr) {
			listener.enterMultExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitMultExpr) {
			listener.exitMultExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitMultExpr) {
			return visitor.visitMultExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExprContext extends ExpressionContext {
	public _test!: ExpressionContext;
	public _then!: ExpressionContext;
	public _else!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterTernaryExpr) {
			listener.enterTernaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitTernaryExpr) {
			listener.exitTernaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitTernaryExpr) {
			return visitor.visitTernaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintExprContext extends ExpressionContext {
	public _arg!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LambdaCalculusListener): void {
		if (listener.enterPrintExpr) {
			listener.enterPrintExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LambdaCalculusListener): void {
		if (listener.exitPrintExpr) {
			listener.exitPrintExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LambdaCalculusVisitor<Result>): Result {
		if (visitor.visitPrintExpr) {
			return visitor.visitPrintExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


