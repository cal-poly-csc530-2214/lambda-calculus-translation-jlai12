// Generated from src/antlr/LambdaCalculus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberExprContext } from "./LambdaCalculusParser";
import { IdentifierExprContext } from "./LambdaCalculusParser";
import { LambdaExprContext } from "./LambdaCalculusParser";
import { InvocationExprContext } from "./LambdaCalculusParser";
import { AddExprContext } from "./LambdaCalculusParser";
import { MultExprContext } from "./LambdaCalculusParser";
import { TernaryExprContext } from "./LambdaCalculusParser";
import { PrintExprContext } from "./LambdaCalculusParser";
import { ExpressionContext } from "./LambdaCalculusParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LambdaCalculusParser`.
 */
export interface LambdaCalculusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `NumberExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpr?: (ctx: NumberExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpr?: (ctx: NumberExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LambdaExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpr?: (ctx: LambdaExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LambdaExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpr?: (ctx: LambdaExprContext) => void;

	/**
	 * Enter a parse tree produced by the `InvocationExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInvocationExpr?: (ctx: InvocationExprContext) => void;
	/**
	 * Exit a parse tree produced by the `InvocationExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInvocationExpr?: (ctx: InvocationExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MultExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultExpr?: (ctx: MultExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MultExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultExpr?: (ctx: MultExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpr?: (ctx: TernaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpr?: (ctx: TernaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `PrintExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Exit a parse tree produced by the `PrintExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrintExpr?: (ctx: PrintExprContext) => void;

	/**
	 * Enter a parse tree produced by `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

