import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {LambdaCalculusLexer} from './antlr/LambdaCalculusLexer';
import {LambdaCalculusParser} from './antlr/LambdaCalculusParser';
import {readFile} from 'fs/promises';
import {LambdaToAstVisitor} from './antlr/LambdaToAstVisitor';
import {AstToJavascriptVisitor} from './ast/AstToJavascriptVisitor';

const FACTORIAL = 'tst/test-data/factorial.lc';
const TIP = 'tst/test-data/calc-tip.lc';

readFile(TIP).then(data => {
  const inputStream = CharStreams.fromString(data.toString());
  const lexer = new LambdaCalculusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LambdaCalculusParser(tokenStream);

  const expression = parser.expression();
  const astConverter = new LambdaToAstVisitor();
  const ast = expression.accept(astConverter);

  const jsConverter = new AstToJavascriptVisitor();
  console.log(ast.accept(jsConverter));
});
