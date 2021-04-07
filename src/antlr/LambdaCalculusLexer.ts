// Generated from src/antlr/LambdaCalculus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LambdaCalculusLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "DIGIT", 
		"NUMBER", "ID", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'(/'", "'=>'", "')'", "'('", "'(+'", "'(*'", "'(ifleq0'", 
		"'(println'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "NUMBER", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LambdaCalculusLexer._LITERAL_NAMES, LambdaCalculusLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LambdaCalculusLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LambdaCalculusLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "LambdaCalculus.g4"; }

	// @Override
	public get ruleNames(): string[] { return LambdaCalculusLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LambdaCalculusLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LambdaCalculusLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return LambdaCalculusLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rY\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\v\x06\v@\n\v\r\v\x0E\vA\x03\v\x03\v\x06" +
		"\vF\n\v\r\v\x0E\vG\x05\vJ\n\v\x03\f\x03\f\x07\fN\n\f\f\f\x0E\fQ\v\f\x03" +
		"\r\x06\rT\n\r\r\r\x0E\rU\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\x02\x15\x02\v\x17\x02\f\x19\x02\r\x03\x02\x06\x03\x022;\x04\x02C\\c|" +
		"\x05\x022;C\\c|\x05\x02\v\f\x0E\x0F\"\"\x02\\\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1E\x03\x02\x02\x02\x07" +
		"!\x03\x02\x02\x02\t#\x03\x02\x02\x02\v%\x03\x02\x02\x02\r(\x03\x02\x02" +
		"\x02\x0F+\x03\x02\x02\x02\x113\x03\x02\x02\x02\x13<\x03\x02\x02\x02\x15" +
		"?\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19S\x03\x02\x02\x02\x1B\x1C\x07" +
		"*\x02\x02\x1C\x1D\x071\x02\x02\x1D\x04\x03\x02\x02\x02\x1E\x1F\x07?\x02" +
		"\x02\x1F \x07@\x02\x02 \x06\x03\x02\x02\x02!\"\x07+\x02\x02\"\b\x03\x02" +
		"\x02\x02#$\x07*\x02\x02$\n\x03\x02\x02\x02%&\x07*\x02\x02&\'\x07-\x02" +
		"\x02\'\f\x03\x02\x02\x02()\x07*\x02\x02)*\x07,\x02\x02*\x0E\x03\x02\x02" +
		"\x02+,\x07*\x02\x02,-\x07k\x02\x02-.\x07h\x02\x02./\x07n\x02\x02/0\x07" +
		"g\x02\x0201\x07s\x02\x0212\x072\x02\x022\x10\x03\x02\x02\x0234\x07*\x02" +
		"\x0245\x07r\x02\x0256\x07t\x02\x0267\x07k\x02\x0278\x07p\x02\x0289\x07" +
		"v\x02\x029:\x07n\x02\x02:;\x07p\x02\x02;\x12\x03\x02\x02\x02<=\t\x02\x02" +
		"\x02=\x14\x03\x02\x02\x02>@\x05\x13\n\x02?>\x03\x02\x02\x02@A\x03\x02" +
		"\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BI\x03\x02\x02\x02CE\x070" +
		"\x02\x02DF\x05\x13\n\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02" +
		"\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IC\x03\x02\x02\x02IJ\x03\x02" +
		"\x02\x02J\x16\x03\x02\x02\x02KO\t\x03\x02\x02LN\t\x04\x02\x02ML\x03\x02" +
		"\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\x18\x03" +
		"\x02\x02\x02QO\x03\x02\x02\x02RT\t\x05\x02\x02SR\x03\x02\x02\x02TU\x03" +
		"\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02WX\b" +
		"\r\x02\x02X\x1A\x03\x02\x02\x02\b\x02AGIOU\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LambdaCalculusLexer.__ATN) {
			LambdaCalculusLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LambdaCalculusLexer._serializedATN));
		}

		return LambdaCalculusLexer.__ATN;
	}

}

