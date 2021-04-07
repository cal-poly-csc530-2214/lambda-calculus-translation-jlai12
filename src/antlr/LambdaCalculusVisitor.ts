// Generated from src/antlr/LambdaCalculus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberExprContext } from "./LambdaCalculusParser";
import { IdentifierExprContext } from "./LambdaCalculusParser";
import { LambdaExprContext } from "./LambdaCalculusParser";
import { InvocationExprContext } from "./LambdaCalculusParser";
import { AddExprContext } from "./LambdaCalculusParser";
import { MultExprContext } from "./LambdaCalculusParser";
import { ConditionalExprContext } from "./LambdaCalculusParser";
import { PrintExprContext } from "./LambdaCalculusParser";
import { ExpressionContext } from "./LambdaCalculusParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LambdaCalculusParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LambdaCalculusVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `NumberExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpr?: (ctx: NumberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LambdaExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpr?: (ctx: LambdaExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `InvocationExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationExpr?: (ctx: InvocationExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpr?: (ctx: MultExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionalExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpr?: (ctx: ConditionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrintExpr`
	 * labeled alternative in `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LambdaCalculusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

